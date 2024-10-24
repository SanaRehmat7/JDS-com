module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      Keyframes:{
        wobble:{
          'border-radius': '250px',
        },
        spacing: {
          'content-padding': '10%', // Reusable padding for content sections
        },
        screens: {
          '2xl': '1536px', // You can extend breakpoints as needed
        },
      },
    },
  },
  plugins: [],
};


