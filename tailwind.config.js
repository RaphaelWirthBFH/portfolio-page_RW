/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",   // Scannt alle HTML- und TS-Dateien im "src"-Ordner
    "./src/app/**/*.{html,ts}", // Fügt spezifisch den "app"-Ordner hinzu
    "./src/app/common/**/*.{html,ts}", // Scannt Dateien im "common"-Ordner
    "./src/app/Hauptbody/**/*.{html,ts}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

