'use client';

import { createTheme, MantineColorsTuple  } from '@mantine/core';

const myColor: MantineColorsTuple = [
  '#e6ffee',
  '#d3f9e0',
  '#a8f2c0',
  '#7aea9f',
  '#54e382',
  '#3bdf70',
  '#2bdd66',
  '#1bc455',
  '#0bae4a',
  '#00973c'
];

export const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  colors: {
    myColor,
  },
  primaryColor: 'myColor',
});