/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
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
          <h1>hello</h1>
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
            <div className="textTwo subconOne">
              <div>Europe's biggest hackathon is coming to SINGAPORE!</div>
              <br></br>
              <div>
                JunctionX Singapore is an event where developers, coders and designers compete in diverse teams to build and present their innovative and revolutionary ideas. Hackers from different backgrounds form teams to work on cutting edge technologies and solve real business problems proposed by companies.
              </div>
              <br></br>
              <div>Hack the future with us!</div>
            </div>
            <div className="subconTwo">
            <iframe src="https://www.youtube.com/embed/c7SoIr0I2Qg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            </div>
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
                <a className="my-super-cool-btn" href="https://docs.google.com/forms/d/e/1FAIpQLSd3gITxuAWChGwa91sEmvDIa5D7Qkeg2iio9ZXYLJNnCAl28Q/viewform">
                      <div className="dots-container">
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                      <div className="dot"></div>
                      </div>
                      <span>APPLY</span>
                </a>
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
            <div className="textOne">Our Partners : </div>
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