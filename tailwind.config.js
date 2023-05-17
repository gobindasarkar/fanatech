module.exports = {
  content: ["*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Merienda': ['Merienda', 'cursive'],
      },
      colors: {
        'Pcolor' : '#396C03',
        'Hcolor' : '#61B10C',
        'Scolor' : '#FF8B00',
        'Bcolor' : '#676767',
      },
      container: {
        center: true,
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1170px',
          '2xl': '1170px',
        },
      },
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}