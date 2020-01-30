import React, { Component } from 'react';
import classnames from 'classnames';

import FadingBox, { FadingBoxClassNames } from '../components/common/FadingBox';
import SlidingUpCard from '../components/cards/SlidingUpCard';
import { RFPS } from '../constants/rfps';

/**
 * Class that displays RFPs that are 
 * currently active.
 */
export class RFPsPage extends Component {

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
    const animationClassNames = classnames({
      [FadingBoxClassNames.VISIBLE]: isVisible,
      [FadingBoxClassNames.HIDDEN]: !isVisible
    });

    return (
      <FadingBox className="page-container" pose={animationClassNames}>
        <div className="rfps">
          <h1 className="page-title">RFPs</h1>
          <div className="rfps__cards">
            {RFPS.map(rfp => (
              <SlidingUpCard key={rfp.title} className="rfp-card" pose={animationClassNames}>
                <img className="rfp-card__image" src={rfp.image} alt="RFP preview" />
                <div className="rfp-card__content">
                  <h3 className="rfp-card__content__title">{rfp.title}</h3>
                  <h4 className="rfp-card__content__subtitle__text">{rfp.tagline}</h4>
                  <hr className="rfp-card__content__divider" />
                  <h4 className="rfp-card__content__text">{rfp.description}</h4>
                  <a className="rfp-card__content__link-button" href={rfp.link} download>Download</a>
                </div>
              </SlidingUpCard>
            ))}
          </div>
        </div>
      </FadingBox>
    );
  }
}

export default RFPsPage;
