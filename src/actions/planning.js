import React, { Component } from 'react';
import ActionsLayout from './layout';

class PlanningActionsPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
      collection_name: "MA/actions/planning/highlighted_resources"
    };

    return (<ActionsLayout
        title="Planning"
        active_layers=""
        showcased_resources={showcased_resources}
        datagrapher_file='Temp/state/pcpn_2/ANN/MA/'
        sections={[
          {title: "Impacts & Risks",
           id: "impacts_and_risks",
           content: <div>
            <p>
              A first step in planning is understanding the impacts and risks of climate change.
            </p>
            <p>
              Impact is the effect a change in climate could have on natural or human systems. For example, an increase in heavy downpours can lead to more road flooding, culvert washouts, and stream bank erosion.
            </p>
            <p>
              Risk is the product of the likelihood of a hazardous event occurring and the magnitude of consequences should that event occur. For example, two roads in a river valley may have the same vulnerability to flooding, but the risk is greater for a main traffic artery than for a road with little traffic.
            </p>
          </div>,
          subsections: []
          },
          {title: "Vulnerability Assessment",
           id: "vulnerability",
           content: <div>
            <p>
              Vulnerability assessment focuses on identifying, inventorying, and prioritizing people, places, resources, and infrastructure that may be impacted by climate change.
            </p>
            <p>
              Vulnerability is the degree to which natural and human systems are susceptible to, and unable to cope with, adverse impacts of climate change. For example, aging culverts designed to older standards and with pre-existing erosion are more vulnerable to damage and failure than newer culverts at a similar location.
            </p>
          </div>,
          subsections: []
          }
        ]} >
          <p>
            Temperatures are increasing, precipitation patterns are changing, sea level is rising, and extreme weather events are becoming more frequent. Climate change is already affecting the people and resources of Massachusetts, and these impacts are projected to grow. At the same time, communities, sectors and individuals have the ability to address many climate-related risks, reduce negative impacts, and take advantage of possible opportunities that may arise from the changing climate.
          </p>
          <p>
            Planning for climate change is much like any other planning for any other effort, it is a process.  Typically, the process includes these steps:
          </p>
          <ol>
            <li>Determine your focus</li>
            <li>Determining risks and vulnerabilities</li>
            <li>Identifying and selecting options address risks and vulnerabilities</li>
            <li>Formulate an implementation plan</li>
            <li>Implement</li>
            <li>Assess results</li>
          </ol>
          <p>
            The most comprehensive approach assesses both opportunities to reduce greenhouse gas emissions (mitigation) and how to create resiliency as the climate changes (adaptation).
          </p>

        </ActionsLayout>
    );
  }
}

export default PlanningActionsPage;
