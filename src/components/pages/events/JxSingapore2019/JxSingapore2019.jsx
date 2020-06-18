import React, { Component } from "react";

import Footer from "../../../global/Footer";
import CoverPhoto from "../../../../images/JxSingapore2019/main_coverphoto.jpg"
import JunctionXSGLogo from "../../../../images/JxSingapore2019/JunctionX Singapore logo_white_twoline.png"
import JunctionXSGTablePic from "../../../../images/JxSingapore2019/JunctionXSGtable.jpg"

import JunctionLogo from '../../../../images/junction_img/JunctionX_logos_white.png'
import JunctionL from '../../../../images/junction_img/junctionx_globe_black.svg'
import JunctionR from '../../../../images/junction_img/junctionx_globe_white.svg'
import JunctionCollab from '../../../../images/junction_img/junctionx_2020_collab.jpg'

//Mentor imports
import Mark from '../../../../images/JxSingapore2019/mentor_img/mark_lven_palejaro.JPG'
import Jackie from '../../../../images/JxSingapore2019/mentor_img/jackie.JPG'
import Marie from '../../../../images/JxSingapore2019/mentor_img/marie_wong.jpeg'
import Eric from '../../../../images/JxSingapore2019/mentor_img/eric_chang.jpg'
import Weihan from '../../../../images/JxSingapore2019/mentor_img/weihan.jpg'
import Jed from '../../../../images/JxSingapore2019/mentor_img/jed.jpeg'
import Satoshi from '../../../../images/JxSingapore2019/mentor_img/satoshi.jpg'
import Yash from '../../../../images/JxSingapore2019/mentor_img/yash_datta.jpeg'
import Ahmed from '../../../../images/JxSingapore2019/mentor_img/ahmed_amer.jpeg'
import Jeff from '../../../../images/JxSingapore2019/mentor_img/Jeff_Guo_Qing.png'
import Liang from '../../../../images/JxSingapore2019/mentor_img/Liang_Jingxi.jpg'
import Phan from '../../../../images/JxSingapore2019/mentor_img/Phan_Huy_Nguyen.jpg'


// For Router History
import { useHistory } from 'react-router-dom';

//Import other components for JxSingapore 2019
import Track from "./Track"
import Prizes from "./Prizes"
import Partners from "./Partners"

import './JxSingapore2019.css'


class JxSingapore2019 extends Component {

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
      <div className="jxsg2019">

        <div className="containerIntro containerIntro-jx2019">
          <div className="header1introCentered">
            <img src={JunctionXSGLogo} className="junctionXlogo" ></img>
            <p>
            HACK THE FUTURE
            </p>
          </div>
          <div className="header2introCentered">
            2019
          </div>
        </div>


        <div className="containerMain">
          <div className="flexContainer">
            <div className="flexItem-left">
              JunctionX Singapore 2019
            </div>
              <div className="flexItem-right">
              <div>
                Organised for developers by developers, junction X Singapore 2019 was
                This was the first hackathon of JunctionX Singapore team and it was a massive success.
                The 48 hour hackathon was organised on the beautiful office of Rakuten Singapore in CBD.
              </div>
              <br/>
              <div>
                Participants came from a diverse range of backgrounds with more than half being international participants (from Algeria, Japan, etc.) who came to Singapore just to attend this hackathon.
              </div>
              <br/>
              <div>
                Hack the Future with us - see you at our next hackathon in 2020!
              </div>    
            </div>
          </div>
        </div>

        <Track/>
        <Prizes/>

          <div className="containerMain">
            <div className = "titleCenteredContainer">
              <div className="titleCentered">
                <div>
                  LOCATION
                </div>
                <div>
                  Rakuten Asia
                </div>
              </div>
              <br/>
              <div>
            </div>
            <div className = "iFrameContainer">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819926160307!2d103.84793611550867!3d1.281802599065105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190c2b3223d1%3A0x922bbd5aba9592c2!2sRakuten+Asia+Pte+Ltd!5e0!3m2!1sen!2ssg!4v1562581464126!5m2!1sen!2ssg" frameBorder="0" allowFullScreen></iframe>
            </div>
            </div>
          </div>

{/*toimii*/ }
        <div className = "containerMain">
          <div className="wrapperThree-jx2019">
              <div className= "titleCentered mintColor">
                MENTORS
              </div>
              <p style={{ fontSize: "30px" }}>
                TRACK MENTORS
              </p>

