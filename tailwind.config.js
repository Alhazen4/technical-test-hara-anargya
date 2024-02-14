/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      brightness: {},
      colors: {
        'web-title': '#152544',
        'white-cus': '#F7F8FA',
        'card-footer': '#F9FAFC',
        'nav-active': '#E3F2FD',
        'card-btn': '#F2F4F7',
        'card-text-green': '#4CBF93',
        'card-text-red': '#EE7C85'
      },
      width: {
        '281px': '281px',
        '35px': '35px',
        '555px': '555px',
      },
      height: {
        '65px': '65px',
        '35px': '35px',
        '436px': '436px',
      },
      rotate: {
        'arrow-down': '-135deg'
      }
    },
  },
  plugins: [],
};
