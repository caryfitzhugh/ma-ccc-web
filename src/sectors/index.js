import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SectorsAll from './all';
import MapLink from '../utils/map_link';
import DatagrapherLink from '../utils/datagrapher_link';
import DefaultLayout from '../layouts/default';
import Subsection from '../layouts/subsection';
import map_image from '../images/data/mass_ccc_map.png';
import datagrapher_image from '../images/data/datagrapher.png';
import "./index.css";

import photo1 from '../images/sectors/index_combo.jpg'

const ViewMap = (props) =>
  <div className='img-btn'>
    <img src={map_image}/>
    <MapLink className='btn btn-block btn-primary'
      sector={props.sector_name || props.title}
      >
      <label>View Maps </label>
    </MapLink>
  </div>;

const ViewDatagrapher = (props) =>
  <div className='img-btn'>
    <img src={datagrapher_image}/>
    <DatagrapherLink className='btn btn-block btn-primary'
      file={props.datagrapher_file}
      >
      <label>View Datagrapher</label>
    </DatagrapherLink>
  </div>;


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
    let sectors = SectorsAll.array;
    let sector_contents = {
      "agriculture":<p>The Agriculture page focuses on issues related to livestock, dairy, and crop production, as well as the economically important greenhouse and nursery, cranberry, and poultry sectors.</p>,
      "coastal_zones":<p>The Coastal Zones page focuses on the climate change impact in regions close to the ocean.</p>,
      "economy":<p> The Economy page includes information related to the insurance, financial services, real estate management, health care, and higher education sectors.</p>,
      "energy":<p> The Energy sector page encompasses energy supply, demand, transmission, distribution, fuel sources, and technologies. </p>,
      "forestry": <p> The Forestry sector focuses on climate issues related to private and public forest resources. </p>,
      "infrastructure": <p> The Infrastructure sector encompasses the built environment elements such as residential, commercial, and government buildings; telecommunication infrastructure, and transportation elements that serve public and private needs for moving goods and people.</p>,
      "local_government": <p> The Local Government page provides information on key issues faced at the municipal level including planning and zoning issues, facility siting, and transportation mobility issues.</p>,
      "natural_resources": <p> The Natural Resources/Habitats sector encompasses the plants, fish, wildlife, and resources of all natural and managed landscapes (e.g., grasslands, aquatic systems) except those land areas designated as agricultural, coastal, or urban.</p>,
      "public_health": <p> The Public Health sector includes the systems, services, and infrastructure required to protect the public including current health status for climate-sensitive diseases; impacts based on socio- economic factors.</p>,
      "public_safety": <p> The public safety sector provides information focused on emergency management issues: preparedness, response, recovery, and mitigation. </p>,
      "recreation": <p> The Recreation sector provides information on climate impacts on the recreation and tourism areas.</p>,
      "water_resources": <p> The Water Resources sector encompasses the issue of flooding in non-coastal regions and water infrastructure such as drinking water supply, water availability, and water quality.  </p>,
    };

    let sector_collection_names = {
      //"agriculture": 'sector_index/agriculture',
    };

    return (
      <DefaultLayout
        className='sector-index'
        nav_actions= {[<ViewMap key={0}/> , <ViewDatagrapher key={1}/>]}
        subnav={<SubNav sectors={sectors}/>}>
        <h1>Sectors</h1>
        <img alt='sectors example' src={photo1} className='col-12 col-md-5 float-right'/>

        <p>
          The issue of climate change is multi-sectoral and complex. As it plays out in coming years, it will span geographical scales, with greater impacts predicted in areas along the coast and in floodplains. Climate change will also vary temporally—some of the impacts may not be felt for another 30 years or further in the future, while others are already upon us.
        </p>
        <p>
          It may also come in bursts and manifest itself as extreme weather events, with the frequency of such events predicted to increase over time. Massachusetts may experience large-scale catastrophic events, similar to Hurricane Katrina in New Orleans (2005), the ice storm in Massachusetts (2008), or the drought experienced in 2016 but it may also see smaller but incremental changes that could have long-term impacts on freshwater resources, fisheries, food crops, coastal properties, and the economy.
        </p>
        <p>
          Various opportunities and measures are available to address climate change. Areas of concerns and strategies will vary by sector.
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
