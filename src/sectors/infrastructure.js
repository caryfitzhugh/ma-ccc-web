import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/infrastructure.jpg';
import infrastructure_planning_img from '../images/sectors/infrastructure_planning.jpg';
import infrastructure_extreme_weather_img from '../images/sectors/infrastructure_extreme_weather.jpg';
import {Link} from 'react-router-dom';
import {searchURL} from '../search/utils';

const sectorSearchURL = (props) => {
  let params = {facets: {sectors: ["ma::infrastructure"],
                         climate_changes: props.changes,
                         actions: props.actions},
                query: props.q}
  return searchURL(params);
}
class InfrastructureSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
      collection_name: "MA/infrastructure/highlighted_resources"
    };

    return (
      <SectorDetailLayout
        title="Infrastructure"
        image={sector_image}
        image_credit="FEMA/Alberto Pillot"
        showcased_resources={showcased_resources}
        sections={[
          { title: "Impacts",
            id: "impacts",
            content: <p> </p>,
            subsections: [
              {name: "Rising Temperatures",
                href: sectorSearchURL({q: "infrastructure temperature",
                                       changes:["ma::rising temperatures::"]}),
                find_out_more: true,
                id: "impacts_rising_temperatures",
                content: <div>
                  <ul>
                    <li>Thermal stresses on building materials could increase, leading to more wear and tear and reducing useful lifespan</li>
                    <li>Building systems may be disrupted by power outages during heat waves</li>
                    <li>Building stock may increasingly require air conditioning to maintain comfortable tempera</li>
                  </ul>
                </div>
              },
              {name: "Changes in Precipitation",
                href: sectorSearchURL({q: "infrastructure precipitation", changes:["ma::changes in precipitation::"]}),
                id: "impacts_changes_in_precipitation",
                find_out_more: true,
                content: <div>
                  <ul>
                    <li>Commercial and residential buildings may become more vulnerable to toxic mold build-up </li>
                    <li>Buildings not elevated or flood-proofed may be at greater risk as riverine and coastal flooding increases</li>
                    <li>Basement flooding may destroy electrical panels and furnaces and cause releases of oil and hazardous wastes to floodwaters</li>
                    <li>Flood control dams may sustain more wear and tear from higher flood flows in rivers</li>
                  </ul>
                </div>
              },
              { name: "Extreme Weather",
                href: sectorSearchURL({q: "infrastructure 'extreme weather'", changes:["ma::extreme weather::"]}),
                find_out_more: true,
                id: "impacts_extreme_weather",
                content: <div>
                  <div className='section-img'>
                    <img src={infrastructure_extreme_weather_img}/>
                  </div>
                  <ul>
                    <li>Many residential and commercial buildings built along rivers and coastal areas may be vulnerable to severe damage during extreme storms</li>
                    <li>Sea walls may be damaged or destroyed</li>
                    <li>Inland and coastal dams, levees and sea walls in poor condition may breach, putting people and property in harm’s way and necessitating costly rebuilding</li>
                  </ul>
                </div>
              },
              {name: "Sea Level Rise",
               href: sectorSearchURL({q: "infrastructure 'sea level rise'", changes:["ma::sea level rise::"]}),
               id: "impacts_sea_level_rise",
                find_out_more: true,
               content: <div>
                  <ul>
                    <li>Rising seas will make coastal storm surges more damaging</li>
                    <li>Some buildings will be permanently inundated as sea level progresses if they are not elevated or relocated</li>
                  </ul>
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
              href: sectorSearchURL({q: "planning", actions:["ma::planning::"]}),
              find_out_more: true,
              id: 'actions_planning',
              content: <div>
                  <div className='section-img'>
                    <img src={infrastructure_planning_img}/>
                  </div>
                  <ul>
                    <li>Consider climate change projections when siting new buildings and facilities</li>
                    <li>Assess when to flood-proof vulnerable buildings, and when to relocate those structures</li>
                    <li>Plan micro-grids at critical facilities like schools and hospitals to provide energy for sheltering people during disasters</li>
                    <li>Strengthen and raise sea walls, and evaluate opportunities to use soft shoreline and bank armoring as an alternative to hard infrastructure where possible</li>
                </ul>
              </div>
            },
            {name: "Management Practices",
              href: sectorSearchURL({q: "management", actions:["ma::implementation action/direct action on target::management and behavior"]}),
             find_out_more: true,
             id: "actions_management_practices",
             content: <div>
              <ul>
                <li>Formulate risk-based methods to evaluate the service life of flood control assets like sea walls and levees under changing climate conditions</li>
                <li>Consider increasing the frequency of inspections for flood control structures</li>
                <li>Install energy efficiency measures and use renewable energy</li>
                <li>Consider purchasing appropriately-sized generators and pumps to handle flooding</li>
                <li>Educate property owners and businesses about how to safely store chemicals and avoid spills during floods through safe storage</li>
              </ul>
            </div>
          },
          {name: "Technology",
            href: sectorSearchURL({q: "technology", actions:["ma::implementation action/direct action on target::technology"]}),
            find_out_more: true,
            id: "actions_tech",
            content: <div>
              <ul>
                <li>Locate critical building systems and any toxics storage on higher stories or rooftops </li>
                <li>Use Smart-Grid meters in buildings to manage demand spikes and prevent outages</li>
              </ul>
            </div>
          },
          { name: "Policies / Laws",
            href: sectorSearchURL({q: "policy law regulation",
                                   actions:["ma::planning::policies/laws/regulations"]}),
            id: "actions_policies_laws",
            find_out_more: true,
            content: <div>
              <ul>
                <li>Examine policies to encourage climate-considered siting and design for buildings and infrastructure. <em>(The Commonwealth is currently developing a Statewide Hazard Mitigation and Climate Adaptation Plan that will further develop state-level policies for addressing climate change <a href='http://maresilience.com'>learn more</a>.)</em></li>
                <li>Adjust local zoning regulations to incorporate flood protection for buildings</li>
              </ul>
            </div>
          },
          { name: "Research / Monitoring",
            href: sectorSearchURL({q: 'research monitoring',
                                   actions:["ma::outreach/education::research and monitoring"]}),
            find_out_more: true,
            id: 'actions_research',
            content: <ul>
              <li>Test and evaluate the effectiveness of green infrastructure like green roofs for cooling buildings and reducing runoff, and permeable pavement for infiltrating stormwater</li>
            </ul>
          },
          { name: "Funding",
            href: sectorSearchURL({q: 'funding financing',
                                   actions: ["ma::implementation action/direct action on target::financing"]}),
            find_out_more: true,
            id: "actions_funding",
            content: <ul>
              <li><a href='https://www.mass.gov/learn-about-memas-emergency-management-grant-programs'>
                The Massachusetts Emergency Management Agency grant and financial assistance programs</a></li>
              <li><a href='http://www.massclimatechange.org/resources/resource::2056/massworks-infrastructure-program'>  MassWorks Infrastructure Program </a></li>
              <li><a href='http://www.massclimatechange.org/resources/resource::2054/massachusetts-municipal-vulnerability-preparedness-program-mvp'> Massachusetts Municipal Vulnerability Preparedness Program grants</a></li>
              <li><a href='http://www.massclimatechange.org/resources/resource::2169/green-communities-designation-and-grant-program'> Green Communities Designation and Grant Program </a></li>
            </ul>
          }
          ]
        },
        { title: "Looking for help?",
          id: "looking_for_help",
          content: <div>
            <a href='https://www.mass.gov/orgs/executive-office-of-energy-and-environmental-affairs'>
              Massachusetts Executive Office of Energy and Environmental Affairs </a>
          </div>,
          subsections: []
        }
        ]}
        >
          <p>The Commonwealth’s infrastructure includes: bridges and culverts; energy generation facilities and distribution systems like the electric grid; rail lines, water infrastructure, seawalls, dams and levees, and many other important systems that underpin our communities. Many of these assets are vulnerable to adverse weather conditions  as a result of being sited and designed based on historic climate data rather than projected changes and do not have the systems in place to withstand and respond to these new challenges.</p>
          <p>With advances in technology and construction, infrastructure and buildings have a long life span which makes them increasingly susceptible to climate change. The Baker-Polito Administration continues to take steps to protect existing structures and make strategic, long-term investments that can withstand future climate conditions</p>
          <p>This page provides information and data about how cities and towns, government, utilities, businesses, and individuals can take many actions to asses climate vulnerabilities, incorporate climate change into siting decisions, retrofit in anticipation of potential flooding, and add technologies that both enhance resilience and reduce greenhouse gas emissions.</p>
        </SectorDetailLayout>
    );
  }
}

export default InfrastructureSectorPage;
