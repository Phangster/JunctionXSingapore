import React, { Component } from "react";
import Footer from '../../global/Footer';
import CoverPhoto from '../../../images/junction_img/individual.jpg'
import JunctionXSGLogo from "../../../images/JxSingapore2019/JunctionX Singapore logo_white_twoline.png"

import '../../css/OurStory.css'

class OurStory extends Component {

  render() {

    return (
      
      <div className="OurStory">

        <div className="containerIntro containerIntro-ourStory">
          <div className="wrapperIntro">
            <div className="header1intro">
              This is JunctionX Singapore
            </div>
            <div className="header2intro">
              A non-profit multi-disciplinary tech-community that is managed and run by Singapore tech-enthusiasts.
              We come together in order to bring tech-enthusiasts an opportunity to showcase their talents
              as well as to contribute back to the community.
            </div>
          </div>
        </div>

        <div className="containerMain-ourStory">
          <div className="flexContainer-ourStory">
            <div className="flexItem-left-ourStory">
              An extraordinary group of individuals brought together by their tech interest.
            </div>
            <div className="flexItem-right-ourStory">
              Started out from 2018 as part of a bigger global movement,
              Junction in Helsinki, JunctionX Hanoi has brought a new color
              to hackathon in Vietnam, with the record of biggest number of participants,
              coming from all fields and having English as the main language at the event.
              JunctionX Hanoi has enriched the life of hundreds of people through the 48 hours Hackathon and
              have made a statement and challenge the conventional way of looking at technology.
              The message came across was that coding is FUN, and technology is for EVERYONE.
            </div>
          </div>
          <div className ="flexContainer-ourStory">
            <div className="flexItem-left-ourStory">
              How did we start?
            </div>
            <div className="flexItem-right-ourStory">
              Our first local hackathon in Singapore took place in 2019.
              Through JunctionX Singapore, participants were able to challenge themselves
              in order to solve the problems.
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default OurStory;