import React, { Component } from 'react';
import classnames from 'classnames';

import FadingBox, { FadingBoxClassNames } from '../components/common/FadingBox';
import SlidingUpCard from '../components/cards/SlidingUpCard';
import { DOCS } from '../constants/docs';

/**
 * Class that displays Documents that are 
 * currently active.
 */
export class DocsPage extends Component {

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
        <div className="docs">
          <h1 className="page-title">Documents</h1>
          <div className="docs__cards">
            {DOCS.map(doc => (
              <SlidingUpCard key={doc.title} className="doc-card" pose={animationClassNames}>
                <img className="doc-card__image" src={doc.image} alt="Document preview" />
                <div className="doc-card__content">
                  <h3 className="doc-card__content__title">{doc.title}</h3>
                  <h4 className="doc-card__content__subtitle__text">{doc.tagline}</h4>
                  <hr className="doc-card__content__divider" />
                  <h4 className="doc-card__content__text">{doc.description}</h4>
                  <a className="doc-card__content__link-button" href={doc.link} download={`${doc.title}.pdf`}>Download</a>
                </div>
              </SlidingUpCard>
            ))}
          </div>
        </div>
      </FadingBox>
    );
  }
}

export default DocsPage;
