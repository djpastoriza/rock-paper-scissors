/** @type {import('tailwindcss').Config} */
module.exports = {
  //other options
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('/assets/logo.svg')",
        'paper': "url('/assets/icon-paper.svg')",
        'scissors': "url('/assets/icon-scissors.svg')",
        'rock': "url('/assets/icon-rock.svg')",
        'triangule': "url('/assets/bg-triangle.svg')",
        'cross': "url('/assets/icon-close.svg')",
      },
    },
  },
  plugins: [],
};