import React, { Component } from "react";
import '../../components/tracks/track.css';
import Footer from '../global/Footer'

class MysteryHack extends Component {
  render() {
    return (
      <div>
        <div className = "containerTrackOne">
          <div className= "tracks-css">
            <h1>Security in Finance and Mobility</h1>
            <h2>More information will be released on the competition day itself. .  .</h2>
            {/* <h2>The Challenge</h2>
            <div className="grid-track">
              <h2>What we will bring</h2>
              <p></p>
              <h2>Problem of interest</h2>
              <p></p>
              <h2>Judging Critera</h2>
              <p></p>
              <h2>Prize</h2>
              <p></p>
              <h2>About the company</h2>
              <p></p>
            </div> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default MysteryHack;