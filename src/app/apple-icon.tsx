import { ImageResponse } from "next/og";

// Square "HR" monogram; replaces the non-square logo.jpg as favicon/app icon.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at 30% 25%, #287B83 0%, #060B10 75%)",
          color: "#58D5DB",
          fontSize: 180 * 0.46,
          fontWeight: 800,
          letterSpacing: "-0.06em",
          borderRadius: 0,
        }}
      >
        HR
      </div>
    ),
    size,
  );
}
