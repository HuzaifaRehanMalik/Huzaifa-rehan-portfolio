import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Huzaifa Rehan, full-stack AI engineer building RAG chatbots, AI agents, and Next.js apps";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public", "mypic.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "72px 80px",
          background: "radial-gradient(circle at 20% 15%, #0F2A30 0%, #060B10 60%)",
          color: "#E6EEF1",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 30, color: "#8A9BA5" }}>
            <div style={{ width: 16, height: 16, borderRadius: 999, background: "#00BB7F" }} />
            Huzaifa Rehan
          </div>
          <div style={{ marginTop: 24, fontSize: 76, fontWeight: 800, lineHeight: 1, letterSpacing: -3 }}>
            Full-stack AI engineer
          </div>
          <div style={{ marginTop: 28, fontSize: 32, lineHeight: 1.35, color: "#8A9BA5" }}>
            RAG chatbots, multi-agent systems, and Next.js apps built with Python and TypeScript.
          </div>
          <div
            style={{
              marginTop: 40,
              display: "flex",
              alignSelf: "flex-start",
              padding: "14px 28px",
              borderRadius: 999,
              background: "#58D5DB",
              color: "#04191C",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            Available for AI projects
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          alt=""
          width={340}
          height={425}
          style={{ borderRadius: 32, border: "3px solid #58D5DB", objectFit: "cover" }}
        />
      </div>
    ),
    size,
  );
}
