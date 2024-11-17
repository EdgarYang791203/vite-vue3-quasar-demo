/** @type {import('tailwindcss').Config} */
export default {
  important: "#app",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/quasar/dist/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        huge: "1920px",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // 關閉 TailwindCSS 的 Preflight
  },
};