              <div className="listOfMentors-jx2019">
                <img className="avatarMentor-jx2019" style={{ objectPosition: "100% 0" }} src={Yash} alt="Datta, Yash" />
                <div className="context-box-des-jx2019"> 
                  <div className="mentor-jx2019">
                    <div>
                      <div>Datta, Yash</div>
                      <div>Senior Software Engineer,</div>
                      <div>Data Management Group</div>
                      <div style={{ color: "red" }}>Rakuten</div>
                    </div>
                    <p className="context-box-des-jx2019">
                      Yash is a builder and a maker at heart. He is passionate about solving real world problems 
                      through the use of technology. A scala fan-boy, Yash is also an avid open source enthusiast 
                      and has contributed code to several open source projects. Yash has been architecting and 
                      developing complex, robust, distributed systems in his various roles at Internet scale 
                      companies like Agoda and Rakuten. His interests include but are not limited to : Data 
                      Analytics, Database systems, Big data systems, Theoretical Physics, Chaos Theory, Number 
                      Theory etc. In his free time he loves to play table tennis and chess.
                    </p>
                  </div>
                </div>
              </div>

              <div className="listOfMentors-jx2019">
                <img className="avatarMentor-jx2019" style={{ objectPosition: "100% 0" }} src={Ahmed} alt="Amer, Ahmed" />
                <div className="context-box-des-jx2019"> 
                  <div className="mentor-jx2019">
                    <div>
                      <div>Amer, Ahmed</div>
                      <div>Senior Product Manager</div>
                      <div>Data Management Group</div>
                      <div style={{ color: "red" }}>Rakuten</div>
                    </div>
                    <p className="context-box-des-jx2019">
                      Ahmed loves technology so much it made him study Software Engineering. 
                      Out of school, he managed & delivered Web & UX Design projects for clients like Astro and M1.
                      Fast forward a few years, he moved into designing & building digital products for Internet 
                      companies like Tech In Asia and Rakuten. Beyond work, he helped his parents run a Middle 
                      Eastern Vegetarian restaurant and self publishes books to raise awareness & funds for less 
                      privileged communities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="listOfMentors-jx2019">
                <img className="avatarMentor-jx2019" style={{ objectPosition: "100% 0" }} src={Satoshi} alt="Goto, Satoshi" />
                <div className="context-box-des-jx2019"> 
                  <div className="mentor-jx2019">
                    <div>
                      <div>Goto, Satoshi</div>
                      <div>Senior Software Engineer,</div>
                      <div>Rakuten Web Search Group</div>
                      <div style={{ color: "red" }}>Rakuten</div>
                    </div>
                    <p className="context-box-des-jx2019">
                      Started engineering career from Desktop app with C/C++/C# and eventually moved to financial 
                      frontend/backend area for trader/security exchanges. Now contributing to the mobile/web area
                      with swift/java/objective c/python/c++ and browser extension with react/JS. Made many 
                      individual contribution for my own apps and start-up in Singapore.
                    </p>
                  </div>
                </div>
              </div>

              <div className="listOfMentors-jx2019">
              <img className="avatarMentor-jx2019" style={{ objectPosition: "100% 0" }} src={Jeff} alt="Jeff Guo Qing" />
                <div className="context-box-des-jx2019"> 
                  <div className="mentor-jx2019">
                    <div>
                      <div>Jeff Guo Qing</div>
                      <div>Software Engineer in Shopee</div>
                      <div style={{ color: "red" }}>Shopee</div>
                    </div>
                    <p className="context-box-des-jx2019">
                      Jeff Guo is a software engineer in Shopee. He is currently developing recommender systems for
                      Shopee platform to promote the user experience. He obtained Ph.D from Nanyang Technological 
                      University in Singapore. Jeff’s research interests are recommender systems and AI 
                      technologies. His vision of future technology is that it will constantly enable the 
                      connectivity between all different kinds of entities in this world. In the future, more 
                      advanced intelligent systems will be developed to drive connectivity and make our planet a 
                      better place to live in.
                    </p>
                  </div>
                </div>
              </div>

              <div className="listOfMentors-jx2019">
              <img className="avatarMentor-jx2019" style={{ objectPosition: "100% 0" }} src={Phan} alt="Phan Huy Nguyen" />
                <div className="context-box-des-jx2019"> 
                  <div className="mentor-jx2019">
                    <div>
                      <div> Phan Huy Nguyen</div>
                      <div>Software Engineer (Data) in Shopee</div>
                      <div style={{ color: "red" }}>Shopee</div>
                    </div>
                    <p className="context-box-des-jx2019">
                      Phan Huy Nguyen graduated from NTU Computer Science and has since been working in Shopee as 
                      a software engineer for the past two years. As a relatively fresh software engineer, he is 
                      keen to explore different fields in the IT industry. He has worked in both data and dev-ops 
                      team, and was involved in various projects, including building data pipelines, writing web 
                      servers, developing monitoring tools and containerising services. He is excited to work with 
                      students from the JunctionX Singapore Hackathon, supporting their bold and creative ideas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="listOfMentors-jx2019">
              <img className="avatarMentor-jx2019" style={{ objectPosition: "100% 0" }} src={Liang} alt="Liang Jingxi" />
                <div className="context-box-des-jx2019"> 
                  <div className="mentor-jx2019">
                    <div>
                      <div>Liang Jingxi</div>
                      <div>Software Engineer in Shopee</div>
                      <div style={{ color: "red" }}>Shopee</div>
                    </div>
                    <p className="context-box-des-jx2019">
                      Liang Jingxi is a technology enthusiast who believes in the power of artificial intelligence.
                      He is now a Machine Learning Engineer at Shopee and he applies his machine learning skills to
                      build models and provide libraries to serve Shopee's recommender system to improve the 
                      end-user experience. Jingxi also writes and maintains high-availability, scalable services 
                      to support Shopee’s rapidly-increasing traffic.
                    </p>
                  </div>
                </div>
              </div>

