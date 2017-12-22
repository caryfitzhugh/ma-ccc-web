import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/public_health.jpg';
import SearchLink from '../utils/search_link';
import {Footnote} from '../utils/footnotes';

const PHSearchLink = (props) => {
  return <SearchLink params={{facets: {sectors: ["ma::natural resources / habitats"], climate_changes: props.changes, actions: props.actions}, query: props.q}}>
      {props.children}
    </SearchLink>

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
              {name: <PHSearchLink changes={["ma::rising temperatures::"]}>Rising Temperatures</PHSearchLink>,
                id: "impacts_rising_temperatures",
                content: <div>
                  <p>Higher average temperatures in Massachusetts coupled with increases in ozone and particulate matter production could result in poor air quality and health impacts for populations with existing respiratory diseases. Warming could also result in an increase in plant pollen production and more allergenic pollen content, which may exacerbate allergies, asthma and other respiratory illnesses.</p>
                  <p>There may also be an increase in the incidence of vector-borne diseases, such as Lyme disease, Eastern Equine Encephalitis, and West Nile virus, etc., as ticks and mosquitoes are able to overwinter further North and become more prevalent. During extreme heat, industrial accidents, chemical releases and explosions could occur if temperature thresholds for safe storage are surpassed.</p>
                </div>
              },
              {name: <PHSearchLink changes={["ma::changes in precipitation::"]}>Changes in Precipitation</PHSearchLink>,
                id: "impacts_changes_in_precipitation",
                content: <div>
                  <p>Flooding caused by the heavier downpours expected in Massachusetts could force industrial facilities to shut down and cause chemical explosions or releases that could impact drinking water safety. Extensive and damaging flooding events and their aftermath could increase the potential for water-borne disease outbreaks. Greater volumes of stormwater and agricultural runoff could transport sediments, pathogens, nutrients, and pesticides to nearby waterways and create risks for swimming, fishing, or drinking water quality. </p>
                </div>
              },
              {name: <PHSearchLink changes={["ma::extreme weather::"]}>Extreme Weather</PHSearchLink>,
                id: "impacts_extreme_weather",
                content: <div>
                  <p>A projected increase in more extreme weather events such as ice storms, heat waves, and powerful coastal or inland wind and rain storms could cause disruptions to power and sanitary services, health care services, and access to safe drinking water and nutritious food. Severe flooding could damage or obstruct roadways, making necessary evacuations more difficult or impossible.</p>
                  <p>Coping with more extreme weather, experiencing disaster response first hand, and living with uncertainty about future storms can also increase mental and physical health burdens. </p>
                </div>
              },
              {name: <PHSearchLink changes={["ma::sea level rise::"]}>Sea Level Rise</PHSearchLink>,
               id: "impacts_sea_level_rise",
               content: <div>
                <p>Sea level rise is expected to elevate the risk of damage to coastal properties and infrastructure. Saltwater intrusion and coastal flood damage in populated areas could cause disruptions to power and sanitary services, health care services and transportation, and access to safe drinking water and nutritious food. Severe weather coupled with sea level rise could lead to emergency evacuations and significant risk to coastal populations from intense flooding and coastal storm surge.</p>
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
            {name: <PHSearchLink actions={["ma::planning::"]}>Planning</PHSearchLink>,
              id: 'actions_planning',
              content: <ul>
                <li>Implement planning efforts at all levels of health infrastructure to evaluate and identify climate-related vulnerabilities.</li>
                <li>Plan a climate health education campaign targeted to vulnerable populations.</li>
                <li>Develop and implement a heat emergency plan that includes measures to ensure cooling center capacity, particularly in urban areas.</li>
                <li>Develop strategies for large-scale use of integrated pest management control to ensure that an increase in pest populations does not result in greater pesticide exposure and water quality degradation.</li>
                <li>Support expansion of strategic planning efforts to assist health-related service providers and health care recipients in meeting anticipated needs associated with climate change impacts.</li>
                <li>
                <a href='https://mass-eoeea.maps.arcgis.com/apps/OnePane/basicviewer/index.html?appid=36d72b75ad55454fb8a9c1af809fa92a'>
                Identify where toxic chemicals are used and stored.
                  </a>
                </li>
                <li>Ensure emergency evacuation plans and routes consider climate change impacts.</li>
              </ul>
            },
            {name: <PHSearchLink q="management practices">Management Practices</PHSearchLink>,
            id: "actions_management_practices",
            content: <ul>
              <li>Develop occupational health and safety regulations to protect outdoor workers from health-related problems caused by temperature extremes. </li>
              <li>Educate the public about mosquito breeding habitats and opportunities to eliminate them (such as reducing areas of standing water).</li>
              <li>Evaluate opportunities to provide technical and financial support to property owners to remediate mold in buildings.</li>
              <li>Encourage opportunities for public transit use, walking, and bicycling, and evaluate expanding facilities that promote these transportation options. </li>
              <li>Encourage the planting of shade trees, use of reflective, light colored paints, and use of alternate cooling practices (i.e. more ceiling fans, green roofs, and urban open space and garden areas) to reduce the impacts of heat stress on buildings and the general population. </li>
              <li>Promote workforce development to train public health staff to respond to climate change-related health threats. </li>
            </ul>
          },
          {name: <PHSearchLink actions={["ma::implementation action/direct action on target::technology"]}>Technology</PHSearchLink>,
            id: "actions_tech",
            content: <ul>
              <li>Expand use of rain gardens, swales, and porous pavement to improve drainage and prevent run-off into buildings with basements or crawlspaces vulnerable to mold build-up.</li>
              <li>Develop new, less pesticide-intensive strategies to deal with mosquitoes, ticks and other vectors that carry diseases.</li>
            </ul>
          },
            {name: <PHSearchLink actions={["ma::planning::policies/laws/regulations"]}>Policies / Laws</PHSearchLink>,
            id: "actions_policies_laws",
            content: <ul>
              <li>Consider policies and incentives to increase urban tree canopy and other kinds of vegetation to counter heat island effects. </li>
              <li>Facilitate and enhance regionalization efforts among local boards of health to coordinate preparations for climate impacts.</li>
              <li>Identify opportunities to increase capacity to respond to vector borne diseases. </li>
              <li>Promote training for first responders on the prevention of and response to severe weather-related chemical releases and industrial accidents. </li>
              <li>Promote participation in energy efficiency programs for the health care sector (e.g. the U. S. Department of Energy‘s Hospital Energy Alliance, Energy Smart Hospitals, and Energy Star for Healthcare.)</li>
            </ul>
          },
          { name: <PHSearchLink q="research monitoring">Research/Monitoring</PHSearchLink>,
            id: 'actions_research',
            content: <ul>
                <li>Develop a systematic tick surveillance program to monitor vector densities and infection rates. </li>
                <li>Develop scenarios that integrate climate forecasts into planning around heat emergencies and heat-warning systems. </li>
                <li>Enhance scientific understanding of the relationship between climate change, air quality, and health outcomes by conducting health impact assessments at the state and local levels.</li>
            </ul>
          },
          { name: <PHSearchLink actions={["ma::implementation action/direct action on target::financing"]}>Funding</PHSearchLink>,
            id: "actions_funding",
            content: <ul>
            <li><a href='https://www3.epa.gov/region1/eco/uep/hcgp.html'> EPA’s Healthy Communities Grant Program  </a></li>
            <li><a href='https://www.epa.gov/research-grants/climate-change-research-grants'> Climate change research grants at EPA </a></li>
            <li><a href='https://www.mass.gov/municipal-vulnerability-preparedness-program'> The Commonwealth’s Municipal Vulnerability Preparedness Program has a focus on vulnerable populations and public health </a></li>
            </ul>
          }
          ]
        },
        { title: "Looking for help?",
          id: "looking_for_help",
          content: <div>
            <ul>
              <li><SearchLink params={{query: "Massachusetts Department of Public Health"}}>Massachusetts Department of Public Health</SearchLink></li>
              <li><SearchLink params={{query:"Massachusetts Office of Technical Assistance"}}> Massachusetts Office of Technical Assistance </SearchLink></li>
              <li><SearchLink params={{query:"National Association of County and City Health Officials"}}>National Association of County and City Health Officials (NACCHO) </SearchLink></li>
              <li><SearchLink params={{query:"United States Centers for Disease Control and Prevention"}}>United States Centers for Disease Control and Prevention (CDC) </SearchLink></li>
            </ul>
          </div>,
          subsections: []
        }
        ]}
        >
          <p>Massachusetts’ advanced health care system will face new challenges as climate change impacts the health and welfare of residents across the Commonwealth. Climate change will affect residents both directly via extreme heat events and severe storms and indirectly through increases in vector-borne diseases and increased allergens. Social factors such as economic status, access to resources, health, age, or geography make some Massachusetts residents more vulnerable to these impacts.</p>

          <p>To support and promote a strong, healthy, and resilient population and develop responsive local health systems, we need to use a variety of approaches that build on conventional and existing medical and public health standards. These approaches may include using health surveillance systems to track disease occurrence and identifying locations and population groups at greatest risk for specific health threats. Strategies may also include assessing infrastructure capacity and emergency response preparedness, and developing preparedness and response plans.</p>

          <p>Many greenhouse gas reduction measures will improve public health and welfare. Clean energy strategies that replace polluting fossil fuel energy with wind, hydroelectric, or solar energy or encourage more active, non-motorized transportation will have significant air quality benefits. Encouraging walking, biking and use of public transit also can have significant benefits for public health. But care should be taken to ensure that new strategies for meeting greenhouse gas reduction targets do not adversely affect public health in unexpected ways.</p>

          <p>Effective adaptation strategies to prepare for climate change will reduce public health risks, while increasing resilience. These strategies range from large-scale regional initiatives to delivery of personalized health services for individuals at risk, and include: <Footnote num='1'/> </p>
          <ul>
            <li>Implementing urban heat warning and response systems;</li>
            <li>Planting low-pollen trees in cities to reduce urban heat without increasing allergenic pollen;</li>
            <li>Ensuring vulnerable populations have access to high-efficiency air conditioners and cooling centers;</li>
            <li>Integrating climate forecasts into ongoing planning for air quality; and</li>
            <li>Identifying and working with toxics users to prevent severe weather-related industrial accidents.</li>
          </ul>
        </SectorDetailLayout>
    );
  }
}

export default PublicHealthSectorPage;
