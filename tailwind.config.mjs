import { defineConfig } from '@tailwindcss/postcss'

export default defineConfig({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: "#e3b653",
        "gold-600": "#d4a343",
        primary: "#5e4e3d"
      },
      fontFamily: {
        "open-sans": ["var(--font-open-sans)", "Arial", "Helvetica", "sans-serif"],
        source: ["var(--font-source-sans-3)", "Arial", "Helvetica", "sans-serif"]
      }
    }
  }
})
