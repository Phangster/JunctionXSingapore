import React, { Component } from "react";
import Footer from '../../global/Footer';
import '../../css/Team.css';

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
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="TeamPage">

        <div className="containerIntro containerIntro-team">
            <div className="wrapperIntro">
              <h1 className="header1intro fade-in-left">
                We are JunctionX Singapore
              </h1>
              <p className="header2intro"></p>
          </div>
        </div>
        
        <div className = "containerMain">
          <div className="container-team-head">
            <h3>Head of JunctionX Singapore</h3>
            <div className="teamHead">
              <div>
                <img className="avatar" src={Bryan} alt="Bryan" />
                <div>Bryan Phang </div>
                <div className="position">Head of JunctionX Singapore</div>
                <a className="email" href="mailto:bryan.david@hackjunction.com" title="Bryan David">bryan.david@hackjunction.com</a>
              </div>
            </div>
          </div>

          <hr/>

          <div className="container-team-partnership">
            <h3>Partnership Team</h3>
            <div className="teamHead">
              <div>
                <img className="avatar" src={Adam} alt="Adam" />
                <div>Adam Proft</div>
                <div className="position">Head of Partnership</div>
                <a className="email" href="mailto:adam.proft@hackjunction.com" title="Adam Proft">adam.proft@hackjunction.com</a>
              </div>

              <div>
                <img className="avatar" src={Daryl} alt="Daryl" />
                <div>Daryll Wong</div>
                <div className="position">Head of Partnership</div>
                <a className="email" href="mailto:daryll.wong@hackjunction.com" title="Daryll Wong">daryll.wong@hackjunction.com</a>
              </div>
            </div>
          </div>
            
          <hr/>

          <div className="container-team-marketing">
            <h3>Marketing Team</h3>
            <div className="teamHead">
              <div>
                <img className="avatar" src={JunYuan} alt="JunYuan" />
                <div>Teng Jun Yuan</div>
                <div className="position">Head of Marketing</div>
                <a className="email" href="mailto:teng.jun.yuan@hackjunction.com" title="Jun Yuan">teng.jun.yuan@hackjunction.com</a>
              </div>
            </div>

            <div className="team-members">
              <div>
                <img className="avatar" src={Sean} alt="Sean" />
                <div>Sean Lew Teng Siong</div>
                <div className="position">Marketing Designer</div>
              </div>

              <div>
                <img className="avatar" src={Saana} alt="Saana" />
                <div>Saana Kuusela</div>
                <div className="position">Content Editor</div>
              </div>
            </div>
          </div>

          <hr/>

          <div className="container-team-web">
            <h3>Web Development Team</h3>
            <div className="teamHead">
              <div>
                <img className="avatar" src={Haziq} alt="Haziq" />
                <div>Muhammad Haziq Mofe</div>
                <div className="position">Head of Web Development</div>
                <a className="email" href="mailto:muhammad.haziq@hackjunction.com" title="Haziq Mofe">muhammad.haziq@hackjunction.com</a>
              </div>
            </div>

            <div className="team-members">
              <div>
                <img className="avatar" src={Daryl} alt="Daryl" />
                <div>Daryll Wong</div>
                <div className="position">Web Developer</div>
              </div>
              <div>
                <img className="avatar" src={Saana} alt="Saana" />
                <div>Saana Kuusela </div>
                <div className="position">Web Developer</div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Team;