import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import {Footnote} from '../utils/footnotes';
import sector_image from '../images/sectors/local_government.jpg';
import local_government_rising_temperatures_img from '../images/sectors/local_government_rising_temperatures.jpg';
import local_government_planning_img from '../images/sectors/local_government_planning.jpg';
import {searchURL} from '../search/utils';

const sectorSearchURL = (props) => {
  let params = {facets: {sectors: ["ma::local government"],
                         climate_changes: props.changes,
                         actions: props.actions},
                query: props.q}
  return searchURL(params);
}

class LocalGovernmentSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
      collection_name: "MA/local_government/highlighted_resources"
    };

    return (
      <SectorDetailLayout
        title="Local Government"
        image={sector_image}
        image_credit="T.S. Custadio Todd, CC BY-SA 3.0"
        showcased_resources={showcased_resources}
        footnotes={[
          <span>Office of Governor Charlie Baker, 2015, Letter to Request Federal Emergency Declaration – Attachment A:  2015 Severe Winter Weather Pattern Impacts - Supplemental Information. <a href=' Office of Governor Charlie Baker, 2015, Letter to Request Federal Emergency Declaration – Attachment A:  2015 Severe Winter Weather Pattern Impacts - Supplemental Information. http://www.mass.gov/governor/docs/news/attachment-a-severe-winter-weather-pattern-impacts-supplemental-info.pdf'>http://www.mass.gov/governor/docs/news/attachment-a-severe-winter-weather-pattern-impacts-supplemental-info.pdf</a></span>
        ]}
        sections={[
          {title: "Impacts",
            id: 'impacts',
            content: <p> </p>,
            subsections: [
              {name: "Rising Temperatures",
                href: sectorSearchURL({q: "temperature 'local government'"}),
                id: 'impacts_rising_temperatures',
                find_out_more: true,
                content: <div>
                  <div className='section-img'>
                    <img src={local_government_rising_temperatures_img}/>
                    <div className='image-credit'>
                      Jason Hellendrung
                    </div>
                  </div>
                  <ul>
                    <li>Warming temperatures may result in higher ozone levels and poor air quality, increasing the incidence of respiratory illness, particularly among vulnerable populations</li>
                    <li>More days above 90° F may increase power outages and heat-related illness for vulnerable residents</li>
                    <li>Changes in seasons may affect tourism at ski areas, beaches and fall foliage destinations</li>
                    <li>Some agricultural crops and certain fisheries may decline, and local economies tied to those resources may suffer economic and job losses</li>
                  </ul>
                </div>
              },
              {name: "Changes in Precipitation",
                href: sectorSearchURL({q: "precipitation 'local government' "}),
                id: 'impacts_changes_in_precipitation',
                find_out_more: true,
                content: <div>

                  <ul>
                    <li>Increased flooding may threaten public safety, disrupt downtown business activity, damage property, and impair utility and emergency services</li>
                    <li>Storm water infrastructure not sized to accommodate larger storms may sustain flood damage</li>
                    <li>As more winter precipitation falls as rain, the season for skiing, ice fishing and snowmobiling may shorten and become more volatile, affecting tourism-based economies</li>
                    <li>Drier summers may stress local water supplies</li>
                  </ul>
                </div>
              },
              { name: "Extreme Weather",
                href: sectorSearchURL({q: "  'extreme weather' 'local government'",  changes:["ma::extreme weather::"]}),
                id: 'impacts_extreme_weather',
                find_out_more: true,
                content: <div>
                  <ul>
                    <li>More severe storms may trigger emergencies with serious risks for lower-income and other vulnerable populations</li>
                    <li>Infrastructure —from roads and bridges to wastewater treatment centers—may face elevated risks of damage and destruction from nor’easters, hurricanes, and other extreme weather</li>
                    <li>Flood recovery costs may burden municipal budgets</li>
                    <li>Extensive property damage from storms could lower municipal tax bases and impassible roadways could affect commerce</li>
                  </ul>
                </div>
              },
              { name: "Sea Level Rise",
                href: sectorSearchURL({q: " 'sea level' 'local government'", changes:["ma::sea level rise::"]}),
                id: 'impacts_slr',
                find_out_more: true,
                content: <div>
                  <ul>
                    <li>As tidal range and tidal inundation increases, saltwater intrusion may degrade drinking water supplies</li>
                    <li>Rising seas may increase the scale of property and infrastructure damage from coastal storm surges</li>
                    <li>Emergency evacuations may become more common, and relocation of critical assets and facilities may become necessary</li>
                  </ul>
                </div>
              }
            ]},
            {title:"Actions",
              id:'actions',
              content: <p></p>,
              subsections: [
              { name: "Planning",
                href: sectorSearchURL({q: "planning", actions:["ma::planning::"]}),
                id: 'actions_planning',
                find_out_more: true,
                content: <div>
              <div className='section-img'>
                <img src={local_government_planning_img}/>
                <div className='image-credit'>
                  Cape Cod towns opened up a restricted estuary with this bridge to improve their flood protection
                  <br/>
                  U.S. Fish and Wildlife Service
                </div>
              </div>
                  <ul>
                    <li>Identify and address local vulnerabilities with help from the Municipal Vulnerability Preparedness Program</li>
                    <li>Incorporate climate change information into your local hazard mitigation plan</li>
                    <li>Consider climate information during planning, siting and design for infrastructure projects, and maximize benefits for flood protection and resilience</li>
                    <li>Develop an emergency response plan for extreme weather including measures to keep vulnerable populations safe</li>
                    <li>Evaluate evacuation routes to ensure residents can move to higher ground safely</li>
                    <li>Complete a municipal greenhouse gas emissions inventory, and action plan</li>

                  </ul>
                </div>
              },
              { name: "Management Practices",
                href: sectorSearchURL({q: "management", actions:["ma::implementation action/direct action on target::management and behavior"]}),
                id: 'actions_management_practices',
                find_out_more: true,
                content: <div>
                  <ul>
                    <li>Ensure adequate health and emergency services for extreme heat or cold</li>
                    <li>Set up cooling centers and other shelters for vulnerable populations </li>
                    <li>Hold public discussions about how to adjust local plans and policies to reduce climate-related hazards</li>
                    <li>Conserve floodplains, forests, coastal marshes and wetlands to protect towns from flood damage and consider nature-based solutions where feasible</li>
                  </ul>
                </div>
              },
              { name: "Technology",
                href: sectorSearchURL({q: "technology", actions:["ma::implementation action/direct action on target::technology"]}),
              id:'actions_technology',
              find_out_more: true,
              content: <div>
                  <ul>
                    <li>Make municipal buildings more energy efficient, employ renewables, and install storage to keep vital municipal services online during outages</li>
                    <li>Modernize emergency warning and communication systems </li>
                    <li>Investigate nature-based solutions such as rain gardens to increase the resiliency of development and infrastructure projects</li>
                  </ul>
                </div>
              },
              { name: "Policies / Laws",
                href: sectorSearchURL({q: "policy law regulation", actions:["ma::planning::policies/laws/regulations"]}),
                id:'actions_policies_laws',
                find_out_more: true,
                content: <div>
                  <ul>
                    <li>Promote use of low impact development, green Infrastructure like urban trees, and bioengineering to protect communities from flooding, erosion, and extreme heat</li>
                    <li>Explore rolling easements to allow wetlands or beaches to migrate inland</li>
                    <li>Examine local bylaws or zoning regulations in order to encourage climate-smart development</li>
                    <li>Revise guidelines on the sizing of infrastructure (like culverts) to handle predicted storm events.</li>
                  </ul>
                </div>
              },
              { name: "Research / Monitoring",
                href: sectorSearchURL({q: "research monitoring", actions:["ma::outreach/education::research and monitoring"]}),
                id:"actions_research",
                find_out_more: true,
                content: <div>
                  <ul>
                    <li>Collect and report on local climate data, data on climate change impacts, and increases in maintenance and recovery costs</li>
                    <li>Inventory vulnerable municipal infrastructure</li>
                  </ul>
                </div>
              },
              { name: "Funding",
                href: sectorSearchURL({q: "funding financing", actions: ["ma::implementation action/direct action on target::financing"]}),
                id:'actions_funding',
                find_out_more: true,
                content: <div>
                  <ul>
                    <li><a href='https://www.mass.gov/municipal-vulnerability-preparedness-program'>Massachusetts Municipal Vulnerability Preparedness Program grants</a></li>
                    <li><a href='https://www3.epa.gov/region1/eco/uep/hcgp.html'>EPA Region I’s Healthy Communities Program </a></li>
                    <li><a href='https://www.mass.gov/green-communities-designation-grant-program'>Green Communities Designation and Grant Program </a></li>
                  </ul>
                </div>
              }
            ]},
          {title: "Looking for help?",
            id: 'looking_for_help',
            content: <ul>
              <li>
                <a href='https://www.mass.gov/municipal-vulnerability-preparedness-program'>
                  Massachusetts Municipal Vulnerability Preparedness Program
                </a>
              </li>
              <li>
                <a href='https://www.mass.gov/service-details/hazard-mitigation-grant-program'>
                  MEMA’s Local hazard mitigation grant program
                </a>
              </li>
              <li>
                <a href='http://www.iclei.org/'>
                  ICLEI
                </a>
              </li>
              <li>
                <a href='https://www.mass.gov/orgs/green-communities-division'>
                  Green Communities Program
                </a>
              </li>
            </ul>,
            subsections: []
          }
        ]}
      >
        <p>Cities and towns are taking a leadership role in the Commonwealth’s efforts to prepare for climate change. </p>

        <p>By identifying local vulnerabilities and championing actions and investments that will build local resilience, these leaders are helping their communities avoid future costs, keep residents safe, and plan for long-term prosperity. </p>

        <p>Seventy-one municipalities across the state are currently participating in the Commonwealth’s new Municipal Vulnerability Preparedness (MVP) Program.  With technical assistance grants announced by Governor Baker starting in 2017, they are conducting a community-based workshop process to identify vulnerabilities and strengths and prioritize adaptation actions.</p>
     </SectorDetailLayout>
    );
  }
}

export default LocalGovernmentSectorPage;
