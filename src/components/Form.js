import React from "react";
import Button from "./Button";

class Form extends React.Component {
  state = { name: "", email: "", tour:"" };

  onInputEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  onInputNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  onRadioClick = e => {
    this.setState({
      tour: e.target.id
    })
  }

  handleSubmit = () => {
    console.log(this.state);
  }

  render() {
    return (
      <form className="form">
        <div className="form__group">
          <input
            id="name"
            type="text"
            required
            placeholder="Full name"
            className="form__input"
            onChange={this.onInputNameChange}
            value={this.state.name}
          />
          <label htmlFor="name" className="form__label">
            Full name
          </label>
        </div>

        <div className="form__group">
          <input
            id="email"
            type="email"
            required
            placeholder="Email address"
            className="form__input"
            onChange={this.onInputEmailChange}
            value={this.state.email}
          />
          <label htmlFor="email" className="form__label">
            Email address
          </label>
        </div>

        <div className="form__group">
          <div className="form__radio-group">
            <input type="radio" name="tour-size" id="small" className="form__radio-input" onClick={this.onRadioClick} />
            <label for="small" className="form__radio-label" >
              <span className="form__radio-button"></span>
              Small tour size
            </label>
          </div>

          <div className="form__radio-group">
            <input type="radio" name="tour-size" id="large" className="form__radio-input" onClick={this.onRadioClick} />
            <label for="large" className="form__radio-label" >
              <span className="form__radio-button"></span>
              Large tour size
            </label>
          </div>
        </div>
        <div onClick={this.handleSubmit} className="u-margin-top-small">
          <Button color="green" buttonText="DISCOVER MORE &rarr;"/>
        </div>
      </form>
    );
  }
}

export default Form;
