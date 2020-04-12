import React, { Component } from "react";
import JunctionBlack from '../../images/junction_img/JunctionX_nav.png'
import {Link} from 'react-router-dom'


//Note:
//<Link> is essentially a wrapper for <a> tag hence it will get the css properties of <a>
//If <Link> is placed at outermost tag, it will not have <a> css properties. This has been intentionally done for the "Home", "Events", "Community" titles

class MenuLinks extends Component {
    render() {
      return (
          <div className={this.props.menuStatus} id='menu'>
          <Link to="/"><img className = "logoSize NavLogo" src={JunctionBlack} alt= "JunctionLogo"/></Link>

          <Link to="/"><p className='header-css' onClick={this.props.menuToggle}>Home</p></Link>
            <ul>
              <li><Link to="/OurStory" onClick={this.props.menuToggle}>Our Story</Link></li>
              <li><Link to="/Calendar" onClick={this.props.menuToggle}>Calendar</Link></li>
              <li><Link to="/Team" onClick={this.props.menuToggle}>Team</Link></li>

              <li>(below to be removed)</li>
              <li><Link to="/Register" onClick={this.props.menuToggle}>Registration</Link></li>
              <li><Link to="/Tracks" onClick={this.props.menuToggle}>Tracks and Prizes</Link></li>
              <li><Link to="/Schedule" onClick={this.props.menuToggle}>Schedule</Link></li>
              <li><Link to="/Venue" onClick={this.props.menuToggle}>Venue</Link></li>
              <li><Link to="/Partners" onClick={this.props.menuToggle}>Partners</Link></li>
            </ul>
          <p className='header-css'>Events</p>
            <ul>
            <li><Link to="/JunctionxAsia2020" onClick={this.props.menuToggle}>JunctionX Asia 2020</Link></li>
            <li><Link to="/JunctionxSingapore2019" onClick={this.props.menuToggle}>JunctionX Singapore 2019</Link></li>

            <li>(below to be removed)</li>
            <li><Link to="/Submission" onClick={this.props.menuToggle}>Submission</Link></li>
            <li><Link to="/Rules" onClick={this.props.menuToggle}>Rules</Link></li>
            <li><Link to="/Hiring" onClick={this.props.menuToggle}>Hiring</Link></li>
            </ul>

            <p className='header-css'>Community</p>
            <ul>
              <li><Link to="/OurPartners" onClick={this.props.menuToggle}>Our Partners</Link></li>
              <li><Link to="/ForPartners" onClick={this.props.menuToggle}>For Partners</Link></li>
              <li><Link to="/ForParticipants" onClick={this.props.menuToggle}>For Participants</Link></li>
              <li><Link to="/ForVolunteers" onClick={this.props.menuToggle}>For Volunteers</Link></li>
            </ul>


            <p className='header-css'>Others</p>
            <ul className='bottom-margin'>
              <li><a href="https://blog.hackjunction.com/">Blog</a></li>
              <li><Link to="/SocialMedia" onClick={this.props.menuToggle}>Contact Us</Link></li>
            </ul>
          </div>
      )
    }
  }

export default MenuLinks