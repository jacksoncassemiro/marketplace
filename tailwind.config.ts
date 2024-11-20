import type { Config } from "tailwindcss";
import { DEFAULT_THEME } from '@mantine/core';

const config = {
  darkMode: ["class", "[data-mantine-color-scheme='dark']"],
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './node_modules/@mantine/**/*.{js,ts,jsx,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        "mantine-bg-1": "var(--bg-1)",
        "mantine-bg-2": "var(--bg-2)",
      }
    },
  },
  plugins: [],
} satisfies Config;

export default config;
