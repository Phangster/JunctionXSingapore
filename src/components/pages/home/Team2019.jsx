import React, { Component } from "react";
import Footer from '../../global/Footer';
import '../../css/Team.css';
import Helena from '../../../images/team_img/Helena.jpg'
import Petra from '../../../images/team_img/Petra.jpg'
import Emir from '../../../images/team_img/Emir.jpg'
import Naomi from '../../../images/team_img/Naomi.jpg'
import ChangHsi from '../../../images/team_img/ChangHsi.jpg'
import Bryan from '../../../images/team_img/Bryan.jpg'


class Team2019 extends Component {
    render() {
      return (
        <div>
          <div className="TeamPage">
            <div className="container-team-intro">
              <h1>We are JunctionX Singapore</h1>
            </div>
  
            <div className="container-team-head">
              <h2>Head of JunctionX Singapore</h2>

              <div class="team-members">
                <div>
                <img className="avatar" src={Bryan} alt="Bryan" />
              <p>Bryan Phang</p>
                </div>

                <div>
                <img className="avatar" src={ChangHsi} alt="ChangHsi" />
              <p>Chang Hsi</p>
                </div>
              </div>
              
            </div>
            <hr />
  
            <div className="container-team-partnership">
              <h2>Marketing Team</h2>
              <div class="head">
                <div>
                  <img className="avatar" src={Petra} alt="Petra" />
                  <p>Petra Jääskeläinen</p>
                  <p className="position">Head of Marketing</p>
                </div>

              </div>
  
              <div class="team-members">
                <div>
                  <img className="avatar" src={Naomi} alt="Naomi" />
                  <p>Naomi Wong</p>
                  <p className="position">Apparel Designer</p>
                </div>

                <div>
                  <img className="avatar" src={Emir} alt="Emir" />
                  <p>Emir Hamzah Mustaffa</p>
                  <p className="position">Marketing Designer</p>
                </div>
              </div>
            </div>
            <hr />
  
            <div className="container-team-marketing">
              <h2>Head of Participants</h2>
              <div class="head">
                <div>
                  <img className="avatar" src={Helena} alt="Helena" />
                  <p>Helena Hilander</p>
                </div>
              </div>
  
            </div>
  
            <Footer />
          </div>
        </div>
  
      );
    }
  }
  
export default Team2019;