import React, { Component } from "react";
import '../css/Track.css';
import Footer from '../global/Footer'
import Smartnation from '../../images/track_img/smart-nation-singapore.jpg'
import Energy from '../../images/track_img/energy-hack.jpg'
import Api from '../../images/track_img/api-prog.jpg'



class Track extends Component {
  render() {
    return (
        <div class = "container"> 
            <div className = "containerTrack">
            <p class = "header"><b>2019 TRACKS</b></p>
                <div class = "grid-container">
                    <div>
                        <div class = "grid"><img src={Smartnation} alt="Smart Nation" /></div>
                        <p>SMART NATION</p>
                    </div>
                    <div>
                        <div class = "grid"><img src={Energy} alt="Energy" /></div>
                        <p>ENERGY HACK</p>
                    </div>
                    <div>
                        <div class = "grid grid-size" ><img src={Api} alt="Api Hack " /></div>
                        <p>API HACK</p>
                    </div>
                </div>
            </div>
            <Footer /> 
        </div>
    );
  }
}

export default Track;