/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";

import Footer from "../../../global/Footer";
import hacktherecovery from "../../../../images/JxAsia2020/hacktherecovery.jpg";
import Kaspersky from "../../../../images/JxAsia2020/partners_img/kasperskyNew.png";
import Microsoft from "../../../../images/JxAsia2020/partners_img/microsoft.png";
import JunctionAsiaCollab from '../../../../images/JxAsia2020/JunctionX_2020_intro.jpg'
import AsiaLogo from '../../../../images/JxAsia2020/junctionx_asia_white_twoline.png'

// For Router History
import { useHistory } from 'react-router-dom';

import './JxAsia2020.css'


class JxSingapore2019 extends Component {

  render() {

    return (

      <div className="jxasia2020">

        <div className="containerIntro containerIntro-asia2020">
          <div className="header1introCentered">
            <a href="https://asia.hackjunction.com/">
              <img src={AsiaLogo} className="junctionXlogo" ></img>
            </a>
            <p>
              Hack the reCOVery
            </p>
          </div>
          <div className="header2introCentered">
            18 June - 23 June 2020
          </div>
        </div>

        <div className ="containerMain">
          <div className="flexContainer">
            <div className="flexItem-left">
              Never before
            </div>
            <div className="flexItem-right">
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
            <a href="https://asia.hackjunction.com/">
              <img src={hacktherecovery} />
            </a>
          </div>
        
        <div className = "containment-asia2020">
          <h1>OUR PARTNERS</h1>
          <br/>
            <h1 className="metal">GOLD</h1>
            <div className="container-box">
              <img className="image home" src={Kaspersky} alt="Kaspersky" />
            </div>
            <h1 className="metal">PLATINUM</h1>
            <div className="container-box">
              <img className="image home" src={Microsoft} alt="Microsoft" />
            </div>
          </div>
        </div>
      <Footer />
    </div>
    );
  }
}

export default JxSingapore2019;