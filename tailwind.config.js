module.exports = {
  darkMode: "class", // Enable dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#fffeea",
          "100": "#fff9c5",
          "200": "#fff485",
          "300": "#ffe746",
          "400": "#ffd71b",
          "500": "#ffb703",
          "600": "#e28b00",
          "700": "#bb6202",
          "800": "#984b08",
          "900": "#7c3e0b",
          "950": "#481f00",
        },
        secondry: {
          '50': '#f2f9fd',
          '100': '#e5f1f9',
          '200': '#c5e3f2',
          '300': '#8ecae6',
          '400': '#58b2d8',
          '500': '#3298c5',
          '600': '#237ba6',
          '700': '#1d6187',
          '800': '#1c5370',
          '900': '#1c465e',
          '950': '#132d3e',
      },
      
      
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
