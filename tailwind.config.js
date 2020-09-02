module.exports = {
  purge: ["**/*.html", "**/*.js"],
  theme: {
    extend: {},
    fontFamily: {
      sans: "var(--sans)"
    },
    colors: {
      black: {
        default: "var(--black)"
      },
      white: {
        default: "var(--white)"
      },
      grey: {
        light: "var(--light-grey)",
        default: "var(--mid-grey)",
        dark: "var(--dark-grey)"
      },
      green: {
        default: "var(--green)"
      },
      magenta: {
        default: "var(--magenta)"
      },
      orange: {
        default: "var(--orange)"
      },
      yellow: {
        default: "var(--yellow)"
      },
      mint: {
        default: "var(--mint)"
      },
      blue: {
        default: "var(--blue)"
      }
    },
    screens: {
      // => @media (min-width: 1280px) { ... }
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    },
    fontSize: {
      xs: [
        "var(--xs-font-size)",
        {
          letterSpacing: "var(--xs-letter-spacing)",
          lineHeight: "var(--xs-line-height)"
        }
      ],
      sm: [
        "var(--sm-font-size)",
        {
          letterSpacing: "var(--sm-letter-spacing)",
          lineHeight: "var(--sm-line-height)"
        }
      ],
      base: [
        "var(--base-font-size)",
        {
          letterSpacing: "var(--base-letter-spacing)",
          lineHeight: "var(--base-line-height)"
        }
      ],
      lg: [
        "var(--lg-font-size)",
        {
          letterSpacing: "var(--lg-letter-spacing)",
          lineHeight: "var(--lg-line-height)"
        }
      ],
      xl: [
        "var(--xl-font-size)",
        {
          letterSpacing: "var(--xl-letter-spacing)",
          lineHeight: "var(--xl-line-height)"
        }
      ],
      xxl: [
        "var(--xxl-font-size)",
        {
          letterSpacing: "var(--xxl-letter-spacing)",
          lineHeight: "var(--xxl-line-height)"
        }
      ],
      xxxl: [
        "var(--xxxl-font-size)",
        {
          letterSpacing: "var(--xxxl-letter-spacing)",
          lineHeight: "var(--xxxl-line-height)"
        }
      ],
      xxxxl: [
        "var(--xxxxl-font-size)",
        {
          letterSpacing: "var(--xxxxl-letter-spacing)",
          lineHeight: "var(--xxxxl-line-height)"
        }
      ],
      xxxxxl: [
        "var(--xxxxxl-font-size)",
        {
          letterSpacing: "var(--xxxxxl-letter-spacing)",
          lineHeight: "var(--xxxxxl-line-height)"
        }
      ],
      xxxxxxl: [
        "var(--xxxxxxl-font-size)",
        {
          letterSpacing: "var(--xxxxxxl-letter-spacing)",
          lineHeight: "var(--xxxxxxl-line-height)"
        }
      ],
      xxxxxxxl: [
        "var(--xxxxxxxl-font-size)",
        {
          letterSpacing: "var(--xxxxxxxl-letter-spacing)",
          lineHeight: "var(--xxxxxxxl-line-height)"
        }
      ]
    }
  },
  variants: {},
  plugins: []
};
