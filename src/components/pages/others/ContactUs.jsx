import React, { Component } from "react";
import Footer from '../../global/Footer';
import '../../css/ContactUs.css';


//Import Team Pictures
import Bryan from '../../../images/team_img/Bryan.jpg'
import Saana from '../../../images/team_img/Saana.jpg'

//Marketing Team
import JunYuan from '../../../images/team_img/JunYuan.jpg'
import Mel from '../../../images/team_img/Mel.jpg'
import Sean from '../../../images/team_img/Sean.jpg'

//Partnership Team
import Eloy from '../../../images/team_img/Eloy.jpg'
import Adam from '../../../images/team_img/Adam.jpg'
import Daryl from '../../../images/team_img/Daryl.jpg'

//Web Developer
import Haziq from '../../../images/team_img/Haziq.jpg'

import CoverPhoto from '../../../images/junction_img/team.jpg'

class ContactUs extends Component {
  render() {
    return (
      <div className="ContactUs">
        <div className="containerIntro" id="containerIntro-team">
          <div className="wrapper1-ourpartners">
            <p className="headerLogoCommunity">We Are JunctionX Singapore</p>
            <div id="header2LogoCommunity">
            </div>
          </div>
        </div>

        <div className="container-team-head">
            <h2>Head of JunctionX Singapore</h2>
            <img className="avatar" src={Bryan} alt="Bryan" />
            <p>Bryan Phang</p>
            <a className="email"href="mailto:bryan.david@hackjunction.com" title="Bryan Phang">bryan.david@hackjunction.com</a>
        </div>

        <div className="container-team-head">
            <h2>Partnership Team</h2>
            <img className="avatar" src={Daryl} alt="Daryl" />
            <p>Daryll Wong</p>
            <a className="email"href="mailto:daryll.wong@hackjunction.com" title="Daryll Wong">daryll.wong@hackjunction.com</a>
          </div>

          <div className="container-team-head">
            <img className="avatar" src={Adam} alt="Adam" />
            <p>Adam Proft</p>
            <a className="email"href="mailto:adam.proft@hackjunction.com" title="Adam Proft">adam.proft@hackjunction.com</a>
          </div>

          <div className="container-team-head">
            <h2>Marketing Team</h2>
            <img className="avatar" src={JunYuan} alt="JunYuan" />
            <p>Teng Jun Yuan</p>
            <a className="email"href="mailto:teng.jun.yuan@hackjunction.com" title="Jun Yuan">teng.jun.yuan@hackjunction.com</a>
          </div>

          <div className="container-team-head">
            <h2>Web Development Team</h2>
            <img className="avatar" src={Haziq} alt="Haziq" />
            <p>Muhammad Haziq Mofe</p>
            <a className="email"href="mailto:muhammad.haziq@hackjunction.com" title="Haziq Mofe">muhammad.haziq@hackjunction.com</a>
          </div>

      <Footer />
      </div >
    );
  }
}

export default ContactUs;