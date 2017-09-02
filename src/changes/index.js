import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MapLink from '../utils/map_link';
import DefaultLayout from './../layouts/default';
import DatagrapherLink from '../utils/datagrapher_link';
import Subsection from '../layouts/subsection';

import photo1 from '../images/changes/changes_combo.jpg'
import rising_temperatures_img from '../images/home_page/carousel/rising_temperatures.jpg';
import precipitation_changes_img from '../images/home_page/carousel/precipitation_changes.jpg';
import extreme_weather_img from '../images/home_page/carousel/extreme_weather.jpg';
import sea_level_rise_img from '../images/home_page/carousel/sea_level_rise.jpg';

const ViewMap = (props) =>
  <MapLink className='btn btn-block btn-primary' >
    View Map
  </MapLink>;

const ViewDatagrapher = (props) =>
  <DatagrapherLink className='btn btn-block btn-primary'>
    View Datagrapher
  </DatagrapherLink>;

const SubNav = (props) => <ul>
  {props.sectors.map((sector, indx) => {
    let sec_id = sector[0];
    let data = sector[1];
    return <li key={indx}>
      <Link to={"#"+sec_id}>{data.name}</Link>
    </li>
  })}
</ul>


class ChangesPage extends Component {
  render() {
    let page_image = photo1;

    return (
      <DefaultLayout
        className='sector-index'
        nav_actions= {[<ViewMap /> , <ViewDatagrapher />]}
        subnav={<SubNav />}>
        <h1>Identify Changes</h1>
        <img alt='sectors example' src={page_image} className='col-12 col-md-5 float-right'/>

        <p>
          Temperatures are increasing, precipitation patterns are changing, sea level is rising, and extreme
          weather events are becoming more frequent. Climate change is already affecting the people and
          resources of the commonwealth, and these impacts are projected to grow. At the same time,
          communities have the ability to address many climate-related risks, reduce negative impacts, by
          reducing greenhouse gas emissions and take advantage of possible opportunities that may arise
          from the changing climate.
        </p>
        <p>
          A first step in becoming climate-resilient is to identify the problems you face: specific climate
          hazards, their impacts and risks, and vulnerabilities.
        </p>

        <h2>Rising Temperatures</h2>
        <Subsection id='rising_temperatures'
          image={rising_temperatures_img}
          href="/changes/rising-temperatures"/>

      </DefaultLayout>
    );
  }
}

export default ChangesPage;
