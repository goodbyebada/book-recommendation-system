import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // rounded-12px로 통일
      borderRadius: {
        DEFAULT: "12px",
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
        body: ["1rem", { lineHeight: "1.5rem" }],
        bodyMd: ["1.125rem", { lineHeight: "1.625rem" }],
        subtitle: ["1.25rem", { lineHeight: "1.75rem" }],
        title: ["1.5rem", { lineHeight: "2rem" }],
        hero: ["2rem", { lineHeight: "2.625rem" }],
        display: ["2.5rem", { lineHeight: "3.125rem" }],
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
      fontFamily: {
        display: ['"NanumBarunGothic"', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "320px", //소형 모바일
        sm: "425px", // 모바일 > 태블릿
        md: "768px", // 태블릿 > 노트북
        lg: "1024px", // 노트북 > 데스크탑
        xl: "1280px", // 데스크탑 > 와이드
      },
    },
  },
  plugins: [],
};
export default config;
