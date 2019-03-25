import React from "react";
import logo from '../img/logo-green-2x.png'

class Footer extends React.Component {
  render() {
    return(
        <footer className="footer">
            <div className="footer__logo-box">
                <img src={logo} alt="Natour's logo" className="footer__logo-image"/>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Careers</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Privacy Policy</a></li>
                            <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                        </ul>
                    </div>  
                </div>
                <div className="col-1-of-2">
                    <div className="footer__copyright">
                    Built by <a href="#" className="footer__link">Stanlee Mok Khaei Leng</a> from PETRONAS ICT Digital Delivery for his online course <a className="footer__link" href="#">Advance CSS and SASS</a>. Copyright © by Stanlee Mok Khaei Leng. 
                    </div>
                </div>
            </div>
        </footer>
    );
  }
}

export default Footer;