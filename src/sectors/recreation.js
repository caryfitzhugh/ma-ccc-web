import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/recreation.jpg';

import recreation_rising_temperatures_img from '../images/sectors/recreation_rising_temperatures.jpg';
import recreation_technology_img from '../images/sectors/recreation_technology.jpg';
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
        image_credit="MA Office of Travel and Tourism, CC BY-ND 2.0"
        showcased_resources={showcased_resources}
        footnotes={[
            <span>(Case, 2005). </span>,
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
                  <div className='section-img'>
                    <img src={recreation_rising_temperatures_img}/>
                    <div className='image-credit'>
                      MA Office of Travel and Tourism, CC BY-ND 2.0
                    </div>
                  </div>
                  <ul>
                    <li>The season for skiing, snowmobiling, and ice fishing may shorten and winter resorts could face higher snow making costs</li>
                    <li>Hotter summer days may increase popularity of beaches, pools and waterfront activities</li>
                    <li>The season for summer tourism may lengthen, but increasing demand for cooling energy in buildings could increase costs for hotels and resorts</li>
                    <li>Rising temperatures may dampen fall foliage colors and change the timing of the season</li>
                    <li>Rising temperatures may put the colorful sugar maple and maple sugaring industry at risk in Massachusetts<Footnote num='1'/></li>
                    <li>Rising ocean and river temperatures may affect commercial and sport fishing and related tourism</li>
                  </ul>

                  <h6><a href={sectorSearchURL({changes:["ma::rising temperatures::"]})}>Find more information</a></h6>
              </div>
            },
            {name: "Changes in Precipitation",
                href: sectorSearchURL({changes:["ma::changes in precipitation::"]}),
              id:"impacts_changes_in_precipitation",
              content: <div>
                <ul>
                  <li>Drier summer months may affect water availability and raise water bills for hotels and resorts</li>
                  <li>As more winter precipitation falls as rain, the season for winter recreation may shorten and become more volatile</li>
                  <li>Heavier rains could cause more nutrients to be washed into lakes, ponds and bays, potentially triggering toxic algae blooms that necessitate beach closures</li>
                  <li>Heavier rains may cause leaf blow-down, further damaging fall foliage</li>
                </ul>
                <h6><a href={sectorSearchURL({changes:["ma::changes in precipitation::"]})}>Find more information</a></h6>
              </div>
            },
            { name: "Extreme Weather",
              href: sectorSearchURL({changes:["ma::extreme weather::"]}),
              id: 'impacts_extreme_weather',
              content: <div>
                <ul>
                  <li>Stronger severe storms such as hurricanes may put coastal tourist areas like Cape Cod at greater risk of storm damage</li>
                  <li>Increased coastal erosion may affect beaches and waterfront properties</li>
                  <li>Real estate values in low-lying coastal areas may drop as the risk of storm damage and associated insurance premiums increase</li>
                </ul>
                <h6><a href={sectorSearchURL({changes:["ma::changes in precipitation::"]})}>Find more information</a></h6>
              </div>
            },
            {name: "Sea Level Rise",
              href: sectorSearchURL({changes:["ma::sea level rise::"]}),
              id: 'impacts_sea_level_rise',
              content: <div>
                <ul>
                  <li>Oceanfront resorts, restaurants and businesses may face increased risks of coastal flooding</li>
                  <li>Access to coastal attractions, such as beaches and wetlands, may become more limited</li>
                  <li>Over time rising seas may necessitate expensive relocation efforts</li>
                </ul>
                <h6><a href={sectorSearchURL({changes:["ma::sea level rise::"]})}>Find more information</a></h6>
              </div>
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
              content: <div>
                <ul>
                  <li>Identify vulnerable coastal attractions and consider relocating them or protecting them from flood damage with grey infrastructure (seawalls and dams) or green infrastructure (restored wetlands and dunes)</li>
                  <li>Identify alternative tourist activities to draw visitors to communities that are dependent on winter recreation</li>
                  <li>Improve flood control and stormwater drainage systems at tourist and recreation sites</li>
                </ul>
                  <h6><a href={sectorSearchURL({actions:["ma::planning::"]})}>Find more information</a></h6>
              </div>
            },
            {name: "Management Practices",
             href: sectorSearchURL({actions:["ma::implementation action/direct action on target::management and behavior"]}),
              id: "actions_management_practices",
              content: <div>
                <ul>
                    <li>Promote energy and water conservation among tourist businesses</li>
                    <li>Post information about the dangers of heat-stroke at parks and other outdoor sites</li>
                    <li>Expand public water stations or fountains, particularly in urban parks and on bike trails</li>
                </ul>
                <h6><a href={sectorSearchURL({actions:["ma::implementation action/direct action on target::management and behavior"]})}>Find more information</a></h6>
              </div>
            },
            { name: "Technology",
              href: sectorSearchURL({actions:["ma::implementation action/direct action on target::technology"]}),
              id: "actions_tech",
              content: <div>
                  <div className='section-img'>
                    <img src={recreation_technology_img}/>
                  </div>
                <ul>
                  <li>Encourage resorts, hotels and restaurants to conserve energy and increase energy efficiency </li>
                  <li>Encourage the hospitality sector to conserve water with low-flow toilets and grey-water systems </li>
                  <li>Use nature-based approaches to reduce erosion and stabilize low-lying coastal facilities, such as beach nourishment, salt marsh and wetland restoration, surf-dampening, and dune grass cultivation </li>
                  <li>Prevent toxic algae blooms at public beaches by improving stormwater run-off systems and by cultivating eelgrass, oysters, and other tidal species that absorb nutrient pollution</li>
                </ul>
                <h6><a href={sectorSearchURL({actions:["ma::implementation action/direct action on target::technology"]})}>Find more information</a></h6>
              </div>
             },
            {  name: "Policies / Laws",
               href: sectorSearchURL({actions:["ma::planning::policies/laws/regulations"]}),
               id: "actions_policies_laws",
               content: <div>
                 <ul>
                  <li>Consider using water restrictions or water surcharges during droughts to avoid shortages and encourage sustainable water use</li>
                  <li>Consider enacting local ordinances about lawn and plant fertilization to prevent excess nutrient pollution</li>
                </ul>
                <h6><a href={sectorSearchURL({actions:["ma::planning::policies/laws/regulations"]})}>Find more information</a></h6>
               </div>
             }
          ]},
          {title: "Looking for Help?",
            id: "looking_for_help",
            subsections: [],
            content: <ul>
              <li><a href='http://www.mass.gov/eea'>Massachusetts Energy and Environmental Affairs </a></li>
              <li><a href='https://www.mass.gov/topics/parks-recreation'>Massachusetts Parks and Recreation</a></li>
            </ul>
          }
        ]}
        >
          <p>Massachusetts is home to many national and state parks and forests, mountain resorts, and beaches that are magnets for all kinds of recreation. Visits to these areas drive a vibrant and prosperous tourism sector.</p>
          <p>In June of 2017 Governor Charlie Baker announced additional funding commitments to increase the budget of the Recreational Trails Program (RTP) by 60%, from $1.1 million to $1.8 million. Since 2015, under the Baker-Polito Administration, approximately 150 miles of new trail have been designed, planned, funded, repaired and completed.</p>
          <p>Recreation and tourism will be deeply affected by a changing climate.  Massachusetts is expected to see a shortening skiing and snowmobiling season, severe storms that could put coastal resorts at risk, declining cold-water sport fisheries and other climate impacts.</p>
        </SectorDetailLayout>
    );
  }
}

export default RecreationSectorPage;
