import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/recreation.jpg';
import {searchURL} from '../search/utils';
import {Footnote} from '../utils/footnotes';

const sectorSearchURL = (props) => {
  let params = {facets: {sectors: ["ma::recreation"],
                         climate_changes: props.changes,
                         actions: props.actions},
                query: props.q}
  return searchURL(params);
}

class RecreationSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
      collection_name: "MA/recreation/highlighted_resources"
    };

    return (
      <SectorDetailLayout
        title="Recreation"
        image={sector_image}
        image_credit="FEMA/Mike Moore"
        showcased_resources={showcased_resources}
        footnotes={[
            <span>United States Travel Industry Association, 2008</span>,
            <span>NOAA, 2014, Gulf of Maine Atlantic Cod: 2014 Assessment Update Report, <a href='https://www.nefsc.noaa.gov/saw/cod/pdfs/GoM_cod_2014_update_20140822.pdf'>https://www.nefsc.noaa.gov/saw/cod/pdfs/GoM_cod_2014_update_20140822.pdf</a></span>,
            <span>(Case, 2005). </span>,
            <span>National Oceanic and Atmospheric Administration, 2009. Scenario for 2035: Long-term Trends, Challenges and Uncertainties facing NOAA. A Working Document for NOAA Planning. </span>,
            <span>Scott, D., et al, 2007, Journal of Mitigation and Adaptation Strategies for Global Change, “Climate Change Vulnerability of the US Northeast Winter Recreation - Tourism Sector.” <a href='https://s3.amazonaws.com/academia.edu.documents/30812929/scott_et_al.pdf'>https://s3.amazonaws.com/academia.edu.documents/30812929/scott_et_al.pdf</a></span>,
            <span>Scott, D., et al, 2007. </span>,

        ]}
        sections={[
        { title: "Impacts",
          id: 'impacts',
          content: <div>
          </div>,
          subsections: [
            {name: "Rising Temperatures",
                href: sectorSearchURL({changes:["ma::rising temperatures::"]}),
              id: "impacts_rising_temperatures",
              content: <div>
                <p>The need to seek relief from hotter summer days and heat waves may increase popularity of some recreational activities, such as beach and waterfront activities, though decreased water quality may be an issue. Climate change is likely to result in a longer warm weather tourist season, but the associated increases in operation budgets (e.g., for cooling energy) will have to be sufficient to make the extended season economically viable. Warmer winter temperatures may limit or increase the cost of traditional outdoor activities such as skiing, snowmobiling, and ice fishing. While the fall foliage season attracts many visitors, rising temperatures will also put the colorful sugar maple at risk <Footnote num='3'/>.  This could also impact tourism during the early spring, when visitors come to sugar houses across Massachusetts and New England.</p>
                <p>Warmer ocean and river temperatures may cause threats to biodiversity and ecosystem-based economies such as fisheries, tourism, and recreation.  Cod stocks in the Gulf of Maine, already dangerously low, are especially vulnerable to rising ocean temperatures.</p>
              </div>
            },
            {name: "Changes in Precipitation",
                href: sectorSearchURL({changes:["ma::changes in precipitation::"]}),
              id:"impacts_changes_in_precipitation",
              content: <p>
                The tourist industry will potentially face a decline in water availability during the drier summer months expected in future years. Many hotels have already adopted conservation measures to reduce water use and associated costs. As winter temperatures rise, the season for winter recreation may get shorter and more volatile. The average snowmobile season in Western Massachusetts is projected to shorten by 30-40% by 2040, and much as 90% shorter by the end of the century<Footnote num='5'/>. Similarly, the next two decades are projected to see a 15% decrease in the length of the average ski season and a 25% increase in mountains’ snowmaking requirements, which means higher costs for lodges and, ultimately, more expensive lift-tickets for skiers. <Footnote num='6'/>
              </p>
            },
            { name: "Extreme Weather",
              href: sectorSearchURL({changes:["ma::extreme weather::"]}),
              id: 'impacts_extreme_weather',
              content: <p>
              Changes in global ocean currents may contribute to stronger hurricanes, creating elevated risks for storm damage along Massachusetts coastal areas, especially on Cape Cod. Real estate values in low-lying areas may drop as the risk of flooding and associated insurance premiums increase, with corresponding impacts on tourist areas and businesses. Floodwaters and storm-water runoff, especially in concert with rising ocean and river temperatures can lead to more frequent toxic algae blooms, a potential public health hazard and an impediment to beach-related recreation.
              </p>
            },
            {name: "Sea Level Rise",
              href: sectorSearchURL({changes:["ma::sea level rise::"]}),
              id: 'impacts_sea_level_rise',
              content: <p>
                Oceanfront and riverbank resorts may face inundation from rising seas and flooding. Access to coastal attractions, such as beaches and wetlands, may become more limited. In some cases and depending on the future extent of sea level rise, those attractions may become permanently submerged.
              </p>
            }
          ]
        },
        { title: "Actions",
          id: 'actions',
          content: <div>
          </div>,
          subsections: [
            {name: "Planning",
              href: sectorSearchURL({actions:["ma::planning::"]}),
              id: "actions_planning",
              content: <ul>
                <li>Identify highly vulnerable coastal attractions and review options to mitigate the effects of sea-level rise and increased storm activity, including both grey infrastructure (e.g., seawalls, dams, etc.) and green infrastructure (e.g., natural oyster reefs, restored wetlands and dunes, etc.).</li>
                <li>Identify alternative tourist activities to draw visitors to your community. For example, where snowmobiling might no longer be possible due to a lack of snow on trails, winter hiking and trail running may become possible alternative sources of revenue.</li>
                <li>Review flood control and storm-water drainage systems at tourist and recreational sites to identify weaknesses that could be improved, as well as potential pollution point-sources that could be inundated.</li>
              </ul>
            },
            {name: "Management Practices",
             href: sectorSearchURL({actions:["ma::implementation action/direct action on target::management and behavior"]}),
              id: "actions_management_practices",
              content: <ul>
                <li>Encourage businesses to review and adopt more sustainable practices, especially with respect to water resources.</li>
                <li>For inland, warm-weather recreational activities (especially near hiking trails, but at any public park), post information about the dangers of heat-stroke and add public water stations or fountains where feasible.</li>
              </ul>
            },
            { name: "Technology",
              href: sectorSearchURL({actions:["ma::implementation action/direct action on target::technology"]}),
              id: "actions_tech",
              content: <ul>
                <li>Encourage businesses, especially hotels and restaurants, to look into more efficient electrical appliances to conserve electricity, as well as more sustainable water practices (e.g., low-flow toilets), grey-water recycling, and other forms of water conservation.</li>
                <li>Review options and strategies to improve the structural stability of low-lying coastal attractions, such as beach nourishment, salt marsh and wetland restoration, surf-dampening, and eelgrass and dune grass cultivation.</li>
                <li>Prevent toxic algae blooms at public beaches by improving storm-water run-off systems and by cultivating eelgrass, oysters, and other tidal species that absorb and mitigate nutrient pollution.</li>
              </ul>
             },
            {  name: "Policies / Laws",
               href: sectorSearchURL({actions:["ma::planning::policies/laws/regulations"]}),
               id: "actions_policies_laws",
               content: <ul>
                <li>Consider enacting water restrictions or water surcharges during the summer and under drought conditions to avoid water shortages and encourage adaptation and sustainability.</li>
                <li>Consider enacting ordinances about commercial or residential fertilization to prevent excess nutrient pollution from run-off.</li>
               </ul>
             }
          ]},
          {title: "Looking for Help?",
            id: "looking_for_help",
            subsections: [],
            content: <ul>
              <li><a href='http://www.mass.gov/eea'>Massachusetts Energy and Environmental Affairs </a></li>
            </ul>
          }
        ]}
        >

          <p> Massachusetts is home to 20 national parks and historic sites; over 450,000 acres of state-owned forests, parks, greenways, historic sites, lakes, ponds, and reservoirs; and innumerable local parks and recreational venues, scenic seashores, harbor islands, riverfront areas, convention centers, and resorts. </p>
          <p> Tourism is a significant economic driver that generated over $15 billion in direct spending in Massachusetts by state residents and out of state visitors in 2007 <Footnote num='1'/>.  The Commonwealth is a destination for domestic and international travelers throughout the year. </p>
          <p> It is essential to consider and plan for a range of climate impacts on this important economic sector. Relatively modest changes in temperature, for example, are predicted to have major impacts on already stressed coastal ecosystems and fisheries like cod. This could cause sharp declines in the recreational fishing industry in the region<Footnote num='2'/>, and reduce revenues at the thousands of local restaurants and hotels that thrive on both Massachusetts’ seafood production and its maritime culture.</p>
          <p> As winter temperatures continue to rise and snow cover declines, opportunities for winter recreation such as skiing and snowmobiling will decrease. Less ice cover on lakes for shorter periods of time will also reduce the number of days available for ice fishing and increase the risk of accidents.</p>
          <p> A shorter winter could create some new opportunities for increasing the warm-weather tourism industry in Massachusetts. There is no guarantee of warm and sunny weather, however. During springtime, climate change is likely to produce an increase in unpredictable and heavy storms. When combined with rising sea-levels, strong coastal storms could elevate the risks of damage and permanent destruction for many coastal recreational areas, including beaches, harbors, and intertidal zones. Hotter summers could add to water and electricity costs, especially for hotels, resorts, and other businesses tied to the tourism industry.</p>


        </SectorDetailLayout>
    );
  }
}

export default RecreationSectorPage;
