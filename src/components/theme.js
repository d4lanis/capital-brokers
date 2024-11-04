import { defaultTheme } from "evergreen-ui";
import { merge } from "lodash";

const theme = merge({}, defaultTheme, {
  colors: {
    ...defaultTheme.colors,
    background: "#f1f1f1",
    text: "#0b1c2c",
    muted: "#194154",
    primary: "#34b1e6",
    secondary: "#1b7fa9",
    accent: "#136487",
    neutral: {
      ...defaultTheme.colors.neutral,
      light: "#f1f1f1",
      base: "#111111",
    },
  },
  fontFamilies: {
    display: "Arial, sans-serif",
    ui: "Arial, sans-serif",
  },
  components: {
    Link: {
      baseStyle: {
        color: "white",
        textDecoration: "none",
        _hover: {
          color: "#ddd", // Light gray on hover
          textDecoration: "none",
        },
        transition: "color 0.3s ease", // Smooth transition for hover
      },
    },
  },
});

export default theme;
