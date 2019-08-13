import React, { Component } from "react";
import '../css/Schedule.css';
import Footer from '../global/Footer'

class Schedule extends Component {
  render() {
    return (
      <div className="container">
          <h1>SCHEDULE</h1>
          <div className="gridContainer">
            {/* <div className="containerSchedule"> */}
            <div className="grid-block"></div> 
            <div className="grid-block">
              <h2>DAY 1 - SEP 27</h2>
              <div className="grid-sub">
                <p>1800</p>
                <p>Registration</p>
                <p>1900</p>	
                <p>Opening ceremony</p>
                <p>1930</p>
                <p> Dinner and Team formation</p>
                <p>2100</p>	
                <p>Hacking begins</p>
              </div>
            </div>
            <div className="grid-block">
              <h2>DAY 2 - SEP 28</h2>
              <div className="grid-sub">
                <p>0900</p>
                <p>Breakfast</p>
                <p>1000</p>
                <p>Workshop</p>
                <p>1200</p>
                <p>Lunch</p>
                <p>1330</p>
                <p>Mentoring session</p>
                <p>1630</p>
                <p>Hacking</p>
                <p>1900</p>
                <p>Dinner</p>
                <p>2030</p>
                <p>Hacking</p>
              </div>
            </div>
            <div className="grid-block">
              <h2>DAY 3 - SEP 29</h2>
              <div className="grid-sub">
                <p>0900</p>
                <p>Breakfast</p>
                <p>1000</p>	
                <p>Hacking</p>
                <p>1130</p>	
                <p>Submission deadline</p>
                <p>1200</p>
                <p>Lunch</p>
                <p>1330</p>
                <p>Community & partner judging</p>	
                <p>1530</p>
                <p>Grand pitch</p>
                <p>1630</p>
                <p>Award ceremony</p>
                <p>1730</p>
                <p>Closing ceremony</p>
                <p>1800</p>
                <p>Networking</p>
              </div>
            </div>
            <div className="grid-block"></div>
          </div>
      {/* </div> */}
      <Footer />
      </div>
    );
  }
}

export default Schedule;