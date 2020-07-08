/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import Footer from "../../global/Footer";

import './../../css/ForPartners.css'

// Imported JSX Components
import JxSingapore2019Stats from '../events/JxSingapore2019/JxSingapore2019Stats'

// Company Photos
import RakutenImg from '../../../images/JxSingapore2019/partners_img/Rakuten.png'
import ShopeeImg from '../../../images/JxSingapore2019/partners_img/Shopee.png'
import KasperskyImg from '../../../images/JxSingapore2019/partners_img/kaspersky.png'
import RakutenRapidApiImg from '../../../images/JxSingapore2019/partners_img/RakutenRapidAPI.png'
import RedBullImg from '../../../images/JxSingapore2019/partners_img/Redbull_logo.png'
import StartupX from '../../../images/JxSingapore2019/partners_img/startupx1.jpeg'


class ForPartners extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    return (

      <div className="ForPartners">

        <div className="containerIntro containerIntro-forPartners">
          <div className="wrapperIntro">
            <h1 className="header1intro fade-in-left">
              Unlock the hacker world.
            </h1>
            <div className="header2intro fade-in-right">
              JunctionX provides your company with a unique opportunity to work and interact with thousands of 
              developers, designers and business talents from around the globe.
            </div>
          </div>
        </div>

        <div className="containerMain">
          <div className="flexContainer">
            <h2 className="flexItem-left">
              This is JunctionX Singapore
            </h2>
            <div className="flexItem-right">
              <div>
                JunctionX Singapore is part of the global Junction team which started off in Helsinki, Finland.
                Currently, Junction is a vibrant community of over 15 000 ethusiastic tech talents.
                The JunctionX Singapore team is a volunteer community of tech enthusiasts who work with the 
                industry to craft out a one of a kind hackathons for people in Singapore, as well as the region.
              </div>
              <br/>
              <div>
                In order to offer our participants the most stimulating problems and latest technology, we team up 
                with industry partners to create real-life problem statements that their industry is facing. 
                Our participants get a once-in-a-lifetime opportunity to hack for solutions within a short time frame.
              </div>
              <br/>
              <div>
                We believe that technology is a powerful tool when used right, and everybody should have the 
                possibility to build meaningful things with it: that's why all of our events are centered around 
                learning and creating with technology.
              </div>
            </div>
          </div>
          <div className="flexContainer">
            <h2 className="flexItem-left">
              Let's make it happen together
            </h2>
            <div className="flexItem-right">
              <div>
                We are happy to discuss your company's needs and how this hackathon can generate value for you. 
                Feel free to contact our partnership team.
              </div>
            </div>
          </div>
        </div>

        <div className="containerMain blackBackground">
          <JxSingapore2019Stats />
        </div>

        <div className="containerMain">
          <div className="container3">
            <h2 className="container3-title">
              Why partner with us?
            </h2>

            <div className="container3-row">
              <div className="container3-reasons">
                CREATIVITY
              </div>
              <div className="container3-textContent">
                JunctionX is a premier one-of-a-kind hackathon in the world. This is an extension of the main Junction event in Helsinki, Finland which is arguably the largest in Europe.
                Our participants create projects based on our partners’ challenges and technology: to our partners this means fast prototyping, fresh new concepts and direct interaction with motivated participants.
              </div>
            </div>

            <div className="container3-row">
              <div className="container3-reasons">
                RECRUITING
              </div>
              <div className="container3-textContent">
                Last year, our partners have had the chance to interact with exceptional tech talents for recruitment.
                Hackathons are a great place to get first-hand experience on the teamwork, project management and technical skills of the participants.
                We support this exchange by offering a recruiting platform for being in touch with our hackers.    
              </div>
            </div>

            <div className="container3-row">
              <div className="container3-reasons">
                VISIBILITY
              </div>
              <div className="container3-textContent">
                Gain recognition among top tech talents in Singapore and the region, other creative partner companies and media.
                JunctionX is an exceptional way to personally enhance your image, and build a brand as an attractive employer within a large tech community.
                Partnering with JunctionX steers your public image towards one that is at the bleeding edge of technology.
              </div>
            </div>
          </div>
        </div>

        <div className = "containerMain whiteBackground">
          <h2 className = "centered">
            Partner highlights
          </h2>
          <div className="partnerHighlightsContainer">
            <div className="partnerHighlightsContainer-logoContainer">
              <img className="partnerLogo" src={RakutenImg} alt = "Rakuten"/>
              <img className="partnerLogo" src={ShopeeImg} alt = "Shopee"/>
            </div>
            <div className="partnerHighlightsContainer-logoContainer">
              <img className="partnerLogo" src={KasperskyImg} alt = "Kaspersky"/>
            </div>
            <div className="partnerHighlightsContainer-logoContainer">
              <img className="partnerLogo" src={RakutenRapidApiImg} alt = "RakutenRapidAPI"/>
              <img className="partnerLogo" src={RedBullImg} alt = "RedBull"/>
            </div>
            <div className="partnerHighlightsContainer-logoContainer">
              <img className="partnerLogo" src={StartupX} alt = "StartupX"/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ForPartners;