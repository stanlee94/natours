import React from "react";
import { Link } from 'react-router-dom';

class Button extends React.Component {
  render() {
    const { color } = this.props;

    const classIsAnimated = this.props.animated ? `btn btn--${color} btn-animated` : `btn btn--${color}`; 

    return(
        <Link to="/"  className={classIsAnimated} >{this.props.buttonText}</Link>
    );
  }
}

export default Button;