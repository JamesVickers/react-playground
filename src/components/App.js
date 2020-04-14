import React, { Component } from 'react';
import { Provider } from './Context/themeContext';
import Page from './Page';

class App extends Component {
  render() {
  return (
          <Provider>
            <Page />
          </Provider>
      )
  }
}

export default App;
