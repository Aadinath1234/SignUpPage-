module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { "900_02": "#152235", "900_01": "#191818" },
        black: { 900: "#000000" },
        white: { A700: "#ffffff" },
      },
      boxShadow: { xs: "3.4px 7.94px  1px 7.37px #000000", sm: "0px 8.5px  22px 13.04px #0000003f" },
      fontFamily: { inter: "Inter" },
      backgroundImage: {
        gradient: "radial-gradient(184deg, #e54b9063,#f48a7b3d,#f48b7b)",
        gradient1: "linear-gradient(134deg, #e54c91c6,#e88b7ce8,#e54c91c6)",
        gradient2: "linear-gradient(90deg, #f7ad50,#eb4335)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
