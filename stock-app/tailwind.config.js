module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      md: { max: "767px" },
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      bc: "#0d1b2a", //Background *darkblue*
      primary: "#e0e1dd", //Primary color for text *
      secondary: "#415a77",
      danger: "#778da9",
      lightGrey: "#e0e1dd",
      price: "#6a994e", //used for currency
      priceUp: "#70e000",
      priceDown: "#bf0603",

      navyBlueDark: "#012a4a", //Site Background
      navyBlue: "#013a63", //for button hover
      royalBlueDark: "#01497c",
      royalBlue: "#014f86",
      oceanBlueDark: "#2a6f97",
      oceanBlue: "#2c7da0",
      skyBlueDark: "#468faf",
      skyBlue: "#61a5c2",
      pastelBlue: "#89c2d9",
      lightBlue: "#a9d6e5",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
