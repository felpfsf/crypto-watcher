/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ['Audiowide', 'cursive'],
        player2: ['Press Start 2P', 'cursive'],
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}
