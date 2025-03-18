/** @type {import('tailwindcss').Config} */
export default {
    theme: {
      extend: {
        screens: {
          xs: "450px", // 🔹 Custom extra-small breakpoint
          sm: "580px", // 🔹 Adjusting small screens
          md: "768px", // 🔹 Adjusting medium screens
          lg: "1024px", // 🔹 Adjusting large screens
          xl: "1250px", // 🔹 Adjusting extra-large screens
        },
      },
    },
    plugins: [],
  };