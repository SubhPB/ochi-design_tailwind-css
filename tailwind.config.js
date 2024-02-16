/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10vmin': '10vmin',
        '20vmin': '20vmin',
        '15vmin': '15vmin',
        '12vmin': '12vmin',
        '10vmax': '10vmax',
        '20vmax': '20vmax',
      },
      height:{
        '75vh': '75vh',
      },
      minHeight:{
        '70vh': '70vh',
        
      }
    },
  },
  plugins: [
    function({addUtilities}){
      const newUtils = {
        '.auto-bg-img': {
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        },
        '.auto-img': {
          objectPosition: 'center',
          objectFit: 'cover',
          height: '100%',
          width: '100%',
        },
      };
      addUtilities(newUtils, ['responsive','hover'])
    }
  ],
};

