import React, { Component } from 'react';
import ActionsLayout from './layout';
import SearchLink from '../utils/search_link';
//import planning_img from '../images/actions/planning.jpg';
import titleize from '../utils/titleize';

class PlanningActionsPage extends Component {
  render() {
    let showcased_resources = null;
    // title: "Highlighted Resources",
    // collection_name: "MA/agriculture/highlighted_resources",

    return (<ActionsLayout
        title="Planning"
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

          <em>Content Waiting </em>
        </ActionsLayout>
    );
  }
}

export default PlanningActionsPage;
