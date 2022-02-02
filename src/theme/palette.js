import { alpha } from '@mui/material/styles';

export const GREY = {
  0: '#ffffff',
  100: '#f9fafb',
  400: '#e1e7ef',
  500: '#919EAB',
  600: '#8e99ab',
  700: '#212b36',
  800: '#212b36',
  500_12: alpha('#919EAB', 0.12),
};

export default function palette(mode) {
  const isLigth = mode === 'light';

  return {
    mode,
    primary: {
      ligth: '#ff5a36',
      main: '#ff0000',
      dark: '#c20000',
      contrastText: '#000000',
    },
    secondary: {
      ligth: '#72ffff',
      main: '#00FFFF',
      dark: '#00cbcc',
      contrastText: '#000000',
    },
    text: {
      primary: isLigth ? GREY[700] : GREY[400],
      secondary: isLigth ? GREY[600] : GREY[400],
      disabled: isLigth ? GREY[400] : GREY[600],
    },
    background: {
      default: isLigth ? GREY[0] : GREY[800],
      paper: isLigth ? GREY[100] : GREY[800],
      neutral: isLigth ? GREY[100] : GREY[500_12],
    },
    grey: GREY,
  };
}
