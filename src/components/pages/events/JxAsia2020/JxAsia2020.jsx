/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import '../../../css/Home.scss';
import '../../../css/Home.sass';

// import './JxSingapore2019.scss';
// import './JxSingapore2019.sass';
import Footer from "../../../global/Footer";
import CoverPhoto from "../../../../images/JxSingapore2019/main_coverphoto.jpg"

// JunctionXAsia

import JunctionAsiaCollab from '../../../../images/JxAsia2020/JunctionXAsia_Poster.jpg'
import AsiaLogo from '../../../../images/JxAsia2020/junctionx_asia_white_twoline.png'

// For Router History
import { useHistory } from 'react-router-dom';



class JxSingapore2019 extends Component {


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

    console.log(this.state.showModal)
    return (
      <div>
        {/* <div className="modal-position">
          { this.state.showModal ? <div onClick={this.close}></div> : null }
          <Modal 
            className="modal"
            show={this.state.showModal}
            close={this.close}>
              Maybe aircrafts fly very high because they don't want to be seen in plane sight?
          </Modal>
        </div> */}
        <div className="container">
          <div className="wrapperOne">
            <img src={CoverPhoto} className="coverPhotoTag"></img>
            <div className="containerOne">
              {/* <img className = "logoSize" src={JunctionAsiaPoster} alt= "JunctionAsiaPoster"/> */}
              {/* <p className = "headerLogo">JUNCTIONX ASIA</p> */}
              <img src={AsiaLogo} className="headerLogoImg" ></img>
              <p style={{ fontSize: 30 + "px" }}>HACK THE FUTURE</p>
              <div style={{ fontSize: 25 + "px" }} className="textTwo color">4th May 2020</div>
            </div>
          </div>
          <div className="wrapperTwo">
            <div className="containerTwo">
              <div className='textColor'>ABOUT</div>
              <div>
                <div className="textOne">JunctionX Asia 2020</div>
                <div className="textTwo subconOne">
                  <div>The first ONLINE Asia JunctionX Hackathon</div>
                  <br></br>
                  <div>
                    JunctionX Asia 2020 is a hackathon organised by 3 different Asian countries.
                    JunctionX Singapore, JunctionX Hanoi & JunctionX Seoul.
                  </div>
                  <br></br>
                  <div>
                    With the combined experience of these 3 countries, we will be organising a Hackthon which will target the current global pandemic, COVID-19.
                  </div>
                  <div>
                    Participants from the Asia-Pacific region will be able to join us as we work to come up with solutions in order to combat the problems.
                  </div>
                    <br></br>
                    <div>Hack the Future with us! We hope to see your online submissions!</div>

                </div>
                <div className="subconTwo">
                  <img src={JunctionAsiaCollab} />

                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default JxSingapore2019;