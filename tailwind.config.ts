import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        jade: {
          50: "#f2fbf7",
          100: "#dff6ec",
          200: "#b7ead1",
          300: "#7fd9b3",
          400: "#3fc28d",
          500: "#1ea971",
          600: "#14865a",
          700: "#116b48",
          800: "#0f553b",
          900: "#0c3f2f",
        },
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        38: "9.5rem",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
