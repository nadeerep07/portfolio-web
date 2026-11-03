import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nadeer E P | Flutter & Full-Stack Developer",
    short_name: "Nadeer E P",
    description:
      "Official portfolio of Nadeer E P — Founding Engineer, Flutter & Full-Stack Developer based in Kerala, India and Dubai, UAE.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#0f172a",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
