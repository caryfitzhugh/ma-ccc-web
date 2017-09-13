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
import Collection from '../layouts/collection';
import ShowcaseResources from '../layouts/showcase_resources';
import "./index.css";

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
      {id: "adaptation",
        name:"Adaptation",
        href:"/actions/adaptation",
        content: <p>
          Adaptation is action taken to prepare for climate change, helping to reduce adverse impacts or take advantage of beneficial ones. Adaptation can be thought of as better planning, incorporating the most current information about climate into a variety of decisions.
        </p>
       },
      {id: "mitigation",
        name:"Mitigation",
        href:"/actions/mitigation",
        content: <div>
          Mitigation is action taken to reduce the severity of climate change, by reducing greenhouse gas emissions. Early mitigation will make it easier to adapt to climate change later on.
          <Collection show_images={true} collection_name={"MA/actions/mitigation/highlighted/0"}/>
          Learn more about what you do as an individual to address climate change:
          <Collection show_images={true} collection_name={"MA/actions/mitigation/highlighted/1"}/>
        </div>
       }
    ];

    return (
      <DefaultLayout
        className='actions-index'
        nav_actions= {[<ViewMap key={0}/> ,
                       <ViewDatagrapher key={1} />]}
        subnav={<SubNav subsections={subsections}/>}>
        <h1>Take Action</h1>
        <img alt='sectors example' src={page_image} className='col-12 col-md-5 float-right'/>

        <p>
          After having identified problems, the next step in building resiliency is to investigate and evaluate potential solutions. Responding to climate change can involve adaptation strategies, mitigation strategies. The most effective and holistic plans will use both strategies. Once strategies have been identified, the final step in building resilience is to take action.
        </p>

        {subsections.map((subsection, indx) => {
          return <Subsection key={indx} {...subsection}
                  content={ <div>
                        {subsection.content}
                        {subsection.href ? <Link to={subsection.href} className='btn btn-secondary btn-block'>View {subsection.name}</Link> : null}
                      </div>}
                  />})}
      </DefaultLayout>
    );
  }
}

export default ActionsPage;
