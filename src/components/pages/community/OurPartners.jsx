import React, { Component } from "react";
import Footer from "../../global/Footer";

import './../../css/OurPartners.css';

// Company Photos
import RakutenImg from '../../../images/JxSingapore2019/partners_img/Rakuten.png'
import ShopeeImg from '../../../images/JxSingapore2019/partners_img/Shopee.png'
import KasperskyAcademyImg from '../../../images/JxSingapore2019/partners_img/kasperskyNew.png'
import RakutenRapidApiImg from '../../../images/JxSingapore2019/partners_img/RakutenRapidAPI.png'
import RedBullImg from '../../../images/JxSingapore2019/partners_img/Redbull_logo.png'
import StartupXImg from '../../../images/JxSingapore2019/partners_img/startupXNew.png'
import TribeTheoryImg from '../../../images/JxSingapore2019/partners_img/Tribe_logo.png'
import KickstartImg from '../../../images/JxSingapore2019/partners_img/kickstartNew.png'
import ReassembleImg from '../../../images/JxSingapore2019/partners_img/Reassemble.jpeg'
import SalesforceImg from '../../../images/JxSingapore2019/partners_img/Salesforce.png'
import CirclesLifeImg from '../../../images/JxSingapore2019/partners_img/circleslifeNew.png'
import AmbidextrImg from '../../../images/JxSingapore2019/partners_img/ambidextrNew.png'

import { Link } from 'react-router-dom'


class OurPartners extends Component {

  render() {

    return (

        <div className="OurPartners">

          <div className="containerIntro containerIntro-ourPartners">
            <div className="wrapperIntro">
              <h1 className="header1intro">
                Our Partners
              </h1>
              <div className="header2intro">
                JunctionX Singapore is a non-profit volunteer-led hackathon,
                so we are glad to have companies who believe in this hackathon and collaborate with us to make this happen.
              </div>
            </div>
          </div>

          <div className="containerMain">
            <div className="container3">
              <h2 className="container3-title">
                Gold Partners
              </h2>

              <div className="container3-row">
                <img className="partnerLogo" src={ShopeeImg} />
                <div className="container3-textContent">
                  Shopee is a Singaporean e-commerce platform headquartered under the Sea Group, which was founded in 2015. It has since expanded and is now the largest e-commerce platform in SEA and Taiwan.
                </div>
              </div>

              <div className="container3-row">
                <img className="partnerLogo" src={RakutenImg}  />
                <div className="container3-textContent">
                  Rakuten Group is a global company that has an ecosystem of over 70 businesses in Europe, Asia Pacific and America. Founded in 1997, and nowadays sometimes referred to as “the Amazon of Japan”, Rakuten has gained remarkable position in the e-commerce and online retailing industry.
                </div>
              </div>

              <br/>
              <br/>
              <br/>

              <h2 className="container3-title">
                Silver Partners
              </h2>

              <div className="container3-row">
                <img className="partnerLogo" src={KasperskyAcademyImg}  />
                <div className="container3-textContent">
                  Kaspersky Academy is dedicated to support young talents in IT security. Fighting against cybercrime, Kaspersky Academy brings together students, researchers and collaborative environments to discuss cybersecurity issues.
                </div>
              </div>

              <br/>
              <br/>
              <br/>

              <h2 className="container3-title">
                Bronze Partners
              </h2>

              <div className="container3-row">
                <img className="partnerLogo" src={RakutenRapidApiImg}  />
                <div className="container3-textContent">
                  Rakuten RapidAPI is the world’s largest API marketplace with over a million developers and ten thousand APIs. Rakuten RapidAPI platform enables developers to find, connect, and manage their API connections.
                </div>
              </div>

              <div className="container3-row">
                <img className="partnerLogo" src={RedBullImg} />
                <div className="container3-textContent">
                  Giving wings to people and ideas since 1987.
                </div>
              </div>

              <br/>
              <br/>
              <br/>

              <h2 className="container3-title">
                Community Partners
              </h2>

              <div className="container3-row">
                <img className="partnerLogo" src={StartupXImg}  />
                <div className="container3-textContent">
                  StartupX is a team of community builders, innovation catalysts and changemakers supporting the early-stage startup ecosystem in Asia. Since 2014, the StartupX has grown one of the largest startup communities in Singapore.
                </div>
              </div>

              <div className="container3-row">
                <img className="partnerLogo" src={TribeTheoryImg}  />
                <div className="container3-textContent">
                  Tribe Theory is a community-curated and business-friendly global startup hostel chain, designed to serve the needs of traveling startups, digital nomads, creative and entrepreneurial community. Besides comfortable living experience, Tribe Theory Startup Hostel aims to connect like-minded guests and provide support for startups.
                </div>
              </div>

              <div className="container3-row">
                <img className="partnerLogo" src={KickstartImg}  />
                <div className="container3-textContent">
                  Kickstart is building a global community of student founders in Singapore and London, supporting their development from Day 0.
                </div>
              </div>

              <br/>
              <br/>
              <br/>

              <h2 className="container3-title">
                Supporting Partners
              </h2>

              <div className="container3-row">
                <img className="partnerLogo" src={ReassembleImg}  />
                <div className="container3-textContent">
                  Reassemble started in early 2018. With designers, researchers and strategists, Reassemble creates human-centered design for the needs of customers facing the digital revolution.
                </div>
              </div>

              <div className="container3-row">
                <img className="partnerLogo" src={SalesforceImg} />
                <div className="container3-textContent">
                  Salesforce CRM platform brings customers and companies together. With over 150,000 companies and technologies like AI, Salesforce aims to help people create better jobs, lives, companies and communities.
                </div>
              </div>

              <div className="container3-row">
                <img className="partnerLogo" src={CirclesLifeImg}  />
                <div className="container3-textContent">
                  Circles.Life is Asia's first fully digital telco launched in 2016. With its digital products and no-contract, data-focused mobile plans, Circles.Life is changing the digital services industry to more customer-centric and personalised.
                </div>
              </div>

              <br/>
              <br/>
              <br/>

              <h2 className="container3-title">
                Media Partners
              </h2>
              <div className="container3-row">
                <img className="partnerLogo" src={AmbidextrImg}  />
                <div className="container3-textContent">
                  Ambidextr is a full-service content marketing studio serving some of the Asia Pacific’s leading tech companies. With its end-to-end services backed by Future Now Ventures, Ambidextr aims to prepare brands for the new digital economy.
                </div>
              </div>
            </div>
          </div>
        <Footer/>
      </div>
    );
  }
}

export default OurPartners;