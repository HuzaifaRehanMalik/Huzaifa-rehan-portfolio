import { ingestPortfolioKnowledge } from "@/ai/ingest";

export const runtime = "nodejs";

function isAuthorized(request: Request) {
  const secret = process.env.INGEST_SECRET;

  if (!secret) return true;

  const authorization = request.headers.get("authorization");
  const headerSecret = request.headers.get("x-ingest-secret");

  return authorization === `Bearer ${secret}` || headerSecret === secret;
}

export async function POST(request: Request) {
  try {
    if (!isAuthorized(request)) {
      return Response.json({ ok: false, error: "Unauthorized." }, { status: 401 });
    }

    const result = await ingestPortfolioKnowledge();
    return Response.json({ ok: true, ...result });
  } catch (error) {
    console.error("Ingestion failed", error);
    return Response.json(
      {
        ok: false,
        error:
          error instanceof Error
            ? error.message
            : "Portfolio ingestion failed.",
      },
      { status: 500 },
    );
  }
}
