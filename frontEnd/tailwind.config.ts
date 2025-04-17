import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        base: ['"Pretendard"', '"Apple SD Gothic Neo"', "sans-serif"],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        bold: "700",
      },
      fontSize: {
        caption: ["0.625rem", { lineHeight: "0.875rem" }],
        label: ["0.75rem", { lineHeight: "1rem" }],
        bodySm: ["0.875rem", { lineHeight: "1.25rem" }],
        bodyBase: ["1rem", { lineHeight: "1.5rem" }],
        bodyMd: ["1.125rem", { lineHeight: "1.625rem" }],
        subtitle: ["1.25rem", { lineHeight: "1.75rem" }],
        title: ["1.5rem", { lineHeight: "2rem" }],
        hero: ["2rem", { lineHeight: "2.625rem", fontWeight: 500 }],
        display: ["2.5rem", { lineHeight: "3.125rem", fontWeight: 900 }],
      },
      colors: {
        "sky-blue": "#e8f0fe",
        "light-sky-blue": "#f1f5f9",
        "light-gray": "#666",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
