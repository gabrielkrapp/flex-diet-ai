import { createTheme } from '@mui/material/styles';

export const GlobalTheme = createTheme({
  palette: {
    primary: {
      main: '#18E1C2',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            borderColor: '#18E1C2',
            color: '#18E1C2',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: '#18E1C2',
            },
            '&:hover fieldset': {
              borderColor: '#18E1C2',
            },
          },
          '& .MuiInput-underline:before': {
            borderBottomColor: '#18E1C2',
          },
          '& .MuiInput-underline:hover:before': {
            borderBottomColor: '#18E1C2',
          },
        },
      },
    },
  },
});