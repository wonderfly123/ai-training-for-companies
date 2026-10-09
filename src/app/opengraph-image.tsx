import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#f4f1ea",
          color: "#161616",
          fontFamily: "Helvetica, Arial, sans-serif",
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0 31px, #d9d4c7 31px 32px)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 2, color: "#5c5a54", textTransform: "uppercase" }}>
          <span>{site.name}</span>
          <span>{site.founder.city}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 500, lineHeight: 1.02, letterSpacing: -3, maxWidth: 1000 }}>
            {site.tagline}
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#5c5a54", maxWidth: 900, lineHeight: 1.3 }}>
            An eight-week cohort that trains a small team inside your company to build and own AI systems.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#5c5a54" }}>
          <span>{site.url.replace("https://", "")}</span>
          <span style={{ color: "#d5451b" }}>Fig. 1</span>
        </div>
      </div>
    ),
    size,
  );
}
