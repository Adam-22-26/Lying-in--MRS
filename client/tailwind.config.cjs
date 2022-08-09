/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: "Montserrat, sans-serif",
    },
    colors: {
      white: {
        20:"#FFFFFF",
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
      },
      green: "#7B9749",
      lime:{
        50: "#f7fee7",
         100: '#ecfccb'
      },
      darkgreen: "#2F3A3D",
      gray: {
        50: "#F2F4F5",
        100: "#f3f4f6",
        300: "#cbd5e1",
        400: "#94a3b8",
        600: "#828181",
        700: "#4b5563",
        800: "#464444",
      },
      blue: {
        300: "#93c5fd",
      },
      red:{
        600: "#dc2626"
      },
    },
    extend: {
      inputShadow: {
        "2px": "1px #7B9749",
      },
      backgroundImage: {
        "auth-hero": "url('../hero/signup-login-hero.png')",
      },
      screens: {
        xs: "320px",
        sm: "481px",
        md: "769px",
        lg: "1025px",
        xl: "1600px",
        "2xl": "1920px"
      },
    },
  },
  plugins: [],
};
// 7B9749  - green mostly in hover
// 828181 - light gray mostyly buttons for in active
// 464444 - drak gray (Font colors)

