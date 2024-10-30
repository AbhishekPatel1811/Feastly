module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      animation: {
        pulse: "pulse 1.5s ease-in-out infinite",
      },
      colors: {
        softBlue: "#92b4dc",
        slateBlue: "#313b47",
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
