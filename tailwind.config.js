/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      colors: {
        "almost-blue": "rgba(26, 65, 199, 1)",
        "almost-red": "rgba(166, 12, 44, 1)",
        "almost-admin-blue": "rgba(77, 68, 181, 1)",
        "almost-admin-purple": "rgba(193, 187, 235, 1)",
        "almost-admin-milk": "rgba(245, 247, 250, 1)",
        "almost-admin-grey ": "rgba(177, 177, 177, 1)",
      },
    },
  },
  plugins: [],
};
