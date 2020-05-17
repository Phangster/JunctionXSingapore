import React, { Component } from "react";
import Footer from '../../global/Footer';
import CoverPhoto from '../../../images/junction_img/individual.jpg'
import JunctionXSGLogo from "../../../images/JxSingapore2019/JunctionX Singapore logo_white_twoline.png"

import '../../css/OurStory.css'
import '../../css/Partners.css';

class OurStory extends Component {
  render() {

    return (
      <div className="OurStory">
        <div className="containerIntro" id="containerIntro-ourstory">
          <div className="wrapper1-ourpartners">
            <p className="headerLogoCommunity">This is JunctionX Singapore</p>
            <div id="header2LogoCommunity">
              A non-profit multi-disciplinary tech-community that is managed and run by Singapore tech-enthusiasts.
              We come together in order to bring tech-enthusiasts an opportunity to showcase their talents
              as well as to contribute back to the community.
            </div>

          </div>
        </div>

        <div className="wrapper2 wrapper">
          <div class="row">
            <div class="col-sm-2"></div>
            <div class="col-sm-4">
              <h3 class="MiddleSec">An extraordinary group of individuals brought together by their tech interest.</h3>
              <p class="MiddleSec-Comments">What makes us special? Join us to find out.</p>
            </div>

            <div class="col-sm-4">
              <div class="Markdown TwoColumnSection--body">
                <p>Started out from 2018 as part of a bigger global movement,
                Junction in Helsinki, JunctionX Hanoi has brought a new color
                to hackathon in Vietnam, with the record of biggest number of participants,
                coming from all fields and having English as the main language at the event.
                JunctionX Hanoi has enriched the life of hundreds of people through the 48 hours Hackathon and
                have made a statement and challenge the conventional way of looking at technology.
                    The message came across was that coding is FUN, and technology is for EVERYONE.</p>
              </div>
            </div>
            <div class="col-sm-2"></div>
          </div>

          <div class="Divider"></div>

          <div class="row">
            <div class="col s2 l4">
              <h3 class="MiddleSec">How did we start?</h3>
              <p class="MiddleSec-Comments">Our first local hackathon in Singapore took place in 2019.
              Through JunctionX Singapore, participants were able to challenge themselves
                in order to solve the problems.</p>
            </div>
          </div>
        </div>

        <Footer />
      </div >
    );
  }
}

export default OurStory;