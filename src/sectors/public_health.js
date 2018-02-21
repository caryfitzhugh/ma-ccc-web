import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/public_health.jpg';
import public_health_rising_temperatures_img from '../images/sectors/public_health_rising_temperatures.jpg';
import public_health_management_practices_img from '../images/sectors/public_health_management_practices.jpg';
import {searchURL} from '../search/utils';
import {Footnote} from '../utils/footnotes';

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
                href: sectorSearchURL({changes:["ma::rising temperatures::"]}),
                id: "impacts_rising_temperatures",
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
                  <h6><a href={sectorSearchURL({changes:["ma::rising temperatures::"]})}>Find more inforation </a></h6>
                </div>
              },
              {name: "Changes in Precipitation",
                href: sectorSearchURL({changes:["ma::changes in precipitation::"]}),
                id: "impacts_changes_in_precipitation",
                content: <div>
                  <p>Flooding caused by the heavier downpours expected in Massachusetts could force industrial facilities to shut down and cause chemical explosions or releases that could impact drinking water safety. Extensive and damaging flooding events and their aftermath could increase the potential for water-borne disease outbreaks. Greater volumes of stormwater and agricultural runoff could transport sediments, pathogens, nutrients, and pesticides to nearby waterways and create risks for swimming, fishing, or drinking water quality. </p>
                  <ul>
                    <li>Pathogens, nutrients, and pesticides carried to local waterways by stormwater from large storm events may elevate risks for swimming, fishing, or drinking water quality</li>
                    <li>Flooding of industrial facilities may increase the risk for explosions or chemical releases, threatening drinking water safety</li>
                    <li>Extensive flooding could increase the potential for water-borne disease outbreaks</li>
                  </ul>

                  <h6><a href={sectorSearchURL({changes:["ma::changes in precipitation::"]})}>Find more inforation </a></h6>
                </div>
              },
              { name: "Extreme Weather",
                href: sectorSearchURL({changes:["ma::extreme weather::"]}),
                id: "impacts_extreme_weather",
                content: <div>
                  <ul>
                    <li>Extreme storms may disrupt sanitary, energy, and health care services, and impair access to safe drinking water and nutritious food</li>
                    <li>Severe flooding may damage or obstruct roadways, making evacuation and emergency transport more difficult</li>
                    <li>Coping with extreme weather may increase mental and physical health stress</li>
                  </ul>
                  <h6><a href={sectorSearchURL({changes:["ma::extreme weather::"]})}>Find more inforation </a></h6>
                </div>
              },
              {name: "Sea Level Rise",
              href: sectorSearchURL({changes:["ma::sea level rise::"]}),
               id: "impacts_sea_level_rise",
               content: <div>
                  <ul>
                    <li>Coastal storm surges may become more dangerous, forcing emergency evacuations</li>
                    <li>Flood damage to coastal infrastructure like power plants, drinking water pipes and wastewater treatment plants could increase public health risks, especially for vulnerable populations</li>
                  </ul>
                  <h6><a href={sectorSearchURL({changes:["ma::sea level rise::"]})}>Find more inforation </a></h6>
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
              href: sectorSearchURL({actions:["ma::planning::"]}),
              id: 'actions_planning',
              content: <div>
                <ul>
                  <li>Plan climate and health education campaigns targeted to vulnerable populations</li>
                  <li>Develop plans to ensure that local health systems can respond to climate-related health risks</li>
                  <li>Adopt strategies to promote walking, biking, public transit and use of electric vehicles for their environmental and health benefits</li>
                  <li>Develop a heat emergency plan with measures to ensure vulnerable populations can access cooling centers, especially in urban areas</li>
                  <li>Ensure evacuation plans and routes consider climate change impacts</li>
                </ul>
                <h6><a href={sectorSearchURL({changes:["ma::planning::"]})}>Find more inforation </a></h6>
              </div>
            },
            {name: "Management Practices",
             href: sectorSearchURL({actions:["ma::implementation action/direct action on target::management and behavior"]}),
            id: "actions_management_practices",
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
              <h6><a href={sectorSearchURL({changes:["ma::implementation action/direct action on target::management and behavior"]})}>Find more inforation </a></h6>
            </div>
          },
          {name: "Technology",
            href: sectorSearchURL({actions:["ma::implementation action/direct action on target::technology"]}),
            id: "actions_tech",
            content: <div>
              <ul>
                <li>Use green stormwater infrastructure like rain gardens, swales, and porous pavement</li>
                <li>Promote less pesticide-intensive strategies to manage mosquitoes and ticks</li>
              </ul>
              <h6><a href={sectorSearchURL({changes:["ma::implementation action/direct action on target::technology"]})}>Find more inforation </a></h6>
            </div>
          },
          { name: "Policies / Laws",
            href: sectorSearchURL({actions:["ma::planning::policies/laws/regulations"]}),
            id: "actions_policies_laws",
            content: <div>
              <ul>
                <li>Consider policies and incentives to increase urban tree canopy and vegetation for cooling </li>
                <li>Communicate about the health benefits of clean energy policies</li>
              </ul>
              <h6><a href={sectorSearchURL({actions:["ma::planning::policies/laws/regulations"]})}>Find more inforation </a></h6>
            </div>
          },
          { name: "Research / Monitoring",
            href: sectorSearchURL({actions:["ma::outreach/education::research and monitoring"]}),
            id: 'actions_research',
            content: <div>
              <ul>
                <li>Develop a systematic tick surveillance program to monitor vector densities and infection rates</li>
                <li>Investigate relationships between climate change, air quality, and health outcomes</li>
              </ul>
            </div>
          },
          { name: "Funding",
            href: sectorSearchURL({actions: ["ma::implementation action/direct action on target::financing"]}),
            id: "actions_funding",
            content: <div>
              <ul>
                <li><a src='https://www.mass.gov/municipal-vulnerability-preparedness-program'>Massachusetts Municipal Vulnerability Preparedness Program</a></li>
                <li><a src='https://www3.epa.gov/region1/eco/uep/hcgp.html'>EPA’s Healthy Communities Grant Program</a></li>
              </ul>
            </div>
          }
          ]
        },
        { title: "Looking for help?",
          id: "looking_for_help",
          content: <div>
            <ul>
              <li><a href='https://www.mass.gov/orgs/department-of-public-health'>Massachusetts Department of Public Health</a></li>
              <li><a href='https://www.naccho.org/'>National Association of County and City Health Officials (NACCHO) </a></li>
            </ul>
          </div>,
          subsections: []
        }
        ]}
        >
          <p>People from around the world come to Massachusetts to receive medical care at our renowned hospitals, and the Commonwealth serves as a model of universal healthcare with the highest rate of health care coverage in the country at 98% of residents.</p>

          <p>Climate change will present new challenges. Extreme heat events, flooding, and increases in vector-borne diseases and allergens could affect many residents. Some will be especially vulnerable due to their health, age, or economic status.</p>

          <p>The Massachusetts Department of Health is working with state agencies and communities to evaluate public health risks from climate change using environmental and health data, information about vulnerable populations, and local climate projections.</p>
        </SectorDetailLayout>
    );
  }
}

export default PublicHealthSectorPage;
