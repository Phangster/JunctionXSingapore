import React, { Component } from "react";
import '../../components/tracks/track.css';
import Footer from '../global/Footer'
import KasperskyImg from '../../images/partners_img/kaspersky_track.png'


class Kaspersky extends Component {
  render() {
    return (
      <div>
        <div className = "containerTrackOne">
          <div className= "track-css">
            <h1>Security in Finance and Mobility</h1>
            <div className="partner_block" >
              <img className="partner_img" src={KasperskyImg} alt="Kaspersky" />
            </div>
              <h1>The Challenge</h1>
              <p>1. Financial security</p>
              <p className="textsmaller">Financial markets have always been attractive to cybercriminals. During the past years, the financial cyberthreats landscape has grown wider, with new attack vectors and extended geography.Among the reasons for this growth, we should mention significant interest to blockchain and cryptocurrency, emerging new means of payment (and of course, new attack surfaces). These threats target end-users of online banking services, electronic money, etc., as well as financial organizations and their infrastructure. Both users of PC and mobile devices are exposed to malware and phishing attacks. We encourage you to develop effective measures to improve the financial safety of both end-users and financial organizations.</p>
              <p>2. Automotive security</p>
              <p className="textsmaller">Today cars are not just electro-mechanical vehicles. Car manufacturers incorporate a lot of intelligent technologies to make them safer, smarter, more efficient and comfortable. Automotive security has retained its importance through the past years, and as different independent researches have revealed multiple security issues in the market. Ever-expanding connectivity makes the vehicles not only smarter but also — more vulnerable. There’s also a huge and growing market of devices for the improvement of driving experience, from car scanners to various tuning gadgets. These also might expose your vehicle to additional vulnerabilities. Another vulnerability issue to mention is car-sharing apps and mechanisms and other car-connected applications. The aim of security engineers today is to help car owners and users to keep it safe on the road</p>

              <h1>WORKSHOP 3 - KASPERSKY ACADEMY</h1>
              <p className="textsmaller"> "Automotive industry threat landscape" on 28/09 at 11:00am to 11:30am</p>
              <h1>Criteria</h1>
              <p className="textsmaller">● Propose a service that you think is suitable</p>
              <p className="textsmaller">● Please define the necessary data for the proposing service.</p>
              <p className="textsmaller">● Code and rationally derive the essential value and MVP(Minimum Viable Product or Prototype) of the service.</p> 
              <h1>Examples</h1>
              <p className="textsmaller"> Ex. Geolocation checking when making an online purchase</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Kaspersky;