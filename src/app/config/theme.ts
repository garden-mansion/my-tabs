import { extendTheme } from '@mui/joy';

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: '#2c5680',
          outlinedBorder: '#2c5680',
          outlinedColor: '#2c5680',
        },

        neutral: {
          softBg: 'white',
        },
      },
    },
  },
  typography: {
    h2: {
      color: '#2c3949',
    },
  },
});
