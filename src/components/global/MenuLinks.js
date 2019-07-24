import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MenuLinks extends Component {
    render() {
      return (
          <div className={this.props.menuStatus} id='menu'>
            <ul>
            <li><NavLink exact to="/" onClick={this.props.menuToggle}>HOME</NavLink></li>
            {/* <li><NavLink to="/about">ABOUT</NavLink></li> */}
            <li><NavLink to='/register' onClick={this.props.menuToggle}>REGISTER</NavLink></li>
            <li><NavLink to='/tracks' onClick={this.props.menuToggle}>TRACKS</NavLink></li>
            <li><NavLink to='/schedule' onClick={this.props.menuToggle}>SCHEDULE</NavLink></li>
            <li><NavLink to='/venue' onClick={this.props.menuToggle}>VENUE</NavLink></li>
            <li><NavLink to='/submission' onClick={this.props.menuToggle}>SUBMISSION</NavLink></li>
            <li><NavLink to='/rules' onClick={this.props.menuToggle}>RULES</NavLink></li>
            {/* <li><NavLink to='/faq' onClick={this.props.menuToggle}>FAQ</NavLink></li> */}
              <li><a href="https://blog.hackjunction.com/">BLOG</a></li> 
            </ul>
          </div>
      )
    }
  }

export default MenuLinks