import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/economy.jpg';
import {searchURL} from '../search/utils';
import {Footnote} from '../utils/footnotes';

const sectorSearchURL = (props) => {
  let params = {facets: {sectors: ["ma::economy"],
                         climate_changes: props.changes,
                         actions: props.actions},
                query: props.q}
  return searchURL(params);
}

class EconomySectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
      collection_name: "MA/economy/highlighted_resources"
    };

    return (
      <SectorDetailLayout
        title="Economy"
        image={sector_image}
        image_credit="John Phelan"
        showcased_resources={showcased_resources}
        footnotes={[
          <span>Office of Governor Charlie Baker, 2015, Letter to Request Federal Emergency Declaration – Attachment A:  2015 Severe Winter Weather Pattern Impacts - Supplemental Information. <a href='http://www.mass.gov/governor/docs/news/attachment-a-severe-winter-weather-pattern-impacts-supplemental-info.pdf'>http://www.mass.gov/governor/docs/news/attachment-a-severe-winter-weather-pattern-impacts-supplemental-info.pdf </a></span>,
          <span> IHS Global Insights, 2015, The Economic Costs of Disruption from a Snowtstorm. <a href='https://timedotcom.files.wordpress.com/2015/01/economic-costs-of-snowstorms.pdf'>https://timedotcom.files.wordpress.com/2015/01/economic-costs-of-snowstorms.pdf</a></span>,
          <span> NOAA, 2015, Fisheries Economics of the United States. <a href='http://www.nmfs.noaa.gov/stories/2017/04/docs/feus2015_fs_final3_web.pdf'>http://www.nmfs.noaa.gov/stories/2017/04/docs/feus2015_fs_final3_web.pdf </a></span>,
          <span> NOAA, 2014, Gulf of Maine Atlantic Cod: 2014 Assessment Update Report, <a href='https://www.nefsc.noaa.gov/saw/cod/pdfs/GoM_cod_2014_update_20140822.pdf'>https://www.nefsc.noaa.gov/saw/cod/pdfs/GoM_cod_2014_update_20140822.pdf</a></span>,
        ]}
        sections={[
          {title: "Impacts",
            id: 'impacts',
            content: <p> </p>,
            subsections: [
              {name: "Rising Temperatures",
                href: sectorSearchURL({changes:["ma::rising temperatures::"]}),
                id: "impacts_rising_temperatures",
                content: <div>
                  <p>Rising temperatures and heat waves will likely cause more sick days due to increases in heat-related illnesses such as heat stroke and asthma, and will also increase air conditioning needs and energy costs for businesses.  Outdoor or factory-based industries such as manufacturing and home construction may also be significantly impacted by days that are too hot for workers to safely complete their tasks.</p>
                  <p>In 2014, Massachusetts commercial fishermen sold $4.4 billion dollars of fish, directly supporting some 92,000 jobs<Footnote num='3'/>.  Rising estuarine and ocean temperatures may cause declines in certain populations of cold water fish and shellfish and the fishing jobs and other economic activities that require healthy fisheries.  Cod stocks in the Gulf of Maine dropped by 75% between 2004 and 2014<Footnote num='4'/>.  Some fresh-water fish stocks and the tourism they support may also decline.</p>
                </div>
              },
              { name: "Changes in Precipitation",
                href: sectorSearchURL({changes:["ma::changes in precipitation::"]}),
                id: 'impacts_changes_in_precipitation',
                content: <div>
                  <p>If water availability is affected by an increased variability in precipitation, water-dependent manufacturing industries will likely be strained, as will agricultural operations. In addition, more municipalities may need to raise water rates due to increasing prevalence of droughts and water shortages.</p>
                </div>
              },
              { name: "Extreme Weather",
                href: sectorSearchURL({changes:["ma::extreme weather::"]}),
                id: 'impacts_extreme_weather',
                content: <div>
                  <p>Heavier, harsher storms causing floods will likely have an impact on buildings, energy delivery and transmission, and transportation systems. Many historic town centers and manufacturing areas are located in river valleys and flood plains and will be exposed to increased inundation. More frequent and extreme weather events may disrupt the supply chains for businesses dependent on specific fuels or raw materials. Similar impacts may affect product delivery. Extreme weather may also prevent workers from getting to their jobs, slowing the entire economy.</p>
                  <p>The state’s sizable insurance and financial management sector with its 200,000 jobs may be especially affected by the growing cost of insuring against extreme weather in Massachusetts and across the country.  Steep financial losses for investors caused by climate-related impacts could also affect the state’s investment firms, while gains from new economic opportunities like renewable energy may benefit firms with smart investments in these areas.</p>
                </div>
              },
              { name: "Sea Level Rise",
                href: sectorSearchURL({changes:["ma::sea level rise::"]}),
                id: 'impacts_slr',
                content: <p>
                  Much of the Commonwealth’s critical infrastructure, not to mention homes and businesses, lie on the coast and must be prepared for the eventuality of sea-level rise. If not, encroaching salt water and higher incidence of flooding could slow the economy by damaging transportation and utility infrastructure, as well as goods and properties.
                </p>
              }
            ]},
            {title:"Actions",
              id:'actions',
              content: <p></p>,
              subsections: [
               {name: "Planning",
                href: sectorSearchURL({actions:["ma::planning::"]}),
                id: 'actions_planning',
                content: <ul>
                  <li>Assess the ability to meet health care capacity needs, especially for business operations that are vulnerable to flooding, extreme heat, or poor air quality.</li>
                  <li>Encourage businesses to take account of climate change impacts in risk assessments and risk minimization strategies, particularly as data are refined to a sub-state level.</li>
                  <li>Maintain and develop emergency management plans with support from the Massachusetts Emergency Management Agency (MEMA) and the Federal Emergency Management Agency (FEMA).</li>
                </ul>
              },
              {name: "Management Practices",
                href: sectorSearchURL({actions:["ma::implementation action/direct action on target::management and behavior"]}),
                id: 'actions_management_practices',
                content: <ul>
                  <li> Avoid siting operations or businesses in flood prone areas. For existing operations in these areas, support building design modifications, such as elevating electrical and HVAC systems above ground level, and installing systems that can withstand frequent flooding and heat waves.</li>
                  <li> Consider altering operation schedules to cooler times of day when possible.</li>
                  <li> Support improvements to stormwater management at business facilities to reduce runoff and its water quality impacts, and expand opportunities for water recycling, including grey water.</li>
                  <li> Examine advantages of increasing inventory supplies and identify alternative materials and inventory suppliers to avoid delivery interruptions.</li>
                  <li> Investigate alternate transportation routes, energy supplies, and communication systems for suppliers, customers, and workers to respond to evolving climate change impacts.</li>
                  <li> Provide outreach and educate public and private employers about Occupational Safety and Health Administration (OSHA) requirements regarding employee protections in times of high heat.</li>
                  <li> Consider using renewable energy in business operations, performing energy efficiency retrofits of facilities, and looking for opportunities to conserve energy in business processes and in employee commuting.</li>
                </ul>
              },
             {name: "Technology",
              href: sectorSearchURL({actions:["ma::implementation action/direct action on target::technology"]}),
              id:'actions_technology',
              content: <ul>
                <li> Consider improvements to the structural stability, water drainage systems, and weatherproofing of critical infrastructure or other economically vital sites as part of capital improvement projects.</li>
                <li> Investigate installation of year-round climate control assets, including natural site-specific climate control assets such as tree cover and vegetation, and re-examine the thermal properties of buildings to increase resilience and reduce greenhouse gas production.</li>
                <li> Seek to reduce water use in energy production by considering alternative technologies, since peak water use in energy production often coincides with periods of high heat and low water availability.</li>
              </ul>
              },
              { name: "Policies / Laws",
                href: sectorSearchURL({actions:["ma::planning::policies/laws/regulations"]}),
                id:'actions_policies_laws',
                content: <ul>
                  <li>Establish partnerships between industry and government to facilitate technical assistance to businesses that are adapting to climate change.</li>
                  <li>Encourage or incentivize conversion to more energy-efficient buildings and processes and to local renewable energy sources to reduce dependence on the electric grid and to build resilience for power disruptions that can occur during extreme weather events.</li>
                </ul>
              }]},
          {title: "Looking for help?",
            id: 'looking_for_help',
            content: <ul>
              <li>  <a href='http://www.mass.gov/eea/'> Massachusetts Energy and Environmental Affairs </a></li>
            </ul>,
            subsections: []
          }

        ]}
        >
          <div>
            <p>Massachusetts has a strong and growing economy, backed by a network of 125 colleges and universities that make the Commonwealth a world leader in technology, science, and health care.  In 2017, Massachusetts was ranked the best state by U.S. News and World Report based on its strong economy, excellent health care, and well-performing education system.  </p>
            <p>Against this vibrant back drop, climate change will produce serious risks as well as new opportunities for many Massachusetts businesses— including businesses in major and growing sectors of the economy such as health care, technology, education, information technology, financial services, manufacturing, and renewable energy.</p>
            <p>Investment in the development of climate change solutions provide opportunities that the Commonwealth is uniquely suited to pursue given the State’s focus on research and technology.  Massachusetts is already a leader in the transition to a climate-friendly, clean energy economy.  More than 105,000 people are now employed in the clean energy industry—up 75 percent since 2010, and those numbers continue to grow. </p>
            <p>Climate change will also increase exposure to risks and challenges across every economic sector. Extreme rain and snow storms can cost hundreds of millions of dollars from lost sales, increased fuel and supply prices, and direct damage and clean-up costs. The string of winter storms in February 2015 cost the Commonwealth more than $35 million alone <Footnote num='1'/>, and a full economic shutdown from an extreme weather event would cost approximately $265 million <em>per day</em><Footnote num='1'/>.  </p>
          </div>
        </SectorDetailLayout>
    );
  }
}

export default EconomySectorPage;
