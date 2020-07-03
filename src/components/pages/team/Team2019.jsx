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

        <div className="containerIntro containerIntro-team">
          <div className="wrapperIntro">
            <h1 className="header1intro">
              Team 2019
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
                <div>Bryan Phang</div>
              </div>
              <div>
                <img className="avatar" src={ChangHsi} alt="ChangHsi" />
                <div>Chang Hsi</div>
              </div>
            </div>
          </div>

          <hr/>

          <div className="container-team-partnership">
            <h3>Marketing Team</h3>
            <div className="teamHead">
              <div>
                <img className="avatar" src={Petra} alt="Petra" />
                <div>Petra Jääskeläinen</div>
                <div className="position">
                  Head of Marketing
                </div>
              </div>
            </div>

            <div className="team-members">
              <div>
                <img className="avatar" src={Naomi} alt="Naomi" />
                <div>Naomi Wong</div>
                <div className="position">
                  Apparel Designer
                </div>
              </div>

              <div>
                <img className="avatar" src={Emir} alt="Emir" />
                <div>Emir Hamzah Mustaffa</div>
                <div className="position">
                  Marketing Designer
                </div>
              </div>
            </div>
          </div>

          <hr/>

          <div className="container-team-marketing">
            <h3>Head of Participants</h3>
            <div className="teamHead">
              <div>
                <img className="avatar" src={Helena} alt="Helena" />
                <div>Helena Hilander</div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
    );
  }
}

export default Team2019;