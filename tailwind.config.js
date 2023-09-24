/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        russian: "#462a67",
        cerulean: "#007ba7",
        lilac: "#b49fcc",
        antique: "#f6ebdb",
        bitter: "#cc444b",
      },
    },
  },
  plugins: [require("daisyui")],
};
