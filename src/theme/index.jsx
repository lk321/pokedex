import { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ApplicationContext } from 'Contexts/Application';

import GlobalStyles from './GlobalStyles';
import componentOverrides from './overrides';
import palette from './palette';
import shadows, { customShadows } from './shadows';

function ThemeCofing({ children }) {
  const { mode } = useContext(ApplicationContext);

  const theme = createTheme({
    palette: palette(mode),
    shadows: shadows[mode],
    customShadows: customShadows[mode],
  });
  theme.components = componentOverrides(theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

ThemeCofing.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeCofing;
