/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import Footer from "../../global/Footer";

import './OurPartners.css'

// Imported JSX Components
import JxSingapore2019Stats from '../events/JxSingapore2019/JxSingapore2019Stats'

// Company Photos
import RakutenImg from '../../../images/JxSingapore2019/partners_img/Rakuten.png'
import ShopeeImg from '../../../images/JxSingapore2019/partners_img/Shopee.png'
import KasperskyAcademyImg from '../../../images/JxSingapore2019/partners_img/kasperskyNew.png'
import RakutenRapidApiImg from '../../../images/JxSingapore2019/partners_img/RakutenRapidAPI.png'
import RedBullImg from '../../../images/JxSingapore2019/partners_img/Redbull_logo.png'
import StartupXImg from '../../../images/JxSingapore2019/partners_img/startupxNew.png'
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
                <p className="header1intro">Our Partners</p>
                <p className="header2intro">
                  JunctionX Singapore is a non-profit volunteer led hackathon,
                  so we are glad to have companies who believe in this hackathon and collaborate with us to make this happen.
                </p>
              </div>
            </div>

            <div className="wrapper1-ourPartners">
              <div className="partnership-ourPartners">
                <div>Gold Partners</div>
              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>


              <div className="partner-ourPartners">
                <img className="partnerLogo-ourPartners" src={ShopeeImg} />
                <div className="description-ourPartners">
                  <div>
                    Shopee is a Singaporean e-commerce platform headquartered under the Sea Group, which was founded in 2015. It has since expanded and is now the largest e-commerce platform in SEA and Taiwan.
                  </div>
                </div>
              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="partner-ourPartners">
                <img className="partnerLogo-ourPartners" src={RakutenImg}  />
                <div className="description-ourPartners">
                  <div>
                    Rakuten Group is a global company that has an ecosystem of over 70 businesses in Europe, Asia Pacific and America. Founded in 1997, and nowadays sometimes referred to as “the Amazon of Japan”, Rakuten has gained remarkable position in the e-commerce and online retailing industry.
                  </div>
                </div>
              </div>

              <div style={{ 'margin-bottom': 80 + 'px' }}></div>

              <div className="partnership-ourPartners">
                <div>Silver Partners</div>
              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="partner-ourPartners">
                <img className="partnerLogo-ourPartners" src={KasperskyAcademyImg}  />
                <div className="description-ourPartners">
                  <div>
                    Kaspersky Academy is dedicated to support young talents in IT security. Fighting against cybercrime, Kaspersky Academy brings together students, researchers and collaborative environments to discuss cybersecurity issues.
                  </div>
                </div>
              </div>

              <div style={{ 'margin-bottom': 80 + 'px' }}></div>

              <div className="partnership-ourPartners">
                <div>Bronze Partners</div>
              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>


              <div className="partner-ourPartners">
                <img className="partnerLogo-ourPartners" src={RakutenRapidApiImg}  />
                <div className="description-ourPartners">
                  <div>
                    Rakuten RapidAPI is the world’s largest API marketplace with over a million developers and ten thousand APIs. Rakuten RapidAPI platform enables developers to find, connect, and manage their API connections.
                  </div>
                </div>
              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="partner-ourPartners">
                <img className="partnerLogo-ourPartners" src={RedBullImg} />
                <div className="description-ourPartners">
                  <div>
                    Giving wings to people and ideas since 1987.
                  </div>
                </div>
              </div>

              <div style={{ 'margin-bottom': 80 + 'px' }}></div>


              <div className="partnership-ourPartners">
                <div>Community Partners</div>
              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="partner-ourPartners">
                <img className="partnerLogo-ourPartners" src={StartupXImg}  />
                <div className="description-ourPartners">
                  <div>
                    StartupX is a team of community builders, innovation catalysts and changemakers supporting the early-stage startup ecosystem in Asia. Since 2014, the StartupX has grown one of the largest startup communities in Singapore.
                  </div>
                </div>
              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="partner-ourPartners">
                <img className="partnerLogo-ourPartners" src={TribeTheoryImg}  />
                <div className="description-ourPartners">
                  <div>
                    Tribe Theory is a community-curated and business-friendly global startup hostel chain, designed to serve the needs of traveling startups, digital nomads, creative and entrepreneurial community. Besides comfortable living experience, Tribe Theory Startup Hostel aims to connect like-minded guests and provide support for startups.
                  </div>
                </div>
              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="partner-ourPartners">
                <img className="partnerLogo-ourPartners" src={KickstartImg}  />
                <div className="description-ourPartners">
                  <div>
                    Kickstart is building a global community of student founders in Singapore and London, supporting their development from Day 0.
                  </div>
                </div>
              </div>

              <div style={{ 'margin-bottom': 80 + 'px' }}></div>

              <div className="partnership-ourPartners">
                <div>Supporting Partners</div>
              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="partner-ourPartners">
                <img className="partnerLogo-ourPartners" src={ReassembleImg}  />
                <div className="description-ourPartners">
                  <div>
                    Reassemble started in early 2018. With designers, researchers and strategists, Reassemble creates human-centered design for the needs of customers facing the digital revolution.
                  </div>
                </div>
              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="partner-ourPartners">
                <img className="partnerLogo-ourPartners" src={SalesforceImg} />
                <div className="description-ourPartners">
                  <div>
                    Salesforce CRM platform brings customers and companies together. With over 150,000 companies and technologies like AI, Salesforce aims to help people create better jobs, lives, companies and communities.
                  </div>
                </div>
              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="partner-ourPartners">
                <img className="partnerLogo-ourPartners" src={CirclesLifeImg}  />
                <div className="description-ourPartners">
                  <div>
                    Circles.Life is Asia's first fully digital telco launched in 2016. With its digital products and no-contract, data-focused mobile plans, Circles.Life is changing the digital services industry to more customer-centric and personalised.
                  </div>
                </div>
              </div>

              <div style={{ 'margin-bottom': 80 + 'px' }}></div>

              <div className="partnership-ourPartners">
                <div>Media Partners</div>
              </div>

              <div style={{ 'margin-bottom': 60 + 'px' }}></div>

              <div className="partner-ourPartners">
                <img className="partnerLogo-ourPartners" src={AmbidextrImg}  />
                <div className="description-ourPartners">
                  <div>
                    Ambidextr is a full-service content marketing studio serving some of the Asia Pacific’s leading tech companies. With its end-to-end services backed by Future Now Ventures, Ambidextr aims to prepare brands for the new digital economy.
                  </div>
                  <div style={{ 'margin-bottom': 60 + 'px' }}></div>
                </div>
              </div>
            </div>
          <Footer/>
        </div>
    );
  }
}

export default OurPartners;