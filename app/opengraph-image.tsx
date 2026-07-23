import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Alexandre Artaud - Ingénieur Logiciel Full Stack";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#05080f",
          backgroundImage:
            "radial-gradient(circle at 50% 30%, rgba(56,189,248,0.18), transparent 60%)",
        }}
      >
        <div
          style={{
            display: "flex",
            height: 140,
            width: 140,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 9999,
            border: "3px solid #38bdf8",
            marginBottom: 40,
            fontSize: 56,
            fontWeight: 700,
            color: "#38bdf8",
          }}
        >
          AA
        </div>
        <div style={{ display: "flex", fontSize: 68, fontWeight: 700, color: "#f1f5f9" }}>
          Alexandre&nbsp;<span style={{ color: "#38bdf8" }}>ARTAUD</span>
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#94a3b8", marginTop: 20 }}>
          Ingénieur Logiciel Full Stack
        </div>
      </div>
    ),
    { ...size }
  );
}
