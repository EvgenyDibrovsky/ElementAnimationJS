/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.php", "./src/**/*.js", "./src/js/**/*.js"],

  theme: {
    extend: {
      animation: {
        bayBtn: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "slide-down": "slide-down 0.1s forwards",
        "animate-1": "fade-in-el 1s ease-out",
        "animate-2": "slide-up-el 1s ease-out",
        "animate-3": "slide-down-el 1s ease-out",
        "animate-4": "slide-left-el 1s ease-out",
        "animate-5": "slide-right-el 1s ease-out",
        "reverse-animation": "reverse-animation 1s linear",
      },
      keyframes: {
        bayBtn: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-10%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "fade-in-el": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "slide-up-el": {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "slide-down-el": {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "slide-left-el": {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "slide-right-el": {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        "reverse-animation": {
          "0%": { transform: "translateY(-100%) scaleX(-1)", opacity: "0" },
          "50%": { transform: "translateY(0) scaleX(-1)", opacity: "1" },
          "100%": { transform: "scaleX(1)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
