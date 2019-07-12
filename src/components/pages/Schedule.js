import React, { Component } from "react";
import '../css/Schedule.css';
import Footer from '../global/Footer'

class Schedule extends Component {
  render() {
    return (
      <div className="container">
      <div className="containerSchedule">
          <h1>SCHEDULE</h1>
          <div className="gridContainer">
            <div className="grid-block">
              <h2>DAY 1 - SEP 27</h2>
              <div className="grid-sub">
                <p>18.00</p>
                <p>Arrival</p>
                <p>19.00</p>	
                <p>Opening ceremony</p>
                <p>19.45</p>
                <p>Team formation</p>
                <p>21.00</p>	
                <p>The competition begins</p>
              </div>
            </div>
            <div className="grid-block">
              <h2>DAY 2 - SEP 28</h2>
              <div className="grid-sub">
                <p>9.00</p>
                <p>Breakfast</p>
                <p>Hacking</p>	
                <p>14.30</p>
                <p>Lunch</p>
                <p>Hacking</p>
                <p>20.00</p>	
                <p>Dinner</p>
                <p>22.00	</p>
                <p>Movie night</p>
              </div>
            </div>
            <div className="grid-block">
              <h2>DAY 3 - SEP 29</h2>
              <div className="grid-sub">
                <p>9.00</p>
                <p>Breakfast</p>
                <p>10.00</p>	
                <p>Varian workshop</p>
                <p>11.00</p>	
                <p>Submission deadline</p>
                <p>13.30</p>
                <p>Lunch, The competition end, Community judging orientation</p>
                <p>16.00</p>
                <p>Community & partner judging</p>	
                <p>16.30</p>
                <p>Awards ceremony</p>
                <p>17.00</p>
                <p>Pitches on the main stage</p>
                <p>17.30</p>
                <p>Closing ceremony</p>
                <p>18.00</p>
                <p>Networking</p>
                <p>18.30</p>
                <p>Closing</p>
            </div>
            </div>
          </div>
      </div>
      <Footer />
      </div>
    );
  }
}

export default Schedule;