const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "md:columns-2",
    "md:columns-3",
    "md:columns-4",
    "md:columns-5",
    "md:columns-6",
    "md:columns-7",
    "md:columns-8",
    "prose-neutral",
    "prose-light",
    "prose-dark",
  ],
  darkMode: "class",
  theme: {
    container: (theme) => ({
      center: true,
      padding: {
        DEFAULT: theme("spacing.4"),
        sm: theme("spacing.5"),
        lg: theme("spacing.6"),
        xl: theme("spacing.8"),
      },
    }),
    colors: {
      ...defaultTheme.colors,
      white: "white",
      black: "black",
      transparent: "transparent",
      current: "currentColor",
      neutral: {
        DEFAULT: "#1a1a1a",
        0: "#f0ede8",
        50: "#e6e3de",
        100: "#dbd8d4",
        150: "#d0ceca",
        200: "#c6c3bf",
        250: "#bbb9b5",
        300: "#b0aeab",
        350: "#a6a4a0",
        400: "#9b9996",
        450: "#908f8c",
        500: "#868481",
        550: "#7b7977",
        600: "#706f6d",
        650: "#656463",
        700: "#5b5a58",
        750: "#504f4e",
        800: "#454544",
        850: "#3b3a39",
        900: "#30302f",
        950: "#252525",
        1000: "#1a1a1a",
      },
      gold: {
        DEFAULT: "#FFB448",
        100: "#FFB448",
        75: "#FCC370",
        50: "#F8D198",
        25: "#F4DFC0",
      },
      primary: {
        DEFAULT: "#5C22FF",
        100: "#5C22FF",
        75: "#8255FA",
        50: "#A788F4",
        25: "#CCBBEE",
      },
      gray: {
        50: "#F0EDE8",
        100: "#DBD8D4",
        150: "#D0CECA",
        200: "#C6C3BF",
        250: "#BBB9B5",
        300: "#B0AEAB",
        350: "#A6A4A0",
        400: "#9B9996",
        450: "#908F8C",
        500: "#868481",
        550: "#7B7977",
        600: "#706F6D",
        650: "#656463",
        700: "#5B5A58",
        750: "#504F4E",
        800: "#454544",
        850: "#3B3A39",
        900: "#30302F",
        950: "#252525",
        1000: "#1A1A1A",
      },
      blue: {
        50: "#DCEEFF",
        100: "#B4DBFF",
        200: "#85C5FE",
        300: "#4EABFE",
        400: "#2296fe",
        500: "#0084FF",
        600: "#0574e4",
        700: "#0D5DBD",
        800: "#144696",
        900: "#1D2C6C",
        1000: "#241748",
      },
      orange: {
        200: "#EB7752",
        300: "#EA6C45",
        400: "#E85C30",
        500: "#EC4815",
        600: "#DC4419",
        700: "#D04017",
        800: "#C1360F",
      },
      error: {
        DEFAULT: "#E52A5B",
      },
      success: {
        DEFAULT: "#61FF8E",
      },
      warning: {
        DEFAULT: "#FF823B",
      },
    },

    borderRadius: {
      sm: "0.5rem",
      DEFAULT: "0.5rem",
      xl: "3rem",
      full: "10000rem",
    },
    // screens: {
    //   sm: "600px",
    //   md: "900px",
    //   lg: "1200px",
    //   xl: "1500px",
    //   "2xl": "1800px",
    // },
    fontFamily: {
      sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      display: ["Soehne Halbfett", ...defaultTheme.fontFamily.sans],
      mono: ["General Grotesque Mono Demi", "sans-serif"],
    },
    fontSize: {
      xs: [".775rem", "2rem"], // 14px
      sm: ["1.2rem", "1.9rem"], // 14px
      base: ["1.5rem", "2.1rem"], // 24px
      lg: ["2.25rem", "2.7rem"], // 36px
      xl: ["2.25rem", "2.9rem"], // 36px
      "2xl": ["4.0625rem", "4.0625rem"], // 72px
      "3xl": ["6rem", "6rem"], // 96px
      "4xl": ["8rem", "8rem"], // 160px
      "5xl": ["10rem", "10rem"], // 160px
      "6xl": ["20rem", "20rem"], // 320px
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
    },
    extend: {
      aspectRatio: {
        "2/1": "2 / 1",
      },

      // Animation

      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out",
        fadeDown: "fadeDown 0.6s ease-in-out",
        bounceHorizontal: "bounceHorizontal 1s infinite",
        float: "float 3s ease-in-out infinite",
      },
      // that is actual animation
      keyframes: (theme) => ({
        float: {
          "0%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(7px)" },
          "100%": { transform: "translateY(-10px)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },

        fadeDown: {
          "0%": { opacity: 0, transform: "translateY(-25%)" },
          "100%": { opacity: 1, transform: "translateY(0%)" },
        },

        bounceHorizontal: {
          "0%": {
            transform: "translateX(25%)",
            animationTimingFunction: `cubic-bezier(.8, 0, 1, 1)`,
          },

          "50%": {
            transform: "none",
            animationTimingFunction: `cubic-bezier(0, 0, .2, 1)`,
          },
        },
      }),

      textDecoration: ["active"],
      opacity: {
        7: ".075",
        15: ".15",
      },
      maxWidth: {
        "4xl": "63.125rem",
        "8xl": "86rem",
      },
      spacing: {
        128: "32rem",
      },
      zIndex: {
        "-1": "-1",
      },
      // typography: (theme) => {
      //   console.log("theme", theme("fontSize.2xl"));
      //   return {};
      // },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "1200px",
            "--tw-prose-invert-body": theme("colors.neutral[50]"),

            h1: {
              fontSize: theme("fontSize.2xl")[0],
              fontFamily: theme("fontFamily.display").join(","),
              fontWeight: "normal",
              marginTop: 0,
              marginBottom: "2rem",
            },
            h2: {
              fontSize: theme("fontSize.xl")[0],
              fontFamily: theme("fontFamily.display").join(","),
              fontWeight: "normal",
              marginBottom: "1rem",
              marginTop: "0rem",
            },
            h3: {
              fontSize: theme("fontSize.base"),
              fontFamily: theme("fontFamily.display").join(","),
              fontWeight: "normal",
              marginBottom: "0rem",
              color: theme("colors.gray.600"),
            },
            h4: {
              fontSize: theme("fontSize.sm"),
              marginBottom: 0,
              fontFamily: theme("fontFamily.display").join(","),
              fontWeight: "bold",
            },
            pre: {
              color: theme("colors.gray.700"),
              backgroundColor: theme("colors.gray.100"),
              lineHeight: 1.5,
            },
            code: {
              backgroundColor: theme("colors.gray.900"),
              padding: "0.25rem",
              borderRadius: "3px",
              margin: "-0.25rem 1px",
              color: theme("colors.gray.100"),
            },
            blockquote: {
              color: theme("colors.neutral.100"),
              fontStyle: "normal",
              padding: "1.25rem",
              backgroundColor: theme("colors.neutral.900"),
            },
            "blockquote p": {
              fontSize: theme("fontSize.base"),
              lineHeight: theme("fontSize.lg"),
            },
            a: {
              color: theme("colors.gold.DEFAULT"),
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
            p: {
              fontSize: theme("fontSize.base[0]"),
              lineHeight: theme("fontSize.base[1]"),
              marginTop: 0,
              marginBottom: theme("spacing.4"),
            },
            ul: {
              fontSize: theme("fontSize.base[0]"),
              lineHeight: theme("fontSize.base[1]"),
            },
          },
        },
        tint: {
          css: {
            pre: {
              color: theme("colors.gray.800"),
              backgroundColor: theme("colors.gray.150"),
            },
          },
        },
        lg: {
          css: {
            pre: {
              lineHeight: 1.5,
            },
            "p:first-of-type": {
              fontSize: "1.365rem",
            },
          },
        },
        xl: {
          css: {
            pre: {
              lineHeight: 1.5,
            },
            "p:first-of-type": {
              fontSize: "1.365rem",
            },
          },
        },
        invert: {
          css: {
            "--tw-prose-body": theme("colors.neutral[50]"),
            "--tw-prose-headings": theme("colors.gray[50]"),
            "--tw-prose-lead": theme("colors.gray[700]"),
            "--tw-prose-links": theme("colors.gray[900]"),
            "--tw-prose-bold": theme("colors.gray[900]"),
            "--tw-prose-counters": theme("colors.gray[600]"),
            "--tw-prose-bullets": theme("colors.gray[400]"),
            "--tw-prose-hr": theme("colors.gray[300]"),
            "--tw-prose-quotes": theme("colors.gray[900]"),
            "--tw-prose-quote-borders": theme("colors.gray[300]"),
            "--tw-prose-captions": theme("colors.gray[700]"),
            "--tw-prose-code": theme("colors.gray[900]"),
            "--tw-prose-pre-code": theme("colors.gray[100]"),
            "--tw-prose-pre-bg": theme("colors.gray[900]"),
            "--tw-prose-th-borders": theme("colors.gray[300]"),
            "--tw-prose-td-borders": theme("colors.gray[200]"),
            "--tw-prose-invert-body": theme("colors.gray[200]"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.gray[300]"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.gray[400]"),
            "--tw-prose-invert-bullets": theme("colors.gray[600]"),
            "--tw-prose-invert-hr": theme("colors.gray[700]"),
            "--tw-prose-invert-quotes": theme("colors.gray[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.gray[700]"),
            "--tw-prose-invert-captions": theme("colors.gray[400]"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.gray[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.gray[600]"),
            "--tw-prose-invert-td-borders": theme("colors.gray[700]"),
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.200"),
            '[class~="lead"]': { color: theme("colors.gray.400") },
            a: { color: theme("colors.gold") },
            strong: { color: theme("colors.gray.100") },
            "ul > li::before": { backgroundColor: theme("colors.gray.700") },
            hr: { borderColor: theme("colors.gray.800") },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.800"),
            },
            h1: { color: theme("colors.gray.100") },
            h2: { color: theme("colors.gray.100") },
            h3: { color: theme("colors.gray.600") },
            h4: { color: theme("colors.gray.100") },
            code: {
              color: theme("colors.gray.100"),
              backgroundColor: theme("colors.gray.1000"),
            },
            "a code": { color: theme("colors.gray.100") },
            pre: {
              color: theme("colors.gray.200"),
              backgroundColor: theme("colors.gray.900"),
            },
            thead: {
              color: theme("colors.gray.100"),
              borderBottomColor: theme("colors.gray.700"),
            },
            "tbody tr": { borderBottomColor: theme("colors.gray.800") },
          },
        },
        primary: {
          css: {
            color: theme("colors.gray.50"),
            '[class~="lead"]': { color: theme("colors.gray.400") },
            a: { color: theme("colors.gray.100") },
            strong: { color: theme("colors.gray.100") },
            "ul > li::before": { backgroundColor: theme("colors.gray.700") },
            hr: { borderColor: theme("colors.gray.800") },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.800"),
            },
            h1: { color: theme("colors.gray.100") },
            h2: { color: theme("colors.gray.100") },
            h3: { color: theme("colors.gray.100") },
            h4: { color: theme("colors.gray.100") },
            code: {
              color: theme("colors.gray.100"),
              backgroundColor: "rgba(0,0,0,0.15)",
            },
            "a code": { color: theme("colors.gray.100") },
            pre: {
              color: theme("colors.gray.200"),
              backgroundColor: "rgba(0,0,0,0.15)",
            },
            thead: {
              color: theme("colors.gray.100"),
              borderBottomColor: theme("colors.gray.700"),
            },
            "tbody tr": { borderBottomColor: theme("colors.gray.800") },
          },
        },
      }),
    },
  },
  variants: {
    extend: { typography: ["tint", "dark", "primary"] },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
  ],
};
