import React, { Component } from "react";

import '../css/Footer.css';

class Footer extends Component {
    render() {
      return (
        <div>
            <div id="lab_social_icon_footer">
                <div className ="container-footer">
                    <div>
                        <h2 className="textColor" >CONTACT US !</h2>
                        <p>General inquiries: </p>
                        <h2>singapore@hackjunction.com</h2>
                        <p>&copy; 2019 JunctionX Singapore</p>
                    </div>
                    <div className="social-links">
                        <a href="https://www.facebook.com/JunctionXSingapore/"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
                        {/* <a href="https://twitter.com/bootsnipp"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a> */}
                        {/* <a href="https://plus.google.com/+Bootsnipp-page"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a> */}
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