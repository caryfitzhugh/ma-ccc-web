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
  <div className='no-select nav-blocks hidden-md-down'>
    <a href={props.local_links ? '#explore_sectors' : '/explore-sectors'} className={'nav-block col-xs ' + (props.nav_block === 'explore_sectors' ? 'active': null)}>
      <div className='content'>
        Explore Sectors
      </div>
    </a>
    <a href={props.local_links ? '#identify_changes' : '/identify-changes'} className={'nav-block col-xs ' + (props.nav_block === 'identify_changes' ? 'active': null)}>
      <div className='content'>
          Identify Changes
      </div>
    </a>
    <a href={props.local_links ? '#take_action' : '/take-action'} className={'nav-block col-xs ' + (props.nav_block === 'take_action' ? 'active': null)}>
      <div className='content'>
        Take Action
      </div>
    </a>
  </div>;

class Header extends Component {
  render() {
    return <div className='container header'>
      <Logo/>
      <NavBlocks local_links={this.props.local_links} nav_block={this.props.nav_block || {}}/>
    </div>
  }
}

export default Header;
