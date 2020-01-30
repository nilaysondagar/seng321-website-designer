import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';

import Routes from '../routes/Routes';
import { BASENAME } from '../constants/routes';

class App extends Component {
  render() {
    return (
      <HashRouter basename={BASENAME}>
        <Routes />
      </HashRouter>
    );
  }
}

export default App;