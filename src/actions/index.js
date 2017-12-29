import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MapLink from '../utils/map_link';
import main_photo from '../images/actions/take_action.jpg'

import DefaultLayout from './../layouts/default';
import DatagrapherLink from '../utils/datagrapher_link';
import Subsection from '../layouts/subsection';
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
      {id: "planning",
        name:"Planning",
        href:"/actions/planning",
        content: <p>
          Climate planning is much like any other planning activity.  Once problems have been identified, your next step in building resiliency is to investigate and evaluate potential solutions. Developing a climate change action plan involves adaptation, mitigation, or both.
        </p>
       },
      {id: "implementation",
        name:"Implementation",
        href:"/actions/implementation",
        content: <div>
          The final step in building resilience is to take action. Put your plan into place, find funding, establish benchmarks, and track progress. Revise at regular intervals as necessary. Understanding how to communicate your plan with stakeholders can help build and maintain support.
        </div>
       },
       {id: "outreach",
         name:"Outreach / Education",
         href: "/actions/outreach-education",
         content: <div>
          Communicating with stakeholders needs to begin early in the process of identifying problems and investigating solutions, and continue through plan development, implementation, monitoring, and reassessment.
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
        <div className='lead-image col-12 col-md-5 float-right'>
          <img alt={'sectors example'} src={page_image} />
          <div className='image-credit'>MA Division of Ecological Restoration</div>
        </div>

        <p>
          Climate change is among the greatest environmental challenges of this generation, with potentially profound effects on the economy, public health, water resources, infrastructure, coastal resources, energy demand, natural resources, and recreation. The Commonwealth of Massachusetts is committed to doing its part to mitigate and adapt to this challenge, recognizing the necessity of engaging in adaptation planning today by taking a close look at strategies that could help the state become more resilient and ready to adapt to climate change as it occurs.  Taking action will require analysis of key issues and strategies, implementing the strategies and gaining public support for those activities.  Learn about the following:
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
