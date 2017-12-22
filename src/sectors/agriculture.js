import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import {Link} from 'react-router-dom';
import agriculture_image from '../images/sectors/agriculture.jpg';
import SearchLink from '../utils/search_link';
import {Footnote} from '../utils/footnotes';

const AGSearchLink = (props) => {
  return <SearchLink params={{facets: {sectors: ["ma::agriculture"], climate_changes: props.changes, actions: props.actions}, query: props.q}}>
      {props.children}
    </SearchLink>

}

class AgricultureSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Highlighted Resources",
      collection_name: "MA/agriculture/highlighted_resources",
    };

    return (
      <SectorDetailLayout
      image={agriculture_image}
        title="Agriculture"
        showcased_resources={showcased_resources}
        datagrapher_file='Temp/state/gdd50/ANN/MA/'
        footnotes={[
          <span> <a href='http://www.mass.gov/eea/docs/agr/facts/snapshot-of-ma-agriculture.pdf'>http://www.mass.gov/eea/docs/agr/facts/snapshot-of-ma-agriculture.pdf</a></span>,
          <span> <a href='https://www.epa.gov/ghgemissions/sources-greenhouse-gas-emissions#agriculture'>https://www.epa.gov/ghgemissions/sources-greenhouse-gas-emissions#agriculture</a> accessed August 21, 2017</span>,
          <span> MA DEP July 2016 Statewide Greenhouse Gas Emissions Level: 1990 Baseline and 2020 Business As Usual Projection Update Greenhouse Gas Emissions Update Report</span>,
        ]}
        sections={[
          { title: "Impacts",
            id: "impacts",
            content: <p>
            </p>,
            subsections: [
              {name: <AGSearchLink changes={["ma::rising temperatures::"]}>Rising Temperatures</AGSearchLink>,
                id: "impacts_rising_temperatures",
                content: <div>
                  <p>Higher average temperatures have already shifted the U.S Department of Agriculture’s plant hardiness zones in the Northeast in the last 25 years. As zones continue to change, crops that rely on specific temperature regimes like apples, cranberries, and maple syrup are likely to fare poorly. Farmers may also have opportunities to cultivate new crops not previously grown in Massachusetts, although crop transitions could be costly. An expected increase in heat stress days (max. temperature of more than 90°F) will have a strong negative impact on farming and livestock, especially dairy production. </p>
                  <p>Climate change may lead to reduced yields due to increased pest pressure from insects, diseases, and weeds that are adapted to warmer climates. This could result in increased pesticide use, and new challenges for preventing and mitigating health risks to farm workers, consumers, the public, water quality, and the environment.</p>
                </div>
              },
              {name: <AGSearchLink changes={["ma::changes in precipitation::"]}>Changes in Precipitation</AGSearchLink>,
                id: "impacts_changes_in_precipitation",
                content: <div>
                  <p>Farms are usually located in fertile river valleys, where an increasing frequency of intense precipitation events is likely to cause river flooding that could damage or wipe out crops. Many farms, particularly those with less access to working capital for infrastructure improvements, are very vulnerable to the physical and economic impacts from flooding, such as field erosion, soil loss, and crop damage. </p>
                  <p>Expected changes in the seasonal distribution of precipitation may also create new challenges for farmers. Wetter springs could delay planting for corn and vegetables or reduce yields, while expected drier summers and intermittent droughts could strain water supplies needed for growing, stress crops, and delay harvests.</p>
                </div>
              },
              {name: <AGSearchLink changes={["ma::extreme weather::"]}>Extreme Weather</AGSearchLink>,
                id: "impacts_extreme_weather",
                content: <div>
                  <p>In addition to the challenges created by wetter springs and drier summers, the growing intensity of storms across the Northeast U.S. could have detrimental effects on agriculture. Extreme flood flows in rivers can quickly produce catastrophic erosion and loss of farmland, as well as damage to farm buildings and equipment, and on-farm irrigation and drainage systems. Serious crop losses are possible in the worst storms like Tropical Storm Irene, which inflicted damage on the sweet corn crops in Central Massachusetts. Floodwaters can also spread invasive plants.</p>
                </div>
              },
              {name: <AGSearchLink changes={["ma::sea level rise::"]}>Sea Level Rise</AGSearchLink>,
               id: "impacts_sea_level_rise",
               content: <div>
                  <p>Rising sea levels will increase tidal range and tidal inundation, and this could cause more saltwater intrusion into groundwater and fresh water aquifers in coastal and estuarine agricultural areas. As water supplies and soils becomes more salinated, farmers could face serious challenges to maintaining healthy crops and livestock. Rising sea levels and extreme storms will also accelerate the erosion of coastal agricultural land, and could reduce acreage for farming.</p>
               </div>
              },
            ]
        },
        { title: "Actions",
          id: "actions",
          content: <p>
          </p>,
          subsections: [
            {name: <AGSearchLink actions={["ma::planning::"]}>Planning</AGSearchLink>,
              id: 'actions_planning',
              content: <ul>
                <li>Use the new Massachusetts Department of Agriculture <a href='https://www.mass.gov/service-details/agricultural-climate-resiliency-efficiencies-acre-program'>ACRE program</a> to complete a vulnerability assessment to understand vulnerability factors and risks, and identify actions and investments that will protect farm viability. </li>
                <li>Develop a Farm Emergency Plan. </li>
                <li>Complete an energy audit. </li>
                <li>Get to know Massachusetts-based Best Management Energy Practices for Dairy, Maple Syrup, Greenhouses, Orchards and Renewables by reading the <a href='https://massfarmenergy.com/get-started/technical-resources/'>Massachusetts Farm Energy Program (MFEP)</a> guides.  </li>
                <li>Implement energy efficiency and renewable energy projects with technical and financial (grants and rebates) assistance through MDAR's
                  <a href='www.mass.gov/eea/agencies/agr/about/divisions/mfep.html'>MFEP</a> and
                  <a href='https://www.mass.gov/service-details/agricultural-energy-grant-program'>AgEnergy Grant</a>
                  programs.</li>
              </ul>
            },
            {name: <AGSearchLink q="management practices">Management Practices</AGSearchLink>,
            id: "actions_management_practices",
            content: <ul>
                <li>Adopt best practices for soil and land conservation to reduce loss of agricultural land. </li>
                <li>Use Agricultural Best Management Practices (BMPs), for example for manure management, and controlling runoff of pesticides, nutrients, fertilizers, and soil.</li>
                <li>Consider crop variety diversification to increase resiliency to climate changes.</li>
                <li>Update and improve integrated pest management in light of changing pest population dynamics using best management practices.</li>
                <li>Implement a water conservation and reuse program. </li>
                <li>Implement efficiency measures to reduce energy use. </li>
                <li>Shift planting or harvesting dates based on forecasted changes in seasons. </li>
                <li>Maintain and increase carbon content of soil by planting cover crops, using no-till techniques and composting. </li>
            </ul>
          },
          {name: <AGSearchLink actions={["ma::implementation action/direct action on target::technology"]}>Technology</AGSearchLink>,
            id: "actions_tech",
            content: <ul>
                <li>Expand irrigation capacity and other (on farm) capital investments. </li>
                <li>Use fans, sprinklers, and other cooling systems for livestock. </li>
                <li>Install renewable energy technologies that are compatible with farming such as windmills and solar panels. </li>
            </ul>
          },
            {name: <AGSearchLink actions={["ma::planning::policies/laws/regulations"]}>Policies / Laws</AGSearchLink>,
            id: "actions_policies_laws",
            content: <ul>
                <li>Examine policies and incentives to encourage farmers to adopt Best Management Practices that will build resilience, protect water quality, and reduce risks from flooding in agricultural areas.</li>
                <li>Consider policies that encourage conservation of floodplain agricultural lands as one of the state’s best assets for slowing and absorbing floodwaters and protecting development downstream.</li>
            </ul>
          },
          { name: <AGSearchLink q="research monitoring">Research/Monitoring</AGSearchLink>,
            id: 'actions_research',
            content: <ul>
                <li>Track use and occurrence of pesticides as weather patterns change. </li>
                <li>Track food-borne illnesses to determine if new patterns or agents are emerging. </li>
                <li>Conduct outreach and education targeting vulnerable agricultural workers and their employers about health and safety precautions. </li>
            </ul>
          },
          { name: <AGSearchLink actions={["ma::implementation action/direct action on target::financing"]}>Funding</AGSearchLink>,
            id: "actions_funding",
            content: <ul>
                <li>Find low- or no-cost loans for infrastructure adaptations such as irrigation, drainage, crop transition, and livestock facilities. </li>
                <li>Find funding for energy related grants, rebates, loans, loan guarantees. Consult the <a href='http://www.mass.gov/eea/agencies/agr/about/divisions/mfep.html'>MA Farm Energy Program (MFEP)</a>  and annual
                    <a href='https://www.mass.gov/service-details/agricultural-energy-grant-program'>AgEnergy Grant Program</a> managed by the Massachusetts Department of Agricultural Resources (MDAR) for more information. </li>
                <li>Secure insurance for small farm crop losses to mitigate losses from flooding, and apply for FEMA and HUD disaster assistance grants to support recovery when damage occurs.</li>
            </ul>
          }
          ]
        },
        { title: "Looking for help?",
          id: "looking_for_help",
          content: <div>
            <ul>
                <li><a href='www.mass.gov/agr'>Massachusetts Department of Agriculture </a> </li>
                <li><a href='http://extension.umass.edu/vegetable/'>University of Massachusetts Extension </a></li>
                <li><a href='https://www.fsa.usda.gov/programs-and-services/conservation-programs/index'>USDA Farm Service Agency’s conservation programs </a></li>
                <li><a href='https://www.climatehubs.oce.usda.gov/northeast'>USDA Climate Hub </a></li>
            </ul>
          </div>,
          subsections: []
        }

        ]}>
          <p>Massachusetts has 7,755 farms, employing 28,000 people, working on over 523,000 acres that produce $492 million in agricultural products. Key Massachusetts market segments include the greenhouse and nursery, cranberry, produce, dairy, poultry, and livestock sectors<Footnote num='1'/>.</p>

          <p>Agricultural activities are directly and indirectly affected by climate change. Increased CO2 levels and a lengthened growing season may favor certain crops, however, the negative impacts of higher temperatures and more erratic and severe weather, like the drought during the summer of 2016, are likely to outweigh any benefits.</p>

          <p>Nationwide in 2015, the agriculture economic sector accounted for approximately 9% of total U.S. greenhouse gas emissions (GHGs), an increase of 8% since 1990<Footnote num='2'/>. A key reason for emission increases has been the increased use of emission-intensive liquid systems for manure management. Emissions from other agricultural sources have either remained flat or changed by a relatively small amount since 1990.  In comparison, in Massachusetts, non-energy agricultural greenhouse gas emissions account for less than 0.4% of total Massachusetts emissions<Footnote num='3'/>. This is due to much smaller farms, low animal herd sizes, and a relatively limited number of livestock activities.</p>

          <p>Preparing for the impacts of climate change on agriculture will require understanding projected changes and planning to ensure that local agriculture can adapt. Farms can also help reduce energy-related greenhouse gas emissions by using efficient equipment and renewable energy from solar arrays, wind turbines, or anaerobic digesters.</p>

          <p>Adaptation options may include investment in water infrastructure to buffer farm operations against drought; planting of riparian buffers along rivers and streams to reduce flooding; use of best management practices to prevent soil losses during large precipitation events, emergency preparation for, and response to, extreme weather events; development of resilient crop varieties that tolerate temperature and precipitation stresses; adoption of new crops more suited to changing climate conditions; and new or improved land use and management practices.</p>
        </SectorDetailLayout>
    );
  }
}

export default AgricultureSectorPage;
