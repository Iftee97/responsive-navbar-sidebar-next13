/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      // DESKTOP-FIRST APPROACH -- turn off for MOBILE-FIRST (mobile first is default)
      '5xl': { 'max': '3840px' },     // => @media (max-width: 3840px) { ... }      // 4K
      '4xl': { 'max': '2560px' },     // => @media (max-width: 2048px) { ... }      // 2K
      '3xl': { 'max': '1920px' },     // => @media (max-width: 1920px) { ... }      // (1600 - 1920)px
      '2xl+': { 'max': '1600px' },    // => @media (max-width: 1600px) { ... }      // (1536 - 1600)px
      '2xl': { 'max': '1536px' },     // => @media (max-width: 1536px) { ... }      // (1440 - 1536)px
      'xl': { 'max': '1440px' },      // => @media (max-width: 1440px) { ... }      // (1280 - 1440)px
      'lg+': { 'max': '1280px' },     // => @media (max-width: 1280px) { ... }      // (1100 - 1280)px
      'lg-mid': { 'max': '1100px' },  // => @media (max-width: 1100px) { ... }      // (1024 - 1100)px
      'lg': { 'max': '1024px' },      // => @media (max-width: 1024px) { ... }      // (768 - 1024)px
      'md+': { 'max': '840px' },      // => @media (max-width: 840px) { ... }       // (768 - 840px)px
      'md': { 'max': '768px' },       // => @media (max-width: 768px) { ... }       // (500 - 768)px
      'sm': { 'max': '500px' },       // => @media (max-width: 500px) { ... }       // (380 - 500)px
      'xs': { 'max': '350px' },       // => @media (max-width: 350px) { ... }       // (0 - 380)px
    },
  },
  plugins: [],
}
