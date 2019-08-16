/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import '../css/Home.scss';
import '../css/Home.sass';
import Footer from "../global/Footer";
import Rakuten from '../../images/partners_img/Rakuten.png'
import RakutenRapidAPI from '../../images/partners_img/RakutenRapidAPI.png'
// import Intel from '../../images/partners_img/intel_logo.png'
import Redbull from '../../images/partners_img/Redbull_logo.png'
import Sutdec from '../../images/partners_img/ec_logo.jpg'
import sample from '../../videos/intro.mp4';
import JunctionLogo from '../../images/junction_img/JunctionX_logos_white.png'
import JunctionL from '../../images/junction_img/junctionx_globe_black.svg'
import JunctionR from '../../images/junction_img/junctionx_globe_white.svg'



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
              <iframe src="https://www.youtube.com/embed/c7SoIr0I2Qg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className = "wrapperThree">
          <div className = "containerThree">
              <div  className='textColor'>LOCATION</div>
              <div className="textOne">See you at <span className = "locationText">Rakuten Asia Pte Ltd!</span></div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819926160307!2d103.84793611550867!3d1.281802599065105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190c2b3223d1%3A0x922bbd5aba9592c2!2sRakuten+Asia+Pte+Ltd!5e0!3m2!1sen!2ssg!4v1562581464126!5m2!1sen!2ssg" frameBorder="0" allowFullScreen></iframe>
          </div>
      </div>
      <div className = "wrapperFour" style = {{padding: '4rem'}} >
          <div className = "containerFour">
          <div  className='textColor'>ROADMAP</div>
          <ul class="timeline" id="timeline">
            <li class="li complete">
              <div class="timestamp">
                <span class="date">1st AUGUST </span>
              </div>
              <div class="status">
                <h4> APPLICATION OPENS</h4>
              </div>
            </li>
            <li class="li">
              <div class="timestamp">
                <span class="date">9 SEPTEMBER</span>
              </div>
              <div class="status">
                <h4> APPLICATION CLOSES </h4>
              </div>
            </li>
            <li class="li">
              <div class="timestamp">
                <span class="date">11 SEPTEMBER</span>
              </div>
              <div class="status">
                <h4> PARTICIPANTS CONFIRMATION</h4>
              </div>
            </li>
            <li class="li">
              <div class="timestamp">
                <span class="date">26 SEPTEMBER</span>
              </div>
              <div class="status">
                <h4> RELEASE OF QUESTIONS </h4>
              </div>
            </li>
            <li class="li">
              <div class="timestamp">
                <span class="date">27 SEPTEMBER</span>
              </div>
              <div class="status">
                <h4> HACKATHON DAY </h4>
              </div>
            </li>
          </ul>     
          </div>
      </div>
      <div className = "wrapperThree" >
          <div className = "containerThree centerClass">
          <div className='textColor'>COMMUNITY</div>
            <div className="partnershipSection">
              <img className = "logoSize big" src={JunctionL} alt= "JunctionLogo"/>
              <div className='textOne'>PARTNERSHIP</div>
              <div className="textTwo">Seeking a way to showcase your company among graduating students and developers? Contact us and we would get back to you with our proposal.</div>
              <a href="mailto:bryan.david@hackjunction.com?subject=Partnership with JunctionX Singapore">
                <button class="btn btn--cyan">Contact Us!</button>
              </a>
            </div>
            <div className="volunteerSection">
              <img className = "logoSize big" src={JunctionR} alt= "JunctionLogo"/>
              <div className='textOne'>VOLUNTEER</div>
              <div className="textTwo">Want to join us in creating a global community of hackers? Drop us a message! Join us and let’s make JunctionX Singapore an event to rememeber!</div>
              <div id="wrapper">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3gITxuAWChGwa91sEmvDIa5D7Qkeg2iio9ZXYLJNnCAl28Q/viewform">
                <button class="btn btn--cyan">Apply Here!</button>
              </a>
              </div>
          </div>
          </div>
      </div>
      <div className = "wrapperFour" >
          <div className = "containerFour">
          <div className="textColor">PARTNERS</div>
              <img className="image home" src={Rakuten} alt="Rakuten" />
              <img className="image home" src={RakutenRapidAPI} alt="Rakuten Rapid API" />
              {/* <img className="image" src={Intel} alt="Intel" /> */}
              <img className="image home" src={Redbull} alt="Allswell" />
              <img className="image entre_logo home" src={Sutdec} alt="SUTD Entrepreneurship centre" />
          </div>
      </div>
      <div className = "wrapperThree" >
          <div className = "containerThree">
          <div className="textColor">FAQ</div>
            <div className = "subconThree">
              <div class="accordion vertical">
              <ul>
                  <li>
                      <input type="checkbox" id="checkbox-1" name="checkbox-accordion" />
                      <label for="checkbox-1">What is a hackathon?</label>
                      <div class="content">
                        <div className="text textThree" >A hackathon is an event in which small teams (2-5 pers) of developers, designers, entrepreneurs and other specialists collaborate intensively on software projects aimed at solving particular problems. Within 48 hours, teams should come up with a working prototype and a presentation.</div>
                      </div>
                  </li>
                  <li>
                      <input type="checkbox" id="checkbox-2" name="checkbox-accordion" />
                      <label for="checkbox-2">Does it cost to attend?</label>
                      <div class="content">
                        <div className="text textThree" >Of course not. It's completely FREE to attend and includes food, drinks, Wifi, a condusive place to hack!</div>
                      </div>
                  </li>
                  <li>
                      <input type="checkbox" id="checkbox-3" name="checkbox-accordion" />
                      <label for="checkbox-3">Who owns the intellectual property of hacks?</label>
                      <div class="content">
                        <div className="text textThree" >All intellectual property produced at the event is owned solely by the participants and their team. Further plans may be discussed between the partners and the teams after the event.</div>
                      </div>
                  </li>
                  <li>
                      <input type="checkbox" id="checkbox-4" name="checkbox-accordion" />
                      <label for="checkbox-4">What size can a team be?</label>
                      <div class="content">
                        <div className="text textThree" >Teams can be up to 5 people. If you want to hack alone, that's totally fine. If you are still looking for a team, don't worry, we will have team building and pitching sessions at the event.</div>
                      </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className = "subconThree">
              <div class="accordion vertical">
              <ul>
                  <li>
                      <input type="checkbox" id="checkbox-5" name="checkbox-accordion" />
                      <label for="checkbox-5">Who should come to this hackathon?</label>
                      <div class="content">
                        <div className="text textThree" >Everybody is welcome to join JunctionX Singapore! You can either be a developer, designer, a business person or a professional of any other field. What really matters is how you combine your different skill sets within your team. Our advice is to have a diverse team with at least one developer and network with others.</div>
                      </div>
                  </li>
                  <li>
                      <input type="checkbox" id="checkbox-6" name="checkbox-accordion" />
                      <label for="checkbox-6">When and where can I apply?</label>
                      <div class="content">
                        <div className="text textThree" >Application period for both participants and volunteers starts on 1st Aug 2019. Application period closes at 9 th Sep 2019. You can apply at our website https://singapore.hackjunction.com/register ! </div>
                      </div>
                  </li>
                  <li>
                      <input type="checkbox" id="checkbox-7" name="checkbox-accordion" />
                      <label for="checkbox-7">I want to participate, but don't have a team yet?</label>
                      <div class="content">
                        <div className="text textThree" >If you’re missing a few members to complete your dream-team, our advice is to leave a post on the event page (which will be made in the near future - we will let you know when it's ready!), detailing who/what you’re looking for and/or what you could potentially provide to a team. We’re sure you can assemble a team this way in no time.</div>
                      </div>
                  </li>
                  <li>
                      <input type="checkbox" id="checkbox-8" name="checkbox-accordion" />
                      <label for="checkbox-8">Where can I ask more questions?</label>
                      <div class="content">
                        <div className="text textThree" >We are happy to help out with any questions! Please send an email, or message to @JunctionX Singapore (Facebook) / @junctionx_singapore (Instagram).</div>
                      </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </div>
      <Footer />
  </div>
    );
  }
}

export default Home;