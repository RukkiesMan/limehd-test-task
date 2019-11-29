import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScreenHome from './home';
import ScreenStarshipInfo from './starship/info';

const ScreenRoot = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ScreenHome} exact />
        <Route path="/starships/:id" component={ScreenStarshipInfo} />
      </Switch>
    </Router>
  );
};

export default ScreenRoot;
