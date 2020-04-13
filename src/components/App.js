import React, { Component } from 'react';
import { Provider } from './Context/themeContext';
import Header from './Header';

class App extends Component {
  render() {
  return (
          <Provider>
            <Header />
          </Provider>
      )
  }
}

export default App;
