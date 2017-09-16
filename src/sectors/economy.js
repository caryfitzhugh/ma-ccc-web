import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/economy.jpg';
import SearchLink from '../utils/search_link';

const ActionLink = (props) => {
  return <li>
    <SearchLink params={{facets: {sectors: ["economy"]}, query: props.q}}>
      {props.children}
    </SearchLink>
  </li>
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
        sector_name="economy"
        image={sector_image}
        image_credit="John Phelan"
        showcased_resources={showcased_resources}
        sections={[
          {title: "Impacts",
            id: 'impacts',
            content: <p> </p>,
            subsections: [
              { name:"Rising Temperatures",
                id: "impacts_rising_temperatures",
                content: <p>
                  Rising temperatures will increase the need for air conditioning in the workplace and may lead to more absences due to increases in heat related illnesses, such as heat stroke and asthma. Outdoor or factory-based industries such as manufacturing and home construction may also be significantly impacted by days that are too hot for workers to safely complete their tasks.
                </p>
              },
              { name:"Changes in Precipitation",
                id: 'impacts_changes_in_precipitation',
                content: <p>
                  If water availability is affected by an increased variability in precipitation, water-dependent manufacturing industries will likely be strained, as will agricultural operations. In addition, more municipalities may need to raise water rates during – or to prevent – droughts and water shortages, increasing costs to residents and the hospitality industry.
                </p>
              },
              { name: "Extreme Weather",
                id: 'impacts_extreme_weather',
                content: <div>
                  <p>
                    Heavier, harsher storms causing floods will likely have an impact on buildings, energy delivery and transmission, and transportation systems. Manufacturing operations in low-lying areas may be exposed to increased inundation. More frequent and extreme weather events may disrupt the supply chains for businesses dependent on specific fuels or raw materials. Similar impacts may affect product delivery. Extreme weather may affect workers‘abilities to get to their jobs, slowing the entire economy.
                  </p>
                </div>
              },
              { name: "Sea Level Rise",
                id: 'impacts_slr',
                content: <p>
                  Much of the Commonwealth’s critical infrastructure, not to mention homes and businesses, lie on the coast and must be prepared for the eventuality of sea-level rise. If not, encroaching salt water and higher incidence of flooding could slow the economy by damaging transportation and utility infrastructure, as well as goods and properties.
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
                  <ActionLink q='economy planning health care capacity'>Assess the ability to address health care capacity needs especially those installations in potential areas of flooding extreme heat or poor air quality.</ActionLink>
                  <ActionLink q='economy planning business vulnerability assessment'>Encourage businesses to incorporate climate change impacts particularly as data are refined to a sub-state level into risk assessments and risk minimization strategies.</ActionLink>
                  <ActionLink q='economy planning emergency management plan'>Maintain and develop emergency management plans in conjunction with the Massachusetts Emergency Management Agency (MEMA) and the Federal Emergency Management Agency (FEMA).</ActionLink>
                </ul>
              },
              {name: "Management Practices",
                id: 'actions_management_practices',
                content: <ul>
                  <ActionLink q='economy management practices work hours'>Consider altering operation schedules to cooler times of day.</ActionLink>
                  <ActionLink q='economy management practices water storage'>Encourage water storage taking advantage of high rain periods to offset drought periods.</ActionLink>
                  <ActionLink q='economy management practices water recycling'>Expand/promote opportunities for water recycling including grey water.</ActionLink>
                  <ActionLink q='economy management practices capacity health care facilities'>Establish alternatives to avert temporarily overwhelming local health care facilities.</ActionLink>
                  <ActionLink q='economy management practices mortgage risk'>Evaluate the impacts of the true cost of risk over time and consider revising mortgage banking formulas to better reflect the risk.</ActionLink>
                  <ActionLink q='economy management practices inventory'>Examine advantages of increasing inventory supplies and identify alternative materials and inventory suppliers to avoid delivery interruptions. </ActionLink>
                  <ActionLink q='economy management practices transportation energy communication'>Investigate alternate transportation routes energy supplies and communication systems for suppliers customers and workers to respond to evolving climate change impacts.</ActionLink>
                  <ActionLink q='economy management practices OSHA heat'>Provide outreach and educate public and private employers about Occupational Safety and Health Administration (OSHA) requirements regarding employee protections in times of high heat.</ActionLink>
                  <ActionLink q='economy management practices stormwater management'>Support improvements to on-site stormwater management to mitigate heavier rains especially at facilities in low lying areas.</ActionLink>
                  <ActionLink q='economy management practices building design'>Support building design modifications such as electrical and HVAC systems that withstand more frequent flooding and heat waves.</ActionLink>
                  <ActionLink q='economy management practices water conservation'>Use market-based solutions to preserve water resources and conserve water.</ActionLink>
                </ul>
              },
              {name: "Technology",
              id:'actions_technology',
              content: <ul>
                <ActionLink q='economy technology infrastructure'>Consider improvements to the structural stability water drainage systems and weatherproofing of critical infrastructure or other economically vital sites as part of capital improvement projects.</ActionLink>
                <ActionLink q='economy technology energy efficiency vegetation tree planting'>Investigate installation of year-round climate control capabilities including natural site climate control capabilities such as tree cover and vegetation and re-examine the thermal properties of buildings to increase resilience and reduce greenhouse gas production.</ActionLink>
                <ActionLink q='economy technology water conservation'>Seek to reduce water use in energy production by considering alternative technologies since peak water use in energy production often coincides with periods of high heat and low water availability.</ActionLink>
                <ActionLink q='economy technology water treatment energy generation'>Explore opportunities to coordinate water treatment and energy generation.</ActionLink>
              </ul>
              },
              {name:"Policies/Laws",
                id:'actions_policies_laws',
                content: <ul>
                  <ActionLink q='economy policy partnerships government'>Establish partnerships with industry and government to facilitate technical assistance to businesses that are adapting to climate change.</ActionLink>
                  <ActionLink q='economy policy FEMA insurance'>Reevaluate the FEMA’s role in providing insurance in vulnerable areas to improve alignment of potential risks of development with climate change impacts.</ActionLink>
                  <ActionLink q='economy policy energy efficiency renewable energy'>Encourage or incentivize conversion to more energy-efficient processes or local renewable energy sources to alleviate dependence on the grid and to protect from power disruptions that can occur during extreme weather events.</ActionLink>
                </ul>
              }]},
          {title: "Looking for help?",
            id: 'looking_for_help',
            content: <ul>
              <li>  Massachusetts Energy and Environmental Affairs <a href='http://www.mass.gov/eea/'>http://www.mass.gov/eea/</a></li>
            </ul>,
            subsections: []
          }

        ]}
        >
          <div>
            <p>
              Climate change will impact a variety of businesses and create challenges and opportunities for every sector of the Massachusetts economy.
            </p>
            <ul>
              <li>In 2014, retail sales and various office jobs contributed about half of the Commonwealth’s $450 billion gross state product (GSP)<a href='#fn_1' className='footnote'>1</a>. Across the entire economy, extreme storms, especially bad snow storms can cost hundreds millions of dollars in lost sales and lost business, in addition to the direct damage and clean-up costs. The string of storms in February 2015 cost local governments and the Commonwealth more than $35 million<a href='#fn_2' className='footnote'>2</a>. A full shutdown of the Massachusetts economy, however, is estimated to cost approximately $265 million per day, mostly in the form of lost wages. <a href='#fn_3' className='footnote'>3</a></li>
              <li>Health care and social services are the largest employers in the Commonwealth, with over 470,000 jobs provided statewide, contributing in excess of $42 billion toward the state‘s GSP in 2014. The health care industry is likely to see impacts on operations (e.g., increased flooding risks or increased demand for air conditioning), alongside an influx of patients affected both the direct impacts of climate change (e.g., heat stress, respiratory conditions, etc.) and indirect impacts (e.g., certain vector-borne illnesses, such as Lyme disease, may increase as winters become more mild). This strain on Massachusetts hospitals’ equipment and infrastructure, as well as its resources and capacity, will reduce the quality of care patients receive and lead to increased costs for health care providers, insurance providers, and, ultimately, patients.</li>
              <li>Insurance and financial management industries employ approximately 200,000 employees and contribute more than $33 billion annually to Massachusetts’ GSP. The insurance industry‘s income is also dependent on sales and activities in other parts of the country, so climate change impacts in distant areas can have an economic impact on insurance companies headquartered in Massachusetts. Damage resulting from more extreme storm events will initially be borne by the insurance industry, but will ultimately be passed on to policy holders. Insurance payments could increase for flooded property, damaged crops, livestock, spoiled perishable food due to electricity outages, and heat wave-related health insurance losses.</li>
              <li>The manufacturing sector employs approximately 300,000 workers. Computers and electronic, fabricated metal, food processing, machinery, chemical, printing, plastics and rubber, transportation equipment, paper, and electrical equipment made up 85% of these jobs. Ninety percent of Massachusetts‘businesses have fewer than 100 employees and 85% are classified as small businesses with 20 employees or fewer. Small businesses employ more than one quarter of the statewide workforce. Extreme weather events can trigger price surges for necessary fuels and disrupt supply chains, putting pressure on these small manufacturing businesses.</li>
              <li>In 2014, commercial fishermen sold $4.4 billion dollars of fish, directly supporting some 92,000 jobs in the Commonwealth<a href='#fn_4' className='footnote'>4</a>. Thousands of additional jobs and billions of additional economic output in Massachusetts depend on the restaurants and tourism tied to our commercial fisheries. However, rising ocean temperatures and increased ocean acidity will negatively affect several critical fish and shellfish species native to the cold waters of the Gulf of Maine; for example, cod stocks in the Gulf of Maine dropped by 75% between 2004 and 2014<a href='#fn_5' className='footnote'>5</a>.</li>
              <li>Real estate management employs approximately 446,000 people and contributes $47.1 billion, toward Massachusetts GSP. Those working outdoors, in sectors such as construction, public works, and landscape design, may see a reduction in productivity during extreme heat. Increases in overall summer temperatures, especially the number of days with highs above 95° F, and increases in the frequency of heat waves are expected to reduce or slow construction projects due to health and safety concerns for workers.</li>
            </ul>
          </div>
          <ol className='footnotes'>
            <li id='fn_1'>Bureau of Economic Analysis (BEA), 2017, Interactive Data – GDP by Industry. <a href='https://www.bea.gov/iTable/index_industry_gdpIndy.cfm'>https://www.bea.gov/iTable/index_industry_gdpIndy.cfm</a></li>
            <li id='fn_2'>Office of Governor Charlie Baker, 2015, Letter to Request Federal Emergency Declaration – Attachment A:  2015 Severe Winter Weather Pattern Impacts - Supplemental Information. <a href='http://www.mass.gov/governor/docs/news/attachment-a-severe-winter-weather-pattern-impacts-supplemental-info.pdf'>http://www.mass.gov/governor/docs/news/attachment-a-severe-winter-weather-pattern-impacts-supplemental-info.pdf</a></li>
            <li id='fn_3'> IHS Global Insights, 2015, The Economic Costs of Disruption from a Snowtstorm. <a href='https://timedotcom.files.wordpress.com/2015/01/economic-costs-of-snowstorms.pdf'>https://timedotcom.files.wordpress.com/2015/01/economic-costs-of-snowstorms.pdf</a></li>
            <li id='fn_4'>NOAA, 2015, Fisheries Economics of the United States. <a href='http://www.nmfs.noaa.gov/stories/2017/04/docs/feus2015_fs_final3_web.pdf'>http://www.nmfs.noaa.gov/stories/2017/04/docs/feus2015_fs_final3_web.pdf</a></li>
            <li id='fn_5'> NOAA, 2014, Gulf of Maine Atlantic Cod: 2014 Assessment Update Report, <a href='https://www.nefsc.noaa.gov/saw/cod/pdfs/GoM_cod_2014_update_20140822.pdf'>https://www.nefsc.noaa.gov/saw/cod/pdfs/GoM_cod_2014_update_20140822.pdf </a></li>
          </ol>
        </SectorDetailLayout>
    );
  }
}

export default EconomySectorPage;
