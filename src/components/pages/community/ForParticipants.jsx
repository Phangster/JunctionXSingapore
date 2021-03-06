/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import Footer from "../../global/Footer";

// Imported JSX Components
import UpcomingEventsComponent from '../components/UpcomingEventsComponent';

//import social media photo
import SocialMediaLogo from '../../../images/junction_img/junctionx_globe_white.png';

import './../../css/ForParticipants.css';

class ForParticipants extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {

    return (

        <div className = "ForParticipants">
        
          <div className="containerIntro containerIntro-forParticipants">
          <div className="wrapperIntro">
            <h1 className="header1intro fade-in-left">
              Take on the challenge.
            </h1>
            <div className="header2intro fade-in-right">
              JunctionX organizes hackathons and other tech events around the year around the world, as well as online. 
              We have something for every skill set and interest!
            </div>
          </div>   
                   
          </div>

          <div className="containerMain">
            <div className="flexContainer">
              <h2 className="flexItem-left">
                Everyone has the X factor
              </h2>
              <div className= "flexItem-right">
                <div>
                  We organize events for a wide variety of skill levels and backgrounds - check out our 
                  event calendar and specs for each event! Whether you are interested in getting started with 
                  your tech journey, learning more or just testing your skills, we've got something for you.
                </div>
                <br/>
                <div>
                  Junction events are organized throughout the year, including JunctionX hackathons around the world. 
                  The winning team for JunctionX Singapore will get the opportunity to go to the annual main event in 
                  Finland: next up, Junction 2020!
                  If you’re into tech at all, it is the place to be – a full weekend of hacking with around other tech 
                  enthusiasts & hustlers in an awesome venue and atmosphere like no other.
                  An experience you don't want to miss. Stay tuned for more information!
                </div>
              </div>
            </div>

            <div className = "flexContainer">
              <h2 className="flexItem-left">
                Hear what others say
              </h2>
              <div className="flexItem-right">
                <div className="quote-referal">
                  <div>
                    "I have been to a few hackathons in the past, and this hackathon 
                    is really a different experience. Love the variety of problem statements 
                    from companies" 
                    <div>- Student, SUTD</div>
                  </div> 
                  <br/>
                  <div>
                    "This is probably one of the most fun hackathon I've been to!
                    Got to interact with people from different backgrounds and specialties" 
                    <div>- Student, NUS</div> 
                  </div>
                  <br/>
                  <div>
                    "Pretty well run hackathon I would say. Its good to be able to work with young and energetic minds.
                    Mentors are very experienced too." 
                    <div>- IT Professional</div>
                  </div> 
                  <br/>
                  <div>
                    "Great atmosphere! Everyone was very friendly and into it which was good. Love it." 
                    <div>- Creative Designer</div>
                  </div> 
                  <br/>
                </div>
              </div>
            </div>
          </div>

          <UpcomingEventsComponent/>

          <div className="containerMain blackBackground">
            <div className = "flexContainer">
              <h2 className="flexItem-left">
                Check out our social media!
              </h2>
              <div className="flexItem-right">
                  <a href="https://www.instagram.com/junctionx_singapore/">
                    <img className = "junctionXLogo-forParticipants" src={SocialMediaLogo} alt = "JunctionX Instagram"/>
                  </a>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default ForParticipants;