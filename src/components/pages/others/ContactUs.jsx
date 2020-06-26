import React, { Component } from "react";
import Footer from '../../global/Footer';
import '../../css/ContactUs.css';


//Import Team Pictures
import Bryan from '../../../images/team_img/Bryan.jpg'

//Marketing Team
import JunYuan from '../../../images/team_img/JunYuan.jpg'

//Partnership Team
import Adam from '../../../images/team_img/Adam.jpg'
import Daryl from '../../../images/team_img/Daryl.jpg'

//Web Developer
import Haziq from '../../../images/team_img/Haziq.jpg'


class ContactUs extends Component {

  render() {

    return (
      
      <div className="ContactUs">

        <div className="containerIntro containerIntro-contactUs">
          <div className="wrapperIntro">
            <div className="header1intro">
              Contact Us
            </div>
            <div className="header2intro">
            </div>
          </div>
        </div> 

        <div className ="containerMain">
          <div className="container-team-head-contactUs">
            <h2>Head of JunctionX Singapore</h2>
            <div class="head">
              <div>
                <img className="avatar" src={Bryan} alt="Bryan" />
                <p>Bryan Phang</p>
                <a className="email" href="mailto:bryan.david@hackjunction.com" title="Bryan David">bryan.david@hackjunction.com</a>
              </div>
            </div>
          </div>

          <div className="container-team-head-contactUs">
            <h2>Partnership Team</h2>
            <div class="head">
              <div>
                <img className="avatar" src={Daryl} alt="Daryl" />
                <p>Daryll Wong</p>
                <a className="email" href="mailto:daryll.wong@hackjunction.com" title="Daryll Wong">daryll.wong@hackjunction.com</a>
              </div>
              <div>
                <img className="avatar" src={Adam} alt="Adam" />
                <p>Adam Proft</p>
                <a className="email" href="mailto:adam.proft@hackjunction.com" title="Adam Proft">adam.proft@hackjunction.com</a>
              </div>
            </div>
          </div>

          <div className="container-team-head-contactUs">
            <h2>Marketing Team</h2>
            <div class="head">
              <div>
                <img className="avatar" src={JunYuan} alt="JunYuan" />
                <p>Teng Jun Yuan</p>
                <a className="email" href="mailto:teng.jun.yuan@hackjunction.com" title="Jun Yuan">teng.jun.yuan@hackjunction.com</a>
              </div>
            </div>
          </div>

          <div className="container-team-head-contactUs">
            <h2>Web Development Team</h2>
            <div class="head">
              <div>
                <img className="avatar" src={Haziq} alt="Haziq" />
                <p>Muhammad Haziq Mofe</p>
                <a className="email" href="mailto:muhammad.haziq@hackjunction.com" title="Haziq Mofe">muhammad.haziq@hackjunction.com</a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div >
    );
  }
}

export default ContactUs;