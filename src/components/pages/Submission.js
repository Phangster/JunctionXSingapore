import React, { Component } from "react";
import '../css/Submission.css';
import Footer from '../global/Footer'

class Submission extends Component {
  render() {
    return (
      <div class = "container"> 
        <div className = "containerSubmission">
        <div className = "textOne">SUBMISSION OF PROJECT</div>
          <div className = "content-submission">
            <div className = "textOne">DEMO & JUDGING</div>
            <div className = "textThree">Demoing, community judging and partner judging will all take place at the same time, on Sunday (29/09)</div>
            <div className = "textTwo color-change" >Demo - Presenting your projects</div>
            <div className = "textThree">Demoing is continuous. Partners and the judges from other groups come to listen your demo all the time. This means that you are going to present your projects multiple times during the demo expo between 14-16.</div>
            <div className = "textTwo color-change">Take Note : </div>
            <div className = "textThree">
              <ul>
                <li>Be prepared to demo your project to partners and community judges multiple times</li>
                <li>It is recommended to have at least 1 person demoing all the time, else people can’t review your project and you’ll receive less votes</li>
                <li>You can change the person demoing any time you want</li>
              </ul>
            </div>
            <div className = "textOne">Community judging - You decide the winner</div>
            <div className = "textThree">Participants will choose the winner for the JunctionX price. Through voting for their favourite project*</div>
            <div className = "textOne">Partner judging - Choosing challenge winners</div>
            <div className = "textThree">Partners will choose the winners of the challenges by going around and reviewing your projects. Your task is to demo your projects to the partners. When presenting, it might be good to focus on the criteria that the partner has set in the challenge.</div>
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