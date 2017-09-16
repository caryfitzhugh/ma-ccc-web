import React, { Component } from 'react';
import ActionsLayout from './layout';
import SearchLink from '../utils/search_link';

class OutreachActionsPage extends Component {
  render() {
    let showcased_resources = {
      title: "Highlighted Resources",
      collection_name: "MA/actions/outreach/highlighted"
    };

    return (<ActionsLayout
        title="Outreach"
        active_layers=""
        showcased_resources={showcased_resources}
        datagrapher_file='Temp/state/pcpn_2/ANN/MA/'
        sections={[
          {title: "Changes",
           id: "changes",
           content: <div>
            <ul>
            </ul>
          </div>,
          subsections: []
          }
        ]} >

        <p>
          Because climate change is complex, it is imperative that targeted communication efforts are in place to inform local officials, the private sector, and citizens of the potential risks and consequences of a changing climate.  Developing effective and efficient responses to climate change will require high levels of communication, coordination, collaboration, and integration across and within all levels of government, in close connection with private businesses and industries, non-governmental organizations, academic institutions, and stakeholder groups. Communicating with stakeholders needs to begin early in the process of identifying problems and investigating solutions, and continues through plan development, implementation, monitoring, and reassessment. A key element in developing and communicating this message is an ongoing strategy that includes training and skill-building for decision-makers and environmental planners to promote fluency on climate change issues. Helpful to inform this process is completing an assessment of the current knowledge, perceptions, skills, and intentions of constituents so that communication is appropriately focused.
        </p>
        <p>
          <SearchLink params={{facets:{actions:["ma::outreach/education::"]}}} query="">Search to find more in the repository</SearchLink>
        </p>
        </ActionsLayout>
    );
  }
}

export default OutreachActionsPage;
