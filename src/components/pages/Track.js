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
                            <div className = "grid"><NavLink to='/rakuten' onClick={this.props.menuToggle}><img className="image1" src={ARVR} alt="AR/VR " /></NavLink></div>
                            <p>Augmented Reality and Virtual Reality</p>
                        </div>
                        <div>
                            <img className= "sponsor" src={Shopee} alt="Shopee"/>
                            <div className = "grid"><NavLink to='/shopee' onClick={this.props.menuToggle}><img className="image1" src={Smartcommerce} alt="Smartcommerce" /></NavLink></div>
                            <p>The future of smart Ecommerce</p>
                        </div>
                        <div>
                            <img className= "sponsor" src={Kaspersky} alt="Kaspersky" />
                            <div className = "grid"><NavLink to='/kaspersky' onClick={this.props.menuToggle}><img className="image1 anomynous" src={Security} alt="Security" /></NavLink></div>
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
                                    <p>$500 worth of Rakuten RapidAPI credits</p>
                                    <p className="smallWords">* An opportunity of the life time to fly to Helsinki to Hackjunction to participate in </p>
                                    <p className="smallWords">Europe's largest hackathon with 200 Euros reimbursement and free accomodation over the period of the event</p>
                                </div>
                            </div>
                            <div></div>
                            <div className="grid-track">
                                <div className = "grid-subPrice">
                                    <h1>Rakuten Prizes</h1>
                                    <div>
                                        <h3 className="textColor">1st</h3>
                                        <p>1x Oculus Headset worth $800</p>
                                        <p>$300 Cash</p>
                                    </div>
                                    <div>
                                        <h3 className="textColor">2nd</h3>
                                        <p>$125 cash</p>
                                    </div>
                                    <div>
                                        <h3 className="textColor">3rd</h3>
                                        <p>$75 Cash</p>
                                    </div>
                                </div>
                                <div className = "grid-subPrice">
                                    <h1>Shopee Prizes</h1>
                                    <div>
                                        <h3 className="textColor">1st</h3>
                                        <p>$300 cash</p>
                                    </div>
                                    <div>
                                        <h3 className="textColor">2nd</h3>
                                        <p>$200 cash</p>
                                    </div>
                                    <div>
                                        <h3 className="textColor">3rd</h3>
                                        <p>$100 Cash</p>
                                    </div>
                                </div>
                                <div className = "grid-subPrice">
                                    <h1>Kaspersky Prizes</h1>
                                    <div>
                                        <h3 className="textColor">1st</h3>
                                        <p> 3x Mouse</p>
                                        <p> 3x Fitness tracker</p>
                                    </div>
                                    <div>
                                        <h3 className="textColor">2nd</h3>
                                        <p> 3x Kaspersky Hoodies </p>
                                        <p> 3x Caps </p>
                                    </div>
                                    <div>
                                        <h3 className="textColor">3rd</h3>
                                        <p> 3x Polo T-shirt </p>
                                        <p> 3x Drawstring bag</p>
                                    </div>
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