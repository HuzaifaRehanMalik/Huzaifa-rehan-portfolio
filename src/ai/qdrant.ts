import { aiConfig } from "@/ai/config";

export interface PortfolioChunkMetadata {
  title: string;
  page: string;
  section: string;
  url: string;
  sourceFile: string;
  source: "portfolio";
}

export interface PortfolioVectorPoint {
  id: string;
  vector: number[];
  payload: PortfolioChunkMetadata & {
    content: string;
  };
}

export interface SearchResult {
  id: string | number;
  score: number;
  content: string;
  metadata: PortfolioChunkMetadata;
}

type QdrantPoint = {
  id: string | number;
  score: number;
  payload?: Partial<PortfolioVectorPoint["payload"]>;
};

function qdrantHeaders() {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (aiConfig.qdrantApiKey) {
    headers["api-key"] = aiConfig.qdrantApiKey;
  }

  return headers;
}

async function qdrantRequest<T>(path: string, init: RequestInit): Promise<T> {
  const response = await fetch(`${aiConfig.qdrantUrl.replace(/\/$/, "")}${path}`, {
    ...init,
    headers: {
      ...qdrantHeaders(),
      ...(init.headers ?? {}),
    },
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Qdrant request failed (${response.status}): ${body}`);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

export async function ensureCollection(vectorSize: number) {
  try {
    await qdrantRequest(`/collections/${aiConfig.qdrantCollection}`, {
      method: "GET",
    });
    return;
  } catch (error) {
    const message = error instanceof Error ? error.message : "";

    if (!message.includes("404")) {
      throw error;
    }
  }

  await qdrantRequest(`/collections/${aiConfig.qdrantCollection}`, {
    method: "PUT",
    body: JSON.stringify({
      vectors: {
        size: vectorSize,
        distance: "Cosine",
      },
    }),
  });
}

export async function ensurePayloadIndexes() {
  await qdrantRequest(`/collections/${aiConfig.qdrantCollection}/index`, {
    method: "PUT",
    body: JSON.stringify({
      field_name: "source",
      field_schema: "keyword",
    }),
  });
}

export async function upsertVectors(points: PortfolioVectorPoint[]) {
  if (points.length === 0) return;

  await qdrantRequest(
    `/collections/${aiConfig.qdrantCollection}/points?wait=true`,
    {
      method: "PUT",
      body: JSON.stringify({ points }),
    },
  );
}

export async function deletePortfolioVectors() {
  await qdrantRequest(
    `/collections/${aiConfig.qdrantCollection}/points/delete?wait=true`,
    {
      method: "POST",
      body: JSON.stringify({
        filter: {
          must: [
            {
              key: "source",
              match: { value: "portfolio" },
            },
          ],
        },
      }),
    },
  );
}

export async function searchVectors(
  vector: number[],
  limit = aiConfig.retrievalLimit,
): Promise<SearchResult[]> {
  const data = await qdrantRequest<{ result: QdrantPoint[] }>(
    `/collections/${aiConfig.qdrantCollection}/points/search`,
    {
      method: "POST",
      body: JSON.stringify({
        vector,
        limit,
        with_payload: true,
      }),
    },
  );

  return data.result.map((point) => ({
    id: point.id,
    score: point.score,
    content: String(point.payload?.content ?? ""),
    metadata: {
      title: String(point.payload?.title ?? "Portfolio"),
      page: String(point.payload?.page ?? "Portfolio"),
      section: String(point.payload?.section ?? "General"),
      url: String(point.payload?.url ?? "/"),
      sourceFile: String(point.payload?.sourceFile ?? "unknown"),
      source: "portfolio",
    },
  }));
}

export async function updateVector(point: PortfolioVectorPoint) {
  await upsertVectors([point]);
}

export async function checkQdrantConnection() {
  try {
    await qdrantRequest(`/collections/${aiConfig.qdrantCollection}`, {
      method: "GET",
    });

    return {
      reachable: true,
      collectionExists: true,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Qdrant error";
    const collectionMissing = message.includes("404");

    return {
      reachable: !message.includes("fetch failed"),
      collectionExists: collectionMissing ? false : null,
      error: message,
    };
  }
}
