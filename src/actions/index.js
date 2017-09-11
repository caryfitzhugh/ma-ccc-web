import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MapLink from '../utils/map_link';
import main_photo from '../images/actions/take_action.jpg'
import photo1 from '../images/actions/eel_river_restoration.jpg'
import photo2 from '../images/actions/education_1.jpg'
import photo3 from '../images/actions/education_2.jpg'

import DefaultLayout from './../layouts/default';
import DatagrapherLink from '../utils/datagrapher_link';
import Subsection from '../layouts/subsection';

const ViewMap = (props) =>
  <MapLink className='btn btn-block btn-primary' >
    View Map
  </MapLink>;

const ViewDatagrapher = (props) =>
  <DatagrapherLink className='btn btn-block btn-primary'>
    View Datagrapher
  </DatagrapherLink>;

const SubNav = (props) => <ul>
  {props.subsections.map((subsection, indx) => {
    return <li key={indx}>
      <Link to={"#"+subsection.id}>{subsection.name}</Link>
    </li>
  })}
</ul>


class ActionsPage extends Component {
  render() {
    let page_image = main_photo;

    let subsections = [
      {id: "ghg_reduction",
        name:"Rising Temperature",
        href:"/actions/hgh-reduction-planning",
       },
      {id: "hazard_mitigation",
        name:"Hazard Mitigation",
        href:"/actions/hazard-mitigation"
       },
      {id: "budgeting_for_climage_change",
        name:"Budgeting for Climate Change",
        href:"/changes/budgeting-for-climate-change"
       },
      {id: "town_planning",
        name:"Town Planning",
        href:"/changes/town-planning"
       }
    ];

    return (
      <DefaultLayout
        className='sector-index'
        nav_actions= {[<ViewMap key={0}/> ,
                       <ViewDatagrapher key={1} />]}
        subnav={<SubNav subsections={subsections}/>}>
        <h1>Identify Changes</h1>
        <img alt='sectors example' src={page_image} className='col-12 col-md-5 float-right'/>

        <p>
          TAKE ACTION... Lorem Ipsum
        </p>

        {subsections.map((subsection, indx) => {
          return <Subsection key={indx} {...subsection}
                  content={ <div>
                        <Link to={subsection.href} className='btn btn-secondary btn-block'>View {subsection.name}</Link>
                      </div>}
                  />})}
      </DefaultLayout>
    );
  }
}

export default ActionsPage;
