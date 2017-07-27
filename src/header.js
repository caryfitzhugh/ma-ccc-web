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

const NavBlocks = (props) =>
  <div className='nav-blocks hidden-sm-down'>
    <div className={'nav-block col-xs ' + (props.nav_block === 'explore_sectors' ? 'active': null)}>
      <div className='content'>
        Explore Sectors
      </div>
    </div>
    <div className={'nav-block col-xs ' + (props.nav_block === 'identify_changes' ? 'active': null)}>
      <div className='content'>
          Identify Changes
      </div>
    </div>
    <div className={'nav-block col-xs ' + (props.nav_block === 'take_action' ? 'active': null)}>
      <div className='content'>
        Take Action
      </div>
    </div>
  </div>;

class Header extends Component {
  render() {
    return <div className='container header'>
      <Logo/>
      <NavBlocks nav_block={this.props.nav_block || {}}/>
    </div>
  }
}

export default Header;
