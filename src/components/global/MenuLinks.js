import React, { Component } from "react";
import JunctionBlack from '../../images/junction_img/JunctionX_nav.png'

class MenuLinks extends Component {
    render() {
      return (
          <div className={this.props.menuStatus} id='menu'>
          <img className = "logoSize NavLogo" src={JunctionBlack} alt= "JunctionLogo"/>
            <ul>
            <li><a exact href="/" onClick={this.props.menuToggle}>Home</a></li>
            <li><a href="https://singapore.hackjunction.com/partners" onClick={this.props.menuToggle}>Partners</a></li>
            <li><a href='https://singapore.hackjunction.com/register' onClick={this.props.menuToggle}>Registration</a></li>
            <li><a href='https://singapore.hackjunction.com/tracks' onClick={this.props.menuToggle}>Tracks and Prizes</a></li>
            <li><a href='https://singapore.hackjunction.com/schedule' onClick={this.props.menuToggle}>Schedule</a></li>
            <li><a href='https://singapore.hackjunction.com/venue' onClick={this.props.menuToggle}>Venue</a></li>
            <li><a href='https://singapore.hackjunction.com/submission' onClick={this.props.menuToggle}>Submission</a></li>
            <li><a href='https://singapore.hackjunction.com/rules' onClick={this.props.menuToggle}>Rules</a></li>
            <li><a href="https://blog.hackjunction.com/">Blog</a></li>
            <li></li> 
            </ul>
          </div>
      )
    }
  }

export default MenuLinks