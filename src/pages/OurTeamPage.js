import React, { Component } from 'react';
import classnames from 'classnames';

import FadingBox, { FadingBoxClassNames } from '../components/common/FadingBox';
import SlidingUpCard from '../components/cards/SlidingUpCard';
import { TEAM_MEMBERS } from '../constants/ourTeam';

/**
 * Class that displays a list of team member cards.
 */
export class OurTeamPage extends Component {

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
        <div className="our-team">
          <h1 className="page-title">Our Team</h1>
          <div className="our-team__cards">
            {TEAM_MEMBERS.map(member => (
              <SlidingUpCard key={member.name} className="our-team-card" pose={animationClassNames}>
                <img className="our-team-card__image" src={member.image} alt="our-team icon" />
                <div className="our-team-card__content">
                  <h3 className="our-team-card__content__title">{member.name}</h3>
                  <div className="our-team-card__content__subtitle">
                    <h4 className="our-team-card__content__subtitle__text">{member.title}</h4>
                    <h4 className="our-team-card__content__subtitle__text">{member.date}</h4>
                  </div>
                  <p className="our-team-card__content__text">{member.description}</p>
                </div>
              </SlidingUpCard>
            ))}
          </div>
        </div>
      </FadingBox>
    );
  }
}

export default OurTeamPage;
