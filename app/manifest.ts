import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nadeer E P — Flutter & Full-Stack Developer",
    short_name: "Nadeer E P",
    description: "Official portfolio of Nadeer E P — Flutter Developer & Full-Stack Engineer",
    start_url: "/",
    display: "standalone",
    background_color: "#08090c",
    theme_color: "#08090c",
    icons: [
      {
        src: "/nadeer-icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/nadeer-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
