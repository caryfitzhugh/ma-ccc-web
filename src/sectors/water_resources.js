import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/water_resources.jpg';
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
        showcased_resources={showcased_resources}
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
                  <p>Expected rising temperatures and days of extreme heat are likely to strain energy systems and other infrastructure. Increased demand for air conditioning could overwhelm older grid infrastructure and trigger more frequent power outages, which could impact water infrastructure like wastewater treatment plants without sufficient back-up power sources. </p>
                  <p>Changes in temperature and in the amount, timing, and type of precipitation are likely to affect streamflows and may produce drought characteristics. More runoff in winter is likely due to a higher amount of rain rather than snow. Coupled with increased temperatures this would cause streamflow to peak earlier in the year and to be lower in the spring, producing many impacts on wildlife. Rising temperatures will also increase the risk of drought, making water resource conservation and management more important. Low flows and higher ambient air temperatures will increase water temperatures, which will affect coldwater fisheries, water dependent industries, and water quality. </p>
                </div>
              },
              {name: "Changes in Precipitation",
                href: sectorSearchURL({changes:["ma::changes in precipitation::"]}),
                id: "impacts_changes_in_precipitation",
                content: <div>
                  <p>Projected increases in the total rainfall in Massachusetts may increase chronic flooding in areas where stormwater infrastructure is not adequately sized to accommodate higher levels of runoff. More frequent heavy downpours during the winter and spring may also increase the risk of storm-related flood damage to water infrastructure, contamination in surface waters from increased runoff, and public safety issues with dams and seawalls. </p>
                  <p>As winter temperatures warm and more winter precipitation falls as rain, snow pack is likely to shrink. This will alter seasonal stream flow regimes and aquatic and riparian habitats (see “rising temperatures” above), and may also affect the availability of water supplies that are dependent on melting snowpack.</p>
                  <p>Drier summers may reduce water availability for agriculture, drinking water, and industry, and more frequent intermittent droughts like the one many Massachusetts residents experienced in 2016 could cause severe water shortages. </p>
                </div>
              },
              { name: "Extreme Weather",
                href: sectorSearchURL({changes:["ma::extreme weather::"]}),
                id: "impacts_extreme_weather",
                content: <div>
                  <p>A greater frequency of extreme storms projected in Massachusetts will increase flood damage risks for municipal stormwater and wastewater pipes and facilities, which are often located in low-lying areas near rivers, lakes and coastal waters. More severe winter storms could also increase flood risks from snow melt and from ice jams under bridges and in culverts. </p>
                  <p>Extreme weather can have a major impact on water quality. Combined stormwater and wastewater systems unable to handle large amounts of stormwater runoff may overflow more often, sending sewage into water bodies and creating potential public health risks and negative effects for ecosystems. Power outages at these facilities from severe weather may also lead to similar impacts.</p>
                </div>
              },
              {name: "Sea Level Rise",
               href: sectorSearchURL({changes:["ma::sea level rise::"]}),
               id: "impacts_sea_level_rise",
               content: <div>
                <p>As sea levels rise, coastal storm surges will extend over larger areas of land along the coast, and critical water resource infrastructure is likely to become vulnerable to the corrosive effects of saltwater. Over time, projected sea level rise could lead to inundation of municipal stormwater and wastewater collection systems, outfalls, and some wastewater treatment plants along the Massachusetts coast, potentially creating a need for their permanent relocation. </p>
                <p>Saltwater intrusion into fresh drinking water resources would render those resources unusable, creating a huge challenge for coastal municipalities to identify and develop alternative supplies. </p>
               </div>
              },
            ]
        },
        { title: "Actions",
          id: "actions",
          content: <p>
            Learn more about how to manage water resources for a changing climate.
          </p>,
          subsections: [
            {name: "Planning",
              href: sectorSearchURL({actions:["ma::planning::"]}),
              id: 'actions_planning',
              content: <ul>
                 <li>Promote efforts by land use planners, facility designers, and regulators to collect and analyze basic geographical, geologic, and engineering information needed to characterize climate-related vulnerabilities for water resources and water-related infrastructure systems. </li>
                 <li>Make a plan and apply for grants to flood-proof drinking water, stormwater and wastewater facilities in flood hazard areas, and consider relocating highly vulnerable infrastructure where possible </li>
                 <li>Identify insufficient stormwater infrastructure and plan to gradually resize it to accommodate the magnitude of runoff from current and future projected precipitation.</li>
                 <li>Prepare or revisit emergency action plans to ensure they address high hazard dams.</li>
                 <li>Plan for adequate water supplies, and identify potential emergency connections for use during drought conditions.</li>
              </ul>
            },
            {name: "Management Practices",
             href: sectorSearchURL({actions:["ma::implementation action/direct action on target::management and behavior"]}),
            id: "actions_management_practices",
            content: <ul>
               <li>Update and enlarge stockpiles of emergency equipment, including mobile pumps, water tanks, and filters, and back-up generators to help small water supply systems during emergencies.</li>
               <li>Forecast future scenarios for local and regional water demand and identify areas especially vulnerable to water shortages in the event of drought. </li>
               <li>Enhance efforts to develop resilient water supplies by conserving potable drinking water, and by increasing stormwater infiltration. </li>
            </ul>
          },
          {name: "Technology",
            href: sectorSearchURL({actions:["ma::implementation action/direct action on target::technology"]}),
            id: "actions_tech",
            content: <ul>
             <li>Construct levees and berms where necessary to protect vulnerable infrastructure.</li>
             <li>Test new green stormwater infrastructure technologies, and document their results in preventing flooding and increasing groundwater recharge. </li>
            </ul>
          },
          { name: "Policies / Laws",
            href: sectorSearchURL({actions:["ma::planning::policies/laws/regulations"]}),
            id: "actions_policies_laws",
            content: <ul>
               <li>Examine policies and incentives to encourage the building of energy efficient, resilient municipal water infrastructure powered with renewable energy.</li>
               <li>Adopt local floodplain management and protection ordinances to reduce the flooding and erosion risks for critical water and energy systems.</li>
               <li>Evaluate septic system requirements and determine if rules are adequate to address projected changes. </li>
               <li>Evaluate the long-term control plans for Combined Sewer Overflows (CSO) under future scenarios for extreme storms. </li>
               <li>Implement the Massachusetts Water Conservation Standards and advance the use of treated wastewater, especially in commercial and industrial settings.</li>
               <li>Consider local land use regulations and design standards that reduce agricultural, urban, and stormwater runoff, for example with green infrastructure and low impact development.</li>
            </ul>
          },
          { name: "Research / Monitoring",
            href: sectorSearchURL({actions:["ma::outreach/education::research and monitoring"]}),
            id: 'actions_research',
            content: <ul>
               <li>Compile critical information on water and wastewater treatment facilities, including elevation data, and location of pump stations and other affiliated structures; identify the location and capacity of stormwater conveyance waterways and structures. </li>
               <li>Conduct research and monitoring to understand impacts of low flows and higher temperatures on potential changes to nutrient, sediment, and pathogen pollution.</li>
               <li>Implement an automatic gauging and reporting network to better assess hydrological conditions and to provide improved early-warning systems for supply shortages.</li>
               <li>Identify water and sewer facilities susceptible to saltwater intrusion and coastal inundation. </li>
            </ul>
          },
          { name: "Funding",
            href: sectorSearchURL({actions: ["ma::implementation action/direct action on target::financing"]}),
            id: "actions_funding",
            content: <ul>
              <li><a href='http://www.mass.gov/eea/agencies/massdep/water/grants/clean-water-state-revolving-fund.html'>
                    Massachusetts Department of Environmental Protection Clean Drinking Water Revolving Fund
              </a></li>
              <li><a href='https://www.mass.gov/service-details/drinking-water-supply-protection-grant-program-1'>
                    Drinking Water Supply Protection Grant Program
              </a></li>
              <li><a href='http://www.mass.gov/eea/agencies/massdep/water/grants/water-infrastructure-assessment-and-planning-grants.html'>
                    Massachusetts Department of Environmental Protection Water Infrastructure Assessment and Planning Grants
              </a></li>
              <li><a href='https://www.mass.gov/river-restoration-culvert-replacements'>
                  Massachusetts Division of Ecological Restoration Culvert Replacement Program
              </a></li>
              <li><a href='https://www.mass.gov/met-projects-and-grant-awards'>
                Massachusetts Environmental Trust Grant Program
              </a></li>
              <li><a href='https://www.mass.gov/river-restoration-dam-removal'>
                Massachusetts Division of Ecological Restoration’s Dam Removal Assistance Program
              </a></li>
              <li><a href='http://www.mass.gov/eea/agencies/massdep/water/wastewater/community-septic-management-programs.html'>
                Massachusetts DEP’s Community Septic Management Program
              </a></li>
              <li><a href='https://www.mass.gov/water-grants-loans'>
                Other Massachusetts state water grants and loans
              </a></li>
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
          <p>The Commonwealth’s water resources are deeply connected to the identity of its town and cities. Historically, settlement concentrated along the rivers, streams, and lakes in the state’s 27 river basins and along the coast. Local economies and community life continue to be centered around these water bodies.</p>
          <p>These abundant freshwater and marine water resources will be affected in many ways by shifting precipitation patterns and warming temperatures driven by climate change. Those changes are likely to affect wildlife like fish populations. They could also affect drinking water supplies—for example in the Quabbin and Wachusetts Reservoirs and in the Ware River, which provide drinking water for 2.5 million residents of the Greater Boston area—and groundwater aquifers.</p>
          <p>Changes in Massachusetts’ climate will also create significant challenges for infrastructure that withdraws, treats, and distributes our drinking water; collects, treats, and discharges wastewater; and manages stormwater. In the Commonwealth this includes 531 public water supply systems and half a million private wells, as well as 126 treatment facilities and 20,000 miles of pipes used to manage wastewater.</p>
          <p>Preparing for climate change must include assessing the range of potential climate impacts on local water resources—both inland (see below) and coastal (link to Coastal Sector page)—and their associated impacts on water infrastructure. Good climate adaptation strategies will include flood-proofing critical facilities or relocating those that are in flood hazard zones, “right-sizing” stormwater infrastructure for expected future conditions, and preparing for dry periods that could reduce surface and groundwater supplies.</p>
          <p>There are also major opportunities to reduce greenhouse gas emissions from the construction, operation, and maintenance of water resource infrastructure. Adopting energy efficient technologies and powering these facilities with renewable energy is a powerful climate action.</p>
        </SectorDetailLayout>
    );
  }
}

export default WaterResourcesSectorPage;
