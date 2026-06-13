import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      colors: {
       accent:"#08E95E"
      },
    },
  },
  plugins: [],
} satisfies Config;
