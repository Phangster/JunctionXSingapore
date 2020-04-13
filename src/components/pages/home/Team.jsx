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
            <h1>JunctionX Singapore Team</h1>
            <div className='profile'>
              <div>
                <h2>Head of JunctionX Singapore</h2>
                <img className="avatar" src={Bryan} alt="Bryan" />
                <p>Bryan Phang</p>
                <p className="position">bryan.david@hackjunction.com</p>
              </div>
            </div>

            <h2>Partnership Team</h2>
            <div className='profile'>
              <div>
                <img className="avatar" src={Eloy} alt="Eloy" />
                <p>Eloy Choo Hui </p>
                <p className="position">Partnership</p>
                <p className="position">eloy.choo.hui@hackjunction.com</p>
              </div>

              <div>
                <img className="avatar" src={Daryl} alt="Daryl" />
                <p>Daryll Wong</p>
                <p className="position">Partnerships</p>
                <p className="position">daryll.wong@hackjunction.com</p>
              </div>

              <div>
                <img className="avatar" src={Adam} alt="Adam" />
                <p>Adam Proft</p>
                <p className="position">Partnership</p>
                <p className="position">adam.proft@hackjunction.com</p>
              </div>
            </div>

            <h2>Marketing Team</h2>
            <div className='profile'>
              <div>
                <img className="avatar" src={JunYuan} alt="JunYuan" />
                <p>Teng Jun Yuan</p>
                <p className="position">Marketing Designer</p>
                <p className="position">teng.jun.yuan@hackjunction.com</p>
              </div>

              <div>
                <img className="avatar" src={Mel} alt="Melody" />
                <p>Melody Leong</p>
                <p className="position">Marketing Designer</p>
                <p className="position">melody.leong@hackjunction.com</p>
              </div>

              <div>
                <img className="avatar" src={Sean} alt="Sean" />
                <p>Sean Lew Teng Siong</p>
                <p className="position">Marketing Designer</p>
                <p className="position">@hackjunction.com</p>
              </div>
            </div>

            <h2>Web Development Team</h2>
            <div className='profile'>
              <div>
                <img className="avatar" src={Haziq} alt="Haziq" />
                <p>Muhammad Haziq Mofe</p>
                <p className="position">Web Developer</p>
                <p className="position">muhammad.haziq@hackjunction.com</p>
              </div>

              <div>
                <img className="avatar" src={Daryl} alt="Daryl" />
                <p>Daryll Wong</p>
                <p className="position">Web Developer</p>
                <p className="position">daryll.wong@hackjunction.com</p>
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