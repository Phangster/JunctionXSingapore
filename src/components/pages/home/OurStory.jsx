import React, { Component } from "react";
import Footer from '../../global/Footer';
import CoverPhoto from '../../../images/junction_img/individual.jpg'
import '../../css/OurStory.css'

class OurStory extends Component {
  render() {

    return (
      <div>
        <div className="StoryPage">
          <div className="wrapper1">
            <img src={CoverPhoto} className="wrapper1"></img>
            <div className="coverContainer">
              <p className="headerLogoCommunity">This is JunctionX Singapore</p>
              <div id="header2LogoCommunity">
                A non-profit multi-disciplinary tech-community that is managed and run by Singapore tech-enthusiasts.
                We come together in order to bring tech-enthusiasts an opportunity to showcase their talents
                as well as to contribute back to the community. After all, it is intended to empower people to create with technology.
              </div>
            </div>
          </div>

          <div class="wrapper2">
            <div class="row">
              <div class="col s2 l4">
                <h3 class="MiddleSec">An extraordinary group of individuals brought together by their tech interest.</h3>
                <p class="MiddleSec-Comments">What makes us special? Join us to find out.</p>
              </div>
            </div>

            <div class="Divider"></div>
            <div class="row">
              <div class="col s2 l4">
                <h3 class="MiddleSec">How did we started out?</h3>
                <p class="MiddleSec-Comments">Our first local hackathon in Singapore took place in 2019.
                Through JunctionX Singapore, participants were able to challenge themselves as well
                as being able to push themselves in order to solve the the problems.</p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default OurStory;