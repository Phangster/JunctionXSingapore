import React, { Component } from "react";
import Footer from '../../global/Footer';
import '../../css/Team.css';


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
                <a href="mailto:bryan.david@hackjunction.com" title="Eloy Choo">bryan.david@hackjunction.com</a>
              </div>
            </div>

            <h2>Partnership Team</h2>
            <div className='profile'>
              <div>
                <img className="avatar" src={Eloy} alt="Eloy" />
                <p>Eloy Choo Hui</p>
                <p className="position">Partnership</p>
                <a href="mailto:eloy.choo.hui@hackjunction.com" title="Eloy Choo">eloy.choo.hui@hackjunction.com</a>
              </div>

              <div>
                <img className="avatar" src={Daryl} alt="Daryl" />
                <p>Daryll Wong</p>
                <p className="position">Partnership</p>
                <a href="mailto:daryll.wong@hackjunction.com" title="Daryll Wong">daryll.wong@hackjunction.com</a>
              </div>

              <div>
                <img className="avatar" src={Adam} alt="Adam" />
                <p>Adam Proft</p>
                <p className="position">Partnership</p>
                <a href="mailto:adam.proft@hackjunction.com" title="Adam Proft">adam.proft@hackjunction.com</a>
              </div>
            </div>

            <h2>Marketing Team</h2>
            <div className='profile'>
              <div>
                <img className="avatar" src={JunYuan} alt="JunYuan" />
                <p>Teng Jun Yuan</p>
                <p className="position">Marketing Designer</p>
                <a href="mailto:teng.jun.yuan@hackjunction.com" title="Jun Yuan">teng.jun.yuan@hackjunction.com</a>
              </div>

              <div>
                <img className="avatar" src={Mel} alt="Melody" />
                <p>Melody Leong</p>
                <p className="position">Marketing Designer</p>
                <a href="mailto:melody.leong@hackjunction.com" title="Melody Leong">melody.leong@hackjunction.com</a>
              </div>

              <div>
                <img className="avatar" src={Sean} alt="Sean" />
                <p>Sean Lew Teng Siong</p>
                <p className="position">Marketing Designer</p>
                <a href="mailto:sean@hackjunction.com" title="Sean lew">sean@hackjunction.com</a>
              </div>
            </div>

            <h2>Web Development Team</h2>
            <div className='profile'>
              <div>
                <img className="avatar" src={Haziq} alt="Haziq" />
                <p>Muhammad Haziq Mofe</p>
                <p className="position">Web Developer</p>
                <a href="mailto:muhammad.haziq@hackjunction.com" title="Haziq Mofe">muhammad.haziq@hackjunction.com</a>
              </div>

              <div>
                <img className="avatar" src={Daryl} alt="Daryl" />
                <p>Daryll Wong</p>
                <p className="position">Web Developer</p>
                <a href="mailto:daryll.wong@hackjunction.com" title="Daryl Wong">daryll.wong@hackjunction.com</a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Team;