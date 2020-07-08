import React, { Component } from "react"
import JunctionBlack from '../../images/junction_img/JunctionX_nav.png'
import { Link } from 'react-router-dom'


class MenuLinks extends Component {
    render() {
        return ( 
            <div className = { this.props.menuStatus } id = 'menu' >
                <div id = "navLogo" onClick = { this.props.menuToggle }>
                    <Link to = "/">< img className = "logoSize NavLogo" src = { JunctionBlack } /></Link>
                </div>

                <div className = "fontWeight" id = "menuLinkItems" >
                    <p className = "menuHeader"> Home </p>
                    <ul id = "menuLinkItem" onClick = { this.props.menuToggle }>
                        <li><Link to = "/" className = "menuLink"> Home </Link></li>
                        <li><Link to = "/OurStory" className = "menuLink"> Our Story </Link></li>
                    </ul>

                    <p className = 'menuHeader'> Team </p> 
                    <ul id = "menuLinkItem" onClick = { this.props.menuToggle }>
                        <li><Link to = "/Team" className = "menuLink"> 2020 Team </Link></li>
                        <li><Link to = "/Team2019" className = "menuLink"> 2019 Team </Link></li>
                    </ul>

                    <p className = 'menuHeader'> Events </p> 
                    <ul id = "menuLinkItem" onClick = { this.props.menuToggle }>
                        <li><Link to = "/JunctionxAsia2020" className = "menuLink"> JunctionX Asia 2020 </Link></li>
                        <li><Link to = "/JunctionxSingapore2019" className = "menuLink"> JunctionX Singapore 2019 </Link></li>
                        <li><Link to = "/Calendar" className = "menuLink"> Calendar </Link></li>
                    </ul>

                    <p className = 'menuHeader'> Community </p>
                    <ul id = "menuLinkItem" onClick = { this.props.menuToggle }>
                        <li><Link to = "/OurPartners" className = "menuLink"> Our Partners </Link></li>
                        <li><Link to = "/ForPartners" className = "menuLink"> For Partners </Link></li>
                        <li><Link to = "/ForParticipants" className = "menuLink"> For Participants </Link></li>
                        <li><Link to = "/ForVolunteers" className = "menuLink"> For Volunteers </Link></li>
                    </ul>

                    <p className = 'menuHeader'> Others </p> 
                    <ul id = "menuLinkItem" onClick = { this.props.menuToggle }>
                        <li><a href = "https://blog.hackjunction.com/" className = "menuLink"> Blog </a></li>
                        <li><Link to = "/ContactUs" className = "menuLink"> Contact Us </Link>
                        </li> { /* <li><Link to="/gallery">Gallery</Link></li> */ } 
                    </ul> 
                </div>
            </div>
        )
    }
}

export default MenuLinks