import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/public_health.jpg';
import SearchLink from '../utils/search_link';

const ActionLink = (props) => {
  return <li>
    <SearchLink params={{sectors: ["public health"], query: props.q}}>
      {props.children}
    </SearchLink>
  </li>
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
        sector_name="public_health"
        image={sector_image}
        showcased_resources={showcased_resources}
        sections={[
          { title: "Impacts",
            id: "impacts",
            content: <p>
              Although the Massachusetts public health infrastructure is well-established, climate change will stress resources and create increased potential for chemical exposure, sanitation, and infectious disease incidence.
            </p>,
            subsections: [
              { name: "Rising Temperatures",
                id: "impacts_rising_temperatures",
                content: <ul>
                  <ActionLink q='public health rising temperatures air quality'>Increases in ozone and particulate matter production coupled with higher temperatures result in poor air quality and health impacts for populations with existing respiratory diseases.</ActionLink>
                  <ActionLink q='public health rising temperatures pollen asthma respiratory'>Increases in plant pollen production and more allergenic pollen content which may aggravate and exacerbate allergies asthma and other respiratory illnesses.</ActionLink>
                  <ActionLink q='public health rising temperatures vector borne disease'>Create potential changes in disease patterns and increase of vector-borne diseases (such as Lyme disease Eastern Equine Encephalitis and West Nile virus etc.) as ticks and mosquitoes become more prevalent and migrate to new locations.</ActionLink>
                  <ActionLink q='public health rising temperatures industrial accidents'>Create potential for industrial accidents chemical releases and explosions as temperatures reach unsafe storage temperatures.</ActionLink>
                </ul>
              },
              {name:"Changes in Precipitation",
                id: "impacts_changes_in_precipitation",
                content: <ul>
                  <ActionLink q='public health changes in precipitation water-borne disease'>Flooding events and their aftermath may increase the potential for water-borne disease outbreaks.</ActionLink>
                  <ActionLink q='public health changes in precipitation water quality'>Degraded surface water quality from sediments pathogens nutrients and pesticides in storm water and agricultural runoff.</ActionLink>
                  <ActionLink q='public health changes in precipitation flooding contamination water quality'>Flooding may force industrial facilities to shut down resulting in chemical explosions or releases that could impact drinking water safety.</ActionLink>
                </ul>
              },
              {name: "Extreme Weather",
                id: "impacts_extreme_weather",
                content: <ul>
                  <ActionLink q='public health extreme weather'>Increasing frequency and severity of events such as ice storms heat waves and more powerful storms that disrupt power and sanitary services health care services and access to safe drinking water and nutritious food.</ActionLink>
                  <ActionLink q='public health extreme weather mental health'>Coping with more extreme weather disaster response and uncertainty can increase mental and physical health burdens.</ActionLink>
                  <ActionLink q='public health extreme weather evacuation emergency response routes'>Damage and obstruction to roadways or other means of transportation making evacuation difficult or impossible.</ActionLink>
                </ul>
              }
            ]
        },
        { title: "Actions",
          id: "actions",
          content: <p>
            With planning and implementation at all levels, the existing public health infrastructure may be able to meet the challenges expected from climatic changes with identification of climate-related vulnerabilities and adjustments in priorities that improve response capabilities.
          </p>,
          subsections: [
            {name: "Planning",
              id: 'actions_planning',
              content: <ul>
                <ActionLink q='public health planning heat emergency'>Develop and implement a heat emergency plan.</ActionLink>
                <ActionLink q='public health planning integrated pest management'>Develop strategies for large-scale use of integrated pest management control to reduce pesticide use.</ActionLink>
                <ActionLink q='public health planning vulnerability assessment'>Implement planning efforts at all levels of health infrastructure to evaluate and identify climate-related vulnerabilities. </ActionLink>
                <ActionLink q='public health planning cooling centers'>Seek to increase cooling center capacity particularly in urban areas.</ActionLink>
                <ActionLink q='public health planning strategic planning'>Support expansion of strategic planning efforts to assist both health-related service providers and health care recipients in meeting anticipated needs associated with climate change impacts.</ActionLink>
                <ActionLink q='public health planning hazardous materials explosion'>Identify where toxic chemicals are used and stored and proactively prepare and train emergency responders and facility operators to prevent severe weather-related chemical releases explosions or exposures.</ActionLink>
              </ul>
          },
          { name: "Management Practices",
            id: "actions_management_practices",
            content: <ul>
              <ActionLink q='public health management practices health and safety regulations outdoor workers'>Develop occupational health and safety regulations to protect outdoor workers.</ActionLink>
              <ActionLink q='public health management practices outreach high risk populations sensitive population'>Educate the public and high-risk groups about personal prevention practices and encourage their adoption.</ActionLink>
              <ActionLink q='public health management practices outreach mosquito'>Educate the public about mosquito breeding habitats and opportunities to eliminate them (such as reducing areas of standing water).</ActionLink>
              <ActionLink q='public health management practices public transit'>Encourage opportunities for public transit use walking and bicycling and evaluate expanding facilities that promote these transportation options.</ActionLink>
              <ActionLink q='public health management practices planting heat stress'>Encourage the planting of shade trees use reflective light colored paints and use alternate cooling practices (i.e. more ceiling fans green roofs and urban open space and garden areas) to reduce the impacts of heat stress on buildings and the general population.</ActionLink>
              <ActionLink q='public health management practices regional planning'>Enhance regionalization efforts to address nonemergency situations.</ActionLink>
              <ActionLink q='public health management practices asthma'>Implement the DPH asthma action plan to improve the ability to adequately treat chronic asthma with effective care plans.</ActionLink>
              <ActionLink q='public health management practices heat island'>Promote heat island effect reduction strategies: cool roofs green roofs green spaces and designs that minimize heat magnification.</ActionLink>
              <ActionLink q='public health management practices climate change health threat'>Promote workforce development to train public health staff to respond to climate change-related health threats.</ActionLink>
              <ActionLink q='public health management practices risk prevention'>Proactively prepare and train emergency responders and facility operators to prevent severe weather-related chemical releases explosions or exposures.</ActionLink>
            </ul>
          },
          { name: "Technology",
            id: "actions_tech",
            content: <ul>
              <ActionLink q='public health technology greenhouse gas reductions'>Support efforts to reduce greenhouse gas emissions which in turn would reduce long term health effects of climate change.</ActionLink>
              <ActionLink q='public health technology renewable energy'>Encourage use of distributed sources of energy generation (such as community-scale solar and wind power) to increase preparedness and resiliency and decrease emissions.</ActionLink>
              <ActionLink q='public health technology storm water'>Promote the increased use and installation of natural systems for control of storm water and flooding.</ActionLink>
              <ActionLink q='public health technology impervious surface'>Expand use of porous pavement to improve drainage on roadways and prevent run-off into buildings or into ground surrounding buildings with basements or crawlspaces.</ActionLink>
              <ActionLink q='public health management practices vulnerable populations'>Promote an education campaign targeted to vulnerable populations.</ActionLink>
            </ul>
          },
          { name: "Policies/Laws",
            id: "actions_policies_laws",
            content: <ul>
              <ActionLink q='public health law policy air quality'>Attain air quality standards and control emissions from sources such as industrial and wood burning facilities and diesel engines.</ActionLink>
              <ActionLink q='public health law policy white roof'>Encourage or mandate use of reflective paints and materials and white roofs to decrease heat stress on buildings.</ActionLink>
              <ActionLink q='public health law policy regional coordination'>Facilitate and enhance regionalization efforts among local boards of health to coordinate efforts.</ActionLink>
              <ActionLink q='public health law policy vector borne disease'>Identify opportunities to increase capacity to respond to vector borne diseases.</ActionLink>
              <ActionLink q='public health law policy first responder chemical release'>Promote training for first responders on the prevention of and response to severe weather-related chemical releases and industrial accidents.</ActionLink>
              <ActionLink q='public health law policy energy efficiency health care'>Promote participation in energy efficiency programs for the health care sector such as the U. S. Department of Energy‘s Hospital Energy Alliance and Energy Smart Hospitals and the U. S. Environmental Protection Agency‘s Energy Star for Healthcare.</ActionLink>
              <ActionLink q='public health law policy telecommuting'>Promote telecommuting to avoid exposure during air quality alerts.</ActionLink>
              <ActionLink q='public health law policy insect repellent'>Stockpile supplies for prevention (e.g. insect repellent repellent impregnated work clothing).</ActionLink>
            </ul>
          },
          { name: "Research/Monitoring",
            id: 'actions_research',
            content: <ul>
              <ActionLink q='public health monitoring research testing viral agents'>Conduct testing to identify other currently non-endemic viral agents.</ActionLink>
              <ActionLink q='public health monitoring research testing tick'>Develop a systematic tick surveillance program statewide to monitor vector densities and infection rates.</ActionLink>
              <ActionLink q='public health monitoring research climate change scenario heat emergency'>Develop scenarios that integrate climate forecasts into planning around heat emergencies and heat-warning systems.</ActionLink>
              <ActionLink q='public health monitoring enhanced reporting'>Enhance electronic reporting procedures for laboratories.</ActionLink>
              <ActionLink q='public health research hospital capacity'>Evaluate provider capacity to meet the changing needs of patients suffering from climate change-related ailments.</ActionLink>
              <ActionLink q='public health monitoring research air quality health impact'>Enhance scientific understanding of the relationship between climate change air quality and health outcomes by conducting health impact assessments at the state and local levels.</ActionLink>
              <ActionLink q='public health monitoring web-based reporting'>Evaluate the benefits of implementing a web-based disease reporting procedure for health care providers.</ActionLink>
              <ActionLink q='public health modeling health effects'>Expand capacity for modeling and forecasting health effects using standardized health impact assessment methods to incorporate climate change.</ActionLink>
              <ActionLink q='public health monitoring mosquito'>Maintain mosquito surveillance at multiple sites throughout Massachusetts.</ActionLink>
              <ActionLink q='public health research building materials mold resistant'>Support research and development of building components that resist microbial growth reduce emissions of volatile organic compounds and have low environmental impact.</ActionLink>
              <ActionLink q='public health research vulnerable populations mapping'>Use GIS mapping to identify toxics users and their relationship to vulnerable populations and hurricane flooding or other severe weather risks.</ActionLink>
            </ul>
          },
          { name:"Funding",
            id: "actions_funding",
            content: <ul>
              <ActionLink q='public health funding air quality'>Examine the feasibility of reducing or removing subsidies for activities and projects that result in reduced ambient air quality.</ActionLink>
              <ActionLink q='public health funding mold remediation'>Evaluate opportunities to provide technical and financial support to property owners to remediate mold.</ActionLink>
            </ul>
          }
          ]
        },
        { title: "Looking for help?",
          id: "looking_for_help",
          content: <p>
            <ul>
              <ActionLink q='Massachusetts Department of Public Health'>Massachusetts Department of Public Health</ActionLink>
              <ActionLink q='Massachusetts Office of Technical Assistance'>Massachusetts Office of Technical Assistance</ActionLink>
              <ActionLink q='National Association of County and City Health Officials'>National Association of County and City Health Officials (NACCHO)</ActionLink>
              <ActionLink q='United States Centers for Disease Control and Prevention'>United States Centers for Disease Control and Prevention (CDC)</ActionLink>
            </ul>
          </p>,
          subsections: []
        }
        ]}
        >
        <p>
          Changes in climate will inevitably impact human health and welfare in Massachusetts—both directly via extreme heat events and indirectly through increases in vector-borne diseases. Social factors such as economic status, access to resources, health, age, or geography make some Massachusetts residents more vulnerable to the effects of climate change.
        </p>
        <p>
          To support and promote a strong, healthy, and resilient population, and develop responsive local health systems, climate change efforts for human health should build on conventional and existing medical and public health standards, using a variety of approaches. These approaches may include using health surveillance systems to track disease occurrence and identifying locations and population groups at greatest risk for specific health threats. These efforts may also include assessing infrastructure capacity and emergency response preparedness, developing preparedness and response plans, and creating treatment plans to reduce health risks.
        </p>
        <p>
          While some greenhouse gas reduction measures will improve public health and welfare, others may have significant adverse health and environmental consequences, such as potential increased national reliance on nuclear power without nuclear waste management improvements or the facility’s ability to withstand severe weather. Adaptation strategies to protect human health may adversely impact mitigation goals.  For example, increased use of air conditioning may contribute to further climate change as it increases energy use, and greenhouse gas emissions.
        </p>
        <p>
          Effective adaptation and mitigation strategies consist of reducing exposure while increasing resilience. These efforts range from large-scale regional initiatives to delivery of personalized health services.
              <a href='#fn_1' className='footnote'>1</a>
            Public health adaptation strategies include:
          <ul>
            <li>Implementing urban heat warning and response systems </li>
            <li>Planting low-pollen trees in cities to reduce urban heat without increasing allergenic pollen</li>
            <li>Ensuring vulnerable populations have access to functional, high-efficiency air conditioners and cooling centers </li>
            <li>Integrating climate forecasts into ongoing planning for air quality</li>
            <li>Identifying and working with toxics users to prevent severe weather-related industrial accidents</li>
          </ul>
        </p>
        <ol className='footnotes'>
          <li id='fn_1'><a href='http://www.mass.gov/eea/docs/eea/energy/cca/eea-climate-adaptation-report.pdf'>http://www.mass.gov/eea/docs/eea/energy/cca/eea-climate-adaptation-report.pdf</a></li>
        </ol>
        </SectorDetailLayout>
    );
  }
}

export default PublicHealthSectorPage;
