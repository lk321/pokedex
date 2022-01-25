import { useTheme } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';

function MyGlobalStyles() {
  const theme = useTheme();

  return (
    <GlobalStyles
      styles={{
        html: {
          backgroundColor: theme.palette.background.default,
        },
      }}
    />
  );
}

export default MyGlobalStyles;
