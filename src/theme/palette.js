const GRAY = {
  0: '#ffffff',
  100: '#f9fafb',
  400: '#e1e7ef',
  600: '#8e99ab',
  800: '#212b36',
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
      primary: isLigth ? GRAY[800] : '#ffffff',
      secondary: isLigth ? GRAY[600] : GRAY[400],
      disabled: isLigth ? GRAY[400] : GRAY[600],
    },
  };
}
