/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import Footer from "../../global/Footer";
import './ForVolunteers.css'
import ForVolunteersCoverImg from '../../../images/junction_img/ForVolunteersCoverImg.jpg'

// Imported JSX Components
import UpcomingEventsComponent from '../home/components/UpcomingEventsComponent'

//import social media photo
import SocialMediaLogo from '../../../images/junction_img/junctionx_globe_white.png'

import { Link } from 'react-router-dom'

class ForVolunteers extends Component {


  render() {

    return (
      <div className="ForVolunteers">
        <div>

          <div className="containerIntro" id="containerIntro-volunteers">
            <h1>Join the JunctionX Singapore Family</h1>
            <h3>We are JunctionX Singapore, part of JunctionX – a volunteer-lead community effort around the world. Our headquarters is located at Startup Sauna in Finland but the Junction team as a whole spreads out all around the globe. The thing that connects us all? A passion for empowering people to create with technology. Join us!</h3>
              
            </div>



          <div className="wrapper2 wrapper">

            {/* <div style={{'margin-bottom': 60+'px'}}></div> */}
            <div className="flexbox1 flexbox">
              <div className="wrapperTwo-flexbox1-left">
                <div>A Diverse Team</div>
              </div>
              {/* <div style={{width:20+'px'}}></div> */}
              <div className="wrapperTwo-flexbox1-right">
                <div>
                  Our volunteers are involved in all parts of the production, from partnership and website teams to marketing and branding. As a volunteer you get a unique opportunity to learn how to organize world-class events and a chance to join an awesome community of people from all over the world. What do we expect from you? Nothing but enthusiasm and eagerness to learn.
                </div> <br />
                <div>
                  Junction events are organized throughout the year, including JunctionX hackathons around the world.
                  The winning team for JunctionX Singapore will get the opportunity to go to the annual main event in Finland: next up, Junction 2020!
                  If you’re into tech at all, it is the place to be – a full weekend of hacking with around other tech heads & hustlers in an awesome venue and atmosphere like no other.
                  An experience you do not want to miss out on. Stay tuned for more information!
                </div>
              </div>
            </div>

            <div style={{ 'margin-bottom': 60 + 'px' }}></div>

            <div className="flexbox1 flexbox">
              <div className="wrapperTwo-flexbox1-left">
                <div>Hear what our past volunteers say</div>
              </div>
              {/* <div style={{width:20+'px'}}></div> */}
              <div className="wrapperTwo-flexbox1-right quote-referal">
                <div>
                  "It will be a rewarding and fulfilling journey" - Santiana
                </div> <br />
                <div>
                  "Never got to join hackathons but it is a eye-opening to me. Glad that I became a volunteer to see what its like" - Joordin
                </div><br />
                <div>
                  "Quite a good atmosphere! Love it" - Ben
                </div>
              </div>
            </div>



          </div>

          <div className="wrapper3 wrapper">

            <div className="flexbox4 flexbox">
              <div className="wrapperTwo-flexbox1-left">Interested? Come talk to us</div>
              {/* <div style={{width:20+'px'}}></div> */}
              <div className="wrapperTwo-flexbox1-right">
                <span>Feel free to contact Bryan, Head of JunctionX Singapore </span>
                <a href="mailto:bryan.david@hackjunction.com?Subject=CollaborationForJunctionXSingapore" target="_top">bryan.david@hackjunction.com</a>
                <br /><span> and let's have a chat:)</span>

              </div>
            </div>

          </div>

        </div>

        <Footer />
      </div>
    );
  }
}

export default ForVolunteers;