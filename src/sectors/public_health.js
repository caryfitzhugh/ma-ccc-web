import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/public_health.jpg';
import public_health_rising_temperatures_img from '../images/sectors/public_health_rising_temperatures.jpg';
import public_health_management_practices_img from '../images/sectors/public_health_management_practices.jpg';
import {searchURL} from '../search/utils';
import {Footnote} from '../utils/footnotes';
import Collection from '../layouts/collection';
import SearchLink from '../utils/search_link';

const sectorSearchURL = (props) => {
  let params = {facets: {sectors: ["ma::public health"],
                         climate_changes: props.changes,
                         actions: props.actions},
                query: props.q}
  return searchURL(params);
}

class PublicHealthSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
      collection_name: "MA/public_health/highlighted_resources"
    };

    return (
      <SectorDetailLayout
        title="Public Health"
        image={sector_image}
        image_credit="University of the Fraser Valley, CC BY-2.0"
        showcased_resources={showcased_resources}
        footnotes={[
          <span><a href='http://www.mass.gov/eea/docs/eea/energy/cca/eea-climate-adaptation-report.pdf'>http://www.mass.gov/eea/docs/eea/energy/cca/eea-climate-adaptation-report.pdf</a></span>
        ]}
        sections={[
          { title: "Impacts",
            id: "impacts",
            content: <p>
            </p>,
            subsections: [
              {name: "Rising Temperatures",
                href: sectorSearchURL({q: "temperature health", changes:["ma::rising temperatures::"]}),
                id: "impacts_rising_temperatures",
                find_out_more: true,
                content: <div>
                  <div className='section-img'>
                    <img src={public_health_rising_temperatures_img}/>
                    <div className='image-credit'>
                      Stuart Meek, CC BY-SA 2.0
                    </div>
                  </div>
                  <ul>
                    <li>Increased days of extreme heat may cause more heat-related illnesses and hospital visits</li>
                    <li>Warming temperatures may contribute to higher ozone levels and poorer air quality</li>
                    <li>Increases in allergenic pollen production may exacerbate allergies, asthma and other respiratory illnesses</li>
                    <li>Warmer winters could contribute to an increase in incidence of vector-borne diseases, such as Lyme disease, Eastern Equine Encephalitis, and West Nile Virus</li>
                    <li>The risk of industrial accidents, chemical releases and explosions could increase when temperature thresholds for safe storage are surpassed</li>
                  </ul>
                </div>
              },
              {name: "Changes in Precipitation",
                href: sectorSearchURL({q: "precipitation health", changes:["ma::changes in precipitation::"]}),
                id: "impacts_changes_in_precipitation",
                find_out_more: true,
                content: <div>
                  <p>Flooding caused by the heavier downpours expected in Massachusetts could force industrial facilities to shut down and cause chemical explosions or releases that could impact drinking water safety. Extensive and damaging flooding events and their aftermath could increase the potential for water-borne disease outbreaks. Greater volumes of stormwater and agricultural runoff could transport sediments, pathogens, nutrients, and pesticides to nearby waterways and create risks for swimming, fishing, or drinking water quality. </p>
                  <ul>
                    <li>Pathogens, nutrients, and pesticides carried to local waterways by stormwater from large storm events may elevate risks for swimming, fishing, or drinking water quality</li>
                    <li>Flooding of industrial facilities may increase the risk for explosions or chemical releases, threatening drinking water safety</li>
                    <li>Extensive flooding could increase the potential for water-borne disease outbreaks</li>
                  </ul>

                </div>
              },
              { name: "Extreme Weather",
                href: sectorSearchURL({q: " 'extreme weather' health", changes:["ma::extreme weather::"]}),
                id: "impacts_extreme_weather",
                find_out_more: true,
                content: <div>
                  <ul>
                    <li>Extreme storms may disrupt sanitary, energy, and health care services, and impair access to safe drinking water and nutritious food</li>
                    <li>Severe flooding may damage or obstruct roadways, making evacuation and emergency transport more difficult</li>
                    <li>Coping with extreme weather may increase mental and physical health stress</li>
                  </ul>
                </div>
              },
              {name: "Sea Level Rise",
                href: sectorSearchURL({q: " 'sea level' health", changes:["ma::sea level rise::"]}),
               id: "impacts_sea_level_rise",
               find_out_more: true,
               content: <div>
                  <ul>
                    <li>Coastal storm surges may become more dangerous, forcing emergency evacuations</li>
                    <li>Flood damage to coastal infrastructure like power plants, drinking water pipes and wastewater treatment plants could increase public health risks, especially for vulnerable populations</li>
                  </ul>
               </div>
              },
            ]
        },
        { title: "Actions",
          id: "actions",
          content: <p>
            With planning and implementation at all levels, the existing public health infrastructure may be able to meet the challenges.
          </p>,
          subsections: [
            {name: "Planning",
              href: sectorSearchURL({q: "planning public health", actions:["ma::planning::"]}),
              id: 'actions_planning',
              find_out_more: true,
              content: <div>
                <ul>
                  <li>Plan climate and health education campaigns targeted to vulnerable populations</li>
                  <li>Develop plans to ensure that local health systems can respond to climate-related health risks</li>
                  <li>Adopt strategies to promote walking, biking, public transit and use of electric vehicles for their environmental and health benefits</li>
                  <li>Develop a heat emergency plan with measures to ensure vulnerable populations can access cooling centers, especially in urban areas</li>
                  <li>Ensure evacuation plans and routes consider climate change impacts</li>
                </ul>
              </div>
            },
            {name: "Management Practices",
              href: sectorSearchURL({q: "management public health", actions:["ma::implementation action/direct action on target::management and behavior"]}),
            id: "actions_management_practices",
             find_out_more: true,
            content: <div>
              <div className='section-img'>
                <img src={public_health_management_practices_img}/>
                <div className='image-credit'>
                  NewtonCourt, CC BY-SA 4.0
                </div>
              </div>
              <ul>
                <li>Coordinate across local boards of health to prepare for climate impacts</li>
                <li>Implement urban heat warning and response systems</li>
                <li>Plant low-pollen shade trees and increase green roofs, urban trees, gardens and parks to mitigate heat and air pollution</li>
                <li>Promote training for first responders on the prevention of, and response to, severe weather or heat-related chemical releases and industrial accidents</li>
                <li>Identify ways to help property owners detect and remediate mold in buildings</li>
                <li>Encourage wider use of cooling features like ceiling fans and reflective paints</li>
              </ul>
            </div>
          },
          {name: "Technology",
            href: sectorSearchURL({q: "technology public health", actions:["ma::implementation action/direct action on target::technology"]}),
            id: "actions_tech",
            find_out_more: true,
            content: <div>
              <ul>
                <li>Use green stormwater infrastructure like rain gardens, swales, and porous pavement</li>
                <li>Promote less pesticide-intensive strategies to manage mosquitoes and ticks</li>
              </ul>
            </div>
          },
          { name: "Policies / Laws",
            href: sectorSearchURL({q: "policy law regulation public health", actions:["ma::planning::policies/laws/regulations"]}),
            id: "actions_policies_laws",
            find_out_more: true,
            content: <div>
              <ul>
                <li>Consider policies and incentives to increase urban tree canopy and vegetation for cooling </li>
                <li>Communicate about the health benefits of clean energy policies</li>
              </ul>
            </div>
          },
          { name: "Research / Monitoring",
            href: sectorSearchURL({q: "research monitoring public health", actions:["ma::outreach/education::research and monitoring"]}),
            id: 'actions_research',
            find_out_more: true,
            content: <div>
              <ul>
                <li>Develop a systematic tick surveillance program to monitor vector densities and infection rates</li>
                <li>Investigate relationships between climate change, air quality, and health outcomes</li>
              </ul>
            </div>
          },
          { name: "Funding",
            id:"funding",
            find_out_more: true,
            href: sectorSearchURL({q: "funding financing"}),
            subsections: [],
            content: <Collection show_images={false} collection_name='MA/funding/public_health' />
          }
        ]},
        {title: "Looking for help?",
          id: 'looking_for_help',
          content: <Collection show_images={false} collection_name='MA/looking_for_help/public_health' />,
          subsections: []
        }]}
        >
          <p>The Commonwealth attracts students, researchers, and companies from around the world because of the state’s renowned hospitals and world-class medical research institutions. As a result of extreme weather events and increases in vector-borne diseases, climate change presents new challenges for our medical and public health sector, and demands a new approach for Massachusetts to proactively prepare and manage these impacts.</p>
          <p>This page provides information and data for state agencies and communities to evaluate and plan for public health risks from climate change using environmental and health data, information about vulnerable populations, and local climate projections.</p>
        </SectorDetailLayout>
    );
  }
}

export default PublicHealthSectorPage;
