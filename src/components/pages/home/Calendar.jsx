import React, { Component } from "react";
import '../../css/Calendar.css';
import Footer from "../../global/Footer";

import UpcomingEventsComponent from '../components/UpcomingEventsComponent'


class Calendar extends Component {

  render() {

    return (
      <div className = "Calendar">

        <div className = "containerIntro containerIntro-calendar">
          <div className = "wrapperIntro">
            <h1 className = "header1intro">
              What's next?
            </h1>
            <div className = "header2intro">
              We organize hackathons, speaker events, coding workshops and other tech events around the year. 
              We have something for every skill set and interest: take on new challenges, explore, and gain 
              new experiences in JunctionX events!
            </div>
          </div>
        </div>
        
        <UpcomingEventsComponent/>

        <Footer/>
      </div>
    );
  }
}

export default Calendar;