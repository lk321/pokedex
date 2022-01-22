import PropTypes from 'prop-types';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import componentOverrides from './overrides';
import palette from './palette';

function ThemeCofing({ children }) {
  const theme = createTheme({ palette });
  theme.components = componentOverrides(theme);

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

ThemeCofing.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeCofing;
