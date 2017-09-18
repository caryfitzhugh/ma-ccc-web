import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/recreation.jpg';
import SearchLink from '../utils/search_link';
import {Footnote, Footnotes} from '../utils/footnotes';

const ActionLink = (props) => {
  return <li>
    <SearchLink params={{facets:{sectors: ["ma::recreation"]}, query: props.q}}>
      {props.children}
    </SearchLink>
  </li>
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
        sector_name="recreation"
        image={sector_image}
        image_credit="FEMA/Mike Moore"
        showcased_resources={showcased_resources}
        footnotes={[
            <span>United States Travel Industry Association, 2008</span>,
            <span>National Oceanic and Atmospheric Administration, 2009. Scenario for 2035: Long-term Trends, Challenges and Uncertainties facing NOAA. A Working Document for NOAA Planning. </span>,
            <span>NOAA, 2014, Gulf of Maine Atlantic Cod: 2014 Assessment Update Report, <a href='https://www.nefsc.noaa.gov/saw/cod/pdfs/GoM_cod_2014_update_20140822.pdf'>https://www.nefsc.noaa.gov/saw/cod/pdfs/GoM_cod_2014_update_20140822.pdf</a></span>,
            <span>Scott, D., et al, 2007, Journal of Mitigation and Adaptation Strategies for Global Change, “Climate Change Vulnerability of the US Northeast Winter Recreation - Tourism Sector.” <a href='https://s3.amazonaws.com/academia.edu.documents/30812929/scott_et_al.pdf'>https://s3.amazonaws.com/academia.edu.documents/30812929/scott_et_al.pdf</a></span>,
            <span>Scott, D., et al, 2007. </span>,
            <span>  (Case, 2005). </span>

        ]}
        sections={[
        { title: "Impacts",
          id: 'impacts',
          content: <div>
          </div>,
          subsections: [
            { name: "Rising Temperatures",
              id: "impacts_rising_temperatures",
              content: <p>
                The need to seek relief from heat may increase popularity of recreational activities, such as beach and waterfront activities, though decreased water quality as temperature rises may be an issue. Climate change may result in a longer warm weather tourist season, but the associated increases in operation budgets will have to be sufficient to make the extended season economically viable. With a longer tourism season, employers may need to shift from their traditional seasonal labor pool comprising students and migratory workers to more permanent employees. Warmer temperatures may limit or increase the cost of traditional outdoor winter activities such as skiing, snowmobiling, and ice fishing. While the fall foliage season attracts many visitors, rising temperatures will also put the colorful sugar maple at risk <Footnote num='6'/>.  This may also impact tourism during the sap season and visits to sugar houses across Massachusetts and New England.
              </p>
            },
            { name: "Changes in Precipitation",
              id:"impacts_changes_in_precipitation",
              content: <p>
                The tourist industry will potentially face a decline in water availability. Many hotels have already adopted conservation measures to reduce water use and associated costs.
              </p>
            },
            { name: "Extreme Weather",
              id: 'impacts_extreme_weather',
              content: <p>
                Changes in global ocean currents may contribute to stronger hurricanes, putting additional pressure on Massachusetts coastal areas, especially Cape Cod. Real estate values in low-lying areas may drop as the risk of flooding and associated insurance premiums increase. Insurance firms will likely seek higher premiums. Floodwaters and storm-water runoff, especially in concert with rising ocean and river temperatures can lead to more frequent toxic algae blooms, a potential public health hazard and an impediment to beach-related recreation.
              </p>
            },
            { name: "Sea Level Rise",
              id: 'impacts_sea_level_rise',
              content: <p>
                Oceanfront and riverbank resorts may face inundation from rising seas and flooding. Access to coastal attractions, such as beaches and wetlands maybe limited or, in some cases, those attractions may become permanently submerged.
              </p>
            }
          ]
        },
        { title: "Actions",
          id: 'actions',
          content: <div>
          </div>,
          subsections: [
            { name: "Planning",
              id: "actions_planning",
              content: <ul>
                <ActionLink q='recreation planning sea level rise'>Identify highly vulnerable coastal attractions and review options to mitigate the effects of sea-level rise and increased storm activity including both grey infrastructure (e.g. seawalls dams etc.) and green infrastructure (e.g. natural oyster reefs restored wetlands and dunes etc.).</ActionLink>
                <ActionLink q='recreation planning'>Identify alternative tourist activities to draw visitors to your community. For example where snowmobiling might no longer be possible due to a lack of snow on trails all-terrain vehicles (ATVs) may become a possible alternative source of revenue.</ActionLink>
                <ActionLink q='recreation planning flooding'>Review flood control and storm-water drainage systems to identify weaknesses that could be improved as well as potential pollution point-sources that could be inundated.</ActionLink>
              </ul>
            },
            { name: "Management Practices",
              id: "actions_management_practices",
              content: <ul>
                <ActionLink q='recreation management practices water conservation'>Encourage businesses to review and adopt more sustainable practices especially with respect to water resources.</ActionLink>
                <ActionLink q='recreation management practices high heat'>For inland warm-weather recreational activities (especially near hiking trails but any public park) post information about the dangers of heat-stroke and add public water fountains.</ActionLink>
              </ul>
            },
            { name: "Technology",
              id: "actions_tech",
              content: <ul>
                <ActionLink q='recreation technology energy efficiency'>Encourage businesses especially hotels and restaurants to look into more efficient electrical appliances to conserve electricity as well as more sustainable water practices (e.g. low-flow toilets) grey-water recycling and other forms of water conservation.</ActionLink>
                <ActionLink q='recreation technology coastal conservation'>Review options and strategies to improve the structural stability of low-lying coastal attractions such as beach nourishment wetland restoration surf-dampening and eelgrass cultivation.</ActionLink>
                <ActionLink q='recreation technology phosphate reduction'>Prevent toxic algae blooms at public beaches by improving storm-water run-off systems and by cultivating eelgrass oysters and other tidal species that absorb and mitigate nutrient pollution.</ActionLink>
              </ul>
             },
             {  name: "Policies/Laws",
               id: "actions_policies_laws",
               content: <ul>
                <ActionLink q='recreation regulation water conservation'>Consider enacting water restrictions or water surcharges during the summer and under drought conditions to avoid water shortages and encourage adaptation and sustainability.</ActionLink>
                <ActionLink q='recreation regulation nutrient loading'>Consider enacting ordinances about commercial or residential fertilization to prevent excess nutrient pollution from run-off.</ActionLink>
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
          <p>
            Massachusetts is home to 20 national parks and historic sites; over 450,000 acres of state-owned forests, parks, greenways, historic sites, lakes, ponds, and reservoirs; and innumerable local parks and recreational venues, scenic seashores, harbor islands, riverfront areas, convention centers and resorts. Tourism is a significant economic driver that generated over $15 billion in direct spending in Massachusetts in 2007 <Footnote num='1'/>. Massachusetts residents account for one-third of the visits calculated in tourism industry reports, while travelers from out-of-state offer a larger overall contribution to the state‘s economic health, visiting longer and spending more. The Commonwealth is a destination for domestic and international travelers throughout the year.
          </p>
          <p>
            In general, relatively modest changes in temperature are predicted to have major impacts on already stressed coastal ecosystems, thus threatening biodiversity and ecosystem-based economies such as fisheries, tourism, and recreation<Footnote num='2'/>.  Cod stocks in the Gulf of Maine, already dangerously low, are vulnerable to rising ocean temperatures, negatively impacting the recreational fishing industry in the region <Footnote num='3'/>, as well as the thousands of local restaurants and hotels that thrive on both Massachusetts’ seafood production and its maritime culture.
          </p>
          <p>
            As winter temperatures continue to rise and snow cover declines, opportunities for winter recreation such as skiing and snowmobiling will decrease. The average snowmobile season in Western Massachusetts is projected to shorten by 30-40% by 2040, and much as 90% shorter by the end of the century <Footnote num='4'/>. Similarly, the next two decades are projected to see a 15% decrease in the length of the average ski season and a 25% increase in mountains’ snowmaking requirements, which means higher costs for lodges and, ultimately, more expensive lift-tickets for skiers <Footnote num='5'/>. Less ice cover on lakes reduces the number of days available for ice fishing and increases the risk of accidents.
          </p>
          <p>
            While a shorter winter could increase the warm-weather tourism industry in Massachusetts, there is no guarantee of warm and sunny weather. Instead, climate change is likely to produce an increase in unpredictable and heavy rainstorms in the spring, followed by intense heat waves and drought conditions in the height of summer. This will lead to increased water and electricity costs for all of us, but particularly for hotels, resorts, and other businesses tied to the tourism industry. More frequent and more intense storms could, combined with rising sea-levels, could reduce access to, damage, or even permanently flood or destroy Massachusetts’ many coastal recreational areas, including beaches, harbors, and intertidal zones.
          </p>
        </SectorDetailLayout>
    );
  }
}

export default RecreationSectorPage;
