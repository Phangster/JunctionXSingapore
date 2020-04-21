/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import '../../../css/Home.scss';
import '../../../css/Home.sass';

// import './JxSingapore2019.scss';
// import './JxSingapore2019.sass';
import Footer from "../../../global/Footer";
import JxAsiaCoverImg from "../../../../images/JxAsia2020/JxAsiaCoverImg.png"

// JunctionXAsia

import JunctionAsiaCollab from '../../../../images/JxAsia2020/JunctionXAsia_Poster.jpg'
import AsiaLogo from '../../../../images/JxAsia2020/junctionx_asia_white_twoline.png'

// For Router History
import { useHistory } from 'react-router-dom';

import './JxAsia2020.css'


class JxSingapore2019 extends Component {


  render() {

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
        <div className="jxasia2020">
          <div className="wrapperOne">
            <img src={JxAsiaCoverImg} className="coverPhotoTag" id="wrapper1-JxAsia2020"></img>
            <div className="containerOne" >
              {/* <img className = "logoSize" src={JunctionAsiaPoster} alt= "JunctionAsiaPoster"/> */}
              {/* <p className = "headerLogo">JUNCTIONX ASIA</p> */}
              <img src={AsiaLogo} className="headerLogoImg" ></img>
              <p style={{ fontSize: 30 + "px" }}>HACK THE FUTURE</p>
              <div style={{ fontSize: 25 + "px" }} className="textTwo color">4.-7.6.2020</div>
            </div>
          </div>
          <div className="wrapper2 wrapper">

             <div className="flexbox1 flexbox">
            <div className="wrapperTwo-flexbox1-left">
                <div>Never before</div>
            </div>
              {/* <div style={{width:20+'px'}}></div> */}
            <div className="wrapperTwo-flexbox1-right">
              <div>
              JunctionX Asia is an online hackathon targeted at solving problems we are facing during this ongoing pandemic. Bringing together developers, designers and other tech-minded individuals to create projects and solve intriguing challenges.
              </div> <br/>
              <div>
              We will be collaborating with industry partners to come up with real-life problem statements for the participants. Come join us! Registration will open in May and more details will be released soon - stay tuned!
              </div>
            </div>
            </div>
            <br/><br/><br/>
            <div>
              <img src={JunctionAsiaCollab}/>
            </div>


       
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default JxSingapore2019;