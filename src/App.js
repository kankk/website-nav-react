import React, { Component } from 'react';
import './assets/styles/reset.css';
import './assets/styles/font.css';

import Home from './views/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home></Home>
      </div>
    );
  }
}

export default App;
