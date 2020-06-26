/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";

import Footer from "../../../global/Footer";
import hacktherecovery from "../../../../images/JxAsia2020/hacktherecovery.jpg";
import Kaspersky from "../../../../images/JxAsia2020/partners_img/kasperskyNew.png";
import Microsoft from "../../../../images/JxAsia2020/partners_img/microsoft.png";
import Nokia from "../../../../images/JxAsia2020/partners_img/nokialogo.png";
import NClogo from "../../../../images/JxAsia2020/partners_img/logonc.png";
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

        <div className = "containerMain blackBackground">
          <div className="flexContainer">
            <div className="flexItem-left">
              Never before
            </div>
            <div className="flexItem-right">
              <div>
                JunctionX Asia is an online hackathon targeted at solving problems we are facing during the ongoing COVID-19 pandemic. 
                JunctionX Asia brings together developers, designers and other tech-minded individuals from all over the Asia 
                to create projects and solve intriguing challenges.
              </div> <br/>
              <div>
                We are collaborating with industry partners to come up with real-life problem statements for the participants.
                Click below to head to JunctionX Asia page!
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
            <br/><br/>
              <h1 className="metal">PLATINUM</h1>
              <div className="container-box">
                <img className="image home" src={Microsoft} alt="Microsoft" />
              </div><br/><br/>
              <h1 className="metal">GOLD</h1>
              <div className="container-box-asia2020">
                <img className="image home" src={Kaspersky} alt="Kaspersky" />
                <img className="image home" src={Nokia} alt="Nokia" />
                <img className="image home" src={NClogo} alt="NC" />
              </div>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default JxSingapore2019;