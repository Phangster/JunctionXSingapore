import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './tracks/track.css';
import '../../../css/Track.css';
import Footer from '../../../global/Footer'
import Smartcommerce from '../../../../images/JxSingapore2019/track_img/smartcommerce.jpg'
import Security from '../../../../images/JxSingapore2019/track_img/security.jpg'
import ARVR from '../../../../images/JxSingapore2019/track_img/arvr.jpg'
import Rakuten from '../../../../images/JxSingapore2019/partners_img/Rakuten.png'
import Shopee from '../../../../images/JxSingapore2019/partners_img/Shopee.png'
import Kaspersky from '../../../../images/JxSingapore2019/partners_img/kaspersky_white.png'



class Track extends Component {
  render() {
    return (
        <div className = "container"> 
            <div className = "containerTrack">
            <h1>OUR TRACKS</h1>
            <h4 >Real-Life Industry Problem Statements given to Participants</h4>  
                <div className = "wrappertrack">
                    <div className = "grid-container">
                        <div>
                            <img className= "sponsor" src={Rakuten} alt="Rakuten"/>
                            <div className = "grid"><NavLink to='/rakuten' onClick={this.props.menuToggle}><img className="image1" src={ARVR} alt="AR/VR " /></NavLink></div>
                            <p>Augmented Reality and Virtual Reality</p>
                        </div>
                        <div>
                            <img className= "sponsor" src={Shopee} alt="Shopee"/>
                            <div className = "grid"><NavLink to='/shopee' onClick={this.props.menuToggle}><img className="image1" src={Smartcommerce} alt="Smartcommerce" /></NavLink></div>
                            <p>The future of smart Ecommerce</p>
                        </div>
                        <div>
                            <img className= "sponsor" src={Kaspersky} alt="Kaspersky" />
                            <div className = "grid"><NavLink to='/kaspersky' onClick={this.props.menuToggle}><img className="image1 anomynous" src={Security} alt="Security" /></NavLink></div>
                            <p>Security in Finance and Mobility</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
  }
}

export default Track;