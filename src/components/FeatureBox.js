import React from "react";

class FeatureBox extends React.Component {
  render() {
    return (
      <div className="feature-box">
        <i className={`icon-basic-${this.props.icon} feature-box__icon`} />
        <h3 className="heading-tertiary u-margin-bottom-small">
          {this.props.heading}
        </h3>
        <p className="feature-box__paragraph">
          {this.props.text}
        </p>
      </div>
    );
  }
}

export default FeatureBox;
