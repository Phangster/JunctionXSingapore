/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import '../css/Venue.css';
import Footer from '../global/Footer'

class Venue extends Component {
  render() {
    return (
        <div className="container"> 
          <div className="containerVenue">
            <h1 className="header">HOW TO GET THERE</h1>
            <div className="textOne">ADDRESS</div>
              <div className="textThree">Rakuten Asia Pte Ltd 138 Market St, #32-01 CapitaGreen, Singapore 048946</div>
            <div className="textOne">TRANSPORTATION</div>
              <div className="textThree">Nearest MRT: Raffles Place (Exit via F), Walk 4 min (300m) to Market St </div>
            <div className="textOne">CARPARK</div>
              <div className="textThree">The venue does not have designated parking. There are some parking areas around but it’s more reliable to arrive by using public transport.</div>
            <div className="textOne">MAP</div>
              <div className = "containerMap"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819926160307!2d103.84793611550867!3d1.281802599065105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da190c2b3223d1%3A0x922bbd5aba9592c2!2sRakuten+Asia+Pte+Ltd!5e0!3m2!1sen!2ssg!4v1562581464126!5m2!1sen!2ssg" frameBorder="0" allowFullScreen></iframe></div>
          </div>
          <Footer />
        </div>
    );
  }
}

export default Venue;