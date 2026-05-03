/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#121212",
        smoke: "#5f5b56",
        paper: "#f5f3ef",
        line: "rgba(17, 17, 17, 0.12)",
        panel: "#181818",
        whatsapp: "#1fbf62"
      },
      boxShadow: {
        card: "0 18px 40px rgba(0, 0, 0, 0.08)"
      },
      borderRadius: {
        xl2: "1.75rem"
      },
      fontFamily: {
        display: ["Aptos Display", "Segoe UI", "sans-serif"],
        body: ["Aptos", "Segoe UI", "sans-serif"]
      }
    }
  },
  plugins: []
};
