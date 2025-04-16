import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";
import { colors } from "./colors";
const customConfig = defineConfig({
  globalCss: {
    "html, body": {
      objectFit: "cover",
      backgroundSize: "cover",
      margin: 0,
      padding: 0,
      p: 0,
      m: 0,
      boxSizing: "border-box",
      background: {
        _dark: "#262626",
        _light: "#f2f2f2",
      },
      color: {
        _dark: "#F2F2F2",
        _light: "#262626",
      },
      fontFamily: "Inter, sans-serif", 
      fontWeight: ["100", "900"],
      fontStyle: "normal",
      },

  },
  theme: {
    tokens: {
      colors,
    },
  },
  
});

export const system = createSystem(defaultConfig, customConfig);
