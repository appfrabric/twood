import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E7D32', // Green
      light: '#6B8C5F',
      dark: '#1B5E20',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#8B4513', // Mahogany
      light: '#A66B3C',
      dark: '#5C2E0C',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F5F5',
    },
    text: {
      primary: '#2C3F25', // Dark green for text
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem', // Reduced from 4rem
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.75rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h6: {
      fontWeight: 700, // Increased from 500
      fontSize: '1.25rem', // Increased from default
      letterSpacing: '0.5px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 700, // Increased from 500
          fontSize: '1.1rem', // Increased font size
          color: '#2E7D32', // Green color for menu buttons
          textShadow: '0px 1px 2px rgba(74, 103, 65, 0.15)', // Light green shadow
          '&:hover': {
            backgroundColor: 'rgba(74, 103, 65, 0.1)', // Light green background
            textShadow: '0px 2px 4px rgba(74, 103, 65, 0.2)', // Stronger shadow on hover
          },
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#2E7D32', // Green color for menu text
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: '#2E7D32', // Green color
          fontWeight: 700, // Increased from 600
          fontSize: '1.1rem', // Increased font size
          textShadow: '0px 1px 2px rgba(74, 103, 65, 0.15)', // Light green shadow
          border: '2px solid transparent',
          borderRadius: '4px',
          margin: '4px 0',
          '&:hover': {
            backgroundColor: 'rgba(74, 103, 65, 0.1)', // Light green background
            boxShadow: '0px 2px 4px rgba(74, 103, 65, 0.2)', // Light green shadow
            textShadow: '0px 2px 4px rgba(74, 103, 65, 0.25)', // Stronger shadow on hover
          },
          '&.Mui-selected': {
            backgroundColor: 'rgba(74, 103, 65, 0.15)',
            color: '#1B5E20', // Darker green
            fontWeight: 800, // Increased from 700
            textShadow: '0px 2px 4px rgba(74, 103, 65, 0.3)', // Stronger shadow for selected
            border: '2px solid #2E7D32',
            '&:hover': {
              backgroundColor: 'rgba(74, 103, 65, 0.2)',
            },
          },
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          color: '#1B5E20', // Darker green
          fontWeight: 800, // Increased from 700
          fontSize: '1.2rem', // Increased font size
          backgroundColor: 'rgba(74, 103, 65, 0.05)', // Very light green background
          textShadow: '0px 2px 4px rgba(74, 103, 65, 0.25)', // Stronger light green text shadow
          borderBottom: '2px solid #2E7D32',
          padding: '12px 16px',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: '#2E7D32', // Green color
          fontWeight: 700, // Increased from 600
          fontSize: '1.1rem', // Increased font size
          textShadow: '0px 1px 2px rgba(74, 103, 65, 0.15)', // Light green shadow
        },
        secondary: {
          color: '#A66B3C', // Lighter mahogany
          fontSize: '1rem', // Increased font size
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-h6': {
            color: '#2E7D32', // Green color for menu text
            fontWeight: 700, // Increased from 600
            fontSize: '1.25rem', // Increased font size
            textShadow: '0px 1px 2px rgba(74, 103, 65, 0.15)', // Light green shadow
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          '&.MuiMenu-paper': {
            border: '2px solid #2E7D32',
            borderRadius: '8px',
            boxShadow: '0px 4px 12px rgba(139, 69, 19, 0.2)',
            '& .MuiList-root': {
              padding: '8px',
              backgroundColor: 'rgba(74, 103, 65, 0.02)',
            },
          },
        },
      },
    },
  },
});

export default theme; 