import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import {Link} from 'react-router-dom';
import SearchLink from '../utils/search_link';
import agriculture_image from '../images/sectors/agriculture.jpg';
import EffectLink from './effect_link';

const ActionLink = (props) => {
  return <li>
    {props.children}
    <br/>
    <SearchLink params={{sectors: ["Agriculture"], q: props.q}}>
      More <span className='fa fa-angle-double-right'></span>
    </SearchLink>
  </li>
}

class AgricultureSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Highlighted Resources",
      collection_name: "MA/agriculture/highlighted_resources",
    };

    return (
      <SectorDetailLayout
        title="Agriculture"
        sector_name="agriculture"
        image={agriculture_image}
        showcased_resources={showcased_resources}
        sections={[
          {title: "Impacts",
           id: "impacts",
           content: <p>
            Climate change may lead to reduced yields due to increased pest pressure from insects,
            diseases, and weeds. Many farms, particularly those with less access to working capital for
            infrastructure improvements, are vulnerable to the economic impacts of climate change due to
            erosion from an increase in heavy rains, and to crop loss from longer and more frequent
            droughts. An increase in heat stress days (max. temperature of more than 90°F) will have a
            strong negative impact on farming and livestock, especially dairy production. Crops that rely on
            specific temperature regimes like apples, cranberries and maple syrup are also likely to fare
            poorly. Increased cases of pests and diseases will potentially lead to increased pesticide use
            creating challenges to prevent and mitigate health risks to the farm workers, consumers, the
            public, and the environment.
           </p>,
            subsections: [
              { name: "Changes in Precipitation",
                id: 'impacts_changes_in_precip',
                content: <ul>
                  <li>
                    <EffectLink sector={"Agriculture"}
                                effect={"Changes in Precipitation::Change in weather patterns during plant development stages, impacting growth"}/>
                  </li>
                  <li>
                    <EffectLink sector={"Agriculture"}
                                effect={"Changes in Precipitation::Timing changes in spring planting and harvest due to flooding"}/>
                  </li>
                  <li>
                    <EffectLink sector={"Agriculture"}
                                effect={"Changes in Precipitation::Water demand and competition changes"}/>
                  </li>
                </ul>,
              },
              { name: "Extreme Weather",
                id: 'impacts_extreme_weather',
                content: <ul>
                  <li>
                    <EffectLink sector={"Agriculture"}
                                effect={"Extreme Weather::Stress on crops from clusters of extreme events"}/>
                  </li>
                </ul>,
              },
              { name: "Rising Temperatures",
                id: 'impacts_rising_temperatures',
                content: <ul>
                  <li>
                    <EffectLink sector={"Agriculture"}
                                effect={"Rising Temperatures::Expansion of crop disease and weeds"}/>
                  </li>
                  <li>
                    <EffectLink sector={"Agriculture"}
                                effect={"Rising Temperatures::Changes in agricultural pest population"}/>
                  </li>
                  <li>
                    <EffectLink sector={"Agriculture"}
                                effect={"Rising Temperatures::Changes in crop variety"}/>
                  </li>
                  <li>
                    <EffectLink sector={"Agriculture"}
                                effect={"Rising Temperatures::Changes in energy use"}/>
                  </li>
                </ul>
              },
              { name: "Sea Level Rise",
                id: 'impacts_sea_level_rise',
                content: <ul>
                  <li>
                    <EffectLink sector={"Agriculture"}
                                effect={"Sea Level Rise::Salinization of coastal agricultural areas"}/>
                  </li>
                  <li>
                    <EffectLink sector={"Agriculture"}
                                effect={"Sea Level Rise::Saltwater intrusion on coastal land"}/>
                  </li>
                  <li>
                    <EffectLink sector={"Agriculture"}
                                effect={"Sea Level Rise::Loss of good quality agricultural land due to rising sea levels and increased erosion"}/>
                  </li>
                </ul>
              }
            ]
          },
          {title: "Actions",
           id: "actions",
           content: null,
           subsections: [
              { name: "Planning",
                id: 'actions_planning',
                content: <ul>
                    <ActionLink q="vulnerability assessment">
                      Complete a vulnerability assessment to understand vulnerability factors and risks.
                    </ActionLink>
                    <ActionLink q="emergency plan">
                      Develop a Farm Emergency Plan
                    </ActionLink>
                    <ActionLink q="energy audit">
                      Complete an energy audit
                    </ActionLink>
                    <li> Get to know Massachusetts based Best Management Energy Practices for Dairy, Maple Syrup, Greenhouses, Orchards and Renewables by reading the MFEP guides.</li>
                    <li>Implement energy efficiency and renewable energy projects with technical and financial
                        (grants and rebates) assistance through MDAR’s MFEP and AgEnergy Grant programs, all
                        in collaboration with DOER, the MassCEC, MassSave and USDA.
                    </li>
                </ul>,
              },
              { name: "Management Practices",
                id: 'actions_management_practices',
                content: <ul>
                  <ActionLink q="soil land conservation">
                    Adopt best practices for soil and land conservation to reduce loss of agricultural land.
                  </ActionLink>
                  <ActionLink q='best management practices'>
                    Use Agricultural Best Management Practices (BMPs)
                  </ActionLink>
                  <ActionLink q='crop diversification'>
                    Consider crops variety diversification to increase resiliency to climate changes.
                  </ActionLink>
                  <ActionLink q='pest management'>
                    Update and improve integrated pest management thresholds and strategies in light of
                    changing pest population dynamics using best management practices for chemical and
                    non-chemical control of insects, disease, and weeds.
                  </ActionLink>
                  <ActionLink q='pest management'>
                    Update and improve integrated pest management thresholds and strategies in light of
                    changing pest population dynamics using best management practices for chemical and
                    non-chemical control of insects, disease, and weeds.
                  </ActionLink>
                  <ActionLink q='runoff control'>
                    Adopt best practices to control runoff of pesticides, nutrients, or fertilizers, and soil.
                  </ActionLink>
                  <ActionLink q='water conservation'>
                    Implement water conservation and reuse program.
                  </ActionLink>
                  <ActionLink q='energy efficiency use'>
                    Implement efficiency measures to reduce energy use.
                  </ActionLink>
                  <ActionLink q='GHG reductions manure management'>
                    Implement best practices for manure management.
                  </ActionLink>
                  <ActionLink q='temperature changes planting dates'>
                    Shift planting or harvesting dates based on forecasted changes in seasons.
                  </ActionLink>
                  <ActionLink q='carbon sequestration'>
                    Maintain and increase carbon content of soil by planting cover crops, use no-till
                  </ActionLink>
                </ul>,
              },
              { name: "Technology",
                id: 'actions_technology',
                content: <ul>
                  <ActionLink q="irrigation water conservation">
                    Expand irrigation capacity and other (on farm) capital investments.
                  </ActionLink>
                  <ActionLink q="livestock cooling">
                    Use fans, sprinklers, and other cooling systems for livestock.
                  </ActionLink>
                  <ActionLink q="renewable energy">
                    Install renewable energy technologies that are compatible with farming such as windmills and solar panels.
                  </ActionLink>
               </ul>
              },
              { name: "Polices / Laws",
                id: 'actions_policies_and_laws',
                content: <ul>
                  <ActionLink q="agriculture laws policy pesticide">
                    Identify improvements to local and state health and safety laws relating to pesticide/herbicide exposure prevention and increase support for enforcement of existing programs.
                  </ActionLink>
                  <ActionLink q="regulations">
                    Change on food supplies, food quality, and disease transmission to develop appropriate policies and regulations.
                  </ActionLink>
               </ul>
              },
              { name: "Research / Monitoring",
                id: 'actions_research_monitoring',
                content:
                <ul>
                  <li>Learn about or obtain technical assistance on:
                    <ul>
                      <ActionLink q="pesticide risk management">
                        Pesticide risk management
                      </ActionLink>
                      <ActionLink q="crop adaptation">
                        Crop adaptation and management.
                      </ActionLink>
                      <ActionLink q='conservation practices'>
                        Conservation practices
                      </ActionLink>
                    </ul>
                  </li>
                  <ActionLink q='pesticide tracking'>
                    Track use and occurrence of pesticides.
                  </ActionLink>
                  <ActionLink q='food borne illness'>
                    Track food-borne illnesses to determine if new patterns or agents are emerging.
                  </ActionLink>
                  <ActionLink q='education environmental justice sensitive population health and safety'>
                    Conduct outreach and education targeting vulnerable population groups and their employers about health and safety precautions.
                  </ActionLink>
                </ul>
              },
              { name: "Funding",
                id: 'actions_funding',
                content:
                <ul>
                  <ActionLink q='funding crop transition irrigation'>
                    Find low- or no-cost loans for infrastructure adaptations such as irrigation, drainage, crop transition, and livestock facilities.
                  </ActionLink>
                  <ActionLink q='funding energy'>
                    Find funding for energy related grants, rebates, loans, loan guarantees.
                  </ActionLink>
                  <ActionLink q='funding food subsidies'>
                    Increase food subsidies for lower income residents, and modify eligibility requirements to ensure access to healthy food.
                  </ActionLink>
                  <ActionLink q='funding small-scale'>
                    Promote and provide/increase technical and financial support for small-scale farming.
                  </ActionLink>
                  <li>
                    <Link to="https://www.fsa.usda.gov/programs-and-services/farm-loan-programs/beginning-farmers-and-ranchers-loans/index">
                      USDA Farm Service Agency
                    </Link>
                  </li>
                  <ActionLink q='funding disaster assistance insurance'>
                    Provide disaster assistance or insurance for small farms for crop losses.
                  </ActionLink>
                  <ActionLink q='funding conservation management'>
                    Incorporate climate change best practices into funding programs and conservation management incentives
                  </ActionLink>
                </ul>
              },
            ]
          },
          {title: "Looking for Help?",
           id: "help",
           content: <div>
            To help farmers mitigate the pace of climate change, the Massachusetts Department of Agricultural Resources (MDAR) incentivizes the implementation of energy efficiency (EE) and renewable energy (RE)
            systems on farms statewide through its MA Farm Energy Program (MFEP) and annual AgEnergy Grant Program. Funding for the grant program is due to a partnership between  the Divison of Energy Resources
            and MDAR to install traditional and cutting edge mitigation EE and RE technologies. All this effort is in collaboration with other MA energy programs such as MassSave and the Massachusetts Clean Energy Center (MassCEC), and federally with the USDA and their Rural Energy for America Program (REAP) and Environmental Quality Incentives Program (EQIP).  Several Massachusetts dairy farms are helping offset their GHGs by installing anaerobic digester systems (ADs) to mitigate manure methane emissions, a GHG 23 times more potent than CO2.
            <br/>
            <br/>

            <ul>
              <li>
                <Link to='http://www.mass.gov/agr'> Massachusetts Department of Agriculture </Link>
              </li>
              <li>
                <Link to='http://extension.umass.edu/vegetable'> UMASS Extension </Link>
              </li>
              <li>
                <Link to='https://www.fsa.usda.gov/programs-and-services/conservation-programs/index'>
                  USDA Farm Service Agency
                </Link>
              </li>
              <li>
                <Link to='https://www.climatehubs.oce.usda.gov/northeast'>
                  USDA Climate Hub
                </Link>
              </li>
              <li>
                <Link to='http://www.sustainablecampus.cornell.edu/initiatives/cornell-institute-for-climate-change-agriculture'>
                  Cornell University – Cornell Institute for Climate Change and Agriculture
                </Link>
              </li>
              <li>
                <Link to='https://www.ncat.org'>
                  National Center for Appropriate Technology
                </Link>
              </li>
              <li>
                <Link to='http://climatechange.ucdavis.edu/'>
                  UC Davis
                </Link>
              </li>
            </ul>
           </div>,
           subsections: []
          },

        ]}>
        Massachusetts has 7,755 farms, employing 28,000 people, working on over 523,000 acres that produce
        $492 million in agricultural products. Key Massachusetts market segments include the greenhouse and
        nursery, cranberry, produce, dairy, poultry and livestock sectors. 1 Agricultural activities are directly and
        indirectly affected by climate change. Increased CO2 levels and a lengthened growing season may favor
        certain crops, however, the negative impacts of higher temperatures and more erratic and severe
        weather, like the drought experienced in the summer of 2016, are likely to outweigh any benefits.
        Nationwide In 2015, the agriculture economic sector accounted for approximately 9% of total U.S.
        greenhouse gas emissions (GHGs), an increase of 8% since 1990. A key reason for emission increases
        has been the growth in emissions from livestock manure management systems, reflecting the increased
        use of emission-intensive liquid systems. Emissions from other agricultural sources have either remained
        flat or changed by a relatively small amount since 1990. 2 In comparison, in Massachusetts, non-energy
        agricultural greenhouse gas emissions account for less than 0.4% of total Massachusetts emissions. 3 This
        is due to much smaller farms, low animal herd sizes and a relatively limited number of livestock
        activities.
        Preparing for the impacts of climate change on agriculture will require understanding projected changes
        and planning to ensure that local agriculture can adapt to these changes.
        Adaptation options may include investment in water infrastructure; emergency preparation for, and
        response to, extreme weather events; development of resilient crop varieties that tolerate temperature
        and precipitation stresses; adoption of new crops more suited to changing climate conditions; and new
        or improved land use and management practices.
        </SectorDetailLayout>
    );
  }
}

export default AgricultureSectorPage;
