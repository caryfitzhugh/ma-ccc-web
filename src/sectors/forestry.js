import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/forestry.jpg';
import forestry_management_practices_img from '../images/sectors/forestry_management_practices.jpg';
import forestry_rising_temperatures_img from '../images/sectors/forestry_rising_temperatures.jpg';
import {searchURL} from '../search/utils';
import {Footnote} from '../utils/footnotes';
import Collection from '../layouts/collection';
import SearchLink from '../utils/search_link';

const sectorSearchURL = (props) => {
  let params = {facets: {sectors: ["ma::forestry"],
                         climate_changes: props.changes,
                         actions: props.actions},
                query: props.q}
  return searchURL(params);
}

class ForestrySectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Higlighted Resources",
      collection_name: "MA/forestry/highlighted_resources",
    };

    return (
      <SectorDetailLayout
        title="Forestry"
        image={sector_image}
        showcased_resources={showcased_resources}
        footnotes={[
          <span> Alerich. C.L. 2000. Forest Statistics for Massachusetts: 1985 and 1998. Research Bulletin NE-148. USDA Forest Service, Northeastern Research Station. </span>,
          <span> Campbell, S.M. 2000. Quantifying Public Benefits on Private Forestland in Massachusetts. Massachusetts Forest Stewardship Programs Task Force on Reforming Forest Taxation. </span>
        ]}

        sections={[
          {title: "Impacts",
           id: "impacts",
           content: <p>
           </p>,
           subsections: [
            {name: "Rising Temperatures",
             href: sectorSearchURL({q: "forest temperature", changes:["ma::rising temperatures::"]}),
             find_out_more: true,
             id:"impacts_rising_temps",
             content: <div>
                  <div className='section-img'>
                    <img src={forestry_rising_temperatures_img}/>
                    <div className='image-credit'>
                      Amara Dunn, NYSIPM, , CC BY-NC-SA 2.0
                    </div>
                  </div>
                <ul>
                  <li>Hardwoods may recede to higher elevations</li>
                  <li>Spruce-fir forests may disappear from Massachusetts as temperatures warm, while central, transitional, and southern hardwoods, like oak, may become more abundant</li>
                  <li>The composition and role of forest species including plants and animals, fungi, and bacteria will change as forests change</li>
                  <li>Changes in sugar maple sap flow and harvesting seasons could affect maple syrup production</li>
                  <li>Forest pests such as the hemlock woolly adelgid and southern pine beetle could cause widespread tree mortality and ecosystem impacts  as their range extends northward</li>
                </ul>
              </div>
            },
            { name: "Changes in Precipitation",
              href: sectorSearchURL({q: "forest precipitation", changes:["ma::changes in precipitation::"]}),
              find_out_more: true,
              id: 'impacts_changes_in_precipitation',
              content: <div>
                <ul>
                  <li>Changes in the water cycle could alter habitats of native species and increase the negative impacts from invasive species</li>
                  <li>More frequent droughts could exacerbate wildfire risks, especially when coupled with increases in overall biomass growth due to warmer temperatures</li>
                </ul>
             </div>
            },
            { name: "Extreme Weather",
              href: sectorSearchURL({q: "forest 'extreme weather'", changes:["ma::extreme weather::"]}),
             id: 'impacts_extreme_weather',
             find_out_more: true,
             content: <div>
                <ul>
                  <li>Forest-disturbance events like ice storms, localized or regional wind events like microbursts or hurricanes, and severe thunderstorms may increase in frequency and severity </li>
                  <li>Increased wind and ice damage could seriously harm forest health, especially where trees lack age or structural diversity </li>
                  <li>Gaps in forest cover—caused by storm damage or fragmentation—may open up space for invasive species </li>
                </ul>
             </div>
            },
            {name: "Sea Level Rise",
              href: sectorSearchURL({q: "forest 'sea level'" , changes:["ma::sea level rise::"]}),
              find_out_more: true,
             id: 'impacts_sea_level_rise',
             content: <div>
                <ul>
                  <li>Forests near the shore will be vulnerable to damage from expanding coastal storm surge as sea levels rise</li>
                  <li>Saltwater intrusion into groundwater may elevate risks for coastal forests, with significant tree mortality likely from salt poisoning</li>
                </ul>
             </div>
            }]
          },
          {title: "Actions",
           id: "actions",
           content: <p>
           </p>,
           subsections: [
            {name: "Planning",
              href: sectorSearchURL({q: "planning", actions:["ma::planning::"]}),
             id:"impacts_planning",
              find_out_more: true,
             content: <ul>
                <li>Complete a vulnerability assessment for forest resources</li>
                <li>Expand resilience-focused technical assistance and forest stewardship for private forest owners</li>
                <li>Incorporate information on forest climate impacts and resilient forest management strategies in town, open space, and hazard mitigation plans</li>
             </ul>
            },
            { name: "Management Practices",
              href: sectorSearchURL({q: 'management', actions:["ma::implementation action/direct action on target::management and behavior"]}),
              id: 'impacts_management',
              find_out_more: true,
              content: <div>
                  <div className='section-img'>
                    <img src={forestry_management_practices_img}/>
                    <div className='image-credit'>
                    </div>
                  </div>
                  <ul>
                    <li>Increase forest diversity (species, structure, age classes and habitats) and vigor via professional forest management</li>
                    <li>Encourage active forest management for renewable wood products and wildlife benefits and promote local wood products to keep working forest landscapes economically viable</li>
                    <li>Permanently conserve the most intact, productive and resilient forest ecosystems</li>
                    <li>Expand invasive species management with programs to reach private and public landowners</li>
                    <li>Plant a diversity of urban trees in downtown areas vulnerable to urban heat waves and the heat island affect</li>
                </ul>
              </div>
            },
            {name: "Technology",
              href: sectorSearchURL({q: 'management', actions:["ma::implementation action/direct action on target::technology"]}),
              find_out_more: true,
             id: 'impacts_technology',
             content: <ul>
                <li>Diversify urban forests via planting to increase carbon capture and resilience.</li>
                <li>Identify and promote drought and heat-adapted trees.</li>
             </ul>
            },
            { name: "Policies / Laws",
              href: sectorSearchURL({q: 'policy law regulation',
                                     actions:["ma::planning::policies/laws/regulations"]}),
              find_out_more: true,
              id: 'impacts_policy_law',
              content: <div>
                <ul>
                  <li>Consider policies that maintain healthy forests, including local zoning regulations </li>
                  <li>Consider policies to ensure sustainable management of renewable wood products on appropriate sites</li>
                  <li>Promote the buying of local forest products </li>
                </ul>
              </div>
            },
            { name: "Research / Monitoring",
              href: sectorSearchURL({q: "research monitoring",
                                     actions:["ma::outreach/education::research and monitoring"]}),
              id: 'impacts_research_monitoring',
              find_out_more: true,
              content: <ul>
                  <li>Expand adaptive research of forest management practices and their effectiveness in a changing climate</li>
                  <li>Support long-term ecological monitoring programs such as the DCR‘s Continuous Forest Inventory</li>
             </ul>
            },
            { name: "Funding",
              id:"funding",
              find_out_more: true,
              href: sectorSearchURL({q: "funding financing"}),
              subsections: [],
              content: <Collection show_images={false} collection_name='MA/funding/forestry' />
            }
            ]
          },
          {title: "Looking for help?",
            id: 'looking_for_help',
            content: <Collection show_images={false} collection_name='MA/looking_for_help/forestry' />,
            subsections: []
          }
          ]}
        >
            <p>Massachusetts is 62 percent forested <Footnote num='1'/>, and this critical natural resources offers shelter to plant and animal species and provides an estimated $4.6 billion in annual economic value from forest products, water filtration, natural flood control, and tourism. <Footnote num='2'/> Our forests also store and sequester carbon, and our urban street trees improve the livability of our cities by providing shade and flood control and reducing air pollution.</p>
            <p>With climate change causing major shifts in the tree species and the composition of forest habitats, potentially threatening some of the Commonwealth’s wildlife species, forest health is also likely to be at higher risk from droughts, invasive pests, storms and fires. </p>
            <p>This page provides information and data that demonstrates how by protecting forest resources and managing our working forests wisely, we can support their long-term resilience.</p>
        </SectorDetailLayout>
    );
  }
}

export default ForestrySectorPage;
