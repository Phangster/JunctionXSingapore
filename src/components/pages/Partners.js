import React, { Component } from "react";
import '../css/Partners.css';
import Footer from '../global/Footer'
import Rakuten from '../../images/partners_img/Rakuten.png'
import RakutenRapidAPI from '../../images/partners_img/RakutenRapidAPI.png'
import Redbull from '../../images/partners_img/Redbull_logo.png'
import Sutdec from '../../images/partners_img/ec_logo.png'
import Tribe from '../../images/partners_img/Tribe_logo.png'
import Circles from '../../images/partners_img/circles_life.png'



class Partners extends Component {
  render() {
    return (
        <div> 
            <div className="containment">
            <h1>OUR PARNTERS</h1>
                <div className="CoOrganising">
                <h2>CO-ORGANISING</h2>
                    <img className="image entre_logo home" src={Sutdec} alt="SUTD Entrepreneurship centre" />
                </div>
                <div className="Gold">
                <h2>GOLD</h2>
                    <img className="image home" src={Rakuten} alt="Rakuten" />
                </div>
                <div className="Sliver">
                {/* <h2>SILVER</h2> */}
                </div>
                <div className="Bronze">
                <h2>BRONZE</h2>
                    <img className="image home" src={RakutenRapidAPI} alt="Rakuten Rapid API" />
                    <img className="image home" src={Redbull} alt="Allswell" />
                </div>
                <div className="ComPartner">
                    <h2>COMMUNITY PARTNER</h2>
                    <img className="image home" src={Tribe} alt="Tribe" />
                    <div className="boxing">
                        <img className="image circles" src={Circles} alt="Circles.life" />
                    </div>
                </div>
            </div>
            <Footer /> 
        </div>
    );
  }
}

export default Partners;