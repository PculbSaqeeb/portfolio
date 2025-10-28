/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // make sure this path matches your project structure
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },

      colors: {
        success: "#0A8200",
      },
    },
    transformOrigin: {
      center: "center center",
    },

    perspective: {
      "1000": "1000px",
      "1500": "1500px",
      "2000": "2000px",
    },

    boxShadow: {
      'purple-glow': '0 0 12px #a855f7',
    },
  },
  plugins: [],
}

