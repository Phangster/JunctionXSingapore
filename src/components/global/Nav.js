import React, { Component } from "react";
import './css/Nav.css';
import JunctionLogo from '../../images/junction_img/JunctionX_logos_white.png'
import Junction from '../../images/junction_img/JunctionX_logos-wordmark-white.svg'
import MenuLinks from '../global/MenuLinks'
import {Link} from 'react-router-dom'

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
    this._menuToggle = this._menuToggle.bind(this);
    this._handleDocumentClick = this._handleDocumentClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    this.setState({scroll: window.scrollY});
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top ? 
    document.body.style.paddingTop = '4.1rem' :
    document.body.style.paddingTop = '4.1rem';
  }

  componentDidMount() {
    document.addEventListener('click', this._handleDocumentClick, false);
    const el = document.querySelector('nav');
    this.setState({top: el.offsetTop, height: el.offsetHeight});
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this._handleDocumentClick, false);
  }

  _handleDocumentClick(e) {
    if (!this.refs.root.contains(e.target) && this.state.isOpen === true) {
      this.setState({
      isOpen: false
    });
    };
  }

  _menuToggle(e) {
    e.stopPropagation();
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let menuStatus = this.state.isOpen ? 'isopen' : '';
    return (
      <div ref="root">
        <nav className={this.state.scroll > this.state.top ? "fixed-nav" : "fixed-nav"}>
        <div className="menubar">
          <div className="hambclicker" onClick={ this._menuToggle }></div>
          <div id="hambmenu" className={ menuStatus }>
            <span></span><span></span><span></span><span></span></div>
            <div className="title">
              <span>{ this.props.title }</span>
          </div>
          {/* <a exact href="https://singapore.hackjunction.com"><img className="imageHeading" src={Junction} alt="Junction" /></a> */}
          <div >
            <Link to="/"><img className="imageHeading" src={Junction} alt="Junction"/></Link>
            <Link to="/"><img className="imageNav" src={JunctionLogo} alt="Junction Logo" /></Link>
          </div>
        </div>
        <MenuLinks menuStatus={ menuStatus } menuToggle={(e) => this._menuToggle(e)}/>
        </nav>
      </div>
    )
  }
}
  
  export default Nav;