/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg_nav: "url('/src/assets/bg_nav.svg')",
      },
      colors: {
        turquoise: "#16ABAC",
        "light-orange": "#FCA02D",
        "red-orange": "#EF3E38",
        yellow: "#F6E614",
        blue: "#5974FF",
        orange: "#FF5B48",
        green: "#00CE73",
        pink: "#FFABE5",
        "light-blue": "#12D5F0",
        purple: "#7E38F9",
        "off-white": "#D9D9D9",
        "dark-grey": "#2D2D2D",
      },
      fontFamily: {
        inter: [`inter`, "serif"],
      },
      animation: {
        dropDown: "dropDown 400ms ease-out",
        slideOut: "slideOut 400ms ease-in",
        slideIn: "slideIn 400ms ease-out",
        wave: "wave 1.2s linear infinite",
        float: "hoverMe 2.5s infinite",
      },
      keyframes: {
        dropDown: {
          from: { opacity: 0, transform: "translateY(-100%)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideOut: {
          from: { opacity: 0, transform: "translateX(0)" },
          to: { opacity: 1, transform: "translateX(100vw)" },
        },
        slideIn: {
          from: { opacity: 0, transform: "translateX(100vw)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        wave: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
        float: {
          "33% ": { transform: "translateY(0px)" },
          "66% ": { transform: "translateY(20px)" },
          "100% ": { transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [],
};
