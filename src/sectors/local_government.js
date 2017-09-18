import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import {Footnote} from '../utils/footnotes';
import sector_image from '../images/sectors/local_government.jpg';
import SearchLink from '../utils/search_link';

const ActionLink = (props) => {
  return <li>
    <SearchLink params={{facets: {sectors: ["ma::local government"]}, query: props.q}}>
      {props.children}
    </SearchLink>
  </li>
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
        sector_name="local_government"
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
              { name:"Rising Temperatures",
                id: "impacts_rising_temperatures",
                content: <p>
                  Rising temperatures are likely to be felt in the form of more days with highs above 95° F and more frequent heat waves. These can put strain on the electricity grid due to increased demand for air conditioning and endanger public health, particularly for low-income and elderly populations who are more at risk from heat-related illnesses.
                </p>
              },
              { name:"Changes in Precipitation",
                id: 'impacts_changes_in_precipitation',
                content: <p>
                  As more precipitation starts to come in single events in the spring, rather than smaller showers throughout the year, cities and towns will need to consider not just flood-prevention measures, but also drought prevention measures. This can include reviewing and improving storm drainage infrastructure, building water storage systems, and developing water conservation measures.
                </p>
              },
              { name: "Extreme Weather",
                id: 'impacts_extreme_weather',
                content: <div>
                  <p>
                    Harsher weather events can include flooding from rains or coastal storms, extended heat periods, intense snow and ice storms, and saltwater or pollutant infiltration of water supplies. As greater exposure to these events is likely to increase, emergency preparedness will take on added importance, especially for low-income and other vulnerable populations.
                  </p>
                  <p>
                    Strong storms can impact any community’s budget, both directly and indirectly: storms may cause damage to public infrastructure and require extensive cleanup operations. In the string of snow storms in 2015, local governments and the Commonwealth spent more than $35 million just dealing with the snow itself<Footnote num='1'/>. Indirectly, damage to property can decrease municipal tax bases and impassible roadways can halt commerce.
                  </p>
                </div>
              },
              { name: "Sea Level Rise",
                id: 'impacts_slr',
                content: <p>
                  Communities will need to harden buildings and infrastructure against the eventuality of sea level rise, as well as devise longer-term strategies to limit flooding by softening coastlines, including undertaking wetlands restoration projects and altering zoning regulations to limit the amount of impermeable surfaces developed in our communities.
                </p>
              }
            ]},
            {title:"Actions",
              id:'actions',
              content: <p></p>,
              subsections: [{
                name: "Planning",
                id: 'actions_planning',
                content: <ul>
                  <ActionLink q='local government planning GHG inventory'>Complete an inventory of GHG emissions and prepare a climate change plan. </ActionLink>
                  <ActionLink q='local government planning vulnerable population environmental justice'>Consider vulnerable populations during emergency planning efforts including potential relocation options. </ActionLink>
                  <ActionLink q='local government planning vulnerability assessment'>Complete municipal vulnerability assessments and incorporate information into existing plans through the Municipal Vulnerability Preparedness program (MVP).</ActionLink>
                  <ActionLink q='local government planning extreme events'>Develop a plan that identifies and captures contact information for key information needs for extreme weather events. This plan should include options to use alternate transportation modes to transport critical employees.</ActionLink>
                  <ActionLink q='local government planning regulations zoning'>Incorporate climate change considerations in updated comprehensive plans and pass local laws or codes that uphold those values</ActionLink>
                  <ul>
                    <ActionLink q='local government planning climate action plan'>Climate Action Plan.</ActionLink>
                    <ActionLink q='local government planning hazard mitigation plan'>Local Hazard Mitigation Plan.</ActionLink>
                    <ActionLink q='local government planning master plan'>Master Plans.</ActionLink>
                    <ActionLink q='local government planning open space plan'>Open Space Plans.</ActionLink>
                    <ActionLink q='local government planning open space plan'>Transportation Improvement Plans.</ActionLink>
                    <ActionLink q='local government planning capital budget'>Capital budget.</ActionLink>
                  </ul>
                  <ActionLink q='local government planning scenarios'>Perform a scenario-based risk assessment.</ActionLink>
                  <ActionLink q='local government planning health services safety services emergency response'>Plan for an increased demand for health and safety services during temperature swings (heat and cold).</ActionLink>
                  <ActionLink q='local government planning greenhouse gas reduction mitigation'>Take a comprehensive planning approach that considers reducing greenhouse gasses (mitigation) and preparing for future climate (adaptation) jointly to safeguard against options that harm one or the other (maladaptation).</ActionLink>
                </ul>
              },
              {name: "Management Practices",
                id: 'actions_management_practices',
                content: <ul>
                  <ActionLink q='local government management practices industry infrastructure'>Collaborate with trade associations and the insurance industry to develop specification improvements that ensure building and infrastructure designs are more resilient to climate change.</ActionLink>
                  <ActionLink q='local government management practices resiliency'>Create and enhance alliances with trade associations insurance industry worker unions and institutes of higher education to assist their aid in improving climate change readiness.</ActionLink>
                  <ActionLink q='local government management practices heat waves'>Encourage good neighbor advisories and institute cooling centers during heat waves.</ActionLink>
                  <ActionLink q='local government management practices building code'>Examine development of a building-and-design education curriculum that incorporates planning for climate change.</ActionLink>
                  <ActionLink q='local government management practices zoning regulations'>Hold public discussions about the changing climate and the need to review development criteria priorities and possibly policies to determine where protection should be advanced.</ActionLink>
                  <ActionLink q='local government management practices budgeting infrastructure'>Ensure that state investments in infrastructure and development projects (direct or indirect via grants loans tax incentives or other funding mechanisms) reflect potential climate change impacts.</ActionLink>
                  <ActionLink q='local government management practices land conservation'>Use climate change impacts information to help identify high-importance land acquisitions.</ActionLink>
                </ul>
              },
              {name: "Technology",
              id:'actions_technology',
              content: <ul>
                <ActionLink q='local government technology renewable energy'>Install or purchase renewable energy for the municipality such as installing solar panels or purchasing wind power on municipal buildings.</ActionLink>
                <ActionLink q='local government technology distributed generation electricity storage'>Install electricity storage for the municipality in order to keep vital services and infrastructure online in case of system-wide outages.</ActionLink>
                <ActionLink q='local government technology energy efficiency'>Reduce GHG emissions from municipal operations including increasing energy efficiency and conservation measures.</ActionLink>
              </ul>
              },
              {name:"Policies/Laws",
                id:'actions_policies_laws',
                content: <ul>
                  <ActionLink q='local government regulation flood zone'>Consider applying flood hazard area regulations to A zones.</ActionLink>
                  <ActionLink q='local government regulation water storage'>Develop regulations and incentives to encourage development projects to restore or create flood storage.</ActionLink>
                  <ActionLink q='local government regulation policy incentives pervious surfaces'>Develop incentives for landowners to return impervious surface to permeable surface especially once the impervious surfaces are no longer needed.</ActionLink>
                  <ActionLink q='local government regulation policy building code'>Enhance and expand building codes to the extent feasible to increase resiliency.</ActionLink>
                  <ActionLink q='local government regulation policy wetlands easements'>Explore mechanisms that proactively address migrating wetlands such as rolling easement regulations that facilitate wetlands or beaches to migrate inland as sea level rises.</ActionLink>
                  <ActionLink q='local government regulation policy low impact development green infrastructure zoning precipitation flooding'>Investigate applicability of low impact development (LID) and Green Infrastructure into zoning regulations to increase resiliency of streams and floodplains during heavy precipitation events.</ActionLink>
                  <ActionLink q='local government regulation policy building code heat island'>Investigate opportunities where local land use regulations and building codes can address the ―heat island effect.</ActionLink>
                  <ActionLink q='local government regulation policy culverts'>Revise sizing infrastructure guidelines/requirements (such as pipes culverts rain gardens) to handle predicted storm events.</ActionLink>
                  <ActionLink q='local government regulation policy extreme weather'>Utilize local authority to protect open space farmland wetlands and riparian buffers to increase resiliency to extreme weather events.</ActionLink>
                </ul>
              },
              { name: "Research/Monitoring",
                id:"actions_research",
                content: <ul>
                  <ActionLink q='local government research maintenance public works'>Analyze current maintenance efforts and determine if there is adequate level of maintenance on roadways and bridges to avoid washouts.</ActionLink>
                  <ActionLink q='local government research design standards zoning climate change'>Analyze design and siting standards to determine if climate changes (higher sea levels warmer temperatures higher levels of precipitation and drought and more extreme weather events) warrant changes to minimize future risk and costs.  </ActionLink>
                  <ActionLink q='local government monitoring data'>Continue sponsoring climate change data collection and research as budgetary constraints allow.</ActionLink>
                  <ActionLink q='local government research mapping vulnerable assets'>Inventory and map municipal infrastructure that may be vulnerable to climate change and make plans and budget to replace or move infrastructure over time.</ActionLink>
                </ul>
              },
              {
                name:"Funding",
                id:'actions_funding',
                content: <ul>
                  <ActionLink q='local government funding municipal'>Apply for incentives/grants to integrate the appropriate regional climate action plan into master open space and other local plans in order to ensure that they address climate change preparedness resiliency and adaptation over a long-term horizon.</ActionLink>
                  <ActionLink q='local government funding development infrastructure'>Target infrastructure funding to assist in redirecting development toward less vulnerable areas.</ActionLink>
                  <ActionLink q='local government funding brownfield hazardous waste'>Consider establishing a public revolving loan fund or tax credits to support and encourage retrofitting—brownfield cleanup fund may be a model.</ActionLink>
                </ul>
              }

              ]},
          {title: "Looking for help?",
            id: 'looking_for_help',
            content: <ul>
              <ActionLink q='Massachusetts Municipal Vulnerability Preparedness Program'>Massachusetts Municipal Vulnerability Preparedness Program</ActionLink>
              <ActionLink q='ICLEI'>ICLEI </ActionLink>
              <ActionLink q='Green Communities Program'>Green Communities Program</ActionLink>
            </ul>,
            subsections: []
          }

        ]}
      >
      <p>
        Local governments are at the front line of addressing climate change. The need to be ready for an uncertain future requires leadership and decision-making about infrastructure, land, emergency response procedures, and many other components of modern social interaction. Many of the Commonwealth‘s communities are already grappling with flooding, pollution, heavy snowfall, erosion, repeated storm damage, heat impacts, aging infrastructure and other problems likely to be exacerbated by climate change. As a home-rule state, many of the land-use decisions in Massachusetts are made by cities and towns. Managers of key assets, such as water supply infrastructure or local public safety resources, may not have the resources to plan for climate change. Consequently, to be successful, adaptation strategies must be connected with, and directly support, vulnerable communities.
      </p>
      <p>
        Structures such as buildings, roads, bridges, and dams situated on rivers, coastal areas and in other vulnerable areas are more likely to be impacted from sea level rise and storms. Low-income and vulnerable populations will disproportionately suffer the effects of extreme events, be least equipped to adapt, and likely rely more heavily on government for support and relief.
      </p>
      <p>
        Local governments must also asses their fiscal vulnerability, as damage to private property due to climate extremes may result in a reduction of the municipal tax base. Moreover, impacts from climate change may require an increase in services for vulnerable populations, emergency response, and public and private infrastructure maintenance upgrades or replacement, all with real financial costs.
      </p>
      <p>
        Addressing some of these challenges at the local level will require assistance—both, technical and financial—from state and federal government, regional planning agencies, professional trade organizations, and non-profit partners. This assistance can provide or help local governments to develop revised operating procedures, best practices for analyzing risk, guidance for implementing adaptation measures, and updated design standards for new facilities.
      </p>
      <p>
        There are a variety of existing plans and regulations that offer an opportunity to incorporate climate considerations that increase the ability of a municipality to mitigate GHG emissions and increase its resiliency to anticipated climate change impacts. Often, the first step in this process is preparing a plan that looks at all aspects of climate mitigation and adaptation by identifying a community’s goals and values, projected climate impacts, local risks and vulnerabilities, possible options to address risks/vulnerabilities. The next step is to recommend an implementation strategy. This plan can then be used to support other municipal activities and planning processes.
      </p>
     </SectorDetailLayout>
    );
  }
}

export default LocalGovernmentSectorPage;
