import { ImageResponse } from "next/og";

export const alt = "Triple Thread Agency — Three disciplines. One creative vision.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#101110",
          color: "#F2F4EF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ width: 46, height: 4, borderRadius: 4, background: "#F2F4EF" }} />
            <div style={{ width: 46, height: 4, borderRadius: 4, background: "#B8F36B" }} />
            <div style={{ width: 46, height: 4, borderRadius: 4, background: "#8C9188" }} />
          </div>
          <div style={{ fontSize: 24, letterSpacing: 3, fontWeight: 700 }}>
            TRIPLE THREAD AGENCY
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 78, lineHeight: 1.05, letterSpacing: -3, fontWeight: 600 }}>
            Three disciplines.
          </div>
          <div style={{ fontSize: 78, lineHeight: 1.05, letterSpacing: -3, color: "#B8F36B", fontWeight: 600 }}>
            One creative vision.
          </div>
        </div>

        <div style={{ display: "flex", gap: 32, fontSize: 20, color: "#A2A79E", letterSpacing: 2 }}>
          <span>CREATIVE DESIGN</span>
          <span>DIGITAL TECHNOLOGY</span>
          <span>MUSIC &amp; SOUND</span>
        </div>
      </div>
    ),
    size,
  );
}
