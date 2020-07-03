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
            <h1 className="header1intro">
              Contact Us
            </h1>
            <div className="header2intro">
            </div>
          </div>
        </div> 

        <div className ="containerMain">
          <div className="container-team-head">
            <h3>Head of JunctionX Singapore</h3>
            <div className="teamHead">
              <div>
                <img className="avatar" src={Bryan} alt="Bryan" />
                <div>Bryan Phang</div>
                <a className="email" href="mailto:bryan.david@hackjunction.com" title="Bryan David">bryan.david@hackjunction.com</a>
              </div>
            </div>
          </div>

          <div className="container-team-head">
            <h3>Partnership Team</h3>
            <div class="teamHead">
              <div>
                <img className="avatar" src={Daryl} alt="Daryl" />
                <div>Daryll Wong</div>
                <a className="email" href="mailto:daryll.wong@hackjunction.com" title="Daryll Wong">daryll.wong@hackjunction.com</a>
              </div>
              <div>
                <img className="avatar" src={Adam} alt="Adam" />
                <div>Adam Proft</div>
                <a className="email" href="mailto:adam.proft@hackjunction.com" title="Adam Proft">adam.proft@hackjunction.com</a>
              </div>
            </div>
          </div>

          <div className="container-team-head">
            <h3>Marketing Team</h3>
            <div class="teamHead">
              <div>
                <img className="avatar" src={JunYuan} alt="JunYuan" />
                <div>Teng Jun Yuan</div>
                <a className="email" href="mailto:teng.jun.yuan@hackjunction.com" title="Jun Yuan">teng.jun.yuan@hackjunction.com</a>
              </div>
            </div>
          </div>

          <div className="container-team-head">
            <h3>Web Development Team</h3>
            <div class="teamHead">
              <div>
                <img className="avatar" src={Haziq} alt="Haziq" />
                <div>Muhammad Haziq Mofe</div>
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