import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import SlidingDownBox, { SlidingDownBoxClassNames } from './SlidingDownBox';
import * as routes from '../../constants/routes';

/**
 * Class that displays the navigation bar at 
 * the top of all pages.
 */
export class Navigation extends Component {

  state = {
    isVisible: false
  }

  /**
   * Lifecycle method that sets the visibility
   * of the component to ensure the animation 
   * runs after the component has mounted.
   */
  componentDidMount() {
    this.setState({ isVisible: true });
  }

  render() {
    const { isVisible } = this.state;
    const navigationClassNames = classnames({
      [SlidingDownBoxClassNames.VISIBLE]: isVisible,
      [SlidingDownBoxClassNames.HIDDEN]: !isVisible
    });

    return (
      <SlidingDownBox className="navigation" pose={navigationClassNames}>
        <NavLink className="navigation__title" to={routes.HOME}>City of Letterkenny</NavLink>
        <div className="navigation__links">
          <NavLink 
            className="navigation__links__link" 
            activeClassName="navigation__links__link--our-team-active"
            to={routes.OUR_TEAM}
          >
            Our Team
          </NavLink>
          <NavLink 
            className="navigation__links__link" 
            activeClassName="navigation__links__link--rfps-active"
            to={routes.RFPS}
          >
            RFPs
          </NavLink>
          <NavLink 
            className="navigation__links__link" 
            activeClassName="navigation__links__link--contact-active"
            to={routes.CONTACT}
          >
            Contact
          </NavLink>
        </div>
      </SlidingDownBox>
    );
  }
}

export default Navigation;
