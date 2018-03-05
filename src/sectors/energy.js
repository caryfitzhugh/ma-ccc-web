import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import energy_image from '../images/sectors/energy.jpg';
import energy_changes_in_precipitation_img from '../images/sectors/energy_changes_in_precipitation.jpg';
import energy_planning_img from '../images/sectors/energy_planning.jpg';
import SearchLink from '../utils/search_link';
import {searchURL} from '../search/utils';
import {Footnote} from '../utils/footnotes';

const sectorSearchURL = (props) => {
  let params = {facets: {sectors: ["ma::energy"],
                         climate_changes: props.changes,
                         actions: props.actions},
                query: props.q}
  return searchURL(params);
}

class EnergySectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
      collection_name: "MA/energy/highlighted_resources"
    };

    return (
      <SectorDetailLayout
        title="Energy"
        image={energy_image}
        image_credit="Liz West, CC BY 2.0"
        showcased_resources={showcased_resources}
        footnotes={[
          <span> Massachusetts Dept. of Energy Resources, RPS & APS Compliance Year 2014 Report, Appendix Three, Table H </span>,
          <span> MassSave, Massachusetts Joint Statewide Three-Year Electric and Gas Energy Efficiency Plan (2013-2015), p. 103.</span>,
          <span> Massachusetts Clean Energy Center, 2015 Clean Energy Industry Report, p. 36.</span>,
        ]}
        sections={[
          { title: "Impacts",
            id: "impacts",
            content: <p> </p>,
            subsections: [
              {name: "Rising Temperatures",
                href: sectorSearchURL({q: "temperature energy"}),
                find_out_more: true,
                id: "impacts_rising_temperatures",
                content: <div>
                    <ul>
                      <li>Increasing demand for summer cooling energy may strain aging transmission and distribution systems</li>
                      <li>Extreme heat may trigger power outages that disrupt the economy and put the elderly and the ill at greater risk</li>
                    </ul>
                </div>
              },
              {name: "Changes in Precipitation",
                href: sectorSearchURL({q: "precipitation energy"}),
                id: "impacts_changes_in_precipitation",
                find_out_more: true,
                content: <div>
                  <div className='section-img'>
                    <img src={energy_changes_in_precipitation_img}/>
                    <div className='image-credit'>
                      Julian Colton
                    </div>
                  </div>
                  <ul>
                    <li>Wetter weather may increase damage to power lines and flooding impacts to facilities and equipment</li>
                  </ul>
                </div>
              },
              { name: "Extreme Weather",
                href: sectorSearchURL({q: "energy +'extreme weather'"}),
                id: "impacts_extreme_weather",
                find_out_more: true,
                content: <div>
                  <ul>
                    <li>More frequent extreme weather is likely to increase risks of storm damage to power plants, gas terminals, storage facilities, and above and below-ground wires and pipes</li>
                    <li>Damage to infrastructure may produce more frequent service interruptions, increase equipment maintenance and replacement costs, and power outages in critical facilities</li>
                    <li>Severe storms in other parts of the country may disrupt energy supplies and transport</li>
                  </ul>
                </div>
              },
              {name: "Sea Level Rise",
               href: sectorSearchURL({q: "energy 'sea level rise'"}),
               find_out_more: true,
               id: "impacts_sea_level_rise",
               content: <div>
                  <ul>
                    <li>Rising seas may increase the frequency of flood damage at key energy facilities and service interruptions affecting telecommunications, waste treatment and other key systems</li>
                    <li>Saltwater intrusion may cause corrosion of equipment and instruments at power stations</li>
                    <li>As sea level rise progresses, energy facilities and power lines may require costly relocations</li>
                  </ul>
               </div>
              },
            ]
        },
        { title: "Actions",
          id: "actions",
          content: <p>
            Learn what you can do to address climate change in the Energy Sector.
          </p>,
          subsections: [
            {name: "Planning",
              href: sectorSearchURL({q: "planning", actions:["ma::planning::"]}),
              find_out_more: true,
              id: 'actions_planning',
              content: <div>
                  <div className='section-img'>
                    <img src={energy_planning_img}/>
                    <div className='image-credit'>
                    </div>
                  </div>
                <ul>
                  <li>Plan for peak demand growth associated with changing temperature levels</li>
                  <li>Collaborate across utilities, state, and local government to prepare for a coordinated response to large-scale power outages</li>
                  <li>Plan for continued integration of clean, distributed energy resources</li>
                  <li>Support grid modernization to increase ability to control and sectionalize service and bounce back quickly from power outages</li>
                  <li>Explore micro-grids at critical facilities like schools and hospitals to provide resilient energy for sheltering people during disasters</li>
                  <li>Prepare for disruptions to energy supplies from other U.S. regions such as the Gulf Coast</li>
                </ul>
              </div>
            },
            {name: "Management Practices",
             href: sectorSearchURL({q: "management",
                                     actions:["ma::implementation action/direct action on target::management and behavior"]}),
            id: "actions_management_practices",
            find_out_more: true,
            content: <div>
              <ul>
                <li>Promote energy conservation and efficiency in municipal facilities, businesses, and homes to reduce peak demand and support grid reliability</li>
              </ul>
            </div>
          },
          {name: "Outreach / Education",
            href: sectorSearchURL({q:"energy education", actions:["ma::outreach/education::"]}),
           find_out_more: true,
           id: "actions_outreach_education",
            content: <ul>
                <li>Educate energy asset owners and consumers about vulnerabilities, incentives for investing in clean and distributed resources, and renewable energy options </li>
            </ul>
          },
          {name: "Technology",
            href: sectorSearchURL({q: "technology",
                                   actions:["ma::implementation action/direct action on target::technology"]}),
            id: "actions_tech",
            find_out_more: true,
            content: <div>
              <ul>
                <li>Diversify energy technologies and sources</li>
                <li>Implement grid modernization</li>
                <li>Pilot energy storage projects</li>
                <li>Utilize and accelerate deployment of new energy efficiency technologies</li>
              </ul>
            </div>
          },
          { name: "Policies / Laws",
            href: sectorSearchURL({q: "policy law regulation", actions:["ma::planning::policies/laws/regulations"]}),
            find_out_more: true,
            id: "actions_policies_laws",
            content: <div>
              <ul>
                <li>Consider policies and incentives for encouraging energy conservation and efficiency and growth in distributed energy resources</li>
              </ul>
            </div>
          },
          { name: "Research / Monitoring",
            href: sectorSearchURL({q: 'research monitoring', actions:["ma::outreach/education::research and monitoring"]}),
            find_out_more: true,
            id: 'actions_research',
            content: <ul>
                <li>Monitor trends and correlations of energy demand with emerging weather trends. </li>
                <li>Encourage research and development of renewable energy and energy storage systems. </li>
            </ul>
          },
          { name: "Funding",
            href: sectorSearchURL({q: "funding financing"}),
            id: "actions_funding",
            content: <ul>
              <li><a href='http://www.massclimatechange.org/resources/resource::2016/green-communities-division'>
                  Green Communities program grants and technical assistance
                </a></li>
              <li><a href='http://www.massclimatechange.org/resources/resource::2175/community-clean-energy-resiliency-initiative'>
                  Community Clean Energy Resiliency Initiative grants
                </a></li>
              <li><a href='http://www.massclimatechange.org/resources/resource::2176/massachusetts-clean-energy-center-masscec'>
                  Mass Clean Energy Center (MACEC) financing options and technical assistance
                </a></li>
              <li><a href='http://www.massclimatechange.org/resources/resource::2177/mass-save'>
                  Mass Save loans, rebates and incentives
                </a></li>
            </ul>
          }
          ]
        },
        { title: "Looking for help?",
          id: "looking_for_help",
          content: <div>
            <ul>
              <li><a href='https://www.mass.gov/orgs/massachusetts-department-of-energy-resources'>Massachusetts DOER</a></li>
              <li><a href='http://www.masscec.com/'> Massachusetts Clean Energy Center</a> </li>
              <li><a href='https://www.masssave.com/'>Mass Save</a></li>
            </ul>
          </div>,
          subsections: []
        }
        ]}

        >
          <p>Reliable energy services are essential for Massachusetts businesses and residents.  Climate change could increase the vulnerability of energy infrastructure to disruptions in electricity transmission and distribution, and to facility and power line damage from storms and flooding.</p>

          <p>Massachusetts is addressing these vulnerabilities by modernizing the grid and expanding distributed energy generation and storage, and by considering sea level rise projections when siting new infrastructure along the coast.</p>

          <p>The Baker-Polito Administration recently launched the Advancing Commonwealth Energy Storage (ACES) program to support innovative projects across the state.  More than $20 million in grants awarded to 26 communities in 2017 will help build an energy storage market that will benefit ratepayers and lessen the impact of power outages on communities and the economy.</p>


        </SectorDetailLayout>
    );
  }
}

export default EnergySectorPage;
