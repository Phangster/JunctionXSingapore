import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import '../css/Home.css';
import Footer from "../global/Footer";
import Rakuten from '../../images/partners_img/Rakuten.png'
import RakutenRapidAPI from '../../images/partners_img/RakutenRapidAPI.png'
import sample from '../../videos/intro.mp4';
import JunctionLogo from '../../images/junction_img/JunctionX_logos_white.png'
class Home extends Component {
  render() {
    return (
      <div className = "container">
      <div className = "wrapperOne">
        <video className='videoTag' autoPlay loop muted>
          <source src={sample} type='video/mp4' />
        </video>
        <div className = "containerOne">
          <img className = "logoSize" src={JunctionLogo} alt= "JunctionLogo"/>
          <p className = "headerLogo">JUNCTIONX SINGAPORE</p>
          <p>HACK THE FUTURE</p>
          <div className = "textTwo color">27. - 29.09.2019</div>
        </div>
      </div>
      <div className = "wrapperTwo">
          <div className = "containerTwo">
              <div className='textColor'>ABOUT</div>
              <div>
              <div className="textOne">JunctionX Singapore</div>
              <div className="textTwo">JunctionX Singpore gathers developers and designers for 48 hours from around the world to innovate and recreate the future</div>
              <div className="textTwo">Hack the future with us!</div>
              </div>
          </div>
      </div>
      <div className = "wrapperThree">
          <div className = "containerThree">
              <div  className='textColor'>VOLUNTEER</div>
              <div className="textOne">WANT TO BUILD JUNCTIONX SINGAPORE WITH US ?</div>
              <div className="textTwo">Want to innovate and recreate the future of Singapore ?</div>
              <div className="textTwo">Join the Junction family</div>
              <div id="wrapper">
                <NavLink className="my-super-cool-btn" to="#">
                      <div className="dots-container">
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                      </div>
                      <span>APPLY</span>
                </NavLink>
              </div>
          </div>
      </div>
      <div className = "wrapperFour" >
          <div className = "containerFour">
            <div  className='textColor'>PARTNERSHIP OPPORTUNITIES</div>
            <div  className='textOne'>WANT TO PARTNER JUNCTIONX SINGAPORE ?</div>
            <div className="textTwo">Are you seeking a way to showcase your company among young professionals? Look no more! Contact us and we would gladly get back to you with our proposal, tailored to your company’s needs.</div>
          </div>
      </div>
      <div className = "wrapperThree" >
          <div className = "containerThree">
            <div className="textOne">Our Parnters : </div>
            <div className="container-partners">
                <img className="image" src={Rakuten} alt="Rakuten" />
                <img className="image" src={RakutenRapidAPI} alt="Rakuten Rapid API" />
            </div>
          </div>
      </div>
      <Footer />
  </div>
    );
  }
}

export default Home;