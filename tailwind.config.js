module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
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
