import React, { useState } from 'react';
import ThemedButton from './themed-button';
import { GlobalContext } from './theme-context';

import './style.css';

export default function App() {
  const { dispatch } = GlobalContext;
  return (
    <Toolbar
      toggleTheme={() => {
        dispatch({ type: 'DARK' });
      }}
    />
  );
}

function Toolbar(props) {
  return <ThemedButton onClick={props.toggleTheme}>Change Theme</ThemedButton>;
}
