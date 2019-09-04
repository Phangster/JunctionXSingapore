import React, { Component } from "react";
import JunctionBlack from '../../images/junction_img/JunctionX_nav.png'

class MenuLinks extends Component {
    render() {
      return (
          <div className={this.props.menuStatus} id='menu'>
          <a exact href="https://singapore.hackjunction.com"><img className = "logoSize NavLogo" src={JunctionBlack} alt= "JunctionLogo"/></a>
          <p className='header-css'>Home</p>
            <ul>
              <li><a href='https://singapore.hackjunction.com/register' onClick={this.props.menuToggle}>Registration</a></li>
              <li><a href='https://singapore.hackjunction.com/tracks' onClick={this.props.menuToggle}>Tracks and Prizes</a></li>
              <li><a href='https://singapore.hackjunction.com/schedule' onClick={this.props.menuToggle}>Schedule</a></li>
              <li><a href='https://singapore.hackjunction.com/venue' onClick={this.props.menuToggle}>Venue</a></li>
              <li><a href="https://singapore.hackjunction.com/partners" onClick={this.props.menuToggle}>Partners</a></li>
            </ul>
          <p className='header-css'>Event Day</p>
            <ul>
              <li><a href='https://singapore.hackjunction.com/submission' onClick={this.props.menuToggle}>Submission</a></li>
              <li><a href='https://singapore.hackjunction.com/rules' onClick={this.props.menuToggle}>Rules</a></li>
              <li><a href='https://singapore.hackjunction.com/hiring' onClick={this.props.menuToggle}>Hiring</a></li>
              <li></li> 
            </ul>
          <p className='header-css'>More Information</p>
            <ul className='bottom-margin'>
              <li><a href='https://singapore.hackjunction.com/team' onClick={this.props.menuToggle}>Team</a></li>
              <li><a href="https://blog.hackjunction.com/">Blog</a></li>
            </ul>
          </div>
      )
    }
  }

export default MenuLinks