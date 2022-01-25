import { useState, useEffect } from 'react';

export default function useLocalStorage(key, defaultValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const value = localStorage.getItem(key);

    return value !== null ? JSON.parse(value) : defaultValue;
  });

  useEffect(() => {
    const listener = (event) => {
      if (event.storageArea === localStorage && event.key === key) {
        setStoredValue(JSON.parse(event.newValue));
      }
    };

    window.addEventListener('storage', listener);

    return () => {
      window.removeEventListener('storage', listener);
    };
  }, [key, defaultValue]);

  const setValue = (newValue) => {
    setStoredValue((currentValue) => {
      const valueToStore = newValue instanceof Function ? newValue(currentValue) : newValue;
      localStorage.setItem(key, JSON.stringify(valueToStore));

      return valueToStore;
    });
  };

  return [storedValue, setValue];
}
