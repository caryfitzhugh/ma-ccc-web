import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search_bar';
import logo_img from './images/logo.png';
import './header.css';

const Logo = (props) =>
  <Link to='/' className='logo'>
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
  </Link>;

const NavBlocks = (props) =>
  <div className='no-select nav-blocks hidden-md-down'>
    <Link to={props.anchors ? '/#explore_sectors' : '/sectors'} className={'nav-block col-xs ' + (props.nav_block === 'explore_sectors' ? 'active': null)}>
      <div className='content'>
        Explore Sectors
      </div>
    </Link>
    <Link to={props.anchors ? '/#identify_changes': '/changes'} className={'nav-block col-xs ' + (props.nav_block === 'identify_changes' ? 'active': null)}>
      <div className='content'>
          Identify Changes
      </div>
    </Link>
    <Link to={props.anchors ? '/#take_action' : "/actions"} className={'nav-block col-xs ' + (props.nav_block === 'take_action' ? 'active': null)}>
      <div className='content'>
        Take Action
      </div>
    </Link>
  </div>;

class Header extends Component {
  render() {
    return <div className='header-wrap'>
      <div className='container header'>
        <Logo/>
        <NavBlocks anchors={this.props.anchors} nav_block={this.props.nav_block || {}}/>
      </div>
      {this.props.hide_subnav ?  null : (
      <div className='container-fluid subnav'>
        <div className='container'>
          <div className='nav'>
            <div className='nav-item'>
              <Link to='#' className='nav-link'>Maps</Link>
            </div>
            <div className='nav-item'>
              <Link to='#' className='nav-link'>Data</Link>
            </div>
            <div className='nav-item'>
              <Link to='#' className='nav-link'>Documents</Link>
            </div>
          </div>
          <SearchBar className='' size='sm'/>
        </div>
      </div>)}
    </div>
  }
}

export default Header;
