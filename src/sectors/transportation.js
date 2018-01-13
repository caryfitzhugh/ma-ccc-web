import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import transportation_image from '../images/sectors/transportation.jpg';
import {searchURL} from '../search/utils';
import {Footnote} from '../utils/footnotes';

const sectorSearchURL = (props) => {
  let params = {facets: {sectors: ["ma::transportation"],
                         climate_changes: props.changes,
                         actions: props.actions},
                query: props.q}
  return searchURL(params);
}

class TransportationSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Highlighted Resources",
      collection_name: "MA/transportation/highlighted_resources",
    };

    return (
      <SectorDetailLayout
      image={transportation_image}
        title="Transportation"
        showcased_resources={showcased_resources}
        datagrapher_file='Temp/state/gdd50/ANN/MA/'
        footnotes={[
        ]}
        sections={[
          { title: "Impacts",
            id: "impacts",
            content: <p>
            </p>,
            subsections: [
              {name: "Rising Temperatures",
                href: sectorSearchURL({changes:["ma::rising temperatures::"]}),
                id: "impacts_rising_temperatures",
                content: <div>
                </div>
              },
              {name: "Changes in Precipitation",
                href: sectorSearchURL({changes:["ma::changes in precipitation::"]}),
                id: "impacts_changes_in_precipitation",
                content: <div>
                </div>
              },
              { name: "Extreme Weather",
                href: sectorSearchURL({changes:["ma::extreme weather::"]}),
                id: "impacts_extreme_weather",
                content: <div>
                </div>
              },
              {name: "Sea Level Rise",
               href: sectorSearchURL({changes:["ma::sea level rise::"]}),
               id: "impacts_sea_level_rise",
               content: <div>
               </div>
              },
            ]
        },
        { title: "Actions",
          id: "actions",
          content: <p>
          </p>,
          subsections: [
            {name: "Planning",
              href: sectorSearchURL({actions:["ma::planning::"]}),
              id: 'actions_planning',
              content: <ul>
              </ul>
            },
            {name: "Management Practices",
             href: sectorSearchURL({actions:["ma::implementation action/direct action on target::management and behavior"]}),
             id: "actions_management_practices",
             content: <ul>
            </ul>
          },
          {name: "Technology",
            href: sectorSearchURL({actions:["ma::implementation action/direct action on target::technology"]}),
            id: "actions_tech",
            content: <ul>
            </ul>
          },
          { name: "Policies / Laws",
            href: sectorSearchURL({actions:["ma::planning::policies/laws/regulations"]}),
            id: "actions_policies_laws",
            content: <ul>
            </ul>
          },
          { name: "Research / Monitoring",
            href: sectorSearchURL({actions:["ma::outreach/education::research and monitoring"]}),
            id: 'actions_research',
            content: <ul>
            </ul>
          },
          { name: "Funding",
            href: sectorSearchURL({actions: ["ma::implementation action/direct action on target::financing"]}),
            id: "actions_funding",
            content: <ul>
            </ul>
          }
          ]
        },
        { title: "Looking for help?",
          id: "looking_for_help",
          content: <div>
            <ul>
            </ul>
          </div>,
          subsections: []
        }

        ]}>

        Transportation
       </SectorDetailLayout>
    );
  }
}

export default TransportationSectorPage;
