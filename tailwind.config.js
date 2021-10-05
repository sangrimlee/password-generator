module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#020202',
      lightgray: '#F4F7F8',
      darkgray: '#2F3E4E',
      gray: '#BCC2C7',
      blue: '#1A5CFF',
      red: '#EC565D',
      yellow: '#F5BB41',
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
