import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/water_resources.jpg';
import water_resources_extreme_weather_img from '../images/sectors/water_resources_extreme_weather.jpg';
import water_resources_technology_img from '../images/sectors/water_resources_technology.jpg';
import {searchURL} from '../search/utils';

const sectorSearchURL = (props) => {
  let params = {facets: {sectors: ["ma::water resources"],
                         climate_changes: props.changes,
                         actions: props.actions},
                query: props.q}
  return searchURL(params);
}

class WaterResourcesSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
      collection_name: "MA/water_resources/highlighted_resources"
    };
    return (
      <SectorDetailLayout
        title="Water Resources"
        image={sector_image}
        image_credit={'Henry Zybszynski, CC BY 2.0'}

        showcased_resources={showcased_resources}
        sections={[
          { title: "Impacts",
            id: "impacts",
            content: <p>
            </p>,
            subsections: [
              {name: "Rising Temperatures",
                href: sectorSearchURL({q: "water resources", changes:["ma::rising temperatures::"]}),
                id: "impacts_rising_temperatures",
                find_out_more: true,
                content: <div>
                  <ul>
                    <li>Spikes in air conditioning demand may trigger power outages that disrupt water and wastewater treatment</li>
                    <li>Warmer temperatures and more winter rain may cause stream flows to peak and decline earlier with many impacts on wildlife</li>
                    <li>Lower summer flows may affect aquatic life, habitat health and drinking water supplies</li>
                  </ul>
                </div>
              },
              {name: "Changes in Precipitation",
                href: sectorSearchURL({q: 'water resources changes in precipitation', changes:["ma::changes in precipitation::"]}),
                find_out_more: true,
                id: "impacts_changes_in_precipitation",
                content: <div>
                  <ul>
                    <li>Water supplies for drinking, agriculture and water-dependent industries may be depleted by smaller winter snow packs and drier summers</li>
                    <li>Storm water from larger storms may overwhelm culverts sized to accommodate smaller events</li>
                    <li>Water quality may decline as wetter storms wash nutrients and pollutants into surface waters</li>
                  </ul>
                </div>
              },
              { name: "Extreme Weather",
                find_out_more: true,
                href: sectorSearchURL({changes:["ma::extreme weather::"]}),
                id: "impacts_extreme_weather",
                content: <div>
                  <div className='section-img'>
                    <img src={water_resources_extreme_weather_img}/>
                    <div className='image-credit'>
                      Nick Allen, CC BY-SA 4.0
                    </div>
                  </div>
                  <ul>
                    <li>Flood risks may increase for the many gravity-fed water and wastewater systems located in low lying areas near rivers, reservoirs, and the shore</li>
                    <li>Combined sewer overflows may increase, degrading water quality and creating public health risks</li>
                  </ul>
                </div>
              },
              {name: "Sea Level Rise",
               href: sectorSearchURL({changes:["ma::sea level rise::"]}),
               id: "impacts_sea_level_rise",
                find_out_more: true,
               content: <div>
                  <ul>
                    <li>Salt water intrusion may make infrastructure more vulnerable to corrosion and may threaten coastal aquifers and the drinking water they supply.</li>
                    <li>Larger coastal storm surges may put critical water and wastewater infrastructure at risk</li>
                    <li>Some municipal storm water and wastewater collection systems, outfalls, and wastewater treatment plants may eventually need relocation</li>
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
              href: sectorSearchURL({actions:["ma::planning::"]}),
              find_out_more: true,
              id: 'actions_planning',
              content: <div>
                <ul>
                    <li>Collect and analyze basic geographic, geologic, and engineering information to characterize vulnerabilities for water resources and infrastructure</li>
                    <li>Forecast future scenarios for water demand and identify areas vulnerable to water shortages </li>
                    <li>Identify potential emergency water system connections </li>
                    <li>Plan for relocating and flood-proofing water infrastructure in flood hazard areas</li>
                </ul>
              </div>
            },
            {name: "Management Practices",
             href: sectorSearchURL({actions:["ma::implementation action/direct action on target::management and behavior"]}),
              find_out_more: true,
            id: "actions_management_practices",
            content: <div>
              <ul>
                <li>Acquire emergency equipment such as a mobile pumps, water tanks and filters, and back-up generators</li>
                <li>Build or retrofit storm water infrastructure to accommodate runoff from projected precipitation</li>
                <li>Make water supplies more resilient by promoting water conservation and infiltration of storm water for groundwater recharge</li>
              </ul>
            </div>
          },
          {name: "Technology",
            href: sectorSearchURL({actions:["ma::implementation action/direct action on target::technology"]}),
            find_out_more: true,
            id: "actions_tech",
            content: <div>
                  <div className='section-img'>
                    <img src={water_resources_technology_img}/>
                    <div className='image-credit'>
                      Cape Cod Green Infrastructure Guide
                    </div>
                  </div>
                <ul>
                  <li>Test and evaluate new green storm water infrastructure technologies that can absorb and clean stormwater</li>
                  <li>Install energy efficient equipment in water and waste water treatment facilities</li>
                </ul>
            </div>
          },
          { name: "Policies / Laws",
            href: sectorSearchURL({actions:["ma::planning::policies/laws/regulations"]}),
            id: "actions_policies_laws",
            find_out_more: true,
            content: <ul>
              <li>Examine policies and incentives to encourage more energy efficient water infrastructure powered with renewable energy</li>
              <li>Consider local policies that can improve management of agricultural and urban runoff</li>
              <li>Adopt local ordinances to protect floodplains that reduce flood risks for infrastructure</li>
              <li>Evaluate long-term control plans for combined sewer overflows under future scenarios for extreme storms</li>
              <li>Promote use of treated wastewater in commercial and industrial setting</li>
            </ul>
          },
          { name: "Research / Monitoring",
            href: sectorSearchURL({actions:["ma::outreach/education::research and monitoring"]}),
            find_out_more: true,
            id: 'actions_research',
            content: <ul>
                <li>Compile critical information on water and wastewater treatment facilities, including location and elevation of key structures as well as their proximity to floodplains and water bodies</li>
                <li>Research how low flows and higher temperatures will affect nutrient, sediment, and pathogen pollution</li>
                <li>Implement an automatic gauging and reporting network to better assess hydrological conditions and provide improved early-warning systems for supply shortages</li>
                <li>Identify water and sewer facilities susceptible to saltwater intrusion and coastal inundation</li>
            </ul>
          },
          { name: "Funding",
            href: sectorSearchURL({actions: ["ma::implementation action/direct action on target::financing"]}),
            id: "actions_funding",
            find_out_more: true,
            content: <ul>
            <li> <a href='/resources/resource::2181/water-grants-and-loans'>
              Grants and loans for water infrastructure and aquatic resources
              </a></li>
            <li><a href='http://www.mass.gov/eea/agencies/massdep/water/grants/water-infrastructure-assessment-and-planning-grants.html'>
              Massachusetts Water Infrastructure Assessment and Planning Grants
            </a></li>
            <li><a href='http://www.mass.gov/eea/agencies/massdep/water/grants/clean-water-state-revolving-fund.html'>
              Massachusetts Clean Drinking Water Revolving Fund</a></li>
            <li><a href='/resources/resource::2184/river-restoration-culvert-replacements'>
            Massachusetts Culvert Replacement Program</a></li>
            <li><a href='https://www.mass.gov/guides/the-community-septic-management-program'>
              Massachusetts Community Septic Management Program</a></li>
            </ul>
          }
          ]
        },
        { title: "Looking for help?",
          id: "looking_for_help",
          content: <div>
            <ul>
              <li><a href='https://www.mass.gov/orgs/executive-office-of-energy-and-environmental-affairs'>
                Massachusetts Executive Office of Energy and Environmental Affairs
              </a></li>
              <li><a href='http://drought.unl.edu/'>
                National Drought Mitigation Center
              </a></li>
              <li><a href='http://neiwpcc.org/'>
                New England Interstate Water Pollution Control Commission (NEIWPCC)
              </a></li>
            </ul>
          </div>,
          subsections: []
        }
        ]}
        >
          <p>In 2016, the Commonwealth was gripped with the worst drought conditions in recent memory. The prolonged period of warm, dry weather served as a stark reminder of how residents, communities, and industries depend on the Commonwealth’s fresh water resources.</p>
          <p>Climate change will require state government and cities and towns to increase the resiliency of our water resources and the infrastructure we use to manage them. Heavier spring downpours may increase water pollution, drier summers may strain drinking water supplies, and increased flooding may damage infrastructure essential for delivering safe drinking water, collecting and treating wastewater, and managing storm water runoff.</p>
          <p>This page provides information and data including how the Baker-Polito Administration continues to offer critical funding to restore aquatic habitat, rivers and watersheds, monitor water quality, protect endangered species and promote environmental stewardship.</p>
        </SectorDetailLayout>
    );
  }
}

export default WaterResourcesSectorPage;
