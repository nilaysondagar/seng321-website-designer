import React, { Component } from 'react';
import classnames from 'classnames';

import FadingBox, { FadingBoxClassNames } from '../components/common/FadingBox';
import cityImage from '../assets/images/cityImage.jpg';

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
          <div className="home__banner" style={{ backgroundImage: `url(${cityImage})` }}>
            <h1 className="home__banner__title">About us</h1>
          </div>
          <div className="home__row">
            <p className="home__text">
              Welcome to the City of Letterkenny! We are the home of skating, snowboarding, and lots
              of snow! We are located in the province of Alberta, just off to the east of Calgary. Our
              city is unparalleled in beauty, and in snowfall. We've received the most snow in Canada for
              the last 4 years.
            </p>
          </div>
        </div>
      </FadingBox>
    );
  }
}

export default HomePage;