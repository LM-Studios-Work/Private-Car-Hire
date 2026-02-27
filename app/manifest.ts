import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mr Float Holdings",
    short_name: "Mr Float",
    description: "Reliable Transport Services in Zimbabwe",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#A4C639",
    icons: [
      {
        src: "/faviconFloat.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/FloatLogo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
