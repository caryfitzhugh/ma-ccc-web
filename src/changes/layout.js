import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MapLink from '../utils/map_link';
import DatagrapherLink from '../utils/datagrapher_link';
import DefaultLayout from '../layouts/default';
import Section from '../layouts/section';
import ShowcaseResources from '../layouts/showcase_resources';
import {Footnotes} from '../utils/footnotes';
import './layout.css';

const ViewMapWithSector = (props) =>
  <MapLink className='btn btn-block btn-primary'
    active_layers={props.active_layers}
    >
    View Map
  </MapLink>;

const ViewDatagrapherWithSector = (props) =>
  <DatagrapherLink className='btn btn-block btn-primary'
    file={props.datagrapher_file}
    >
    View Datagrapher
  </DatagrapherLink>;

const SideNav = (props) => {
  return <ul>
    {props.showcased_resources ?
      <li>
        <Link to="#showcase_resources"> Showcased Resources </Link>
      </li>
      : null}
    {props.sections.map((section, indx) => {
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
    return (
      <DefaultLayout
        className='changes-detail'
        nav_actions={[
          <ViewMapWithSector key='changes-map-button' {...this.props}/>,
          <ViewDatagrapherWithSector key='changes-datagrapher-button' {... this.props} />
        ]}

        subnav={<SideNav {...this.props}/>}
        >

        <h1>{this.props.title}</h1>
        <img alt={this.props.title + ' example'} src={this.props.image} className='col-12 col-md-5 float-right'/>
        {this.props.children}

        {this.props.showcased_resources ?
          <ShowcaseResources title={this.props.showcased_resources.title}
            id='showcase_resources'
            collection_name={this.props.showcased_resources.collection_name}
            content={this.props.showcased_resources.content} />
          : null}

         {this.props.sections.map((section, indx) => {
            return <Section key={indx} {...section}/>;
         })}

         <Footnotes notes={this.props.footnotes || []}/>
      </DefaultLayout>
    );
  }
};

export default Layout;
