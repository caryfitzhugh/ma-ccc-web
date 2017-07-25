import React, { Component } from 'react';
import logo_img from './images/logo.png';
import './header.css';

const Logo = (props) =>
  <div className='logo'>
    <img className='hidden-sm-down' src={logo_img} alt="logo" />
    <div className='logo-text slate-text'>
      <h1>
        <em className='orange-text'> MA </em>
        CCC
      </h1>
      <small>
        <strong>Massachusetts</strong>
        Climate Change Clearinghouse
      </small>
    </div>
  </div>;


class Header extends Component {
  render() {
    return <div className='header'>
      <Logo/>
    </div>
  }
}

export default Header;
