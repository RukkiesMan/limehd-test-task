import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScreenHome from './home';

const ScreenRoot = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ScreenHome} exact />
      </Switch>
    </Router>
  );
};

export default ScreenRoot;
