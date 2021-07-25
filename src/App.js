import React, { useContext, useState } from 'react';
import ThemedButton from './themed-button';
import { GlobalContext } from './context';

import './style.css';

export default function App() {
  const [state, dispatch] = useContext(GlobalContext);
  return (
    <Toolbar
      toggleTheme={() => {
        dispatch({ type: state.currentTheme === 'dark' ? 'LIGHT' : 'DARK' });
      }}
    />
  );
}

function Toolbar(props) {
  return <ThemedButton onClick={props.toggleTheme}>Change Theme</ThemedButton>;
}
