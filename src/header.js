import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search_bar';
import logo_img from './images/logo.png';
import './header.css';

const ActiveLink = (props) => {
  let is_active = (props.to === window.location.pathname);
  let li_class = is_active ? 'active' : '';
  return <div className={'nav-item ' + li_class}>
    <Link {...props} className={'nav-link ' + props.className} >{props.children}</Link>
  </div>
}

const Logo = (props) =>
  <Link to='/' className='logo'>
    <img className='hidden-sm-down' src={logo_img} alt="logo" />
    <div className='logo-text slate-text'>
      <h1>
        <span className='slate-text'>resilient</span>
        <strong className='orange-text'> MA </strong>
      </h1>
      <small className='tagline slate-text'>
        Climate Change Clearinghouse for the Commonwealth
      </small>
    </div>
  </Link>;

class MegaMenu extends Component {
  render() {
    return <div className='mega-menu no-select'>
        <header>
          <h1> Supporting the commonwealth through up-to-date climate change science: </h1>
        </header>
        <nav className='row'>
          <section className='col col-md-2'>
            <h2> Tools & Data</h2>
            <hr/>
            <h3><Link to='/data/documents'>Documents</Link></h3>
            <h3><Link to='/data/data'>Data</Link></h3>
            <h3><Link to='/data/maps'>Maps</Link></h3>
            <h3><Link to='/data/maps'>Resource Clearinghouse</Link></h3>
          </section>
          <section className='col col-md-5'>
            <h2>Learn</h2>
            <hr/>
            <div className='row'>
              <section className='col col-md-4'>
                <h3>Explore Sectors:</h3>
                <ul>
                  <li><Link to='/sectors/agriculture'>Agriculture</Link></li>
                  <li><Link to='/sectors/coastal-zones'>Coastal Zones</Link></li>
                  <li><Link to='/sectors/economy'>Economy</Link></li>
                  <li><Link to='/sectors/energy'>Energy</Link></li>
                  <li><Link to='/sectors/forestry'>Forestry</Link></li>
                  <li><Link to='/sectors/infrastructure'>Infrastructure</Link></li>
                  <li><Link to='/sectors/local-government'>Local Government</Link></li>
                  <li><Link to='/sectors/natural-resources-habitats'>Natural Resources / Habitats</Link></li>
                </ul>
              </section>
              <section className='col col-md-4'>
                <h3>&nbsp;</h3>
                <ul>
                  <li><Link to='/sectors/public-health'>Public Health</Link></li>
                  <li><Link to='/sectors/public-safety'>Public Safety / Emergency Response</Link></li>
                  <li><Link to='/sectors/recreation'>Recreation</Link></li>
                  <li><Link to='/sectors/transportation'>Transportation</Link></li>
                  <li><Link to='/sectors/water-resources'>Water Resources</Link></li>
                </ul>
              </section>
              <section className='col col-md-4'>
                <h3>Identify Changes:</h3>
                <ul>
                  <li><Link to='/changes/sea-level-rise'>Sea Level Rise</Link></li>
                  <li><Link to='/changes/extreme-weather'>Extreme Weather</Link></li>
                  <li><Link to='/changes/changes-in-precipitation'>Changes in Precipitation</Link></li>
                  <li><Link to='/changes/rising-temperatures'>Rising Temperatures</Link></li>
                </ul>
              </section>
            </div>
          </section>
          <section className='col col-md-5'>
            <h2>Take Action</h2>
            <hr/>
            <div className='row'>
              <section className='col col-md-4'>
                <h3>MVP Program:</h3>
                <ul>
                  <li><Link to='/mvp'>Other Resources</Link></li>
                  <li><Link to='/mvp'>How to make the most of an MVP grant</Link></li>
                  <li><Link to='/mvp'>MVP FAQs</Link></li>
                  <li><Link to='/mvp'>MVP Best Practices</Link></li>
                  <li><Link to='/mvp'>Outreach</Link></li>
                  <li><Link to='/mvp'>Funding</Link></li>
                </ul>
              </section>
              <section className='col col-md-4'>
                <h3>State Hazard Mitigation and Climate Adaptation Plan:</h3>
                <ul>
                  <li><Link to='/shmcap/'>Our Plan</Link></li>
                  <li><Link to='/shmcap/'>Massachusetts State Action Tracker</Link></li>
                  <li><Link to='/shmcap/'>MVP Program Information</Link></li>
                </ul>
              </section>
              <section className='col col-md-4'>
                <h3>Additional Planning Resources:</h3>
                <ul>
                  <li><Link to='/'>Plan Development</Link></li>
                  <li><Link to='/'>Implementation</Link></li>
                  <li><Link to='/'>Outreach / Education</Link></li>
                </ul>
              </section>
            </div>
          </section>
        </nav>
      </div>;
  }
}

class MegaMenuToggle extends Component {
  render() {
    return <div className='mega-menu-toggle no-select'>
        <span onClick={this.props.onclick} className='fa fa-bars'></span>
        {this.props.show_mega_menu ?
          <span className='down-triangle'>
            <span className='triangle'>&nbsp;</span>
          </span>
          : null }
      </div>;
  }
}

class Header extends Component {
  toggle_mega_menu  (evt) {
    evt.stopPropagation();
    evt.preventDefault();
    this.setState({show_mega_menu: !((this.state || {}).show_mega_menu)});
  }

  render() {
    return <div className='header-wrap'>
      <div className='container header'>
        <Logo />
        <div className='controls'>
          <SearchBar className='' size='sm'/>
          <MegaMenuToggle onclick={(evt) => this.toggle_mega_menu(evt)}
            show_mega_menu={(this.state || {}).show_mega_menu} />
        </div>
      </div>
      { (this.state || {}).show_mega_menu ? <MegaMenu /> : null }
    </div>
  }
}

export default Header;
