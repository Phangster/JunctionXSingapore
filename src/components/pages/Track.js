import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import '../css/Track.css';
import Footer from '../global/Footer'
import Smartnation from '../../images/track_img/smart-nation-singapore.jpg'
import Anonymous from '../../images/track_img/anonymous.jpg'
import Api from '../../images/track_img/api-prog.jpg'

class Track extends Component {
  render() {
    return (
        <div className = "container"> 
            <div className = "containerTrack">
            <h1>TRACKS & PRIZES</h1> 
                <div className = "wrappertrack">
                    <div className = "grid-container">
                        <div>
                            <div className = "grid"><NavLink to='/apihack' onClick={this.props.menuToggle}><img className="image1" src={Api} alt="Api Hack " /></NavLink></div>
                            <p>API HACK</p>
                        </div>
                        <div>
                            <div className = "grid"><NavLink to='/smartnation' onClick={this.props.menuToggle}><img className="image1" src={Smartnation} alt="Smart Nation" /></NavLink></div>
                            <p>SMART NATION</p>
                        </div>
                        <div>
                            <div className = "grid"><NavLink to='/mystery' onClick={this.props.menuToggle}><img className="image1 anomynous" src={Anonymous} alt="Anonymous" /></NavLink></div>
                            <p>MYSTERY HACK</p>
                        </div>
                    </div>
                </div>
                <div className = "wrappertrack back-ground">
                <div className = "containerPrize">
                    <h1>PRIZES</h1>
                        <div className = "grid-prize">
                            <div className = "grid-subPrice">
                                <h1>JunctionX Prizes</h1>
                                <div>
                                    <h3 className="textColor">1st</h3>
                                    <p>All team members gets a the *GOLDEN TICKET</p>
                                    <p>$250 worth of Rakuten RapidAPI credits</p>
                                    <p className="smallWords">* An opportunity of the life time to fly to Helsinki to Hackjunction to participate in Europe's largest hackathon with 200 Euros reimbursement and free accomodation over the period of the event</p>
                                </div>
                                <div>
                                    <h3 className="textColor">2nd</h3>
                                    <p>$150 worth of Rakuten RapidAPI credits</p>
                                </div>
                                <div>
                                    <h3 className="textColor">3rd</h3>
                                    <p>$100 worth of Rakuten RapidAPI credits</p>
                                </div>
                            </div>
                            <div className = "grid-subPrice">
                                <h1>Partner Prizes</h1>
                                <div>
                                    <h3>Api Hack</h3>
                                    <p>TBC</p>
                                </div>
                                <div>
                                    <h3>Smart Nation Hack</h3>
                                    <p>TBC</p>
                                </div>
                                <div>
                                    <h3>Mystery Hack</h3>
                                    <p>TBC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer /> 
            </div>
        </div>
    );
  }
}

export default Track;