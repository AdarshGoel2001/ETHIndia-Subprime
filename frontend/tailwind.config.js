/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient:
          "linear-gradient(to bottom, rgba(25, 2, 47, 1), rgba(67, 25, 117, 1))",
      },
    },
    screens: {
      lg: { max: "1800px" },
      lgm: { max: "1100px" },
      md: { max: "990px" },
      mds: { max: "800px" },
      sm: { max: "600px" },
      xs: { max: "400px" },
      minmd: "1700px",
      minlg: "2100px",
    },
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
