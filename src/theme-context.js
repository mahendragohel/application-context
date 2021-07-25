import React, { useReducer } from 'react';

export const themes = {
  light: {
    color: '#000000',
    background: '#eeeeee'
  },
  dark: {
    color: '#ffffff',
    background: '#222222'
  }
};

const initialState = {
  theme: themes.dark
};

export const GlobalContext = React.createContext(
  themes.dark // default value
);

function reducer(state, action) {
  switch (action.type) {
    case 'LIGHT': {
      return {
        ...state,
        theme: themes.light
      };
    }
    case 'DARK': {
      return {
        ...state,
        theme: themes.dark
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}


export { GlobalContextProvider, GlobalContext };
