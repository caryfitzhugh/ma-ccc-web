import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/infrastructure.jpg';
import {Link} from 'react-router-dom';
import SearchLink from '../utils/search_link';
import {Footnote} from '../utils/footnotes';


const ISearchLink = (props) => {
  return <SearchLink params={{facets: {sectors: ["ma::infrastructure"], climate_changes: props.changes, actions: props.actions}, query: props.q}}>
      {props.children}
    </SearchLink>

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
            content: <p>
              Changes in climate will exacerbate weather-related risks for a wide range of buildings and infrastructure across the Commonwealth.
            </p>,
            subsections: [
              {name: <ISearchLink changes={["ma::rising temperatures::"]}>Rising Temperatures</ISearchLink>,
                id: "impacts_rising_temperatures",
                content: <div>
                  <p>Cooling and heating degree-days, or the measure of how much and for how long outside air temperature was higher or lower than a specific base temperature, is often used as a proxy for energy consumption required to cool or heat buildings. Summer cooling degree-days are expected to increase over 45% by mid-century and by over 65% by the end of the century. Meanwhile, winter heating degree-days are expected to decrease by more than 5% by mid-century and by more than 10% by the end of the century.  This could put upward pressure on greenhouse gas emissions.  Also, while warmer winters may reduce burdens on energy infrastructure, more heat in the summer may put larger demands on aging systems, creating the potential for power outages.  In addition, heat can stress transmission lines, substations, train tracks, roads and bridges, and other critical infrastructure.</p>
                </div>
              },
              {name: <ISearchLink changes={["ma::changes in precipitation::"]}>Changes in Precipitation</ISearchLink>,
                id: "impacts_changes_in_precipitation",
                content: <div>
                  <p>A wetter climate is likely to increase the risks of inland and coastal flooding, especially when rain falls  as heavy downpours. Infrastructure and buildings that are located in flood hazard areas and that have not been elevated and flood-proofed could be more vulnerable to inundation and erosion from floodwaters. A generally wetter climate may also impact public health, for example by increasing illnesses caused by exposure to mold build-up in buildings.</p>
                </div>
              },
              {name: <ISearchLink changes={["ma::extreme weather::"]}>Extreme Weather</ISearchLink>,
                id: "impacts_extreme_weather",
                content: <div>
                  <p>Storm events with higher amounts of precipitation and damaging winds are likely to cause more frequent and heavier damage to infrastructure. An increase in the frequency of extreme storms is likely, for example, to cause more downed power lines and damage to energy infrastructure along rivers and the coast. Two strong storms in 2011 left more than half a million Massachusetts residents without power, and the blizzard of 2013 triggered an outage affecting over 400,000 customers. Power and telecommunications outages can put people in jeopardy, especially during extreme temperatures or weather events.  </p>
                  <p>Extreme weather can also lead to disruptive and sometimes debilitating effects on transportation systems when roads are flooded or damaged, bridges are washed out, and rail lines are rendered impassable. </p>
                </div>
              },
              {name: <ISearchLink changes={["ma::sea level rise::"]}>Sea Level Rise</ISearchLink>,
               id: "impacts_sea_level_rise",
               content: <div>
                  <p>Infrastructure along the coast faces a double threat: as sea levels rise and storm patterns increase in intensity, storm surge will affect larger areas with more damaging results from wave and tidal energy. Damage to critical road and rail networks, power stations, telecommunication facilities, landfills and wastewater treatment facilities near the shore could disrupt services, trigger costly repair or replacement, hinder commerce, and lead to pollution of local waterways. </p>
                  <p>We can also expect increased risk of saltwater intrusion to create multiple vulnerabilities for infrastructure. Chronic or sudden exposure to saltwater may accelerate corrosion of pipes and metal equipment. Intrusion into freshwater aquifers located near the coastline could compromise coastal drinking water sources. </p>
               </div>
              },
            ]
        },
        { title: "Actions",
          id: "actions",
          content: <p>
            Building infrastructure resilience will take coordination across the private and public sectors, non-profit organizations, and managers and users of infrastructure resources.
          </p>,
          subsections: [
            {name: <ISearchLink actions={["ma::planning::"]}>Planning</ISearchLink>,
              id: 'actions_planning',
              content: <ul>
                <li>Incorporate climate change projections into siting decisions and designs for new infrastructure and buildings, especially critical infrastructure. Whenever possible, avoid siting critical infrastructure in flood hazard zones.</li>
                <li>Update transportation plans with vulnerability assessments based on projections of future climate patterns, such as projected rainfall amounts, rather than past observed data.</li>
                <li>Assess when to fortify and flood-proof extremely vulnerable buildings, and when to move, demolish and recycle, or abandon those structures. </li>
                <li>Incorporate climate change into <a href='http://www.mass.gov/eea/grants-and-tech-assistance/guidance-technical-assistance/agencies-and-divisions/ota/education-and-outreach/climate-change-and-chemical-safety/'>hazardous waste management</a></li>
                <li>Develop contingency plans for household and commercial hazardous waste collection after flood events, and debris management plans. </li>
              </ul>
            },
            {name: <ISearchLink q="management practices">Management Practices</ISearchLink>,
            id: "actions_management_practices",
            content: <ul>
                <li>Adjust standard maintenance and inspection procedures to take into account climate change impacts, including increasing the frequency of routine inspections of coastal zone and inland bridges and drainage structures, and initiate comprehensive regional asset damage inventories after major storm events. </li>
                <li>Consider allocating space in new building design and existing building retrofits to house the mechanical equipment for handling increased heating, ventilation, air conditioning, pumping, or generator capacity. </li>
                <li>For building management, consider purchasing appropriately-sized generators and pumps to handle flooding, and properly-size structural components to carry additional precipitation and wind loads.</li>
                <li>Size stormwater management structures (e.g., pipes, culverts, outfalls) with consideration of the potential magnitudes of future storm events and keep these systems clear of debris when possible. </li>
                <li>Formulate risk-based methods to evaluate the service life of infrastructure assets in a changing climate. </li>
            </ul>
          },
          {name: <ISearchLink actions={["ma::implementation action/direct action on target::technology"]}>Technology</ISearchLink>,
            id: "actions_tech",
            content: <ul>
                <li>Enhance water-based transit options in affected coastal and riverine areas as a long-range transport alternative and as an interim back-up to damaged infrastructure. </li>
                <li>Encourage the development and use of innovative technologies that help critical infrastructure function during extreme weather, for example, use of new airport navigation aids and airfield lighting systems that function better during storm events.</li>
                <li>Locate critical services for buildings on rooftops or higher stories.</li>
                <li>Make use of Smart-Grid techniques that can help better manage demand spikes and changes in energy usage.</li>
            </ul>
          },
            {name: <ISearchLink actions={["ma::planning::policies/laws/regulations"]}>Policies / Laws</ISearchLink>,
            id: "actions_policies_laws",
            content: <ul>
                <li>Examine policy to encourage climate-considered siting and design for buildings and infrastructure. <em>(The Commonwealth is currently in the process of developing a Statewide Hazard Mitigation and Climate Adaptation Plan that will further develop state-level policies for addressing climate change)</em>. </li>
                <li>Add to and adjust local zoning regulations to incorporate flood protection for buildings, and consider investments in bioengineering and harder infrastructure (such as levees and sea walls) to keep floodwaters from entering neighborhoods. </li>
                <li>Support coordinated strategies for building the resilience of regional infrastructure across municipal, state, regional agencies, including reconstruction, removal, or relocation of vulnerable infrastructure. </li>
                <li>Incorporate climate change into <a href='http://www.mass.gov/eea/grants-and-tech-assistance/guidance-technical-assistance/agencies-and-divisions/ota/education-and-outreach/climate-change-and-chemical-safety/'>hazardous waste management</a> </li>
                <li>Develop and revise design standards to reflect climate considerations, and provide trainings on these standards.</li>
                <li>Use building permitting and environmental review processes to recommend resilient design, such as protections for basement and first-floor systems, enclosures for roof-top equipment, use of green roofs to absorb additional precipitation and decrease cooling needs, and use of bio-swales, engineered wetlands, and permeable pavement to infiltrate stormwater.</li>

            </ul>
          },
          { name: <ISearchLink q="research monitoring">Research/Monitoring</ISearchLink>,
            id: 'actions_research',
            content: <ul>
                <li>Develop better maps of flood hazard areas that account for future climate projections, and use maps to identify infrastructure vulnerable to rising sea level and more frequent or more severe inland and coastal flooding. </li>
                <li>Assess the vulnerability of communication infrastructure to flooding and other climate impacts, including transmission lines, towers, and satellite dishes; underground and underwater structures; broadcasting stations; and emergency communication systems. </li>
                <li>Update hydrologic and hydraulic analyses statewide, including engineering methods used in the calculation of peak flood flow rates, to reflect changes in climate (e.g., the U.S. Geological Survey‘s Regionalized Peak Flow Equations for Massachusetts and the 50- year old National Weather Service‘s Precipitation Frequency Atlas, TP-40). </li>
            </ul>
          },
          { name: <ISearchLink actions={["ma::implementation action/direct action on target::financing"]}>Funding</ISearchLink>,
            id: "actions_funding",
            content: <ul>
            <li><a href='https://www.mass.gov/orgs/massachusetts-emergency-management-agency'> The Massachusetts Emergency Management Agency </a> has grant and financial assistance programs  </li>
            <li><a href='https://www.mass.gov/municipal-vulnerability-preparedness-program'> Massachusetts Municipal Vulnerability Preparedness Program grants</a></li>
            <li><a href='https://www3.epa.gov/region1/eco/uep/hcgp.html'> EPA Region I’s Healthy Communities Program  </a></li>
            <li><a href='https://www.mass.gov/green-communities-designation-grant-program'> Green Communities Designation and Grant Program l </a></li>
            </ul>
          }
          ]
        },
        { title: "Looking for help?",
          id: "looking_for_help",
          content: <div>
            <ul>
              <li><a href='http://www.massdot.state.ma.us/highway/Departments/EnvironmentalServices/EMSSustainabilityUnit/ClimateChangeResiliency.aspx'> Massachusetts Department of Transportation </a></li>
              <li><a href='www.masscec.com/'> Massachusetts Clean Energy Center </a></li>
              <li><a href='https://www.transportation.gov/climate-change-clearinghouse'> United States Department of Transportation Center for Climate Change and Environmental Forecasting </a></li>
              <li><a href='https://www.fhwa.dot.gov/environment/sustainability/resilience/'> FHWA Resiliency Website (includes helpful tools) </a></li>
            </ul>
          </div>,
          subsections: []
        }
        ]}
        >
         <p>Infrastructure and buildings have a long life span which makes them increasingly susceptible to climate change, while their high initial cost underscores the need to protect existing structures and make strategic, long-term investments that can weather the changes ahead. </p>
         <p>The Commonwealth’s infrastructure includes: roads, bridges and culverts; energy generation facilities and distribution systems like the electric grid; rail lines, water infrastructure, <Link to='/sectors/water-resources'>seawalls, dams and levees</Link>, and many other important systems that underpin our communities.</p>
         <p>Since the Industrial Revolution, significant infrastructure development in Massachusetts has occurred along the coastline and in river floodplains–exactly the locations likely to experience significant impacts from climate-induced sea level rise and inland flooding. In addition to being at risk due to their location, most, if not all, of these assets were sited and designed based on historic climate data rather than projected changes and do not have the systems in place to withstand and respond to these new challenges.</p>
         <p>Cities and towns, government, utilities, businesses, and individuals can take many actions to build more resilient infrastructure. Assessing climate vulnerabilities, incorporating climate change into siting decisions, retrofitting in anticipation of potential flooding (i.e., flood-proofing), and adding new technologies that both enhance resilience and reduce greenhouse gas emissions (like using distributed energy sources) are a few examples. </p>
        </SectorDetailLayout>
    );
  }
}

export default InfrastructureSectorPage;
