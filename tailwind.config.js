// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Chemin correct pour les fichiers
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        violet: "#583ebc",
        primary: "#583ebc",
        background: "#ffffff",
        "dark-bg": "#22212a",
        "dark-secondary-bg": "#191720",
        "dark-primary": "#ffffff",
      },
    },
  },
  plugins: [],
};
