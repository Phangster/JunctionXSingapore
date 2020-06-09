import React, { Component } from "react";
import Footer from '../../global/Footer';
import '../../css/Team.css';
import '../../css/Partners.css';


//Import Team Pictures
import Bryan from '../../../images/team_img/Bryan.jpg'

//Marketing Team
import JunYuan from '../../../images/team_img/JunYuan.jpg'
import Sean from '../../../images/team_img/Sean.jpg'
import Saana from '../../../images/team_img/Saana.jpg'

//Partnership Team
import Adam from '../../../images/team_img/Adam.jpg'

//Web Developer
import Haziq from '../../../images/team_img/Haziq.jpg'
import Daryl from '../../../images/team_img/Daryl.jpg'

import CoverPhoto from '../../../images/junction_img/team.jpg'


class Team extends Component {

  constructor(...args) {
    super(...args);
    this.state = { showModal: false };

    this.close = () => {
      this.setState({ showModal: false });
    };

    this.open = () => {
      this.setState({ showModal: true });
    };

  }

  componentWillMount() {
    this.open();
  }
  render() {
    return (
        <div className="TeamPage">

        <div className="containerIntro" id="containerIntro-team">
          <div className="wrapper1-ourpartners">
            <p className="headerLogoCommunity">We Are JunctionX Singapore</p>
            <div id="header2LogoCommunity">
            </div>
          </div>
        </div>


          <div className="container-team-head">
            <h2>Head of JunctionX Singapore</h2>
            <div class="head">
              <div>
                <img className="avatar" src={Bryan} alt="Bryan" />
                <p>Bryan Phang</p>
                <a className="email" href="mailto:bryan.david@hackjunction.com" title="Bryan David">bryan.david@hackjunction.com</a>
              </div>
              </div>
          </div>
          <hr />

          <div className="container-team-partnership">
            <h2>Partnership Team</h2>
            <div class="head">
              <div>
                <img className="avatar" src={Adam} alt="Adam" />
                <p>Adam Proft</p>
                <p className="position">Head of Partnership</p>
                <a className="email" href="mailto:adam.proft@hackjunction.com" title="Adam Proft">adam.proft@hackjunction.com</a>
              </div>

              <div>
                <img className="avatar" src={Daryl} alt="Daryl" />
                <p>Daryll Wong</p>
                <p className="position">Head of Partnership</p>
                <a className="email" href="mailto:daryll.wong@hackjunction.com" title="Daryll Wong">daryll.wong@hackjunction.com</a>
              </div>
            </div>
          </div>
          <hr />

          <div className="container-team-marketing">
            <h2>Marketing Team</h2>
            <div class="head">
              <div>
                <img className="avatar" src={JunYuan} alt="JunYuan" />
                <p>Teng Jun Yuan</p>
                <p className="position">Head of Marketing</p>
                <a className="email" href="mailto:teng.jun.yuan@hackjunction.com" title="Jun Yuan">teng.jun.yuan@hackjunction.com</a>
              </div>
            </div>

            <div class="team-members">
              <div>
                <img className="avatar" src={Sean} alt="Sean" />
                <p>Sean Lew Teng Siong</p>
                <p className="position">Marketing Designer</p>
              </div>

              <div>
                <img className="avatar" src={Saana} alt="Saana" />
                <p>Saana Kuusela</p>
                <p className="position">Content Editor</p>
              </div>
            </div>
          </div>

          <hr />

          <div className="container-team-web">
            <h2>Web Development Team</h2>
            <div class="head">
              <div>
                <img className="avatar" src={Haziq} alt="Haziq" />
                <p>Muhammad Haziq Mofe</p>
                <p className="position">Head of Web Development</p>
                <a className="email" href="mailto:muhammad.haziq@hackjunction.com" title="Haziq Mofe">muhammad.haziq@hackjunction.com</a>
              </div>
            </div>

            <div class="team-members">
              <div>
                <img className="avatar" src={Daryl} alt="Daryl" />
                <p>Daryll Wong</p>
                <p className="position">Web Developer</p>
              </div>
              <div>
                <img className="avatar" src={Saana} alt="Saana" />
                <p>Saana Kuusela</p>
                <p className="position">Web Developer</p>
              </div>
            </div>
          </div>

          <Footer />
        </div>

    );
  }
}

export default Team;