/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import './Calendar.css'
import Footer from "../../global/Footer";
import CoverPhoto from '../../../images/junction_img/calendarBackgroundPhoto.jpg'

import UpcomingEventsComponent from './components/UpcomingEventsComponent'




class Calendar extends Component {


  render() {

    return (
      <div>
        <div className = "calendar">
        <div className = "wrapper1" id="wrapper1-Calendar">
            {/* <img src={CoverPhoto} className="coverPhotoTag"></img> */}
          <div className = "coverContainer">
            <p className = "headerLogoCommunity">WHAT'S NEXT?</p>
            <div id="header2LogoCommunity">
                We organize hackathons, speaker events, coding workshops and other tech events around the year. We have something for every skill set and interest: take on new challenges, explore, and gain new experiences in Junction events!
            </div>
            {/* <div style={{fontSize: 15 +"px"}} className = "textTwo color">
            We organize hackathons, speaker events, coding workshops and other tech events around the year. We have something for every skill set and interest: take on new challenges, explore, and gain new experiences in Junction events!
            </div> */}
          </div>
        </div>


        <div className = "wrapper2 wrapper">

         <UpcomingEventsComponent/>
          {/* <div style={{'margin-bottom': 60+'px'}}></div> */}

          

        </div>




        <Footer />
    </div>
  </div>
    );
  }
}

export default Calendar;