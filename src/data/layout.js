import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MapLink from '../utils/map_link';
import DatagrapherLink from '../utils/datagrapher_link';
import Section from '../layouts/section';
import ShowcaseResources from '../layouts/showcase_resources';
import './layout.css';

const SideNav = (props) => {
  return <ul>
    {props.showcased_resources ?
      <li>
        <Link to="#showcase_resources"> Showcased Resources </Link>
      </li>
      : null}
    {(props.sections || []).map((section, indx) => {
      return <li key={indx}>
        <Link to={"#"+section.id}>{section.title}</Link>
        <ul>
          {section.subsections.map((subs, subindx) => {
            return <li key={subindx}><Link to={"#"+subs.id}>{subs.name}</Link></li>;
          })}
        </ul>
      </li>
    })}
  </ul>
}

class Layout extends Component {
  render() {
    let subnav = <SideNav {...this.props} />

    return (
      <div className={this.props.className + ' data-layout'}>
      {this.props.children}
        <div className='row '>
          <div className='main col-12'>
            {this.props.banner}
            <hr/>
            {this.props.featured_data}
          </div>
        </div>
      </div>
    );
  }
};

export default Layout;
