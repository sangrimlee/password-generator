module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#141417',
      lightgray: '#EEF2F5',
      darkgray: '#1E2023',
      gray: '#BCC2C7',
      blue: '#1A5CFF',
      red: '#EC565D',
      yellow: '#FAE100',
    },
    extend: {
      boxShadow: {
        blue: '0px 10px 20px -10px rgb(26, 92, 255)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};
