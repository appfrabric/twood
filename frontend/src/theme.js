import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8B4513', // Saddle Brown
      light: '#A0522D', // Sienna
      dark: '#654321', // Dark Brown
    },
    secondary: {
      main: '#DEB887', // Burlywood
      light: '#F5DEB3', // Wheat
      dark: '#CD853F', // Peru
    },
    background: {
      default: '#FFF8DC', // Cornsilk
      paper: '#FAEBD7', // Antique White
    },
    text: {
      primary: '#4A4A4A', // Dark Gray
      secondary: '#696969', // Dim Gray
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        },
      },
    },
  },
});

export default theme; 