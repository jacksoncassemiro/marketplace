import type { Config } from "tailwindcss";
import { DEFAULT_THEME } from '@mantine/core';

// Função para converter a paleta do Mantine para o formato do Tailwind
const mantineColorsToTailwind = (mantineColors: typeof DEFAULT_THEME.colors) => {
  const tailwindColors: Record<string, Record<string, string>> = {};
  for (const [colorName, shades] of Object.entries(mantineColors)) {
    tailwindColors[colorName] = shades.reduce((acc, shade, index) => {
      acc[index * 100] = shade;
      return acc;
    }, {} as Record<string, string>);
  }
  return tailwindColors;
};

const tailwindColors = mantineColorsToTailwind(DEFAULT_THEME.colors);

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
        mantine: tailwindColors,
      }
    },
  },
  plugins: [],
} satisfies Config;

export default config;
