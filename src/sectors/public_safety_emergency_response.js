import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/public_safety.jpg';
import {searchURL} from '../search/utils';
import MapLink from '../utils/map_link';
import DatagrapherLink from '../utils/datagrapher_link';

const sectorSearchURL = (props) => {
  let params = {facets: {sectors: ["ma::public safety / emergency response"],
                         climate_changes: props.changes,
                         actions: props.actions},
                query: props.q}
  return searchURL(params);
}


class PublicSafetyEmergencyResponse extends Component {
  render() {
    let showcased_resources = {
      title: "Highlighted Resources",
      collection_name: "MA/public_safety_emergency_response/highlighted_resources",
      content: <div>
        <p>The <MapLink>resilient MA map</MapLink> and <DatagrapherLink>data grapher</DatagrapherLink> are two interactive and up-to-date tools that can help emergency managers assess and plan for climate impacts that could create emergency situations. Three other resources include:</p>
      </div>
    };


    return (
      <SectorDetailLayout
        title="Public Safety / Emergency Response"
        sector_name="Public Safety/Emergency Response"
        image={sector_image}
        image_credit="Massachusetts Emergency Management Agency (MEMA)"
        showcased_resources={showcased_resources}
        sections={[
          {title: "Impacts",
           id: "impacts",
           content: <div>
           </div>,
              subsections: [
                {name: "Rising Temperatures",
                href: sectorSearchURL({changes:["ma::rising temperatures::"]}),
                 id: 'impacts_rising_temperatures',
                 content: <div>
                    <p>More frequent heat waves may increase heat related illnesses for the elderly, young, or ill and for people living in buildings without air conditioning, especially if heat lasts for multiple days and nights. Heat waves may also create emergencies if increased demand for energy to cool buildings exceeds the capacity of our aging energy infrastructure, triggering power outages. </p>
                  </div>
                },
              {name: "Changes in Precipitation",
               href: sectorSearchURL({changes:["ma::changes in precipitation::"]}),
               id: "impacts_changes_in_precipitation",
               content: <div>
                 <p>As precipitation events become more intense, Massachusetts cities and towns and critical infrastructure like roads, bridges, and energy facilities will be more vulnerable to inland and coastal flooding. Flooding can create immediate risks to life and property, as well as physical damage that disrupt key utility services and impede transportation.  Drier and warmer summers may also trigger more episodic droughts, which could create local water supply shortages with major public health impacts.</p>
               </div>,
              },
            { name: "Extreme Weather",
              href: sectorSearchURL({changes:["ma::extreme weather::"]}),
               id: "impacts_extreme_weather",
               content: <div>
                  <p>Massachusetts will be vulnerable to an increase in extreme weather as climate changes. Periods of extreme heat or cold, heavy spring downpours, severe blizzards, and an increase in rainfall produced by Atlantic hurricanes and tropical storms are all more likely, according to climate scientists. These extreme events will heighten a range of public safety risks. Key public services such as electricity, transport, schools, and health care can be disrupted by extreme weather. Risks from extreme weather patterns underscore the importance of well-functioning emergency management and response systems – from trained staff to adequate sheltering facilities. </p>
               </div>
              },
             { name: "Sea Level Rise",
               href: sectorSearchURL({changes:["ma::sea level rise::"]}),
               id: "impacts_sea_level_rise",
               content: <div>
                <p>Sea level rise will likely be gradual, but higher seas will increase the frequency of emergency conditions when combined with other coastal hazards such as flooding caused by high tides, coastal storm surge, and erosion. Catastrophic flooding with the potential to put people in harm’s way and compromise critical public services could increase as a result of these combined hazards, necessitating well-planned and coordinated warning systems, emergency response systems, and investments in proactive hazard mitigation to reduce risk in advance of emergencies.</p>
               </div>
              },
            ]
          },
          {title: "Actions",
           id: "actions",
           subsections: [
            {name: "Planning",
              href: sectorSearchURL({actions:["ma::planning::"]}),
              id: 'actions_planning',
              content: <ul>
                <li>Update and revise local Hazard Mitigation Plans with the latest information about potential climate impacts that could produce or exacerbate serious hazards, and integrate climate information into other plans that address emergency preparedness and risk reduction, such as municipal and local plans, business continuity of operations plans and others.</li>
                <li>Review and update plans for addressing hazardous spills in the event of flooding.</li>
                <li>Update emergency management plans to account for projected climate changes and their potential impacts on the delivery of emergency services.</li>
              </ul>
            },
            {name: "Management Practices",
             href: sectorSearchURL({actions:["ma::implementation action/direct action on target::management and behavior"]}),
             id: "actions_management_practices",
             content: <ul>
                <li>Assess emergency equipment, supplies, evacuation facilities, and shelters to ensure they are adequate for addressing emergencies exacerbated by projected climate change.</li>
                <li>Design and implement coordinated education and outreach efforts to increase awareness of the cost savings and public safety benefits of hazard mitigation, enhanced preparedness planning, and other projects that will assist communities and state agencies with climate change adaptation.</li>
                <li>Forecast the increased demand on local public works and emergency response staff due to more extreme weather events, and take steps to confirm adequate support mechanisms are in place.</li>
                <li>Increase capacity to address emergencies by organizing greater cooperation and sharing of resources and expertise with the business community, forestry sector, and the tourism industry.</li>
                <li>Increase emergency preparedness for winter weather accidents.</li>
                <li>Maintain a database of available equipment and equipment parts to facilitate sharing during an emergency, and consider increasing material stocks and replacement budgets.</li>
                <li>Practice the execution of communities’ emergency action plans, involving local nongovernmental organizations for support, staffing, and building constituent support.</li>
              </ul>
            },
            { name: "Research / Monitoring",
              href: sectorSearchURL({actions:["ma::outreach/education::research and monitoring"]}),
             id: "actions_research_monitoring",
             content: <ul>
                  <li>Identify MEMA databases and maps that should be updated with information from climate change projections to facilitate response to emergency situations.</li>
                  <li>Identify how to factor potential impacts from climate change into plans for enhancing these systems.</li>
              </ul>
            },
            {name: "Funding",
             href: sectorSearchURL({actions: ["ma::implementation action/direct action on target::financing"]}),
             id: 'actions_funding',
             content: <ul>
                <li>The <a href='https://www.mass.gov/orgs/massachusetts-emergency-management-agency'>Massachusetts Emergency Management Agency</a> has grant and financial assistance programs </li>
             </ul>
            }
           ]
          },
          {title: "Looking for help?",
           id:"look4help",
           subsections: [],
           content: <ul>
            <li><a href='https://www.mass.gov/orgs/massachusetts-emergency-management-agency'>Massachusetts Emergency Management Agency (MEMA)</a></li>
          </ul>
          }]}
        >
          <p>Governments have a special responsibility to keep people safe and to minimize the harm that could occur during a disaster or a smaller-scale emergency. Emergency management involves coordinating and integrating all the activities and investments necessary to mitigate against, prepare for, respond to, and recover from threatened or actual natural disasters, acts of terrorism, or other man-made disasters.</p>

          <p>Emergency management that is proactive, responsive, and efficient will become even more important as the Commonwealth’s climate changes, because some expected changes in climate patterns could affect the frequency and the severity of natural disasters and emergencies.</p>

          <p>Emergency Management functions are divided into four phases: preparedness, response, recovery, and mitigation. At each phase, emergency managers can consider what improvements or changes might be needed to increase readiness for climate change. Currently the state of Massachusetts is completing an update to the federally required <a href='https://resilientma.com/updates/'>State Hazard Mitigation Plan</a>, which, for the first time will fully incorporate climate change preparedness. This will result in a first-in-the-nation integrated State Hazard Mitigation and Climate Adaptation Plan.</p>

          <p>Municipalities are also beginning this work, by participating in the <a href='https://resilientma.com/updates/'>Municipal Vulnerability Preparedness (MVP) program</a> and by planning for impacts like sea level rise as they develop their local Hazard Mitigation Plans, as the Town of Beverly has done. Massachusetts towns are also applying for federal Hazard Mitigation grants to support investments that reduce future disaster risks.</p>
        </SectorDetailLayout>
    );
  }
}

export default PublicSafetyEmergencyResponse;