              <div className="listOfMentors-jx2019">
              <img className="avatarMentor-jx2019" style={{ objectPosition: "100% 0" }} src={Weihan} alt="Goh Wei Han" />
                <div className="context-box-des-jx2019"> 
                  <div className="mentor-jx2019">
                    <div>Goh Wei Han</div>
                    <div>Kaspersky-certified Malware Reverse Engineering and Analysis Trainer</div>
                    <div style={{ color: "red" }}>Kaspersky</div>
                    <p className="context-box-des-jx2019">
                      Goh Weihan is a Kaspersky-certified Malware Reverse Engineering and Analysis trainer, and an Assistant
                      Professor at the Singapore Institute of Technology (SIT), teaching in the Information Security and Software
                      Engineering degree programmes.  His current research interests include blockchain, web and network protocol
                      security, digital anti-forensics, and applied cryptography. 
                    </p>
                  </div>
                </div>
              </div>
           
              <div style={{ fontSize: "30px" }}>
                GUEST MENTORS
              </div>

              <div className="listOfMentors-jx2019">
              <img className="avatarMentor-jx2019" src={Mark} alt="Mark Lven Tupa Palejaro" />
                <div className="context-box-des-jx2019"> 
                  <div className="mentor-jx2019">
                    <div>Mark Lven Tupa Palejaro</div>
                    <div>Co-founder of Pocket Hologram</div>
                    <div style={{ color: "red" }}></div>
                    <p className="context-box-des-jx2019">
                      Co-founder of Pocket Hologram as well as an active volunteer in One Maker Group, Sustainable Living Lab, and in 
                      various National Geographic Channel events. These groups use their talents in the field of Mechatronics, Internet 
                      of Things, Artificial Intelligence, virtual and augmented reality, challenge their knowledge and create innovations 
                      that science has to offer. Don't miss the opportunity to learn from a MAKER, ENGINEER, and a sharer of knowledge. 
                      Come and let's learn together! See you!
                    </p>
                  </div>
                </div>
              </div>

              <div className="listOfMentors-jx2019">
              <img className="avatarMentor-jx2019" style={{ objectPosition: "100% 0" }} src={Jackie} alt="Jackie Tan" />
                <div className="context-box-des-jx2019"> 
                  <div className="mentor-jx2019">
                    <div>Jackie Tan</div>
                    <div>Co-founder of UpLevel</div>
                    <div style={{ color: "red" }}></div>
                    <p className="context-box-des-jx2019">
                      Jackie Tan is currently the co-founder of UpLevel, an edutech company that bridges the gap between coding education 
                      and technical employment through mentorship and projects. Previously, he ran fundMyLife, a Q&A platform for financial
                      planning questions which he exited in early 2019. He is also a Forbes 30 Under 30 honoree for his work on 
                      transforming how young adults approach finance. He was the Chief Academic Officer of UpCode Academy, a coding 
                      school that provides industry-ready skills to professionals and students.Passionate about giving back ,Jackie is a 
                      mentor for the NEXT50 Mentorship movement and for the Sustainable Developmental Goal startup generator YSI SEA. He 
                      is also involved in hackathons as judge and mentor. When he is not working, he admins the largest Telegram meme 
                      group in Singapore, Memes n Dreams.
                    </p>
                  </div>
                </div>
              </div>

              <p style={{ fontSize: "30px" }}>
                WORKSHOP
              </p>

              <div className="listOfMentors-jx2019">
                <div className="mentor-jx2019 workshopMentor">
                  <img className="avatarMentor-jx2019" style={{objectPosition: "100% 0" }} src={Marie} alt="Marie Wong" />
                  <div>Marie Wong</div>
                  <div>Co-Founder & UX Designer</div>
                  <div>REASSEMBLE</div>
                </div>

                <div className="mentor-jx2019 workshopMentor">
                  <img className="avatarMentor-jx2019" style={{ objectPosition: "100% 0" }} src={Eric} alt="Eric Chang" />
                  <div>Eric Chang</div>
                  <div>Lead Solutions Architect,</div>
                  <div>Trusted Data Division, NDI</div>
                </div>

                <div className="mentor-jx2019 workshopMentor">
                  <img className="avatarMentor-jx2019" src={Jed} alt="Jed Ng" />
                  <div>Jed Ng</div>
                  <div>Founder and Business head</div>
                  <div>Rakuten RapidAPI</div>
                </div>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default JxSingapore2019;