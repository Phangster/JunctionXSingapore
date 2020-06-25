import React, { Component } from "react"
import JunctionBlack from '../../images/junction_img/JunctionX_nav.png'
import { Link } from 'react-router-dom'


//Note:
//<Link> is essentially a wrapper for <a> tag hence it will get the css properties of <a>
//If <Link> is placed at outermost tag, it will not have <a> css properties. This has been intentionally done for the "Home", "Events", "Community" titles

class MenuLinks extends Component {
    render() {
        return ( 
            <div className = { this.props.menuStatus } id = 'menu' >
                <div id = "navLogo" onClick = { this.props.menuToggle }>
                    <Link to = "/">< img className = "logoSize NavLogo" src = { JunctionBlack } /></Link>
                </div>

                <div id = "menuLinkItems" >
                    <p className = "header-css"> Home </p>
                    <ul id = "menuLinkItem" onClick = { this.props.menuToggle }>
                        <li><Link to = "/"> Home</Link></li>
                        <li><Link to = "/OurStory"> Our Story </Link></li>
                    </ul>

                    <p className = 'header-css'> Team </p> 
                    <ul id = "menuLinkItem" onClick = { this.props.menuToggle }>
                        <li><Link to = "/Team"> 2020 Team </Link></li>
                        <li><Link to = "/Team2019"> 2019 Team </Link></li>
                    </ul>

                    <p className = 'header-css'> Events </p> 
                    <ul id = "menuLinkItem" onClick = { this.props.menuToggle }>
                        <li><Link to = "/JunctionxAsia2020"> JunctionX Asia 2020 </Link></li>
                        <li><Link to = "/JunctionxSingapore2019"> JunctionX Singapore 2019 </Link></li>
                        <li><Link to = "/Calendar"> Calendar </Link></li>
                    </ul>

                    <p className = 'header-css'> Community </p>
                    <ul id = "menuLinkItem" onClick = { this.props.menuToggle }>
                        <li><Link to = "/OurPartners"> Our Partners </Link></li>
                        <li><Link to = "/ForPartners"> For Partners </Link></li>
                        <li><Link to = "/ForParticipants"> For Participants </Link></li>
                        <li><Link to = "/ForVolunteers"> For Volunteers </Link></li>
                    </ul>

                    <p className = 'header-css'> Others </p> 
                    <ul id = "menuLinkItem" onClick = { this.props.menuToggle }>
                        <li><a href = "https://blog.hackjunction.com/"> Blog </a></li>
                        <li><Link to = "/ContactUs"> Contact Us </Link>
                        </li> { /* <li><Link to="/gallery">Gallery</Link></li> */ } 
                    </ul> 
                </div>
            </div>
        )
    }
}

export default MenuLinks