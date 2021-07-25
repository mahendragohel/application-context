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
  theme: themes.dark,
  currentTheme: 'dark'
};

export const GlobalContext = React.createContext(initialState);

function reducer(state, action) {
  switch (action.type) {
    case 'LIGHT': {
      return {
        ...state,
        theme: themes.light,
        currentTheme: 'light'
      };
    }
    case 'DARK': {
      return {
        ...state,
        theme: themes.dark,
        currentTheme: 'dark'
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContextProvider };
