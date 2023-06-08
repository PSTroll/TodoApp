/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: [{ max: "640px" }],

        laptop: "1024px",

        desktop: "1280px",
      },
      colors: {
        "background-header": "#141c29",
        "background-main": "#1B2638",
        "text-color": "#efefef",
        "button-primary": "#bf368a",
        "button-secondary": "#081c10",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
