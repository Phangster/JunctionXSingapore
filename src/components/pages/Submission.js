import React, { Component } from "react";
import '../css/Submission.css';
import Footer from '../global/Footer'

class Submission extends Component {
  render() {
    return (
      <div>
        <div className = "containerSubmission">
        <h1>SUBMISSION OF PROJECT</h1>
          <div className = "content-submission">
            <div className = "textOne">DEMO & JUDGING</div>
            <div className = "textThree">Community judging and Partner judging will all take place at the same time, on Sunday (29/09)</div>
            <div className = "textThree">Your hacking space will turn into the demo booth where partner and community judges will walk around and judge you on your project.</div>
            <div className = "textThree">
            <span className = "color-change">Tips : </span>
              <ul>
                <li>It is recommended that you always have 1 person at your demo at anyone time</li>
                <li>Keep your total presentation time to 5 min, 3 mintues on demo and 2 mintues on Q&A</li>
                <li>Relax and Have fun!</li>
              </ul>
            </div>
            <div className = "textOne">Community judging - You decide the winner</div>
            <div className = "textThree">The set up will be like an exhibition style where participants can look at other teams project and vote for them. The top 3 teams will be able to do a pitch for the JunctionX grand prize.</div>
            <div className = "textOne">Partner judging - Choosing challenge winners</div>
            <div className = "textThree">Partners will choose the winners of the challenges. Each time will be scheduled a timing to present to the partners in the meeting room. Your task is to demo your projects to the partners. When presenting, it might be good to focus on the criteria that the partner has set in the challenge.</div>
            <div className = "textOne">GITHUB</div>
            <div className = "textThree"> On submission day, link will be release</div>
            <div className = "textThree">*Any participants caught double voting or voting for their own team might have their vote rejected</div>
          </div>
        </div>
      <Footer />
      </div>
    );
  }
}

export default Submission;