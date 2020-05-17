/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import Footer from "../../global/Footer";
import ForPartnersCoverImg from '../../../images/junction_img/ForPartnersCoverImg.jpg'

import './ForPartners.css'

// Imported JSX Components
import JxSingapore2019Stats from '../events/JxSingapore2019/JxSingapore2019Stats'

// Company Photos
import RakutenImg from '../../../images/JxSingapore2019/partners_img/Rakuten.png'
import ShopeeImg from '../../../images/JxSingapore2019/partners_img/Shopee.png'
import KasperskyImg from '../../../images/JxSingapore2019/partners_img/kaspersky.png'
import RakutenRapidApiImg from '../../../images/JxSingapore2019/partners_img/RakutenRapidAPI.png'
import RedBullImg from '../../../images/JxSingapore2019/partners_img/Redbull_logo.png'
import StartupX from '../../../images/JxSingapore2019/partners_img/startupx1.jpeg'

import { Link } from 'react-router-dom'


class ForPartners extends Component {


  render() {

    return (
      <div>
        <div className="ForPartners">
          <div className="wrapper1 wrapper1-ForPartners">
            {/* <img src={ForPartnersCoverImg} className="coverPhotoTag"></img> */}
            <div className="coverContainer">
              <p className="headerLogoCommunity">Unlock the hacker world.</p>
              <div id="header2LogoCommunity">
                JunctionX provides your company with a unique opportunity to work and interact with thousands of developers,
                designers and business talents from around the globe.
            </div>
              {/* <div style={{fontSize: 15 +"px"}} className = "textTwo color">
            We organize hackathons, speaker events, coding workshops and other tech events around the year. We have something for every skill set and interest: take on new challenges, explore, and gain new experiences in Junction events!
            </div> */}
            </div>
          </div>


          <div className="wrapper2 wrapper">

            {/* <div style={{'margin-bottom': 60+'px'}}></div> */}
            <div className="flexbox1 flexbox">
              <div className="wrapperTwo-flexbox1-left">
                <div>This is JunctionX Singapore</div>
                <br />
                <div id="flexbox1-title-eyebrow" style={{ 'font-size': 20 + 'px', 'font-weight': 400 }} >
                  Hackathon = One weekend, where participants team up and create tech projects to one or several challenges set by our partners. Using our partners’ technology, data and mentoring, the weekend results in prototypes, new concepts and innovative use of tech.
                    </div>
              </div>
              {/* <div style={{width:20+'px'}}></div> */}
              <div className="wrapperTwo-flexbox1-right">
                <div>
                  JunctionX Singapore is part of the global Junction team which started off in Helsinki, Finland.
                  Currently, Junction is a vibrant community of over 15 000 ethusiastic tech talents.
                  The JunctionX Singapore team is a volunteer community of tech enthusiasts who work with the industry to craft out a one of a kind hackathons for people in Singapore, as well as the region.
                </div> <br />
                <div>
                  In order to offer our participants the most stimulating problems and latest technology, we team up with industry partners to create real-life problem statements that their industry is facing. Our participants get a once-in-a-lifetime opportunity to hack for solutions within a short time frame.
                </div> <br />
                <div>
                  We believe that technology is a powerful tool when used right, and everybody should have the possibility to build meaningful things with it: that's why all of our events are centered around learning and creating with technology.
                </div>
              </div>

            </div>



          </div>

          <div className="wrapper3 wrapper">
            {/* <div className = "containerThree">
            asdsa
            </div> */}
            <JxSingapore2019Stats />
          </div>

          <div className="wrapper4 wrapper">
            <div className="flexbox4 flexbox">
              <div className="wrapperTwo-flexbox1-left">Why partner with us?</div>
              {/* <div style={{width:20+'px'}}></div> */}
              <div className="wrapperTwo-flexbox1-right">
              </div>
            </div>


            <div className="flexbox4 flexbox-reason">
              <div className="wrapperTwo-flexbox1-left-reasons">CREATIVITY</div>
              <div className="wrapperTwo-flexbox1-right">
                JunctionX is a premier one-of-a-kind hackathon in the world. This is an extension of the main Junction event in Helsinki, Finland which is arguably the largest in Europe.
                Our participants create projects based on our partners’ challenges and technology: to our partners this means fast prototyping, fresh new concepts and direct interaction with motivated participants.
            </div>
            </div>

            <br />

            <div className="flexbox4 flexbox-reason">
              <div className="wrapperTwo-flexbox1-left-reasons">RECRUITING</div>
              <div className="wrapperTwo-flexbox1-right">
                Last year, our partners have had the chance to interact with exceptional tech talents for recruitment.
                Hackathons are a great place to get first-hand experience on the teamwork, project management and technical skills of the participants.
                We support this exchange by offering a recruiting platform for being in touch with our hackers.
            </div>
            </div>

            <br />

            <div className="flexbox4 flexbox-reason">
              <div className="wrapperTwo-flexbox1-left-reasons">VISIBILITY</div>
              <div className="wrapperTwo-flexbox1-right">
                Gain recognition among top tech talents in Singapore and the region, other creative partner companies and media.
                JunctionX is an exceptional way to personally enhance your image, and build a brand as an attractive employer within a large tech community.
                Partnering with JunctionX steers your public image towards one that is at the bleeding edge of technology.
                </div>
            </div>


          </div>


          <div className="wrapper4 wrapper">
            <div className="containment">
              <h1>OUR PREVIOUS PARTNERS</h1>

              <div className="Gold">
                <div className="container-box">
                  <img className="image home" src={RakutenImg} alt="Rakuten" />
                  <img className="image home" src={ShopeeImg} alt="Rakuten" />
                </div>
              </div>
              <div className="Sliver">
                <div className="container-box">
                  <img className="image home" style={{ width: "23rem" }} src={KasperskyImg} alt="Kaspersky" />
                </div>
              </div>
              <div className="Bronze">
                <div className="container-box">
                  <img className="image home" src={RakutenRapidApiImg} alt="Rakuten Rapid API" />
                  <img className="image home" src={RedBullImg} alt="Allswell" />
                </div>
              </div>
              <div className="ComPartner">
                <h2>COMMUNITY PARTNER</h2>
                <div className="container-box">
                  <div className="boxing">
                    <img className="image" src={StartupX} alt="StartUpX" />
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div className="wrapper4 wrapper">
            <div className="flexbox4 flexbox">
              <div className="wrapperTwo-flexbox1-left">Let's discuss how we can make it happen</div>
              {/* <div style={{width:20+'px'}}></div> */}
              <div className="wrapperTwo-flexbox1-right-reasons">
                <div className="wrapperTwo-flexbox1-right">
                  We are happy to discuss your company's needs and how this hackathon can generate value for you.
                  Feel free to contact our partnership team
                </div>

              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default ForPartners;