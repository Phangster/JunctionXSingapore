import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./prizes.css";

import Footer from '../../../global/Footer'
import Smartcommerce from '../../../../images/JxSingapore2019/track_img/smartcommerce.jpg'
import Security from '../../../../images/JxSingapore2019/track_img/security.jpg'
import ARVR from '../../../../images/JxSingapore2019/track_img/arvr.jpg'
import Rakuten from '../../../../images/JxSingapore2019/partners_img/Rakuten.png'
import Shopee from '../../../../images/JxSingapore2019/partners_img/Shopee.png'
import Kaspersky from '../../../../images/JxSingapore2019/partners_img/kaspersky_white.png'


class Prizes extends Component {
    render() {
        return (
            <div className = "containerMain">
                <div className = "wrappertrack">
                    <div className = "containerPrize">
                        <h1>PRIZES</h1>
                        <div className = "grid-prize">
                            <div className = "grid-subPrice">
                                <h1>JunctionX Prizes</h1>
                                <h3 className="textColor">1st</h3>
                                <div className = "mainPrize">
                                    <p>All team members get a *GOLDEN TICKET</p>
                                    <p>$500 worth of Rakuten RapidAPI credits</p>
                                    <p className="smallContent">
                                        *An opportunity of the life time to fly to Helsinki to Hackjunction to participate in 
                                        Europe's largest hackathon with 200 € reimbursement and free accomodation over the period of the event
                                    </p>
                                </div>
                            </div>
                        </div>

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
        );
    }
  }
  
  export default Prizes;