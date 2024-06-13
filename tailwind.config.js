module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      display2: ["teko", "sans-serif"],
      display3: ["PT-serif", "serif"],
      display4: ["Roboto Mono", "monospace"],
      display5: ["Roboto", "sans-serif"],
    },
    extend: {

      keyframes: {
        marquee: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'marquee-scroll': 'marquee 20s linear infinite',
      },
      colors: {
        "primary": "#d3d3d3",
        "secondPrimary": "#224741",
      }
    },
  },
  plugins: [],
};
