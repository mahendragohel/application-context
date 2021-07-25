import React, { useState } from 'react';
import ThemedButton from './themed-button';
import { ThemeContext, themes } from './theme-context';

import './style.css';

export default function App() {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar
        toggleTheme={() => {
          console.log(theme);
          setTheme(theme === themes.dark ? themes.light : themes.dark);
        }}
      />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return <ThemedButton onClick={props.toggleTheme}>Change Theme</ThemedButton>;
}
