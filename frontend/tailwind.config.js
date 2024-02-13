/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-color-a": "var(--dark-color-a)",
        "dark-color-b": "var(--dark-color-b)",
        "light-color": "var(--light-color)",
        "success-color": "var(--success-color)",
        "error-color": "var(--error-color)",
      },
    },
  },
  plugins: [],
};
