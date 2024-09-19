import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        zinc: "#18191A",
        sidebar: "181818",
        backgroundImage: {
          purpleGradient:
            "linear-gradient(90deg, #5721B7 8.33%, #D668CD 83.37%)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
