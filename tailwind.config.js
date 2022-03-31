module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '5xl': '2.625rem',
      },
      colors: {
        'banner-home': '#ebedee',
      },
      dropShadow: {
        '3xl': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        mobile: '360px',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/images/Colored Shapes.svg')",
      },
      fontFamily: {
        secondary: '"Open Sans"',
      },
    },
  },
  plugins: [],
};
