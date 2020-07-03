import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './css/track.css';
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
            <div className = "track">
                <h2 className = "centered">TRACKS</h2>
                <div className = "grid-1">
                    <div className = "gridItem-track">
                        <img className= "sponsor" src={Rakuten} alt="Rakuten"/>
                        <div className = "trackImageContainer"><NavLink to='/JunctionXSingapore2019' onClick={this.props.menuToggle}><img className="image1-track" src={ARVR} alt="AR/VR " /></NavLink></div>
                        <p>Augmented Reality and Virtual Reality</p>
                    </div>
                    <div className = "gridItem-track">
                        <img className= "sponsor" src={Shopee} alt="Shopee"/>
                        <div className = "trackImageContainer"><NavLink to='/JunctionXSingapore2019' onClick={this.props.menuToggle}><img className="image1-track" src={Smartcommerce} alt="Smartcommerce" /></NavLink></div>
                        <p>The future of smart Ecommerce</p>
                    </div>
                    <div>
                        <div className = "gridItem-track">
                            <img className= "sponsor" src={Kaspersky} alt="Kaspersky" />
                            <div className = "trackImageContainer"><NavLink to='/JunctionXSingapore2019' onClick={this.props.menuToggle}><img className="image1-track" src={Security} alt="Security" /></NavLink></div>
                            <p>Security in Finance and Mobility</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Track;