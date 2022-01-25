import { useState, useMemo, createContext } from 'react';
import PropTypes from 'prop-types';

export const ApplicationContext = createContext({ toggleMode: () => null });

function ApplicationProvider({ children }) {
  const [mode, setMode] = useState(() => window.localStorage.getItem('@theme') ?? 'light');
  const saveLocalStorage = () => {
    window.localStorage.setItem('@theme', mode);
    return window.localStorage.getItem('@theme');
  };
  const value = useMemo(() => ({
    mode,
    toggleMode: () => {
      setMode(() => (saveLocalStorage() === 'light' ? 'dark' : 'light'));
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
