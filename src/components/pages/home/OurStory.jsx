import React, { Component } from "react";
import Footer from '../../global/Footer';
import '../../css/OurStory.css'

class OurStory extends Component {

  render() {

    return (
      
      <div className="OurStory">

        <div className="containerIntro containerIntro-ourStory">
          <div className="wrapperIntro">
            <h1 className="header1intro">
              This is JunctionX Singapore
            </h1>
            <div className="header2intro">
              A non-profit multi-disciplinary tech-community that is managed and run by Singapore tech-enthusiasts.
              We come together in order to bring tech-enthusiasts an opportunity to showcase their talents
              as well as to contribute back to the community.
            </div>
          </div>
        </div>

        <div className="containerMain">
          <div className="flexContainer">
            <h2 className="flexItem-left">
              An extraordinary group of individuals brought together by their tech interest.
            </h2>
            <div className="flexItem-right">
              <div>
                Started out from 2018 as part of a bigger global movement,
                Junction in Helsinki, JunctionX Hanoi has brought a new color
                to hackathon in Vietnam, with the record of biggest number of participants,
                coming from all fields and having English as the main language at the event.
              </div>
              <br/>
              <div>
                After JunctionX Hanoi, JunctionX Singapore has enriched the life of hundreds of people through 
                the hackathons in Singapore. JunctionX Singapore has made a statement and challenged the conventional 
                way of looking at technology. 
              </div>
            </div>
          </div>
          <div className ="flexContainer">
            <h2 className="flexItem-left">
              How did we start?
            </h2>
            <div className="flexItem-right">
              Our first local hackathon in Singapore took place in 2019.
              Through JunctionX Singapore, participants were able to challenge themselves
              in order to solve the intriguing problem statements and come up with creative innovations.
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default OurStory;