/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import '../../css/Home.scss';
import '../../css/Home.sass';
import Footer from "../../global/Footer";
import sample from '../../../videos/intro.mp4';
// import Modal from "../global/Modal";
import JunctionLogo from '../../../images/junction_img/JunctionX_logos_white.png'
import JunctionL from '../../../images/junction_img/junctionx_globe_black.svg'
import JunctionR from '../../../images/junction_img/junctionx_globe_white.svg'
import JunctionCollab from '../../../images/junction_img/junctionx_2020_collab.jpg'
import Mark from '../../../images/mentor_img/mark_lven_palejaro.JPG'
import Jackie from '../../../images/mentor_img/jackie.JPG'
import Marie from '../../../images/mentor_img/marie_wong.jpeg'
import Eric from '../../../images/mentor_img/eric_chang.jpg'
import Weihan from '../../../images/mentor_img/weihan.jpg'
import Jed from '../../../images/mentor_img/jed.jpeg'
import Satoshi from '../../../images/mentor_img/satoshi.jpg'
import Yash from '../../../images/mentor_img/yash_datta.jpeg'
import Ahmed from '../../../images/mentor_img/ahmed_amer.jpeg'
// import Do from '../../../images/mentor_img/Do_Hoang_Giang.jpg'
import Jeff from '../../../images/mentor_img/Jeff_Guo_Qing.png'
// import Jingchang from '../../../images/mentor_img/Jingchang_Zhang.JPG'
import Liang from '../../../images/mentor_img/Liang_Jingxi.jpg'
import Phan from '../../../images/mentor_img/Phan_Huy_Nguyen.jpg'

// JunctionXAsia
import JunctionAsiaPoster from '../../../images/junctionx_asia_img/JunctionX_2020_intro.jpg'
import JunctionAsiaLogo1 from '../../../images/junctionx_asia_img/junctionx_asia_white_oneline.png'

