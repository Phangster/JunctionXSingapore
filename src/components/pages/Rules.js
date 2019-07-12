import React, { Component } from "react";
import '../css/Rules.css';
import Footer from '../global/Footer'
class Rules extends Component {
  render() {
    return (
      <div class = "container"> 
      <div className="containerRules">
        <div className="textTwo">OFFICIAL RULES</div>
          <div className="">
            <div className="textThree">Here are the official rules of Junction Singapore 2019. To be eligible for prizes you must follow these rules.</div>
            <div className="grid-container-rules">
              <div className="sub-grid">1. No code written before the event.*</div>
              <div className="sub-grid">2. Allowed team size is 1-5.</div>
              <div className="sub-grid">3. No remote participation. </div>
              <div className="sub-grid">4. You must participate in at least one track.</div>
              <div className="sub-grid">5. You must submit a link to your source.**</div>
            </div>
            <div className="textThree">*All code outside of open source libraries must be written at the event. If you use any code written specifically for this idea in advance, or work on a new project that is somehow related to an already existing company, you will be disqualified.
            <br></br>**You can choose whether or not this link is public, but organizers must be able to access your source code.</div>
          </div>
      </div>
      <Footer />
    </div>
    );
  }
}

export default Rules;