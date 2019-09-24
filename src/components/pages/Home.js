/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import '../css/Home.scss';
import '../css/Home.sass';
import Footer from "../global/Footer";
import sample from '../../videos/intro.mp4';
// import Modal from "../global/Modal";
import JunctionLogo from '../../images/junction_img/JunctionX_logos_white.png'
import JunctionL from '../../images/junction_img/junctionx_globe_black.svg'
import JunctionR from '../../images/junction_img/junctionx_globe_white.svg'
import Mark from '../../images/mentor_img/mark_lven_palejaro.JPG'
import Jackie from '../../images/mentor_img/jackie.JPG'
import Shoaib from '../../images/mentor_img/shoaib_ahmed_malik.png'
import Marie from '../../images/mentor_img/marie_wong.jpeg'
import Eric from '../../images/mentor_img/eric_chang.jpg'
import Weihan from '../../images/mentor_img/weihan.jpg'






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

  componentWillMount(){
    this.open();
  }

  render() {
    console.log(this.state.showModal)
    return (
      <div>
        {/* <div className="modal-position">
          { this.state.showModal ? <div onClick={this.close}></div> : null }
          <Modal 
            className="modal"
            show={this.state.showModal}
            close={this.close}>
              Maybe aircrafts fly very high because they don't want to be seen in plane sight?
          </Modal>
        </div> */}
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
                <iframe src="https://www.youtube.com/embed/c7SoIr0I2Qg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
        <div className = "wrapperFour">
            <div className = "containerFour">
              <div className='textColor'>MENTORS</div>
              <p style={{fontSize:"30px"}}>MENTORS</p>
                <div className="listOfMentors">
                  <div className="mentor">
                    <img className="avatarMentor" style={{objectPosition: "100% 0"}} src={Weihan} alt="Goh Wei Han" />
                    <p>Goh Wei Han</p>
                    <p className="position">Kaspersky-certified Malware Reverse Engineering and Analysis trainer & AP of Singapore Institute of Technology in Information Security and Software Engineering</p>
                  </div>
                  <div className="mentor">
                    <img className="avatarMentor" src={Mark} alt="Mark Lven Tupa Palejaro" />
                    <p>Mark Lven Tupa Palejaro</p>
                    <p className="position">Co-founder of Pocket Hologram</p>
                  </div>
                  <div className="mentor">
                    <img className="avatarMentor" style={{objectPosition: "100% 0"}} src={Jackie} alt="Jackie Tan" />
                    <p>Jackie Tan</p>
                    <p className="position">Co-founder of UpLevel</p>
                  </div>
                </div>
                <div className="listOfMentors">
                  <div className="mentor">
                    <img className="avatarMentor" style={{objectPosition: "100% 0"}} src={Shoaib} alt="Shoaib Ahmed Malik" />
                    <p>Shoaib Ahmed Malik</p>
                    <p className="position">Team Lead of Business Intelligence & Data Warehouse Development </p>
                  </div>
                </div>
                <p style={{fontSize:"30px"}}>WORKSHOP</p>
                <div className="listOfMentors">
                  <div className="mentor">
                    <img className="avatarMentor"  style={{objectPosition: "100% 0"}} src={Marie} alt="Marie Wong" />
                    <p>Marie Wong</p>
                    <p className="position">Co-Founder & UX Designer at REASSEMBLE</p>
                  </div>
                  <div className="mentor">
                    <img className="avatarMentor" style={{objectPosition: "100% 0"}} src={Eric} alt="Eric Chang" />
                    <p>Eric Chang</p>
                    <p className="position">Lead Solutions Architect, Trusted Data Division, NDI</p>
                  </div>
                </div>
            </div>
        </div>
        <div className = "wrapperThree" >
            <div className = "containerThree">
            <div  className='textColor'>ROADMAP</div>
            <ul className="timeline" id="timeline">
              <li className="li complete">
                <div className="timestamp">
                  <span className="date">1st AUGUST </span>
                </div>
                <div className="status">
                  <h4> APPLICATION OPENS</h4>
                </div>
              </li>
              <li className="li complete">
                <div className="timestamp">
                  <span className="date">9 SEPTEMBER</span>
                </div>
                <div className="status">
                  <h4> APPLICATION CLOSES </h4>
                </div>
              </li>
              <li className="li complete">
                <div className="timestamp">
                  <span className="date">11 SEPTEMBER</span>
                </div>
                <div className="status">
                  <h4> PARTICIPANTS CONFIRMATION</h4>
                </div>
              </li>
              <li className="li">
                <div className="timestamp">
                  <span className="date">26 SEPTEMBER</span>
                </div>
                <div className="status">
                  <h4> RELEASE OF QUESTIONS </h4>
                </div>
              </li>
              <li className="li">
                <div className="timestamp">
                  <span className="date">27 SEPTEMBER</span>
                </div>
                <div className="status">
                  <h4> HACKATHON DAY </h4>
                </div>
              </li>
            </ul>     
            </div>
        </div>
        <div className = "wrapperFour" >
            <div className = "containerFour centerClass">
            <div className='textColor'>COMMUNITY</div>
              <div className="partnershipSection">
                <img className = "logoSize big" src={JunctionL} alt= "JunctionLogo"/>
                <div className='textOne'>PARTNERSHIP</div>
                <div className="textTwo">Seeking a way to showcase your company among graduating students and developers? Contact us and we would get back to you with our proposal.</div>
                <a href="mailto:bryan.david@hackjunction.com?subject=Partnership with JunctionX Singapore">
                  <button className="btn btn--cyan">Contact Us!</button>
                </a>
              </div>
              <div className="volunteerSection">
                <img className = "logoSize big" src={JunctionR} alt= "JunctionLogo"/>
                <div className='textOne'>VOLUNTEER</div>
                <div className="textTwo">Want to join us in creating a global community of hackers? Drop us a message! Join us and let’s make JunctionX Singapore an event to rememeber!</div>
                <div id="wrapper">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3gITxuAWChGwa91sEmvDIa5D7Qkeg2iio9ZXYLJNnCAl28Q/viewform">
                  <button className="btn btn--cyan">Apply Here!</button>
                </a>
                </div>
            </div>
            </div>
        </div>
        <div className = "wrapperThree" >
            <div className = "containerThree">
            <div className="textColor">FAQ</div>
              <div className = "subconThree">
                <div className="accordion vertical">
                <ul>
                    <li>
                        <input type="checkbox" id="checkbox-1" name="checkbox-accordion" />
                        <label htmlFor="checkbox-1">What is a hackathon?</label>
                        <div className="content">
                          <div className="text textThree" >A hackathon is an event in which small teams (2-5 person) of developers, designers, entrepreneurs and other specialists collaborate intensively on software projects aimed at solving particular problems. Within 48 hours, teams should come up with a working prototype and a presentation.</div>
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" id="checkbox-2" name="checkbox-accordion" />
                        <label htmlFor="checkbox-2">Does it cost to attend?</label>
                        <div className="content">
                          <div className="text textThree" >Of course not. It's completely FREE to attend and includes food, drinks, Wifi, a condusive place to hack!</div>
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" id="checkbox-3" name="checkbox-accordion" />
                        <label htmlFor="checkbox-3">Who owns the intellectual property of hacks?</label>
                        <div className="content">
                          <div className="text textThree" >All intellectual property produced at the event is owned solely by the participants and their team. Further plans may be discussed between the partners and the teams after the event.</div>
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" id="checkbox-4" name="checkbox-accordion" />
                        <label htmlFor="checkbox-4">What size can a team be?</label>
                        <div className="content">
                          <div className="text textThree" >Teams can be up to 5 people. If you want to hack alone, that's totally fine. If you are still looking for a team, don't worry, we will have team building and pitching sessions at the event.</div>
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" id="checkbox-9" name="checkbox-accordion" />
                        <label htmlFor="checkbox-9">Is there any travel remeburisment?</label>
                        <div className="content">
                          <div className="text textThree" >Unfortunately, we do not have any travel reimbursement for this years JunctionX Singapore Hackathon. However we do have accomodation discounts check.......Visit (https://hotels.cloudbeds.com/reservation/inxTZO#promo=HACKJUNCTIONxTT) and use the promocode "HACKJUNCTIONxTT" *This discount is only applicable for our single capsule</div>
                        </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className = "subconThree">
                <div className="accordion vertical">
                <ul>
                    <li>
                        <input type="checkbox" id="checkbox-5" name="checkbox-accordion" />
                        <label htmlFor="checkbox-5">Who should come to this hackathon?</label>
                        <div className="content">
                          <div className="text textThree" >Everybody is welcome to join JunctionX Singapore! You can either be a developer, designer, a business person or a professional of any other field. What really matters is how you combine your different skill sets within your team. Our advice is to have a diverse team with at least one developer and network with others.</div>
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" id="checkbox-6" name="checkbox-accordion" />
                        <label htmlFor="checkbox-6">When and where can I apply?</label>
                        <div className="content">
                          <div className="text textThree" >Application period for both participants and volunteers starts on 1st Aug 2019. Application period closes at 9 th Sep 2019. You can apply at our website https://singapore.hackjunction.com/register ! </div>
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" id="checkbox-7" name="checkbox-accordion" />
                        <label htmlFor="checkbox-7">I want to participate, but don't have a team yet?</label>
                        <div className="content">
                          <div className="text textThree" >If you’re missing a few members to complete your dream-team, our advice is to leave a post on the event page (which will be made in the near future - we will let you know when it's ready!), detailing who/what you’re looking for and/or what you could potentially provide to a team. We’re sure you can assemble a team this way in no time.</div>
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" id="checkbox-8" name="checkbox-accordion" />
                        <label htmlFor="checkbox-8">Where can I ask more questions?</label>
                        <div className="content">
                          <div className="text textThree" >We are happy to help out with any questions! Please send an email, or message to @JunctionX Singapore (Facebook) / @junctionx_singapore (Instagram).</div>
                        </div>
                    </li>
                    <li>
                        <input type="checkbox" id="checkbox-10" name="checkbox-accordion" />
                        <label htmlFor="checkbox-10">What size can a team be ?</label>
                        <div className="content">
                          <div className="text textThree" >Teams can be up to 2 - 5 people. If you are still looking for a team, don't worry, we will have team building and pitching sessions at the event.</div>
                        </div>
                    </li>
                  </ul>
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

export default Home;