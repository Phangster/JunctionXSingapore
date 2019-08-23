import React, { Component } from "react";
import '../css/Registration.scss';
import Footer from '../global/Footer'
import individual from '../../images/junction_img/individual.jpg'
import team from '../../images/junction_img/team.jpg'


class Registration extends Component {
  render() {
    return (
        <div class = "container"> 
            <div className="containerRegistration">
                <h1>REGISTRATION</h1>
                <div className = "register-link">
                    <div className = "register-individual">
                        <div className = "content-register">
                            <div className="textOne">INDIVIDUAL</div>
                            <div className="paragraph-register">
                                <div className="textTwo">The only failure one man should fear, is the failure to do his best. You do your best, just leave us the rest! We'll find you a team!</div>
                            </div>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfXAggEafwx4O7TA2wMLml5i_hv3x7alIQNNnPocpVesPbOWA/viewform?usp=pp_url">
                                <button class="btn btn--cyan">REGISTER HERE!</button>
                            </a>
                        </div>
                        <img src={individual} alt="Individual Registration" />
                    </div>

                    <div className = "register-team">
                        <div className = "content-register">
                            <div className="textOne">TEAM</div>
                            <div className="paragraph-register">
                                <div className="textTwo">Team work makes the dream work. If you already have a team, you can sign up and hack together as a team!</div>
                            </div>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfXAggEafwx4O7TA2wMLml5i_hv3x7alIQNNnPocpVesPbOWA/viewform?usp=pp_url">
                                <button class="btn btn--cyan">REGISTER HERE!</button>
                            </a>
                        </div>
                        <img src={team} alt="Team Registration" />
                    </div>
                </div>
            </div>
            <Footer /> 
        </div>
    );
  }
}

export default Registration;