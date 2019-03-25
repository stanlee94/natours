import React from "react";

class Navigation extends React.Component {
  render() {
    return(
      <div>
          <div className="navigation">
            <input type="checkbox" className="navigation__input" id="check" />
            <label className="navigation__label" for="check" >
                <span className="navigation__icon-line"></span>
            </label>

            <div className="navigation__background">&nbsp;</div>
                
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>01</span>About Natours</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>02</span>Your Benefits</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>03</span>Popular Tours</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>04</span>Stories</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>05</span>Book now</a></li>
                </ul>
            </nav>
        </div>
      </div>
    );
  }
}

export default Navigation;