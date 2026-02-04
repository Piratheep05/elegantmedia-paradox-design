import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3b82f6',
      dark: '#2563eb',
      light: '#60a5fa',
    },
    secondary: {
      main: '#1a1a2e',
      light: '#374151',
    },
    success: {
      main: '#22c55e',
      light: '#10b981',
    },
    warning: {
      main: '#f59e0b',
      light: '#fbbf24',
    },
    error: {
      main: '#ef4444',
    },
    info: {
      main: '#06b6d4',
      light: '#0891b2',
    },
    background: {
      default: '#ffffff',
      paper: '#f9fafb',
      gray: '#f3f4f6',
      lightGray: '#f5f5f7',
      darkGray: '#e5e7eb',
    },
    text: {
      primary: '#1a1a2e',
      secondary: '#6b7280',
      disabled: '#9ca3af',
    },
    grey: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#1a1a2e',
    },
    // Custom colors for specific use cases
    custom: {
      purple: {
        light: '#ddd6fe',
        main: '#c4b5fd',
        dark: '#7c3aed',
      },
      cyan: {
        light: '#cffafe',
        main: '#a5f3fc',
        dark: '#0891b2',
      },
      blue: {
        light: '#bae6fd',
        main: '#7dd3fc',
        dark: '#0284c7',
      },
      green: {
        light: '#cde8bf',
        main: '#bbf7d0',
        dark: '#16a34a',
      },
      pink: {
        main: '#ec4899',
      },
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

export default theme;

