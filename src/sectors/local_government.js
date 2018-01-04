import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import {Footnote} from '../utils/footnotes';
import sector_image from '../images/sectors/local_government.jpg';
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
        image_credit="John Phelan"
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
                href: sectorSearchURL({changes:["ma::rising temperatures::"]}),
                id: 'impacts_rising_temperatures',
                content: <div>
                  <p>Rising temperatures will impact public health, safety, energy supply, and resource-based economies. More frequent days with highs above 90° F in addition to more frequent heat waves and hotter nights will create risks of power outages and heat-related illness for vulnerable residents. Warmer temperatures often mean days with higher levels ozone and poor air quality, which translates into increases in respiratory illness and other health problems. Vulnerable populations including children, elderly and those with pre-existing conditions are affected at higher rates. Populations of fish and shellfish adapted to colder temperatures are likely to decline, and local economies with a large number of fisherman or fishing-related tourism could be deeply affected. Warmer temperatures may also impact local tourism and recreation-based industries such as skiing, local beaches, and fall foliage.</p>
                </div>
              },
              {name: "Changes in Precipitation",
                href: sectorSearchURL({changes:["ma::changes in precipitation::"]}),
                id: 'impacts_changes_in_precipitation',
                content: <div>
                  <p>As overall precipitation increases and gets concentrated in more intense downpours in winter and spring, cities and towns will face increased risk of inland and coastal flooding along rivers and streams and in locations where stormwater infrastructure is not sized to accommodate larger volumes of runoff. Flooding poses a risk to public safety, and may damage property, impact downtown business activity, and impair utility and emergency services. As more winter precipitation falls as rain instead of snow, ski resorts and other important local tourism businesses will be affected. Summers are likely to become drier, which may put pressure on water supplies.</p>
                </div>
              },
              { name: "Extreme Weather",
                href: sectorSearchURL({changes:["ma::extreme weather::"]}),
                id: 'impacts_extreme_weather',
                content: <div>
                  <p>Climate scientists project more severe storms in Massachusetts and across New England, and already local governments have experienced challenges from these types of events. Emergency preparedness will take on added importance, especially for low-income and other vulnerable populations. The infrastructure that keeps communities running—from roads and bridges to the electric grid to drinking water pipes and systems—will face elevated risks of damage or destruction from intense nor’easters, blizzards, hurricanes, tornadoes, and thunderstorms.</p>
                  <p>The costs of extensive clean up and repair or rebuilding of infrastructure after strong storms can inflict enormous costs on already strained municipal budgets. In the string of snow storms in 2015, local governments and the Commonwealth spent more than $35 million just dealing with the snow itself<Footnote num='1'/>. Indirectly, damage to property can decrease municipal tax bases and impassible roadways can halt commerce.</p>
                </div>
              },
              { name: "Sea Level Rise",
                href: sectorSearchURL({changes:["ma::sea level rise::"]}),
                id: 'impacts_slr',
                content: <div>
                  <p>Coastal communities are especially vulnerable to rising sea levels. As tidal range and tidal inundation increases, fresh water supplies may be at risk of saltwater intrusion, and infrastructure may be at risk of more accelerated corrosion. Coastal storm surge will affect larger areas as sea levels rise, creating more serious risks for coastal properties and key infrastructure systems close to shore, and causing a wide array of economic impacts to local communities from lost business and reduced mobility. Sea level rise combined with severe weather events leading to storm surge and coastal flooding will pose a significant public safety and emergency response challenge.</p>
                </div>
              }
            ]},
            {title:"Actions",
              id:'actions',
              content: <p></p>,
              subsections: [
              { name: "Planning",
                href: sectorSearchURL({actions:["ma::planning::"]}),
                id: 'actions_planning',
                content: <ul>
                    <li>Complete an inventory of GHG emissions, and prepare a climate action plan or integrate goals and actions to reduce emissions into other local plans.</li>
                    <li>Complete municipal vulnerability assessments and incorporate information and recommended actions to reduce vulnerability into local plans  -- such as climate action plans, local Hazard Mitigation Plans, master plans, open space plans, transportation improvement plans -- with support from the <a href='https://www.mass.gov/municipal-vulnerability-preparedness-program'>Municipal Vulnerability Preparedness program (MVP)</a>. </li>
                    <li>Review potential climate impacts during siting, design and capital project planning for major municipal infrastructure projects. Consider vulnerable populations during emergency planning efforts, including potential relocation options in the event of a major disaster.</li>
                    <li>Develop a plan for emergency response during extreme weather that includes contact information for key emergency personnel and decision makers, as well as the location of vulnerable populations that will need assistance. This plan should include options to use alternate transportation modes to transport critical employees.</li>
                    <li>Evaluate evacuation routes to ensure coastal and floodplain residents are able to move to higher ground safely and efficiently during severe weather.</li>
                </ul>
              },
              { name: "Management Practices",
                href: sectorSearchURL({actions:["ma::implementation action/direct action on target::management and behavior"]}),
                id: 'actions_management_practices',
                content: <ul>
                  <li>Create and enhance alliances with educational institutions, local business leaders, community organizations, and others to enlist their aid in improving local climate change readiness.</li>
                  <li>Evaluate the capacity of health and safety services to meet increased needs during periods of extreme heat or extreme cold.</li>
                  <li>Ensure there are adequate cooling centers for vulnerable populations who may not have air conditioning during heat waves.</li>
                  <li>Hold public discussions about the changing climate and the need to review development criteria, priorities, and policies to make changes to promote local resilience to climate change.</li>
                  <li>Prioritize land conservation projects that can improve resilience, such as protecting floodplains upstream of flood-prone downtown areas, or protecting coastal wetlands that buffer communities against storms impacts.</li>
                </ul>
              },
              { name: "Technology",
                href: sectorSearchURL({actions:["ma::implementation action/direct action on target::technology"]}),
              id:'actions_technology',
              content: <ul>
                 <li>Use renewable energy such as wind or solar power to heat and light municipal buildings.</li>
                 <li>Install LED lights in all municipally owned buildings and streets.</li>
                 <li>Install electricity storage for the municipality in order to keep vital services and infrastructure online in case of system-wide outages. </li>
                 <li>Reduce GHG emissions from municipal operations, including increasing energy efficiency and conservation measures. </li>
                 <li>Consider new technology and design standards in municipal buildings such as elevating buildings in coastal floodplains, flood proofing critical infrastructure, and installing building operating systems above the ground floor.</li>
                 <li>Ensure emergency communication systems will be able to operate during severe weather and consider additional strategies for alerting the public to emergency situations such as social media</li>
              </ul>
              },
              { name: "Policies / Laws",
                href: sectorSearchURL({actions:["ma::planning::policies/laws/regulations"]}),
                id:'actions_policies_laws',
                content: <ul>
                   <li>Consider local regulations and incentives that can help to keep development out of flood hazard areas, enhance flood storage, and ensure that vulnerable structures are flood-proofed. Evaluate future scenarios for the size of hazard areas using the latest climate projections. </li>
                   <li>Encourage landowners to reduce impervious surfaces and increase permeable surfaces on their properties.  </li>
                   <li>Explore mechanisms that proactively allow migrating wetlands to move inland, such as rolling easement regulations that facilitate wetlands or beaches to migrate inland as sea level rises.</li>
                   <li>Advance the use of low impact development (LID), green Infrastructure, and bioengineering along shorelines to buffer communities from flooding, erosion, heat, and other climate impacts.</li>
                   <li>Revise guidelines/requirements on the sizing of infrastructure (such as pipes, culverts, rain gardens) to handle predicted storm events.</li>
                   <li>Utilize local authority to protect open space, farmland, wetlands, and riparian buffers to increase resiliency to extreme weather events. </li>
                </ul>
              },
              { name: "Research / Monitoring",
                href: sectorSearchURL({actions:["ma::outreach/education::research and monitoring"]}),
                id:"actions_research",
                content: <ul>
                   <li>Assess and improve maintenance of drainage infrastructure, roads and bridges to avoid washouts.</li>
                   <li>Support collection of local climate data as well as information about increased damages, emergency response, flooding, and other impacts as budgetary constraints allow and incorporate the statewide climate projections (link) into ongoing projects.</li>
                   <li>Inventory and map municipal infrastructure that may be vulnerable to climate change, and budget for resilience improvements or replacement over time. </li>
                   <li>Keep track of additional costs incurred as a result of extreme weather, flooding, temperature, or other climate impacts.</li>
                </ul>
              },
              { name: "Funding",
                href: sectorSearchURL({actions: ["ma::implementation action/direct action on target::financing"]}),
                id:'actions_funding',
                content: <ul>
                  <li><a href='https://www.mass.gov/municipal-vulnerability-preparedness-program'>Massachusetts Municipal Vulnerability Preparedness Program grants</a></li>
                  <li><a href='https://www.fema.gov/hazard-mitigation-assistance'>FEMA Hazard Mitigation Assistance Programs</a></li>
                  <li><a href='https://www3.epa.gov/region1/eco/uep/hcgp.html'>EPA Region I’s Healthy Communities Program </a></li>
                  <li><a href='https://www.mass.gov/green-communities-designation-grant-program'>Green Communities Designation and Grant Program </a></li>
                </ul>
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

        <p>The Commonwealth’s 39 cities and 250 towns are highly sought-after places to live and work. Each of these communities will face challenging impacts from climate change. Local governments that prepare for those impacts now—to their built environment, economy, natural resources and public health—will avoid future costs, protect public safety, and continue to thrive in the decades ahead.</p>
        <p>Preparing will take proactive leadership and decision making across many aspects of local governance. Local land use decisions can anticipate and mitigate hazards like increased flooding and sea level rise. Existing municipal infrastructure like bridges and culverts can be resized to withstand changes in precipitation and extreme storms. New infrastructure can be sited in locations out of harm’s way, and designed for long term resilience.</p>
        <p>Local leaders can also plan for meeting the needs of many local stakeholders, from businesses to vulnerable residents. Water supply managers can prepare for the risk of more frequent intermittent droughts by enhancing water conservation, storage, and aquifer recharge. Emergency managers can assess the risks to vulnerable populations, plan for increased needs for cooling during heat waves, ensure adequate shelter facilities, and prepare for possible power outages.</p>
        <p>Communities large and small can also be critical partners in the Commonwealth’s effort to reduce greenhouse gas emissions and meet climate goals. By investing in energy efficient buildings, shifting towards the use of renewable energy, and developing low carbon transportation systems like car sharing and electric transits services, Massachusetts towns and cities can be at the front line of fighting climate change in our region.</p>

     </SectorDetailLayout>
    );
  }
}

export default LocalGovernmentSectorPage;
