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
          background: "#ffffff",
          color: "#161616",
          fontFamily: "Helvetica, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 2, color: "#595959", textTransform: "uppercase" }}>
          <span>{site.name}</span>
          <span>{site.founder.title}: {site.founder.name}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 500, lineHeight: 1.02, letterSpacing: -3, maxWidth: 1000 }}>
            {site.tagline}
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#595959", maxWidth: 900, lineHeight: 1.3 }}>
            An eight-week program that trains a small team inside your company to build, deploy, and own AI systems.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#595959" }}>
          <span>{site.url.replace("https://", "")}</span>
          <span>Eight weeks. One system in production.</span>
        </div>
      </div>
    ),
    size,
  );
}