// For Router History
import { useHistory } from 'react-router-dom';


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
            {/* <img src={JunctionAsiaLogo1} className="headerLogoImg" ></img> */}
            <p>HACK THE VIRUS</p>
            <div className = "textTwo color">4. - 7.06.2020</div>
          </div>
        </div>
        <div className = "wrapperTwo">
          <div className = "containerTwo">
            <div className='textColor'>ABOUT</div>
            <div>
              <div className="textOne">JunctionX Singapore</div>
              <div className="textTwo subconOne">
                <div>JunctionX Asia is going ONLINE!</div>
                <br></br>
                <div>
                    JunctionX Singapore will be collaborating with other JunctionX teams from Asia, to host an online hackathon.
                    The theme of the hackathon revolves around the current global pandemic.
                </div>
                <div>Sign-ups will be opening soon, stay tuned!</div>
                <br></br>
                <div>Hack the virus with us!</div>
              </div>
              <div className="subconTwo">
                {/* <img src={JunctionAsiaPoster} /> */}
                <iframe src="https://www.youtube.com/embed/c7SoIr0I2Qg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className = "wrapperThree">
            <div className = "containerThree">
                <div className = "textColorHeader">Checkout JunctionX Singapore 2019</div>
                <div  className='textColor'>LOCATION</div>
                <div className="textOne">See you at <span className = "locationText">Rakuten Asia Pte Ltd!</span></div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819926160307!2d103.84793611550867!3d1.281802599065105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190c2b3223d1%3A0x922bbd5aba9592c2!2sRakuten+Asia+Pte+Ltd!5e0!3m2!1sen!2ssg!4v1562581464126!5m2!1sen!2ssg" frameBorder="0" allowFullScreen></iframe>
            </div>
        </div>
        <div className = "wrapperFour">
            <div className = "containerFour">
              <div className='textColor'>MENTORS</div>
              <p style={{fontSize:"30px"}}>TRACK MENTORS</p>
              <div className="listOfMentors">
                <div className="mentor">
                  <img className="avatarMentor" style={{objectPosition: "100% 0"}} src={Yash} alt="Datta, Yash" />
                  <p>Datta, Yash</p>
                  <p className="position">Senior Software Engineer, Data Management Group</p>
                  <h4 style={{textAlign: "center", color: "red"}}>Rakuten</h4>
                </div>
                <div className="context-box-des">
                  <p style={{objectPosition: "100% 0"}}>Yash is a builder and a maker at heart. He is passionate about solving real world problems through the use of technology. A scala fan-boy, Yash is also an avid open source enthusiast and has contributed code to several open source projects. Yash has been architecting and developing complex, robust, distributed systems in his various roles at Internet scale companies like Agoda and Rakuten. His interests include but are not limited to : Data Analytics, Database systems, Big data systems, Theoretical Physics, Chaos Theory, Number Theory etc. In his free time he loves to play table tennis and chess.</p>
                </div>
              </div>

              <div className="listOfMentors">
                <div className="mentor">
                  <img className="avatarMentor" style={{objectPosition: "100% 0"}} src={Ahmed} alt="Amer, Ahmed" />
                  <p>Amer, Ahmed</p>
                  <p className="position">Senior Product Manager, Data Management Group</p>
                  <h4 style={{textAlign: "center", color: "red"}}>Rakuten</h4>
                </div>
                <div className="context-box-des"><p>Ahmed loves technology so much it made him study Software Engineering. Out of school, he managed & delivered Web & UX Design projects for clients like Astro and M1. Fast forward a few years, he moved into designing & building digital products for Internet companies like Tech In Asia and Rakuten. Beyond work, he helped his parents run a Middle Eastern Vegetarian restaurant and self publishes books to raise awareness & funds for less privileged communities.</p></div>
              </div>

              <div className="listOfMentors">
                <div className="mentor">
                  <img className="avatarMentor" style={{objectPosition: "100% 0"}} src={Satoshi} alt="Goto, Satoshi" />
                  <p>Goto, Satoshi</p>
                  <p className="position">Senior Software Engineer, Rakuten Web Search Group</p>
                  <h4 style={{textAlign: "center", color: "red"}}>Rakuten</h4>
                </div>
                <div className="context-box-des">
                  <p>Started engineering career from Desktop app with C/C++/C# and eventually moved to financial frontend/backend area for trader/security exchanges. Now contributing to the mobile/web area with swift/java/objective c/python/c++ and browser extension with react/JS. Made many individual contribution for my own apps and start-up in Singapore.</p>
                </div>
              </div>

              <div className="listOfMentors">
                <div className="mentor">
                  <img className="avatarMentor" style={{objectPosition: "100% 0"}} src={Jeff} alt="Jeff Guo Qing" />
                  <p>Jeff Guo Qing</p>
                  <p className="position">Software Engineer in Shopee</p>
                  <h4 style={{textAlign: "center", color: "orange"}}>Shopee</h4>
                </div>
                <div className="context-box-des"><p>Jeff Guo is a software engineer in Shopee. He is currently developing recommender systems for Shopee platform to promote the user experience. He obtained Ph.D from Nanyang Technological University in Singapore. Jeff’s research interests are recommender systems and AI technologies. His vision of future technology is that it will constantly enable the connectivity between all different kinds of entities in this world. In the future, more advanced intelligent systems will be developed to drive connectivity and make our planet a better place to live in.</p></div>
              </div>

              <div className="listOfMentors">
                <div className="mentor">
                  <img className="avatarMentor" style={{objectPosition: "100% 0"}} src={Phan} alt="Phan Huy Nguyen" />
                  <p>Phan Huy Nguyen</p>
                  <p className="position">Software Engineer (Data) in Shopee</p>
                  <h4 style={{textAlign: "center", color: "orange"}}>Shopee</h4>
                </div>
                <div className="context-box-des"><p>Phan Huy Nguyen graduated from NTU Computer Science and has since been working in Shopee as a software engineer for the past two years. As a relatively fresh software engineer, he is keen to explore different fields in the IT industry. He has worked in both data and dev-ops team, and was involved in various projects, including building data pipelines, writing web servers, developing monitoring tools and containerising services. He is excited to work with students from the JunctionX Singapore Hackathon, supporting their bold and creative ideas.</p></div>
              </div>

              <div className="listOfMentors">
                <div className="mentor">
                  <img className="avatarMentor" style={{objectPosition: "100% 0"}} src={Liang} alt="Liang Jingxi" />
                  <p>Liang Jingxi</p>
                  <p className="position">Software Engineer in Shopee</p>
                  <h4 style={{textAlign: "center", color: "orange"}}>Shopee</h4>
                </div>
                <div className="context-box-des"><p>Liang Jingxi is a technology enthusiast who believes in the power of artificial intelligence. He is now a Machine Learning Engineer at Shopee and he applies his machine learning skills to build models and provide libraries to serve Shopee's recommender system to improve the end-user experience. Jingxi also writes and maintains high-availability, scalable services to support Shopee’s rapidly-increasing traffic.</p></div>
              </div>
              
              <div className="listOfMentors">
                <div className="mentor">
                  <img className="avatarMentor" style={{objectPosition: "100% 0"}} src={Weihan} alt="Goh Wei Han" />
                  <p>Goh Wei Han</p>
                  <p className="position">Kaspersky-certified Malware Reverse Engineering and Analysis Trainer</p>
                  <h4 style={{textAlign: "center", color: "green"}}>Kaspersky</h4>
                </div>
                <div className="context-box-des"><p>Goh Weihan is a Kaspersky-certified Malware Reverse Engineering and Analysis trainer, and an Assistant Professor at the Singapore Institute of Technology (SIT), teaching in the Information Security and Software Engineering degree programmes.  His current research interests include blockchain, web and network protocol security, digital anti-forensics, and applied cryptography.  </p></div>
              </div>

              <p style={{fontSize:"30px"}}>GUEST MENTORS</p>

                <div className="listOfMentors">
                  <div className="mentor">
                    <img className="avatarMentor" src={Mark} alt="Mark Lven Tupa Palejaro" />
                    <p>Mark Lven Tupa Palejaro</p>
                    <p className="position">Co-founder of Pocket Hologram</p>
                  </div>
                  <div className="context-box-des"><p>Co-founder of Pocket Hologram as well as an active volunteer in One Maker Group, Sustainable Living Lab, and in various National Geographic Channel events. These groups use their talents in the field of Mechatronics, Internet of Things, Artificial Intelligence, virtual and augmented reality, challenge their knowledge and create innovations that science has to offer. Don't miss the opportunity to learn from a MAKER, ENGINEER, and a sharer of knowledge. Come and let's learn together! See you!</p></div>
                </div>

                <div className="listOfMentors">
                  <div className="mentor">
                    <img className="avatarMentor" style={{objectPosition: "100% 0"}} src={Jackie} alt="Jackie Tan" />
                    <p>Jackie Tan</p>
                    <p className="position">Co-founder of UpLevel</p>
                  </div>
                  <div className="context-box-des"><p>Jackie Tan is currently the co-founder of UpLevel, an edutech company that bridges the gap between coding education and technical employment through mentorship and projects. Previously, he ran fundMyLife, a Q&A platform for financial planning questions which he exited in early 2019. He is also a Forbes 30 Under 30 honoree for his work on transforming how young adults approach finance. He was the Chief Academic Officer of UpCode Academy, a coding school that provides industry-ready skills to professionals and students.Passionate about giving back ,Jackie is a mentor for the NEXT50 Mentorship movement and for the Sustainable Developmental Goal startup generator YSI SEA. He is also involved in hackathons as judge and mentor. When he is not working, he admins the largest Telegram meme group in Singapore, Memes n Dreams. </p>
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
                  <div className="mentor">
                  <img className="avatarMentor"  style={{objectPosition: "100% 0"}} src={Jed} alt="Jed Ng" />
                  <p>Jed Ng</p>
                  <p className="position">Founder and Business head Rakuten RapidAPI</p>
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
                  <span className="date">27 SEPTEMBER</span>
                </div>
                <div className="status">
                  <h4> HACKATHON DAY & RELEASE OF QUESTIONS </h4>
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