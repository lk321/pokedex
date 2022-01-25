import { useMemo, createContext } from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from 'hooks/useLocalStorage';

export const ApplicationContext = createContext({ toggleMode: () => null });

function ApplicationProvider({ children }) {
  const [mode, setMode] = useLocalStorage('@theme', 'light');

  const value = useMemo(() => ({
    mode,
    toggleMode: () => {
      setMode(mode === 'light' ? 'dark' : 'light');
    },
  }), [mode]);

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
}

ApplicationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApplicationProvider;
