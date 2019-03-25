import React from "react";
import whiteLogo from "../img/logo-white.png";
import Button from "./Button";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo-box">
          <img src={whiteLogo} alt="White Logo" className="header__logo" />
        </div>

        <div class="header__text-box">
          <div className="heading-primary">
            <span className="heading-primary--main">Outdoors</span>
            <span className="heading-primary--sub">is where life begins</span>
            <Button color="white" animated buttonText="Discover our tours" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
