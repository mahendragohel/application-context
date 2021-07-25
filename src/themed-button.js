import React, { useContext } from 'react';
import { GlobalContext } from './context';

function ThemedButton(props) {
  const [state] = useContext(GlobalContext);
  return (
    <button
      {...props}
      style={{
        backgroundColor: state.theme.background,
        color: state.theme.color
      }}
    />
  );
}

export default ThemedButton;
