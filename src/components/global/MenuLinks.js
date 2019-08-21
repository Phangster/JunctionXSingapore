import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import JunctionBlack from '../../images/junction_img/JunctionX_nav.png'

class MenuLinks extends Component {
    render() {
      return (
          <div className={this.props.menuStatus} id='menu'>
          <img className = "logoSize NavLogo" src={JunctionBlack} alt= "JunctionLogo"/>
            <ul>
            <li><NavLink exact to="/" onClick={this.props.menuToggle}>Home</NavLink></li>
            <li><NavLink to="/partners" onClick={this.props.menuToggle}>Partners</NavLink></li>
            <li><NavLink to='/register' onClick={this.props.menuToggle}>Registration</NavLink></li>
            <li><NavLink to='/tracks' onClick={this.props.menuToggle}>Tracks and Prizes</NavLink></li>
            <li><NavLink to='/schedule' onClick={this.props.menuToggle}>Schedule</NavLink></li>
            <li><NavLink to='/venue' onClick={this.props.menuToggle}>Venue</NavLink></li>
            <li><NavLink to='/submission' onClick={this.props.menuToggle}>Submission</NavLink></li>
            <li><NavLink to='/rules' onClick={this.props.menuToggle}>Rules</NavLink></li>
            <li><a href="https://blog.hackjunction.com/">Blog</a></li>
            <li></li> 
            </ul>
          </div>
      )
    }
  }

export default MenuLinks