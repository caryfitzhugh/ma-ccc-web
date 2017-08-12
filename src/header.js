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
        <em className='slate-text'> MA </em>
        <span className='gray-text'>CCC</span>
      </h1>
      <small className='orange-text'>
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
/*
import eea_bg from './images/eea_bg.png';
const EEABanner = () => {
 return <div className='eea-banner container-fluid' style={{'backgroundImage': `url(${eea_bg})`}}>
        <h1>
          <a href='http://eea.mass.gov'>
            <span className='eea-icons eea-icons-stateseal' ></span>
            <span className='hidden-sm-down'> Energy and Environmental Affairs </span>
            <span className='hidden-md-up'> EEA </span>
          </a>
        </h1>
      </div>
};*/
class Header extends Component {
  render() {
    return <div className='header-wrap'>
      <div className='container header'>
        <Logo />
        <NavBlocks anchors={this.props.anchors} nav_block={this.props.nav_block || {}}/>
      </div>
      {this.props.hide_subnav ?  null : (
      <div className='container-fluid subnav'>
        <div className='container'>
          <div className='nav'>
            <div className='nav-item'>
              <Link to={this.props.anchors ? '/#maps' : '/data/maps'} className='nav-link'>Maps</Link>
            </div>
            <div className='nav-item'>
              <Link to={this.props.anchors ? '/#data' : '/data/data'} className='nav-link'>Data</Link>
            </div>
            <div className='nav-item'>
              <Link to={this.props.anchors ? '/#documents' : '/data/documents'} className='nav-link'>Documents</Link>
            </div>
          </div>
          <SearchBar className='' size='sm'/>
        </div>
      </div>)}
    </div>
  }
}

export default Header;
