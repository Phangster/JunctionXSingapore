/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import Footer from "../../global/Footer";

// Imported JSX Components
import UpcomingEventsComponent from '../home/components/UpcomingEventsComponent';

//import social media photo
import SocialMediaLogo from '../../../images/junction_img/junctionx_globe_white.png';

import {Link} from 'react-router-dom';
import './ForParticipants.css';

class ForParticipants extends Component {


  render() {

    return (

        <div className = "ForParticipants">
        
          <div className="containerIntro containerIntro-forParticipants">
            <div className="wrapperIntro">
              <div className="header1intro">
                Take on the challenge.
              </div>
              <div className="header2intro">
                JunctionX organises hackathons and other tech events around the year around the world, as well as online. 
                We have something for every skill set and interest!
              </div>
            </div>            
          </div>

              
          <div className="containerMain-forParticipants">
            <div className="container1-forParticipants">
              <div className="wrapperTwo-grid-left-forParticipants">
                Everyone has the X factor
              </div>
              <div className= "wrapperTwo-grid-right-forParticipants">
                <div>
                  We organize events for a wide variety of skill levels and backgrounds - check out our 
                  event calendar and specs for each event! Whether you are interested in getting started with 
                  your tech journey, learning more or just testing your skills, we've got something for you.
                </div>
                <br/>
                <div>
                  Junction events are organised throughout the year, including JunctionX hackathons around the world. 
                  The winning team for JunctionX Singapore will get the opportunity to go to the annual main event in 
                  Finland: next up, Junction 2020!
                  If you’re into tech at all, it is the place to be – a full weekend of hacking with around other tech 
                  enthusiasts & hustlers in an awesome venue and atmosphere like no other.
                  An experience you don't want to miss. Stay tuned for more information!
                </div>
              </div>
            </div>

            <div className = "container1-forParticipants">
              <div className="wrapperTwo-grid-left-forParticipants">
                Hear what others say
              </div>
              <div className="wrapperTwo-grid-right-forParticipants">
                <div className="quote-referal-forParticipants">
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

          <div className="containerMain-forParticipants">
            <div className = "container1-forParticipants">
              <div className="wrapperTwo-grid-left-forParticipants">
                Check out our social media!
              </div>
              <div className="wrapperTwo-grid-right-forParticipants">
                <a href="https://www.instagram.com/junctionx_singapore/">
                  <img src={SocialMediaLogo}/>
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