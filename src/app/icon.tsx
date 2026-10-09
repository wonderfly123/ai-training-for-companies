import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
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
          background: "#f4f1ea",
          color: "#161616",
          fontSize: 22,
          fontWeight: 600,
          fontFamily: "Helvetica, Arial, sans-serif",
          border: "2px solid #161616",
        }}
      >
        A
      </div>
    ),
    size,
  );
}
