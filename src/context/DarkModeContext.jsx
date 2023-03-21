import { createContext, useContext, useState } from 'react';

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(prev => !prev);
    darkModeUpdate(darkMode);
  }

  return (
    <DarkModeContext.Provider value={{ toggleDarkMode, darkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  return useContext(DarkModeContext);
}

function darkModeUpdate(darkmode) {
  if (darkmode) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', '');
  }
}
