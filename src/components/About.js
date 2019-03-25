import React from "react";
import ButtonSecondary from "./ButtonSecondary";
import nat1 from "../img/nat-1-large.jpg";
import nat2 from "../img/nat-2-large.jpg";
import nat3 from "../img/nat-3-large.jpg";

class About extends React.Component {
  state = {
    forestZ: 2,
    bikeZ: 1,
    hillZ: 3 
  }

  handleMouseOver = (e) => {
    const target = e.currentTarget;

    if(target.alt === "Forest") {
        this.setState({
            forestZ: this.state.bikeZ + this.state.hillZ
        });
    } else if(target.alt === "Road with bicycle") {
        this.setState({
            bikeZ: this.state.forestZ + this.state.hillZ
        });
    } else {
        this.setState({
            hillZ: this.state.forestZ + this.state.bikeZ
        });
    }
  }

  render() {
    return (
      <section className="section-about">
        <div className="u-center-text">
          <div className="heading-secondary u-margin-bottom-8">
            Exciting tours for adventurous people
          </div>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small u-no-select">
              You're going to fall in love with nature
            </h3>
            <p className="paragraph u-no-select">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et odit
              natus maxime veritatis nobis reprehenderit dignissimos recusandae
              accusantium, a possimus, non distinctio officiis optio doloremque
              nihil aspernatur ab delectus quo.
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Live adventure like you never have before
            </h3>
            <div className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque eum ut optio libero, laudantium ipsa voluptas delectus
              deserunt odio veritatis.
            </div>
            <ButtonSecondary text="Learn more" />
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                style = {{ zIndex: this.state.forestZ }}
                onMouseOver={this.handleMouseOver}
                src={nat1}
                alt="Forest"
                className="composition__photo composition__photo--p1"
              />
              <img
                style = {{ zIndex: this.state.bikeZ }}
                onMouseOver={this.handleMouseOver}
                src={nat2}
                alt="Road with bicycle"
                className="composition__photo composition__photo--p2"
              />
              <img
                style = {{ zIndex: this.state.hillZ }}
                onMouseOver={this.handleMouseOver}
                src={nat3}
                alt="Hill top"
                className="composition__photo composition__photo--p3"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
