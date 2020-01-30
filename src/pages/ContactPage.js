import React, { Component } from 'react';
import classnames from 'classnames';

import FadingBox, { FadingBoxClassNames } from '../components/common/FadingBox';
import SlidingUpCard from '../components/cards/SlidingUpCard';
import { CONTACT_INFO } from '../constants/contact';

export class ContactPage extends Component {
  
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
        <div className="contact">
          <h1 className="page-title">Contact</h1>
          <div className="contact__cards">
            {CONTACT_INFO.map(contact => (
              <SlidingUpCard key={contact.title} className="contact-card" pose={animationClassNames}>
                <img className="contact-card__image" src={contact.image} alt="contact preview" />
                <div className="contact-card__content">
                  <h3 className="contact-card__content__title">{contact.title}</h3>
                  <h4 className="contact-card__content__text">{contact.description}</h4>
                </div>
              </SlidingUpCard>
            ))}
          </div>
        </div>
      </FadingBox>
    );
  }
}

export default ContactPage;
