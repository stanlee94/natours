import React from "react";
import ButtonSecondary from './ButtonSecondary';
import womanReview from '../img/nat-8.jpg'; 
import manReview from '../img/nat-9.jpg';
import videomp4 from '../img/video.mp4';
import videowebm from '../img/video.webm';

class Story extends React.Component {
  render() {
    return(
      <section className="section-stories">
        <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
                <source src={videomp4} />
                <source src={videowebm} />
                Your browser is not supported. Please use the latest version of Google Chrome.
            </video>
        </div>

        <div className="u-center-text u-margin-bottom-8">
            <div className="heading-secondary">We make people genuinely happy</div>
        </div>
        <div className="row">
            <div className="u-margin-bottom-small">
                <div className="story">
                    <figure className="story__shape">
                        <img src={womanReview} alt="Woman review" className="story__image" />
                        <figcaption className="story__caption">
                            Mary Smith
                        </figcaption>
                    </figure>
                    <div className="story__review">
                        <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
                        <div className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="u-margin-bottom-medium">
                <div className="story">
                    <figure className="story__shape">
                        <img src={manReview} alt="Woman review" className="story__image" />
                        <figcaption className="story__caption">
                            Jack Wilson
                        </figcaption>
                    </figure>
                    <div className="story__review">
                        <h3 className="heading-tertiary u-margin-bottom-small">My life is completely different now</h3>
                        <div className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="u-center-text">
            <ButtonSecondary text="Read all stories" />
        </div>
      </section>
    );
  }
}

export default Story;