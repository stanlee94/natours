import React from "react";
import FeatureBox from "./FeatureBox";

class Feature extends React.Component {
  render() {
    return (
      <section className="section-features">
        <div className="row">
          <div className="col-1-of-4">
            <FeatureBox
              icon="world"
              heading="Explore the world"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                nemo, magni maxime ullam recusandae."
            />
          </div>
          <div className="col-1-of-4">
            <FeatureBox
              icon="compass"
              heading="Meet nature"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                nemo, magni maxime ullam recusandae."
            />
          </div>
          <div className="col-1-of-4">
            <FeatureBox
              icon="map"
              heading="Find your way"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                nemo, magni maxime ullam recusandae."
            />
          </div>
          <div className="col-1-of-4">
            <FeatureBox
              icon="heart"
              heading="Live a healthier life"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                nemo, magni maxime ullam recusandae."
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Feature;
