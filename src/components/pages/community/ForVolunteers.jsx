import React, { Component } from "react";
import Footer from "../../global/Footer";
import './ForVolunteers.css';
import { Link } from 'react-router-dom'

class ForVolunteers extends Component {

  render() {

    return (

      <div className="ForVolunteers">

        <div className="containerIntro containerIntro-forVolunteers">
          <div className="wrapperIntro">
            <div className="header1intro">
              Join the JunctionX Singapore family
            </div>
            <div className="header2intro">
              We are JunctionX Singapore, part of JunctionX – a volunteer-lead community effort around the world. 
            </div>
          </div>
        </div>

        <div className="containerMain">
          <div className="flexContainer">
            <div className="flexItem-left">
              A diverse team
            </div>
            <div className="flexItem-right">
              <div>
                Our headquarters is located at Startup Sauna in Finland but the Junction team as a whole spreads 
                out all around the globe. The thing that connects us all? A passion for empowering people to 
                create with technology.
              </div>
              <br/>
              <div>
                Our volunteers are involved in all parts of the production, from partnership and website teams 
                to marketing and branding. As a volunteer you get a unique opportunity to learn how to organize 
                world-class events and a chance to join an awesome community of people from all over the world. 
                What do we expect from you? Nothing but enthusiasm and eagerness to learn.
              </div>
              <br/>
              <div>
                Junction events are organized throughout the year, including JunctionX hackathons around the world.
                Join us! 
              </div>
            </div>
          </div>

          <div className ="flexContainer">
            <div className="flexItem-left">
              Hear what our past volunteers say
            </div>
            <div className="flexItem-right">
              <div className="quote-referal">
                <div>
                  "It will be a rewarding and fulfilling journey"
                  <div>- Santiana</div>
                </div> 
                <br/>
                <div>
                  "Never got to join hackathons. It was eye-opening to me. 
                  Glad that I became a volunteer to see what it's like"
                  <div>- Joordin</div> 
                </div>
                <br/>
                <div>
                  "Quite a good atmosphere! Love it"
                  <div>- Ben</div>
                </div> 
                <br/>
              </div>
            </div>
          </div>
        </div>

        <div className="containerMain blackBackground">
          <div className="flexContainer">
            <div className="flexItem-left">
              Interested? 
            </div>
            <div className="flexItem-right">
              Let's have a chat! 
              <br/>
              Feel free to contact Bryan, Head of JunctionX Singapore:
              <br/>
              <a href="mailto:bryan.david@hackjunction.com?Subject=CollaborationForJunctionXSingapore" target="_top">bryan.david@hackjunction.com</a>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default ForVolunteers;