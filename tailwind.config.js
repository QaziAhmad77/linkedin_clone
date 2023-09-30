/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '800px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
        xll: '1400px',
      },
      fontFamily: {
        systemUi: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Ubuntu',
          'Helvetica Neue',
          'sans-serif',
        ],
        bodyFont: ['Poppins', 'sans-serif'],
        titleFont: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        400: 400,
        500: 500,
        600: 600,
        800: 800,
        1000: 1000,
      },
      fontSize: {
        sm: '16px',
        md: '20px',
        base: '24px',
        lg: '32px',
      },
      colors: {
        linkedinColor: '#0073cf',
        lightText: '#c4cfde',
        boxBg: 'linear-gradient(145deg,#1e2024,#23272b',
      },
      boxShadow: {
        shadowOne: '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',
      },
      scale: {
        115: '1.15',
      },
    },
  },
};
