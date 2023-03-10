/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}', 
    './public/**/*.{html,js}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Kanit' :['Kanit', 'sans-serif'],
      'Satisfy' : ['Satisfy', 'cursive']
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
