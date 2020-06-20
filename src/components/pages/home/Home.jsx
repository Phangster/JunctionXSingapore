import React, { Component } from "react";
import '../../css/Home.scss';
import '../../css/Home.sass';
import Footer from "../../global/Footer";
import sample from '../../../videos/intro.mp4';
import '../../css/Partners.css';


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



  render() {

    console.log(this.state.showModal)

    return (

        <div className="homepage">
          
          <div className="wrapperOne">
            <video className="videoTag-home" autoPlay loop muted>
              <source src={sample} type='video/mp4' />
            </video>
            <div className="containerOne-home">
              <img className="logoSize" src={JunctionLogo} alt="JunctionLogo" />
              <p className="headerLogo1">JUNCTIONX SINGAPORE</p>
              {/* <img src={JunctionAsiaLogo1} className="headerLogoImg" ></img> */}
              <p className="header2Logo">HACK THE FUTURE</p>
              <div style={{ fontSize: 15 + "px" }} className="textTwo color">Empowering the Future with Tech </div>
            </div>
          </div>

          <div className="containerMain">
            <div className="flexContainer">
              <div className="flexItem-left">
                Empowering people to create with technology
              </div>
              <div className="flexItem-right">
                We are a community of tech enthusiasts who work with the industry to craft out a one of a kind hackathons for people in Singapore, as well as the region.
                We bring together developers, designers and other tech-minded people to create new projects and solve intriguing challenges.
              </div>
            </div>
            <div className ="flexContainer">
              <div className="flexItem-left">
                Collaboration with Industry Partners
              </div>
              <div className="flexItem-right">
                In order to offer our participants the most stimulating problems and latest technology, we partner with industry partners to create real-life problem statements that their industry is facing.
                Our partcipants get an once-in-a-life opportunity to hack for solutions within a short time frame.
              </div>
            </div>
          </div>


          <div className="componentContainer">
            <p style={{ fontSize: "1.5rem" }} >HAPPENING NOW:</p>
            <a href="https://asia.hackjunction.com/">
              <img src={JunctionAsia} className="imagelink-home" />
            </a>
          </div>

          <div className="containerMain">
            <JxSingapore2019Stats />
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
                <div className="Silver">
                    <div className="container-box">
                        <img className="image home"  src={KasperskyImg} alt="Kaspersky" />
                    </div>
                </div>
                <div className="Bronze">
                    <div className="container-box">
                        <img className="image home" src={RakutenRapidApiImg} alt="Rakuten Rapid API" />
                        <img className="image home" src={RedBullImg} alt="Allswell" />
                    </div>
                </div>
                <div className="ComPartner">
                    <div className="container-box">
                        <div className="boxing">
                            <img className="image" src={StartupX} alt="StartUpX" />
                        </div>
                    </div>
                </div>
            </div>
          </div>

          <div className="containerMain" >
            <div id="title">Join us!</div>
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