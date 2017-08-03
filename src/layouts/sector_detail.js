import React, { Component } from 'react';
import MapLink from '../utils/map_link';
import DatagrapherLink from '../utils/datagrapher_link';
import DefaultLayout from './default';
import './sector_detail.css';

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
    View Datagrapher For This Sector
  </DatagrapherLink>;

class SectorDetailLayout extends Component {
  render() {
    return (
      <DefaultLayout
        className='sector-detail'
        nav_actions={[
          <ViewMapWithSector key='sector-map-button' sector_name={this.props.sector_name}/>,
          <ViewDatagrapherWithSector key='sector-datagrapher-button' sector_name={this.props.sector_name} />
        ]}

        subnav={this.props.subnav}

        anchors={this.props.anchors}>
          <h1>{this.props.title}</h1>
          <img alt={this.props.title + ' example'} src={this.props.image} className='col-12 col-md-5 float-right'/>
          {this.props.children}
      </DefaultLayout>
    );
  }
}

export default SectorDetailLayout;
