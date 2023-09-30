/** @type {import('tailwindcss').Config} */
export default {
  content: ["src/**/*.{html,js,jsx,ts,tsx}"],

  theme: {
    container: {
      center: true,
    },

    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        rowdies: ["Rowdies", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      //   colors: {
      //     russian: "#462a67",
      //     cerulean: "#007ba7",
      //     lilac: "#b49fcc",
      //     antique: "#f6ebdb",
      //     bitter: "#cc444b",
      //   },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#462a67",
          secondary: "#007ba7",
          accent: "#cc444b",
          neutral: "#f6ebdb",
          "base-100": "#1d232a",
          info: "#3abff8",
          success: "#36d399",
          warning: "#b49fcc",
          "primary-focus": "#b49fcc",
          error: "#f87272",
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
