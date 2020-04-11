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
              <li><Link to="/" onClick={this.props.menuToggle}>Our Story</Link></li>
              <li><Link to="/register" onClick={this.props.menuToggle}>Registration</Link></li>
              <li><Link to="/tracks" onClick={this.props.menuToggle}>Tracks and Prizes</Link></li>
              <li><Link to="/schedule" onClick={this.props.menuToggle}>Schedule</Link></li>
              <li><Link to="/venue" onClick={this.props.menuToggle}>Venue</Link></li>
              <li><Link to="/partners" onClick={this.props.menuToggle}>Partners</Link></li>
            </ul>
          <Link to="/"><p className='header-css' onClick={this.props.menuToggle}>Event Day</p></Link>
            <ul>
            <li><Link to="/submission" onClick={this.props.menuToggle}>Submission</Link></li>
            <li><Link to="/rules" onClick={this.props.menuToggle}>Rules</Link></li>
            <li><Link to="/hiring" onClick={this.props.menuToggle}>Hiring</Link></li>
            </ul>
          <Link to="/"><p className='header-css' onClick={this.props.menuToggle}>More</p></Link>
            <ul className='bottom-margin'>
              <li><Link to="/team" onClick={this.props.menuToggle}>Team</Link></li>
              <li><Link to="/hiring" onClick={this.props.menuToggle}>Hiring</Link></li>
              <li><a href="https://blog.hackjunction.com/">Blog</a></li>
            </ul>
          </div>
      )
    }
  }

export default MenuLinks