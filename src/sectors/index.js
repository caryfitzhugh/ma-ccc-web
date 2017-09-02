import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SectorsAll from './all';
import MapLink from '../utils/map_link';
import DatagrapherLink from '../utils/datagrapher_link';
import DefaultLayout from '../layouts/default';
import Subsection from '../layouts/subsection';
import "./index.css";

import photo1 from '../images/sectors_1.jpg'
import photo2 from '../images/sectors_2.jpg'

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

class SectorsPage extends Component {
  render() {
    let sector_image = photo1;
    let sectors = SectorsAll.array;
    let sector_contents = {
      "agriculture": <p>Agriculture is lorem ipsum and all about this sector, really interesting stuff, bannana fanna fo fanna , me my mo man ah.  Bananna! </p>
    };
    let sector_collection_names = {
      "agriculture": 'sector_index/agriculture',
    };

    return (
      <DefaultLayout
        className='sector-index'
        nav_actions= {[<ViewMap /> , <ViewDatagrapher />]}
        subnav={<SubNav sectors={sectors}/>}>
        <h1>Sectors</h1>
        <img alt='sectors example' src={photo1} className='col-12 col-md-5 float-right'/>

        <p> We will have an image, off to the right.  <br/>
          We will have an image, off to the right.  <br/>
          We will have an image, off to the right.  <br/>
          We will have an image, off to the right.  <br/>
          We will have an image, off to the right.  <br/>
          We will have an image, off to the right.  <br/>
        </p>
        <p>
          We will have an image, off to the right.  <br/>
          We will have an image, off to the right.  <br/>
          We will have an image, off to the right.  <br/>
          We will have an image, off to the right.  <br/>
          We will have an image, off to the right.  <br/>
          Maybe a set of highlighted resource results next
        </p>

        {sectors.map((sector, indx) => {
          let sec_id = sector[0];
          let data = sector[1];
          return <Subsection key={indx}
                  id={sec_id}
                  name={data.name}
                  image={<div className='sector-icon'><Link to={data.href}>{data.icon}</Link></div>}
                  content={ <div>
                      {sector_contents[sec_id]}
                        <Link to={data.href} className='btn btn-secondary btn-block'>View {data.name} Sector</Link>
                      </div>}
                  collection_name={sector_collection_names[sec_id]}
                  href={data.href}
                />
        })}
      </DefaultLayout>
    );
  }
}

export default SectorsPage;
