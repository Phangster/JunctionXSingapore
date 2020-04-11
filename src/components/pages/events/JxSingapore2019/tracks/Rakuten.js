import React, { Component } from "react";
import "../tracks/track.css";
import Footer from '../../../../global/Footer'
import RakutenImg from "../../../../../images/JxSingapore2019/partners_img/Rakuten.png"

class Rakuten extends Component {
  render() {
    return (
      <div>
        <div className = "containerTrackOne">
          <div className= "track-css">
            <h1>AR/VR</h1>
            <div className="partner_block" >
              <img className="partner_img" src={RakutenImg} alt="Rakuten" />
            </div>
              <h1>The Challenge</h1>
              <p>How can we present new experience/possibility via AR/VR to users?</p>
              <p className="textsmaller">We came to new century that we can use not only 2D image of world, but 3D Ghraphic world. Recently even more with this AR/VR, we can lead users to 3D virtual world experience.</p>
              <h1>WORKSHOP 4 - RAKUTEN RAPIDAPI</h1>
              <p className="textsmaller">"All about APIs" on 28/09 at 11:30pm to 12pm</p>
              <h1>Criteria</h1>
              <p className="textsmaller">1. Using Singapore Government data(https://data.gov.sg/)</p> 
              <p className="textsmaller">2. Using Rakuten RapidAPI</p>
              <p className="textsmaller">3. A prototype that includes AR/VR experience to users</p>
              <h1>Examples</h1>
              <p className="textsmaller"> Ex. Dengue Cluster map showing weather in VR, Bus waiting time via VR </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Rakuten;