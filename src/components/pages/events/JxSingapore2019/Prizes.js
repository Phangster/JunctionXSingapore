import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./css/prizes.css";

class Prizes extends Component {
    render() {
        return (
            <div className = "prizes">
                <h2 className = "centered">PRIZES</h2>
                <div className = "grid-subPrice">
                    <h2>JunctionX Prizes</h2>
                    <h2 className="mintColor">1st</h2>
                    <div className = "mainPrize">
                        <p>All team members get a *GOLDEN TICKET</p>
                        <p>$500 worth of Rakuten RapidAPI credits</p>
                        <div className="miniFont">
                            *An opportunity of a lifetime to fly to Helsinki to participate in Hackjunction,
                            Europe's largest hackathon, with 200 € reimbursement and free accomodation over the period of the event
                        </div>
                        <br/><br/><br/>
                    </div>
                </div>

                <div className="grid-1">
                    <div className = "grid-subPrice">
                        <h2>Rakuten Prizes</h2>
                        <div>
                            <h3 className="mintColor">1st</h3>
                            <p>1x Oculus Headset worth $800</p>
                            <p>$300 Cash</p>
                        </div>
                        <div>
                            <h2 className="mintColor">2nd</h2>
                            <p>$125 cash</p>
                        </div>
                        <div>
                            <h2 className="mintColor">3rd</h2>
                            <p>$75 cash</p>
                        </div>
                    </div>

                    <div className = "grid-subPrice">
                        <h2>Shopee Prizes</h2>
                        <div>
                            <h2 className="mintColor">1st</h2>
                            <p>$300 cash</p>
                        </div>
                        <div>
                            <h2 className="mintColor">2nd</h2>
                            <p>$200 cash</p>
                        </div>
                        <div>
                            <h2 className="mintColor">3rd</h2>
                            <p>$100 Cash</p>
                        </div>
                    </div>
                            
                    <div className = "grid-subPrice">
                        <h2>Kaspersky Prizes</h2>
                        <div>
                            <h2 className="mintColor">1st</h2>
                            <p> 3x Mouse</p>
                            <p> 3x Fitness tracker</p>
                        </div>
                        <div>
                            <h2 className="mintColor">2nd</h2>
                            <p> 3x Kaspersky Hoodies </p>
                            <p> 3x Caps </p>
                        </div>
                        <div>
                            <h2 className="mintColor">3rd</h2>
                            <p> 3x Polo T-shirt </p>
                            <p> 3x Drawstring bag</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default Prizes;