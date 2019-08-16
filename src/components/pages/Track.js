import React, { Component } from "react";
import '../css/Track.css';
import Footer from '../global/Footer'
import Smartnation from '../../images/track_img/smart-nation-singapore.jpg'
import Anonymous from '../../images/track_img/anonymous.jpg'
import Api from '../../images/track_img/api-prog.jpg'

class Track extends Component {
  render() {
    return (
        <div className = "container"> 
            <div className = "containerTrack">
            <h1>2019 TRACKS</h1>
                <div className = "grid-container">
                    <div>
                        <div className = "grid grid-size" ><img className="image1" src={Api} alt="Api Hack " /></div>
                        <p>API HACK</p>
                    </div>
                    <div>
                        <div className = "grid"><img className="image1" src={Smartnation} alt="Smart Nation" /></div>
                        <p>SMART NATION</p>
                    </div>
                    <div>
                        <div className = "grid"><img className="image1 anomynous" src={Anonymous} alt="Anonymous" /></div>
                        <p>MYSTERY HACK</p>
                    </div>
                </div>
            </div>
            <Footer /> 
        </div>
    );
  }
}

export default Track;