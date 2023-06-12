/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      height: {
        'custom-95%': '95%',
        'custom-90%': '90%',
        'custom-94%': '94%',
      },
    },
  },
  plugins: [],
}

