import React, { Component } from "react";
import '../css/Schedule.css';
import Footer from '../global/Footer'

class Schedule extends Component {
  render() {
    return (
      <div className="container">
      <div className="shiftdown">
          <h1>SCHEDULE</h1>
          <div className="gridContainer">
            <div className="grid-block"></div> 
            <div className="grid-block">
              <h2 className="schedule">DAY 1 - SEP 27</h2>
              <div className="grid-sub">
                <p>1830</p>
                <p>Registration and dinner</p>
                <p>1930</p>	
                <p>Grand Opening ceremony</p>
                <p>2030</p>
                <p>Team formation</p>
                <p>2100</p>	
                <p>Hacking begins</p>
              </div>
            </div>
            <div className="grid-block">
              <h2 className="schedule">DAY 2 - SEP 28</h2>
              <div className="grid-sub">
                <p>0830</p>
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
              <h2 className="schedule">DAY 3 - SEP 29</h2>
              <div className="grid-sub">
                <p>0830</p>
                <p>Breakfast</p>
                <p>1000</p>	
                <p>Hacking</p>
                <p>1200</p>	
                <p>Submission deadline and Lunch</p>
                <p>1330</p>
                <p>Community & partner judging</p>	
                <p>1600</p>
                <p>Score tabulation</p>
                <p>1630</p>
                <p>Rearranging the tables</p>
                <p>1700</p>
                <p>Final Pitch</p>
                <p>1800</p>
                <p>JunctionX Prize winner</p>
                <p>1830</p>
                <p>Score tablulation</p>
                <p>1900</p>
                <p>Closing ceremony</p>
                <p>2000</p>
                <p>Afterparty at Tribe Theory!!!</p>
              </div>
            </div>
            <div className="grid-block"></div>
          </div>
          </div>
      <Footer />
      </div>
    );
  }
}

export default Schedule;