import React from "react";
import { Link } from 'react-router-dom';

class ButtonSecondary extends React.Component {
  render() {
    return(
        <Link to="/" className="btn-text">{this.props.text} &rarr;</Link>
    );
  }
}

export default ButtonSecondary;