/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        normalText: ["Nunito Sans"],
        boldText: ["Bebas Neue"],
        Archivo: ["Archivo"],
      },
      colors: {
        primaryColor: "#F36F24",
        accentColor: "#D9A577",
        TextColor: "#362820",
        subTextColor: "#827168",
        textColorWhite: "#F3E4DB",
      },
      animation: {
        blobAnimation: "blobAnimation 3s ease infinite",
      },
    },
  },
  plugins: [],
};
