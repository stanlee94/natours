import React from "react";
import img1 from "../img/nat-8.jpg";
import img2 from "../img/nat-9.jpg";
import Button from "./Button";

class Popup extends React.Component {
  render() {
    const styles = this.props.show
      ? {
          background: { opacity: "1", visibility: "visible" }
        }
      : {
          background: { opacity: "0", visibility: "hidden" }
        };

    return (
      <div
        style={styles.background}
        className="popup"
        onClick={() => this.props.onClose()}
      >
        <div
          className="popup__box"
          onClick={e => e.stopPropagation()}
        >
          <div className="popup__left">
            <img src={img1} alt="Image 1" className="popup__img" />
            <img src={img2} alt="Image 2" className="popup__img" />
          </div>
          <div className="popup__right">
            <h2 className="heading-secondary u-margin-bottom-small">
              Start booking now
            </h2>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Important - please read these terms and conditions before booking
            </h3>
            <p className="popup__paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed
              sed risus pretium quam. Aliquam sem et tortor consequat id.
              Volutpat odio facilisis mauris sit amet massa vitae. Mi bibendum
              neque egestas congue. Placerat orci nulla pellentesque dignissim
              enim sit. Vitae semper quis lectus nulla at volutpat diam ut
              venenatis. Malesuada pellentesque elit eget gravida cum sociis
              natoque penatibus et. Proin fermentum leo vel orci porta non
              pulvinar neque laoreet. Gravida neque convallis a cras semper.
              Molestie at elementum eu facilisis sed odio morbi quis. Faucibus
              vitae aliquet nec ullamcorper sit amet risus nullam eget. Nam
              libero justo laoreet sit. Amet massa vitae tortor condimentum
              lacinia quis vel eros donec. Sit amet facilisis magna etiam.
              Imperdiet sed euismod nisi porta.
            </p>
            <Button buttonText="BOOK NOW" color="green" />
          </div>
        </div>
      </div>
    );
  }
}

export default Popup;
