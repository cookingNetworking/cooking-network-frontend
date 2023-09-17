


plugin = require("tailwindcss/plugin");

module.exports = {
    content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // content: ["./src/**/*.{ts,tsx}"],
  // safelist: [
  //   {
  //     pattern: /btn-(primary|secondary|highlight)/,
  //   },
  // ],
  theme: {
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 600,
    },
    colors: {
      black: "#090C02",
      white: "#ffffff",

      // primary: '#C534E5',
      // primaryVar: '#A71AC7',
      // primaryD: '#791390',

      // secondary: '#E57443',
      // secondaryVar: '#D7551D',
      // secondaryD: '#A24016',

      primary: "#26ADCB",
      primaryVar: "#2192AB",
      primaryD: "#145D6D",

      secondary: "#61C9A8",
      secondaryVar: "#39A784",
      secondaryD: "#27765D",

      highlight: "#EE4C41",
      highlightVar: "#EB2B1E",
      highlightD: "#BA1E12",

      dark: "#1B2021",
      gray: "#5F5F5F",
      lightGray: "#AFAFAF",
      light: "#FFF8F1",
    },
    screens: {
      mobile: { max: "375px" },
      // => @media (min-width: 375px) { ... }
      desktop: { max: "1440px" },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    plugin(({ addBase, addComponents, theme, matchUtilities }) => {
      matchUtilities(
        {
          color: (value) => ({
            backgroundColor: value,
          }),
        },
        { values: theme("color") },
      );
      addBase({
        h1: {
          fontSize: "36px",
          fontWeight: theme("fontWeight.medium"),
          color: theme("colors.dark"),
          lineHeight: "2.6rem",
        },
        h2: {
          fontSize: "28px",
          lineHeight: "2.6rem",
          fontWeight: theme("fontWeight.bold"),
          color: theme("colors.dark"),
        },
        h3: {
          fontSize: "14px",
          fontWeight: theme("fontWeight.bold"),
          color: theme("colors.dark"),
          textAlign: "center",
        },
        p: {
          fontSize: "12px",
          color: theme("colors.gray"),
          fontWeight: theme("fontWeight.regular"),
        },
        a: {
          fontSize: "12px",
          color: theme("colors.primary"),
          fontWeight: theme("fontWeight.regular"),
            transition:'all 0.2s ease-out',

          "&:hover": {
            color: theme("colors.primaryVar"),
            textDecoration: 'underline',
            textUnderlineOffset: '2px',
          },
          "&:visited": {
            color: theme("colors.primaryVar"),
          },
        },
      }),
        addComponents({
          ".btn": {
            fontWeight: theme("fontWeight.medium"),
            // fontWeight: "500",
            padding: "8px 20px",
            borderRadius: ".5rem",
            transition:'all 0.2s ease-out',
            "&:hover": {
              cursor: "pointer",
            },
            "&[data-active=false]": {
              opacity: "60%",
              cursor: "not-allowed",
            },
          },
          ".icon-btn": {
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: ".7rem .8rem",
            borderRadius: ".1rem",
            outline: `1px solid ${theme("colors.lightGray")}`,
            transition:'all 0.2s ease-out',

            h3: {
              color: theme("colors.gray"),
            },
            "&:hover": {
              outline: `2px solid ${theme("colors.gray")}`,
            },
          },
          ".line-text": {
            borderTop: `1px solid ${theme("colors.lightGray")}`,
            width: "100%",
            legend: {
              margin: "0 auto",
              padding: "0 .8rem",
              color: theme("colors.lightGray"),
            },
          },
          ".input-group": {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            // marginBottom: "8px",
            width: "100%",
            ".label": {
              color: theme("colors.gray"),
              fontWeight: theme("fontWeight.medium"),
              marginBottom: "6px",
              "&[data-label=true]": {
                position: "absolute",
                top: "-10px",
                left: "10px",
                backgroundColor: "white",
                padding: "2px 4px",
                fontSize: "10px",
                color: theme("colors.primary"),
              },
            },
            "&[data-error=true]": {
              ".label": {
                color: theme("colors.highlight"),
                "&[data-label=true]": {
                  color: theme("colors.highlight"),
                },
              },
              ".inputBox": {
                outline: `2px solid ${theme("colors.highlight")}`,
                "&:focus-within": {
                  outline: `2px solid ${theme("colors.highlight")}`,
                },
              },
            },
            ".inputBox": {
              display: "flex",
              alignItems: "center",
              gap: ".3rem",
              width: "100%",
              fontWeight: theme("fontWeight.regular"),
              outline: `1px solid ${theme("colors.lightGray")}`,
              backgroundColor: theme("colors.white"),
              border: "none",
              borderRadius: ".5rem",
              padding: "6px 10px",
              input: {
                width: "100%",
                outline: "none",
                border: "none",
              },
              "&:focus-within": {
                outline: `2px solid ${theme("colors.primary")}`,
              },
            },
            ".error-text": {
              color: theme("colors.highlight"),
              position: "absolute",
              bottom: "-22px",
            },
          },
          ".checkbox": {
            fontSize: "12px",
            marginRight: "10px",
            padding: "4px 0px",
            display: "flex",
            alignItems: "center",
            input: {
              height: "12px",
              width: "12px",
              marginRight: "4px",
            },
          },
        });
    }),
  ],
};
