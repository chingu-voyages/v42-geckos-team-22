/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderWidth: {
      '0': '0px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
    },
    extend: {
      colors: {
        turquoise: "#16ABAC",
        "light-orange": "#FCA02D",
        "red-orange": "#EF3E38",
        yellow: "#F6E614",
        blue: "#974FF",
        orange: "#FF5B48",
        "green": "#00CE73",
        pink: "#FFABE5",
        "light-blue": "#12D5F0",
        purple: "#7E38F9",
        "off-white": "#D9D9D9",
        "dark-grey": "#2D2D2D",
      },
      boxShadow: {
        'answer': '3px 3px 1px black'
      },
      fontFamily: {
        inter: [`inter`, "serif"],
      },
      animation: {
        slideleft: "slideleft 1s ease-in-out",
        slideright: "slideright 1s ease-in-out",
        wave: "wave 1.2s linear infinite",
      },
      keyframes: {
        slideleft: {
          from: { opacity: 0, transform: "translateX(-20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideright: {
          from: { opacity: 0, transform: "translateX(20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        wave: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
      },
    },
  },
  plugins: [],
};
