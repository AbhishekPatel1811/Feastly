module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        pulse: "pulse 1.5s ease-in-out infinite",
      },
      colors: {
        slateBlue: "#313b47",
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
