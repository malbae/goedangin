import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
              primary: {
                "50": "#eff6ff",
                "100": "#dbeafe",
                "200": "#bfdbfe",
                "300": "#93c5fd",
                "400": "#60a5fa",
                "500": "#2596be",
                "600": "#2563eb",
                "700": "#1d4ed8",
                "800": "#1e40af",
                "900": "#1e3a8a",
                "950": "#172554",
              },
              success: {
                100: "#F0FBD5",
                200: "#D9F8AA",
                300: "#BFF47F",
                400: "#A1E859",
                500: "#95D615",
                600: "#74B110",
                700: "#578C0C",
                800: "#3D6807",
                900: "#2B4B04",
              },
              info: {
                100: "#D5FBF9",
                200: "#AAFFF5",
                300: "#7FFFED",
                400: "#59F0E3",
                500: "#09E9F4",
                600: "#07B0C3",
                700: "#058A99",
                800: "#036577",
                900: "#01495A",
              },
            },
            fontFamily: {
              sans: [
                "Inter",
                "ui-sans-serif",
                "system-ui",
                "-apple-system",
                "Segoe UI",
                "Roboto",
                "Helvetica Neue",
                "Arial",
                "Noto Sans",
                "sans-serif",
                "Apple Color Emoji",
                "Segoe UI Emoji",
                "Segoe UI Symbol",
                "Noto Color Emoji",
              ],
            },
          },
        },
      }
  plugins: []
    
export default config;
