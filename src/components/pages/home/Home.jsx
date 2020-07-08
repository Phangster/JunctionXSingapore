import React, { Component } from "react";
import '../../css/Home.css';
import Footer from "../../global/Footer";
import sample from '../../../videos/intro.mp4';

// import Modal from "../global/Modal";
import JunctionLogo from '../../../images/junction_img/JunctionX_logos_white.png'
import JunctionAsia from '../../../images/JxAsia2020/junctionx_asia_white_oneline.png'

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

//animation
import "../../global/css/animate.css";


class Home extends Component {

  constructor(...args) {
    super(...args);
    this.state = { showModal: false };

    this.close = () => {
      this.setState({ showModal: false });
    };

    this.open = () => {
      this.setState({ showModal: true });
    };
  }
  
  componentWillMount() {
    this.open();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    console.log(this.state.showModal)

      return (

        <div className="homepage">
          
          <div className="wrapperIntro-home">
            <video className="videoTag-home" autoPlay loop muted>
              <source src={sample} type='video/mp4'/>
            </video>
            <div className="containerOne-home fade-in-left">
              <img className="introLogo rotate-center" src={JunctionLogo} alt="JunctionLogo" />
              <h2>JUNCTIONX SINGAPORE</h2>
              <h3>HACK THE FUTURE</h3>
              <div>Empowering the future with tech</div>
            </div>
          </div>

          <div className="containerMain">
            <div className="flexContainer">
              <h2 className="flexItem-left">
                Empowering people to create with technology
              </h2>
              <div className="flexItem-right">
                We are a community of tech enthusiasts who work with the industry to craft out a one of a kind hackathons for people in Singapore, as well as the region.
                We bring together developers, designers and other tech-minded people to create new projects and solve intriguing challenges.
              </div>
            </div>
            <div className ="flexContainer">
              <h2 className="flexItem-left">
                Collaboration with industry partners
              </h2>
              <div className="flexItem-right">
                In order to offer our participants the most stimulating problems and latest technology, we partner with industry partners to create real-life problem statements that their industry is facing.
                Our partcipants get an once-in-a-lifetime opportunity to hack for solutions within a short time frame.
              </div>
            </div>
          </div>


          <div className="containerMain blackBackground">
            <h3 className = "centeredTextBox">
              This was us in 2020
              <br/>
              Click below to see more!
            </h3>
            <a href="https://asia.hackjunction.com/">
              <img src={JunctionAsia} className="imagelink-home" />
            </a>
          </div>

          <div className="containerMain">
            <JxSingapore2019Stats />
          </div>

          <div className = "containerMain whiteBackground">
            <h2 className = "centered">
              Partner highlights
            </h2>
            <div className="partnerHighlightsContainer">
              <div className="partnerHighlightsContainer-logoContainer">
                <img className="partnerLogo" src={RakutenImg}/>
                <img className="partnerLogo" src={ShopeeImg}/>
              </div>
              <div className="partnerHighlightsContainer-logoContainer">
                <img className="partnerLogo" src={KasperskyImg}/>
              </div>
              <div className="partnerHighlightsContainer-logoContainer">
                <img className="partnerLogo" src={RakutenRapidApiImg}/>
                <img className="partnerLogo" src={RedBullImg}/>
              </div>
              <div className="partnerHighlightsContainer-logoContainer">
                <img className="partnerLogo" src={StartupX}/>
              </div>
            </div>
          </div>

          <div className="containerMain" >
            <h2 className = "centered">Join us!</h2>
            <div className="flexbox-home">
              <Link to="/forparticipants"><div id="participantButton">Participants</div></Link>
              <Link to="/forpartners"><div id="partnerButton">Partners</div></Link>
              <Link to="/forvolunteers"><div id="volunteerButton">Volunteers</div></Link>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default Home;