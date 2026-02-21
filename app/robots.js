export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/static/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
        crawlDelay: 0,
      },
    ],
    sitemap: "https://www.thenexturl.in/sitemap.xml",
    host: "https://www.thenexturl.in",
  };
}
