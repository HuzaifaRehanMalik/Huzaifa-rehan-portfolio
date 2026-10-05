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
        // Palette shared with HRM Solution (hrmsolution.vercel.app)
        bg: "#060B10",
        surface: "#0A1218",
        "surface-raised": "#0F1A22",
        border: "#22343F",
        "border-soft": "#16222B",
        text: "#E6EEF1",
        "text-dim": "#8A9BA5",
        "text-faint": "#6F818C",
        accent: "#58D5DB",
        "accent-deep": "#2AA9B4",
        "accent-ink": "#04191C",
        "accent-soft": "#0F2A30",
        brand: "#287B83",
        live: "#00BB7F",
      },
      fontFamily: {
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        body: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        headline: "-0.045em",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "word-rise": {
          from: { opacity: "0", transform: "translateY(105%)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(80px, 40px) scale(1.15)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        rise: "rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both",
        "word-rise": "word-rise 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both",
        drift: "drift 18s ease-in-out infinite",
        "drift-reverse": "drift 22s ease-in-out infinite reverse",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
