import React from 'react';
import { globalState } from './theme-context';

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    return (
      <button
        {...props}
        style={{
          backgroundColor: globalState.theme.background,
          color: globalState.theme.color
        }}
      />
    );
  }
}

ThemedButton.contextType = ThemeContext;
export default ThemedButton;
