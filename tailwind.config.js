/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors:{
        "primary":"#ebeb00008Beb",
        "secondary": "#00008B"
      }
    },
    fontFamily: {
      notoSans: ["Noto Sans, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    }, 
    screens:{
      sm: "640px",
      md: "780px",
    }
  },
  plugins: [],
}

