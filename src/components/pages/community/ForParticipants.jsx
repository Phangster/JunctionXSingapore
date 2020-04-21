/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import Footer from "../../global/Footer";
import ForParticipantsCoverImg from '../../../images/junction_img/ForParticipantsCoverImg.jpg'

// Imported JSX Components
import UpcomingEventsComponent from '../home/components/UpcomingEventsComponent'

//import social media photo
import SocialMediaLogo from '../../../images/junction_img/junctionx_globe_white.png'

import {Link} from 'react-router-dom'

class ForParticipants extends Component {


  render() {

    return (
      <div>
        <div className = "Participants">
        <div className = "wrapper1">
            <img src={ForParticipantsCoverImg} className="coverPhotoTag"></img>
          <div className = "coverContainer">
            <p className = "headerLogoCommunity">Take on the challenge.</p>
            <div id="header2LogoCommunity">
            JunctionX organises hackathons and other tech events around the year around the world, as well as online. 
            We have something for every skill set and interest, so do not hesitate to explore and get new experiences by participating in JunctionX events!
            </div>
            {/* <div style={{fontSize: 15 +"px"}} className = "textTwo color">
            We organize hackathons, speaker events, coding workshops and other tech events around the year. We have something for every skill set and interest: take on new challenges, explore, and gain new experiences in Junction events!
            </div> */}
          </div>
        </div>


        <div className = "wrapper2 wrapper">

          {/* <div style={{'margin-bottom': 60+'px'}}></div> */}
          <div className="flexbox1 flexbox">
            <div className="wrapperTwo-flexbox1-left">
                <div>Everyone has the X factor</div>
            </div>
              {/* <div style={{width:20+'px'}}></div> */}
            <div className="wrapperTwo-flexbox1-right">
                <div>
                We organize events for a wide variety of skill levels and backgrounds - check out our event calendar and specs for each event! Whether you are interested in getting started with your tech journey, learning more or just testing your skills, we've got something for you.
                </div> <br/>
                <div>
                Junction events are organised throughout the year, including JunctionX hackathons around the world. 
                The winning team for JunctionX Singapore will get the opportunity to go to the annual main event in Finland: next up, Junction 2020!
                If you’re into tech at all, it is the place to be – a full weekend of hacking with around other tech enthusiasts & hustlers in an awesome venue and atmosphere like no other.
                An experience you don't want to miss. Stay tuned for more information!
                </div>
            </div>
          </div>

            <div style={{'margin-bottom': 60+'px'}}></div>

          <div className="flexbox1 flexbox">
            <div className="wrapperTwo-flexbox1-left">
                <div>Hear what others say</div>
            </div>
              {/* <div style={{width:20+'px'}}></div> */}
            <div className="wrapperTwo-flexbox1-right quote-referal">
                <div>
                "I have been to a few hackathons in the past, and this hackathon is really a different experience. Love the variety of problem statements from companies" - Student, SUTD
                </div> <br/>
                <div>
                "This is probably one of the most fun hackathon I've been to! Got to interact with people from different backgrounds and specialties" - Student, NUS
                </div><br/>
                <div>
                "Pretty well run hackathon I would say. Its good to be able to work with young and energetic minds. Mentors are very experienced too." - IT Professional
                </div> <br/>
                <div>
                "Great atmosphere! Everyone was very friendly and into it which was good. Love it." - Creative Designer
                </div> <br/>
            </div>
          </div>

          

        </div>

        <div className = "wrapper3 wrapper">
            {/* <div className = "containerThree">
            asdsa
            </div> */}
            <UpcomingEventsComponent/>
        </div>

        <div className = "wrapper4 wrapper">
        <div className="flexbox4 flexbox">
            <div className="wrapperTwo-flexbox1-left">Check out our social media!</div>
              {/* <div style={{width:20+'px'}}></div> */}
            <div className="wrapperTwo-flexbox1-right">
                <Link to="/socialmedia"><img src={SocialMediaLogo} style={{width:25+'vw'}}/></Link>
                
            </div>
        </div>
        

        </div>

        <Footer />
    </div>
  </div>
    );
  }
}

export default ForParticipants;