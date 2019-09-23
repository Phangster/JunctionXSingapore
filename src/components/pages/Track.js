import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import '../css/Track.css';
import Footer from '../global/Footer'
import Smartcommerce from '../../images/track_img/smartcommerce.jpg'
import Security from '../../images/track_img/security.jpg'
import ARVR from '../../images/track_img/arvr.jpg'
import Rakuten from '../../images/partners_img/Rakuten.png'
import Shopee from '../../images/partners_img/Shopee.png'
import Kaspersky from '../../images/partners_img/kaspersky_white.png'



class Track extends Component {
  render() {
    return (
        <div className = "container"> 
            <div className = "containerTrack">
            <h1>TRACKS & PRIZES</h1> 
                <div className = "wrappertrack">
                    <div className = "grid-container">
                        <div>
                            <img className= "sponsor" src={Rakuten} alt="Rakuten"/>
                            <div className = "grid"><NavLink to='/apihack' onClick={this.props.menuToggle}><img className="image1" src={ARVR} alt="AR/VR " /></NavLink></div>
                            <p>Augmented Reality and Virtual Reality</p>
                        </div>
                        <div>
                            <img className= "sponsor" src={Shopee} alt="Shopee"/>
                            <div className = "grid"><NavLink to='/smartnation' onClick={this.props.menuToggle}><img className="image1" src={Smartcommerce} alt="Smartcommerce" /></NavLink></div>
                            <p>The future of smart Ecommerce</p>
                        </div>
                        <div>
                            <img className= "sponsor" src={Kaspersky} alt="Kaspersky" />
                            <div className = "grid"><NavLink to='/mystery' onClick={this.props.menuToggle}><img className="image1 anomynous" src={Security} alt="Security" /></NavLink></div>
                            <p>Security in Finance and Mobility</p>
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