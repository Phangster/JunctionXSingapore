import React, { Component } from "react";
import './css/Partners.css';

//Import Partner Logo
import Rakuten from '../../../../images/JxSingapore2019/partners_img/Rakuten.png'
import RakutenRapidAPI from '../../../../images/JxSingapore2019/partners_img/RakutenRapidAPI.png'
import Redbull from '../../../../images/JxSingapore2019/partners_img/Redbull_logo.png'
import Sutdec from '../../../../images/JxSingapore2019/partners_img/ec_logo.png'
import Tribe from '../../../../images/JxSingapore2019/partners_img/Tribe_logo.png'
import Circles from '../../../../images/JxSingapore2019/partners_img/circles_life.png'
import StartupX from '../../../../images/JxSingapore2019/partners_img/startupx1.jpeg'
import Kickstart from '../../../../images/JxSingapore2019/partners_img/kickstart.jpg'
import Shopee from '../../../../images/JxSingapore2019/partners_img/Shopee.png'
import Reassemble from '../../../../images/JxSingapore2019/partners_img/Reassemble.jpeg'
import Salesforce from '../../../../images/JxSingapore2019/partners_img/Salesforce.png'
import Kaspersky from '../../../../images/JxSingapore2019/partners_img/kaspersky.academy.png'
import Ambidextr from '../../../../images/JxSingapore2019/partners_img/ambidextr.png'



class Partners extends Component {
  render() {
    return (
        <div> 
            <div className="containment">
            <h1>OUR PARTNERS</h1>
                <div className="CoOrganising">
                <h2>CO-ORGANISING</h2>
                    <div className="container-box">
                        <img className="image entre_logo home" src={Sutdec} alt="SUTD Entrepreneurship centre" />
                    </div>
                </div>
                <div className="Gold">
                <h2>GOLD</h2>
                    <div className="container-box">
                        <img className="image home" src={Rakuten} alt="Rakuten" />
                        <img className="image home" src={Shopee} alt="Rakuten" />
                    </div>
                </div>
                <div className="Sliver">
                <h2>SILVER</h2>
                    <div className="container-box">
                        <img className="image home" style={{width:"23rem"}} src={Kaspersky} alt="Kaspersky" />
                    </div>
                </div>
                <div className="Bronze">
                <h2>BRONZE</h2>
                    <div className="container-box">
                        <img className="image home" src={RakutenRapidAPI} alt="Rakuten Rapid API" />
                        <img className="image home" src={Redbull} alt="Allswell" />
                    </div>
                </div>
                <div className="ComPartner">
                    <h2>COMMUNITY PARTNER</h2>
                    <div className="container-box">
                        <img className="image home" src={Tribe} alt="Tribe" />
                        <div className="boxing">
                            <img className="image" src={StartupX} alt="StartUpX" />
                        </div>
                        <div className="boxing">
                            <img className="image" src={Kickstart} alt="KickStart" />
                        </div>
                    </div>
                </div>
                <div className="Supporter">
                    <h2>SUPPORTING PARTNER</h2>
                    <div className="container-box">
                        <img className="image home" src={Reassemble} alt="Reassemble" />
                        <div className="boxing">
                            <img className="image home" src={Salesforce} alt="Salesforce" />
                        </div>
                        <div className="boxing">
                            <img className="image circles" src={Circles} alt="Circles.life" />
                        </div>
                    </div>
                </div>
                <div className="Media">
                    <h2>MEDIA PARTNER</h2>
                    <div className="container-box">
                        <div className="boxing">
                            <img className="image" src={Ambidextr} alt="Circles.life" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Partners;