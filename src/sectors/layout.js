import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MapLink from '../utils/map_link';
import DatagrapherLink from '../utils/datagrapher_link';
import DefaultLayout from './../layouts/default';
import Subsection from './subsection';
import ShowcaseResources from './showcase_resources';
import './layout.css';

const ViewMapWithSector = (props) =>
  <MapLink className='btn btn-block btn-primary'
    params={{sector: props.sector_name}}
    >
    View Map For This Sector
  </MapLink>;

const ViewDatagrapherWithSector = (props) =>
  <DatagrapherLink className='btn btn-block btn-primary'
    params={{sector: props.sector_name}}
    >
    View Datagrapher
  </DatagrapherLink>;

const SideNav = (props) => {
  let id_changes = <li>
      <Link to="#identify_changes"> Identify Changes </Link>
      <ul>
      {Object.keys(props.identified_changes).map ((key) => {
          let text = props.identified_changes[key].title;
          return <li key={key}> <Link to={key}>{text}</Link></li>;
      })}
      </ul>
    </li>;

  return <ul>
    {props.showcased_resources ?
      <li>
        <Link to="#showcase_resources"> Showcased Resources </Link>
      </li>
      : null}

    {props.identified_changes ? id_changes : null}

    <li>
      <Link to="#take_action"> Take Action </Link>
      <ul>
        {props.planning ? <li> <Link to="#planning"> Planning</Link></li> : null}
        {props.implementation ?  <li> <Link to="#implementation"> Implementation</Link></li> : null}
        {props.outreach ? <li> <Link to="#outreach"> Outreach / Education </Link></li> : null}
      </ul>
    </li>
  </ul>
};

class Layout extends Component {
  render() {

    let subnav = <SideNav {...this.props} />

    return (
      <DefaultLayout
        className='sector-detail'
        nav_actions={[
          <ViewMapWithSector key='sector-map-button' sector_name={this.props.sector_name}/>,
          <ViewDatagrapherWithSector key='sector-datagrapher-button' sector_name={this.props.sector_name} />
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

         {this.props.identified_changes ?
            <div>
              <h2><a id='identify_changes'>Identify Changes </a></h2>
              {this.props.identified_changes.map((id_ch, indx) => {
                return <Subsection key={indx} {...id_ch} />
              })}
            </div> : null }

         {(this.props.planning || this.props.implementation || this.props.outreach) ?
          <div>
            <h2><a id='take_action'>Take Action </a></h2>
            {this.props.planning ?
              <Subsection name='Planning'
                id='planning'
                image={this.props.planning.image}
                collection_name={this.props.planning.collection_name}
                content={this.props.planning.content}/>
              : null}
            {this.props.implementation ?
              <Subsection name='Implementation'
                image={this.props.implementation.image}
                id='implementation'
                collection_name={this.props.implementation.collection_name}
                content={this.props.implementation.content}/>
              : null}
            {this.props.outreach ?
              <Subsection name='Outreach'
                id='outreach'
                image={this.props.outreach.image}
                collection_name={this.props.outreach.collection_name}
                content={this.props.outreach.content}/>
              : null}
          </div> : null }
      </DefaultLayout>
    );
  }
};

export default Layout;
