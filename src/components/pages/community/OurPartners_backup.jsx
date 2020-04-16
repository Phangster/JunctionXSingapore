/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import Footer from "../../global/Footer";
import OurPartnersCoverImg from '../../../images/junction_img/OurPartnersCoverImg.jpg'

import './OurPartners.css'

// Imported JSX Components
import JxSingapore2019Stats from '../events/JxSingapore2019/JxSingapore2019Stats'
import Partners from '../events/JxSingapore2019/Partners' //to be removed

// Company Photos
import RakutenImg from '../../../images/JxSingapore2019/partners_img/Rakuten.png'
import ShopeeImg from '../../../images/JxSingapore2019/partners_img/Shopee.png'
import KasperskyAcademyImg from '../../../images/JxSingapore2019/partners_img/kaspersky.academy.png'
import RakutenRapidApiImg from '../../../images/JxSingapore2019/partners_img/RakutenRapidAPI.png'
import RedBullImg from '../../../images/JxSingapore2019/partners_img/Redbull_logo.png'
import StartupXImg from '../../../images/JxSingapore2019/partners_img/startupx1.jpeg'
import TribeTheoryImg from '../../../images/JxSingapore2019/partners_img/Tribe_logo.png'
import KickstartImg from '../../../images/JxSingapore2019/partners_img/kickstart.jpg'
import ReassembleImg from '../../../images/JxSingapore2019/partners_img/Reassemble.jpeg'
import SalesforceImg from '../../../images/JxSingapore2019/partners_img/Salesforce.png'
import CirclesLifeImg from '../../../images/JxSingapore2019/partners_img/circles_life.png'
import AmbidextrImg from '../../../images/JxSingapore2019/partners_img/ambidextr.png'


import {Link} from 'react-router-dom'


class OurPartners extends Component {


  render() {

    return (
      <div>

        
    <div className = "container">
        <div className = "wrapper1">
            <img src={OurPartnersCoverImg} className="coverPhotoTag"></img>
          <div className = "coverContainer">
            <p className = "headerLogoCommunity">Our Partners</p>
            <div id="header2LogoCommunity">
                JunctionX Singapore is a non-profit volunteer led hackathon, 
                so we are glad to be have companies who believe in this hackathon and collaborate with us to make this happen.
            </div>
            {/* <div style={{fontSize: 15 +"px"}} className = "textTwo color">
            We organize hackathons, speaker events, coding workshops and other tech events around the year. We have something for every skill set and interest: take on new challenges, explore, and gain new experiences in Junction events!
            </div> */}
          </div>
        </div>


        <div className = "wrapper2 wrapper">
        
        <Partners/>
        </div>

 
        <Footer />
    </div>
 
  </div>
    );
  }
  
}

export default OurPartners;

