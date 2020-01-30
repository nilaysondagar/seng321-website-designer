import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import OurTeamPage from '../pages/OurTeamPage';
import DocsPage from '../pages/DocsPage';
import ContactPage from '../pages/ContactPage';
import { Navigation } from '../components/common/Navigation';
import * as routes from '../constants/routes';

export class Routes extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <Switch>
          {/* Main Routes */}
          <Route exact path={routes.HOME} component={HomePage} />
          <Route exact path={routes.OUR_TEAM} component={OurTeamPage} />
          <Route exact path={routes.CONTACT} component={ContactPage} />
          <Route exact path={routes.DOCS} component={DocsPage} />
        </Switch>
      </Fragment>
    );
  }
}

export default Routes;
