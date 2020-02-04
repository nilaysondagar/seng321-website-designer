import React, { Component } from 'react';
import classnames from 'classnames';

import FadingBox, { FadingBoxClassNames } from '../components/common/FadingBox';
import companyImage from '../assets/images/companyImage.jpg';

/**
 * Class that displays the home page with
 * information about me.
 */
export class HomePage extends Component {

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
    const boxClassNames = classnames({
      [FadingBoxClassNames.VISIBLE]: isVisible,
      [FadingBoxClassNames.HIDDEN]: !isVisible
    });

    return (
      <FadingBox className="page-container" pose={boxClassNames}>
        <div className="home">
          <div className="home__banner" style={{ backgroundImage: `url(${companyImage})` }}>
            <h1 className="home__banner__title">About us</h1>
          </div>
          <div className="home__row">
            <p className="home__text">
              Bad Wall Solutions is the world's leading expert in 3D mapping and analysis systems. With just under
              300 employees, Bad Wall Solutions services over 3 million users using over two dozen systems all designed
              and maintained by us. Ever since we were founded in 1986, we've strived to create the best software, and
              will continue to do so for the forseeable future!
            </p>
          </div>
        </div>
      </FadingBox>
    );
  }
}

export default HomePage;