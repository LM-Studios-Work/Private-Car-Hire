import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mr Float Holdings",
    short_name: "Mr Float",
    description:
      "Professional private car hire, taxi rides, airport shuttles, school runs, and delivery services in Bulawayo, Zimbabwe.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#A4C639",
    orientation: "portrait",
    icons: [
      {
        src: "/faviconFloat.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/faviconFloat.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    categories: ["travel", "transportation", "business"],
    lang: "en-ZW",
  };
}
