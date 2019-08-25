import React, { Component } from "react";
import '../../components/tracks/track.css';
import Footer from '../global/Footer'

class SmartNationHack extends Component {
  render() {
    return (
      <div>
        <div className = "containerTrackOne">
          <div className= "tracks-css">
            <h1>Smart Nation Hack</h1>
            <h2>To be Confirmed . . .</h2>
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

export default SmartNationHack;