import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: "linear-gradient(135deg, #38bdf8 0%, #4ade80 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          borderRadius: "8px",
          fontWeight: "900",
          fontFamily: "sans-serif",
          boxShadow: "0 4px 10px rgba(56, 189, 248, 0.3)",
        }}
      >
        ZM
      </div>
    ),
    {
      ...size,
    }
  );
}
