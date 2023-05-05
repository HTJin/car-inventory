/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      heebo: ["Heebo", "sans-serif"],
      bruno: ["Bruno Ace", "sans"],
    },
    extend: {
      animation: {
        trance: "trance 5s linear infinite",
        tranceBg: "tranceBg 5s linear infinite",
      },
      keyframes: {
        trance: {
          "0%, 100%": { color: "#e51376" },
          "50%": { color: "#001aff" },
        },
        tranceBg: {
          "0%, 100%": { background: "#e51376" },
          "50%": { background: "#001aff" },
        },
      },
    },
  },
  plugins: ["react"],
};
