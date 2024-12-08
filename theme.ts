'use client';

import { createTheme, MantineColorsTuple } from '@mantine/core';

// const myColor: MantineColorsTuple = [
//   '#e6ffee',
//   '#d3f9e0',
//   '#a8f2c0',
//   '#7aea9f',
//   '#54e382',
//   '#3bdf70',
//   '#2bdd66',
//   '#1bc455',
//   '#0bae4a',
//   '#00973c'
// ];

export const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'green',
  primaryShade: {
    light: 6,
    dark: 8
  },
  scale: 1,
  autoContrast: false,
  luminanceThreshold: 0.3,
  defaultGradient: {
    from: "green",
    to: "teal",
    deg: 45,
  }
});