/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        xlClamp: 'clamp(2rem,13vw,3rem)',
      },
      colors: {
        red: {
          450: 'hsl(0, 100%, 67%)',
        },
        purple: {
          450: 'hsl(259, 100%, 65%)',
        },
        neutral: {
          150: 'hsl(0, 0%, 94%)',
          250: 'hsl(0, 0%, 86%)',
          550: 'hsl(0, 1%, 44%)',
          900: 'hsl(0, 0%, 8%)',
        },
      },
      screens: {
        xsm: '370px',
      },
    },
  },
  plugins: [],
};
