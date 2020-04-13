import React, { Component } from "react";
import logo from '../../images/junction_img/JunctionX_Singapore_logo_black_twoline.png'
import '../css/Footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <div id="lab_social_icon_footer">

                    <div className="container-footer">

                        <div>
                            <img src={logo} alt="Junction Logo"></img>

                            <h2>Contact Us!</h2>
                            <p>General Inquiries:</p>
                            <h2>singapore@hackjunction.com</h2>
                            <p>&copy; 2020 JunctionX Singapore</p>
                        </div>

                        <div className="social-links">
                            <a href="https://www.facebook.com/JunctionXSingapore/">
                                <i id="social-fb" className="fa fa-facebook-square fa-3x social"></i>
                            </a>

                            <a href="https://www.linkedin.com/company/junctionx-singapore/">
                                <i id="social-linkedin" className="fa fa-linkedin-square fa-3x social"></i>
                            </a>
                            <a href="https://www.instagram.com/junctionx_singapore/"><i id="social-insta" className="fa fa-instagram fa-3x social"></i></a>
                            <a href="mailto:bryan.phang@hackjunction.com"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;