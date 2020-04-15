import React, { Component } from "react";
import Footer from '../../global/Footer';
import '../../css/Team.css';

//Import Team Pictures
import Bryan from '../../../images/team_img/Bryan.jpg'

//Marketing Team
import JunYuan from '../../../images/team_img/JunYuan.jpg'
import Mel from '../../../images/team_img/Mel.jpg'
import Sean from '../../../images/team_img/Sean.jpg'
import Saana from '../../../images/team_img/Saana.jpg'

//Partnership Team
import Eloy from '../../../images/team_img/Eloy.jpg'
import Adam from '../../../images/team_img/Adam.jpg'

//Web Developer
import Haziq from '../../../images/team_img/Haziq.jpg'
import Daryl from '../../../images/team_img/Daryl.jpg'

class Team extends Component {
  render() {
    return (
      <div className="container">
        <div>

          <div className="containerIntro">
            <h1>We are JunctionX Singapore</h1>
          </div>

          <div className="containerTeam">
            <div className='profile'>
              <div>
                <h2>Head of JunctionX Singapore</h2>
                <img className="avatar" src={Bryan} alt="Bryan" />
                <p>Bryan Phang</p>
                <a className="email" href="mailto:bryan.david@hackjunction.com" title="Eloy Choo">bryan.david@hackjunction.com</a>
              </div>
            </div>

            <div className="Divider"></div>


            <h2>Partnership Team</h2>
            <div className='profile'>
              <div>
                <img className="avatar" src={Daryl} alt="Daryl" />
                <p>Daryll Wong</p>
                <p className="position">Head of Partnership</p>
                <a className="email" href="mailto:daryll.wong@hackjunction.com" title="Daryll Wong">daryll.wong@hackjunction.com</a>
              </div>
            </div>

            <div className='profile'>
              <div>
                <img className="avatar" src={Eloy} alt="Eloy" />
                <p>Eloy Choo Hui</p>
                <p className="position">Team Member</p>
              </div>

              <div>
                <img className="avatar" src={Adam} alt="Adam" />
                <p>Adam Proft</p>
                <p className="position">Team Member</p>
              </div>
            </div>

            <div className="Divider"></div>

            <h2>Marketing Team</h2>
            <div className='profile'>
              <div>
                <img className="avatar" src={JunYuan} alt="JunYuan" />
                <p>Teng Jun Yuan</p>
                <p className="position">Head of Marketing</p>
                <a className="email" href="mailto:teng.jun.yuan@hackjunction.com" title="Jun Yuan">teng.jun.yuan@hackjunction.com</a>
              </div>
            </div>

            <div className='profile'>
              <div>
                <img className="avatar" src={Mel} alt="Melody" />
                <p>Melody Leong</p>
                <p className="position">Marketing Designer</p>
              </div>

              <div>
                <img className="avatar" src={Sean} alt="Sean" />
                <p>Sean Lew Teng Siong</p>
                <p className="position">Marketing Designer</p>
              </div>

              <div>
                <img className="avatar" src={Saana} alt="Saana" />
                <p>Saana</p>
                <p className="position">Content Editor</p>
              </div>
            </div>

            <div className="Divider"></div>

            <h2>Web Development Team</h2>
            <div className='profile'>
              <div>
                <img className="avatar" src={Haziq} alt="Haziq" />
                <p>Muhammad Haziq Mofe</p>
                <p className="position">Head of Web Development</p>
                <a className="email" href="mailto:muhammad.haziq@hackjunction.com" title="Haziq Mofe">muhammad.haziq@hackjunction.com</a>
              </div>
            </div>

            <div className='profile'>
              <div>
                <img className="avatar" src={Daryl} alt="Daryl" />
                <p>Daryll Wong</p>
                <p className="position">Web Developer</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div >
    );
  }
}

export default Team;