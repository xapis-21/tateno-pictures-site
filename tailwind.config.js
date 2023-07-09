/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ttn-orange": "#C8731D",
        "ttn-black": "#0D0D0D",
        "ttn-light": "#D6C9B5",
      },
      fontFamily: {
        heading: ["var(--font-bebas)", "sans"],
        body: ["var(--font-lato)", "sans-serif"],
       test: ["var(--font-oswald)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
