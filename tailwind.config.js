/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "373px",
        md: "768px",
        xl: "1024px",
      },
      colors: {
        "almost-blue": "rgba(26, 65, 199, 1)",
        "almost-red": "rgba(166, 12, 44, 1)",
        "almost-admin-blue": "rgba(77, 68, 181, 1)",
        "almost-admin-purple": "rgba(193, 187, 235, 1)",
      },
    },
  },
  plugins: [],
};
