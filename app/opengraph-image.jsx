import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Next URL — Modern Websites & ERP Systems for Schools & Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "72px 80px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 480,
            height: 480,
            background:
              "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)",
            borderRadius: "50%",
            transform: "translate(30%, -30%)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "#eff6ff",
            border: "1px solid #bfdbfe",
            borderRadius: 100,
            padding: "6px 16px",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#2563eb",
            }}
          />
          <span style={{ fontSize: 18, color: "#2563eb", fontWeight: 600 }}>
            Shivamogga, Karnataka · India
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#0f172a",
            lineHeight: 1.1,
            marginBottom: 24,
            maxWidth: 900,
          }}
        >
          The Next URL
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            color: "#2563eb",
            fontWeight: 600,
            marginBottom: 20,
          }}
        >
          Modern Websites &amp; ERP Systems
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 22,
            color: "#64748b",
            lineHeight: 1.5,
            maxWidth: 780,
            marginBottom: 48,
          }}
        >
          We build digital solutions for schools, colleges, institutions &amp; businesses across India.
        </div>

        {/* Service pills */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {["Web Development", "ERP Systems", "School Portals", "E-Commerce", "SEO"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: 8,
                  padding: "8px 18px",
                  fontSize: 18,
                  color: "#334155",
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>

        {/* Bottom domain */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            fontSize: 20,
            color: "#94a3b8",
            fontWeight: 500,
          }}
        >
          www.thenexturl.in
        </div>
      </div>
    ),
    { ...size }
  );
}
