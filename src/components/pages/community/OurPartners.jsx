/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import Footer from "../../global/Footer";

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


import { Link } from 'react-router-dom'


class OurPartners extends Component {


  render() {

    return (
      <div>


        <div className="OurPartners">
          <div>
            <div className="containerIntro" id="containerIntro-ourpartners">
              <div className="wrapper1-ourpartners">
                <p className="headerLogoCommunity">Our Partners</p>
                <div id="header2LogoCommunity">
                  JunctionX Singapore is a non-profit volunteer led hackathon,
                  so we are glad to be have companies who believe in this hackathon and collaborate with us to make this happen.
            </div>
                {/* <div style={{fontSize: 15 +"px"}} className = "textTwo color">
            We organize hackathons, speaker events, coding workshops and other tech events around the year. We have something for every skill set and interest: take on new challenges, explore, and gain new experiences in Junction events!
            </div> */}
              </div>
            </div>



            <div className="wrapper2 wrapper">
              {/*______________________________________________________________ */}

              {/* <div style={{'margin-bottom': 60+'px'}}></div> */}
              <div className="flexbox1 flexbox">
                <div className="wrapperTwo-flexbox1-left">
                  <div>Gold Partners</div>
                </div>
                {/* <div style={{width:20+'px'}}></div> */}
                <div className="wrapperTwo-flexbox1-right">

                  <div></div>

                </div>

              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>


              <div className="flexbox1 flexbox-ourpartners">
                <div className="wrapperTwo-flexbox1-left">
                  <img className="ourpartners-img" src={ShopeeImg} style={{ height: 150 + 'px' }} />
                </div>
                {/* <div style={{width:20+'px'}}></div> */}
                <div className="wrapperTwo-flexbox1-right">
                  <div>
                    Shopee is a Singaporean e-commerce platform headquartered under the Sea Group, which was founded in 2015. It has since expanded and is now the largest e-commerce platform in SEA and Taiwan.

                </div>
                </div>

              </div>
              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="flexbox1 flexbox-ourpartners">
                <div className="wrapperTwo-flexbox1-left">
                  <img className="ourpartners-img" src={RakutenImg} style={{ height: 150 + 'px' }} />
                </div>
                {/* <div style={{width:20+'px'}}></div> */}
                <div className="wrapperTwo-flexbox1-right">
                  <div>
                    Rakuten Group is a global company that has an ecosystem of over 70 businesses in Europe, Asia Pacific and America. Founded in 1997, and nowadays sometimes referred to as “the Amazon of Japan”, Rakuten has gained remarkable position in the e-commerce and online retailing industry.
                </div>
                </div>

              </div>
              {/*______________________________________________________________ */}


              {/*______________________________________________________________ */}

              <div style={{ 'margin-bottom': 80 + 'px' }}></div>
              <div className="flexbox1 flexbox">
                <div className="wrapperTwo-flexbox1-left">
                  <div>Silver Partners</div>
                </div>
                {/* <div style={{width:20+'px'}}></div> */}
                <div className="wrapperTwo-flexbox1-right">

                  <div></div>

                </div>

              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>


              <div className="flexbox1 flexbox-ourpartners">
                <div className="wrapperTwo-flexbox1-left">
                  <img className="ourpartners-img" src={KasperskyAcademyImg} style={{ height: 150 + 'px' }} />
                </div>
                {/* <div style={{width:20+'px'}}></div> */}
                <div className="wrapperTwo-flexbox1-right">
                  <div>
                    Kaspersky Academy is dedicated to support young talents in IT security. Fighting against cybercrime, Kaspersky Academy brings together students, researchers and collaborative environments to discuss cybersecurity issues.
                </div>
                </div>



              </div>
              {/*______________________________________________________________ */}

              {/*______________________________________________________________ */}

              <div style={{ 'margin-bottom': 80 + 'px' }}></div>
              <div className="flexbox1 flexbox">
                <div className="wrapperTwo-flexbox1-left">
                  <div>Bronze Partners</div>
                </div>
                {/* <div style={{width:20+'px'}}></div> */}
                <div className="wrapperTwo-flexbox1-right">

                  <div></div>

                </div>

              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>


              <div className="flexbox1 flexbox-ourpartners">
                <div className="wrapperTwo-flexbox1-left">
                  <img className="ourpartners-img" src={RakutenRapidApiImg} style={{ height: 150 + 'px' }} />
                </div>
                {/* <div style={{width:20+'px'}}></div> */}
                <div className="wrapperTwo-flexbox1-right">
                  <div>
                    Rakuten RapidAPI is the world’s largest API marketplace with over a million developers and ten thousand APIs. Rakuten RapidAPI platform enables developers to find, connect, and manage their API connections.

                </div>
                </div>


              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="flexbox1 flexbox-ourpartners">
                <div className="wrapperTwo-flexbox1-left">
                  <img id="ourpartners-img" src={RedBullImg} style={{ height: 150 + 'px' }} />
                </div>
                {/* <div style={{width:20+'px'}}></div> */}
                <div className="wrapperTwo-flexbox1-right">
                  <div>
                    Giving wings to people and ideas since 1987.
                </div>
                </div>


              </div>
              {/*______________________________________________________________ */}

              {/*______________________________________________________________ */}

              <div style={{ 'margin-bottom': 80 + 'px' }}></div>
              <div className="flexbox1 flexbox">
                <div className="wrapperTwo-flexbox1-left">
                  <div>Community Partners</div>
                </div>
                {/* <div style={{width:20+'px'}}></div> */}
                <div className="wrapperTwo-flexbox1-right">

                  <div></div>

                </div>

              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>


              <div className="flexbox1 flexbox-ourpartners">
                <div className="wrapperTwo-flexbox1-left">
                  <img className="ourpartners-img" src={StartupXImg} style={{ height: 150 + 'px' }} />
                </div>
                {/* <div style={{width:20+'px'}}></div> */}
                <div className="wrapperTwo-flexbox1-right">
                  <div>
                    StartupX is a team of community builders, innovation catalysts and changemakers supporting the early-stage startup ecosystem in Asia. Since 2014, the StartupX has grown one of the largest startup communities in Singapore.
                </div>
                </div>


              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="flexbox1 flexbox-ourpartners">
                <div className="wrapperTwo-flexbox1-left">
                  <img id="ourpartners-img" src={TribeTheoryImg} style={{ height: 150 + 'px' }} />
                </div>
                {/* <div style={{width:20+'px'}}></div> */}
                <div className="wrapperTwo-flexbox1-right">
                  <div>
                    Tribe Theory is a community-curated and business-friendly global startup hostel chain, designed to serve the needs of traveling startups, digital nomads, creative and entrepreneurial community. Besides comfortable living experience, Tribe Theory Startup Hostel aims to connect like-minded guests and provide support for startups.
                </div>
                </div>


              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="flexbox1 flexbox-ourpartners">
                <div className="wrapperTwo-flexbox1-left">
                  <img id="ourpartners-img" src={KickstartImg} style={{ height: 150 + 'px' }} />
                </div>
                {/* <div style={{width:20+'px'}}></div> */}
                <div className="wrapperTwo-flexbox1-right">
                  <div>
                    Since 2009, Kickstarter has been bringing creative projects to life by connecting creators and community of people to fund the ideas. Since the launch, 18 million people have backed a project, $4,9 billion has been pledged, and 180,767 projects have been successfully funded.
                </div>
                </div>


              </div>
              {/*______________________________________________________________ */}

              {/*______________________________________________________________ */}

              <div style={{ 'margin-bottom': 80 + 'px' }}></div>
              <div className="flexbox1 flexbox">
                <div className="wrapperTwo-flexbox1-left">
                  <div>Supporting Partners</div>
                </div>
                {/* <div style={{width:20+'px'}}></div> */}
                <div className="wrapperTwo-flexbox1-right">

                  <div></div>

                </div>

              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>


              <div className="flexbox1 flexbox-ourpartners">
                <div className="wrapperTwo-flexbox1-left">
                  <img className="ourpartners-img" src={ReassembleImg} style={{ height: 150 + 'px' }} />
                </div>
                {/* <div style={{width:20+'px'}}></div> */}
                <div className="wrapperTwo-flexbox1-right">
                  <div>
                    Reassemble started in early 2018. With designers, researchers and strategists, Reassemble creates human-centered design for the needs of customers facing the digital revolution.
                </div>
                </div>


              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="flexbox1 flexbox-ourpartners">
                <div className="wrapperTwo-flexbox1-left">
                  <img id="ourpartners-img" src={SalesforceImg} style={{ height: 150 + 'px' }} />
                </div>
                {/* <div style={{width:20+'px'}}></div> */}
                <div className="wrapperTwo-flexbox1-right">
                  <div>
                    Salesforce CRM platform brings customers and companies together. With over 150,000 companies and technologies like AI, Salesforce aims to help people create better jobs, lives, companies and communities.
                </div>
                </div>


              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="flexbox1 flexbox-ourpartners">
                <div className="wrapperTwo-flexbox1-left">
                  <img id="ourpartners-img" src={CirclesLifeImg} style={{ height: 150 + 'px' }} />
                </div>
                {/* <div style={{width:20+'px'}}></div> */}
                <div className="wrapperTwo-flexbox1-right">
                  <div>
                    Circles.Life is Asia's first fully digital telco launched in 2016. With its digital products and no-contract, data-focused mobile plans, Circles.Life is changing the digital services industry to more customer-centric and personalised.
                </div>
                </div>


              </div>
              {/*______________________________________________________________ */}

              {/*______________________________________________________________ */}

              <div style={{ 'margin-bottom': 80 + 'px' }}></div>
              <div className="flexbox1 flexbox">
                <div className="wrapperTwo-flexbox1-left">
                  <div>Community Partners</div>
                </div>
                {/* <div style={{width:20+'px'}}></div> */}
                <div className="wrapperTwo-flexbox1-right">

                  <div></div>

                </div>

              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>


              <div className="flexbox1 flexbox-ourpartners">
                <div className="wrapperTwo-flexbox1-left">
                  <img className="ourpartners-img" src={AmbidextrImg} style={{ height: 150 + 'px' }} />
                </div>
                {/* <div style={{width:20+'px'}}></div> */}
                <div className="wrapperTwo-flexbox1-right">
                  <div>
                    Ambidextr is a full-service content marketing studio serving some of the Asia Pacific’s leading tech companies. With its end-to-end services backed by Future Now Ventures, Ambidextr aims to prepare brands for the new digital economy.
                </div>
                </div>




              </div>
              {/*______________________________________________________________ */}



            </div>

            <div className="wrapper3 wrapper">
              {/* <div className = "containerThree">
            asdsa
            </div> */}

            </div>




          </div>

          <Footer />
        </div>

      </div>
    );
  }

}

export default OurPartners;

