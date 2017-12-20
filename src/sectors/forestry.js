import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/forestry.jpg';
import SearchLink from '../utils/search_link';
import {Footnote} from '../utils/footnotes';

const ForestLink = (props) => {
  return <SearchLink params={{facets: {sectors: ["ma::forestry"], climate_changes: props.changes, actions: props.actions}, query: props.q}}>
      {props.children}
    </SearchLink>
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
        image_credit="MA Department of Conservation and Recreation"
        showcased_resources={showcased_resources}
        footnotes={[
          <span> Alerich. C.L. 2000. Forest Statistics for Massachusetts: 1985 and 1998. Research Bulletin NE-148. USDA Forest Service, Northeastern Research Station.     </span>,
          <span> MassGIS </span>,
          <span> Campbell, S.M. 2000. Quantifying Public Benefits on Private Forestland in Massachusetts. Massachusetts Forest Stewardship Programs Task Force on Reforming Forest Taxation. </span>,
        ]}
        sections={[
          {title: "Impacts",
           id: "impacts",
           content: <p>
            Some changes in forests as a result of shifting climate patterns may be slow while others may proceed quickly once critical thresholds have been crossed.
           </p>,
           subsections: [
            {name: <ForestLink changes={['ma::rising temperatures::']}>Rising Temperatures</ForestLink>,
             id:"impacts_rising_temps",
             content: <div>
                <p>Warmer temperatures are likely to alter the composition and role of forest species including plants and animals, fungi, and bacteria. They are also likely to cause gradual shifts in the distribution of different tree species.  Hardwoods are likely to recede to higher elevations and spruce-fir may disappear from Massachusetts. Southern forest types such as central, transitional, and southern hardwoods will likely increase in abundance. Changes in sap flow and harvesting seasons for sugar maples could affect maple syrup production.</p>
                <p>While forest pests are spread by humans, the range for many pests is widened by warming temperatures. Northward expansion of invasive insects that cause disease in particular tree species, such as the hemlock woolly adelgid and southern pine beetle, are likely. The response of other invasives, such as the emerald ash borer, the Asian longhorned beetle, and beech bark disease, is uncertain.</p>
              </div>
            },
            {name: <ForestLink changes={["ma::changes in precipitation::"]}>Changes in Precipitation</ForestLink>,
             id: 'impacts_changes_in_precipitation',
             content: <div>
               <p>Changes in the water cycle caused by wetter winters and springs could increase the negative impacts from invasive species. More frequent and pronounced droughts expected in the Commonwealth could exacerbate wildfire risks, especially when coupled with increases in overall growth rates from warmer temperatures.</p>
             </div>
            },
            {name: <ForestLink changes={["ma::extreme weather::"]}>Extreme Weather</ForestLink>,
             id: 'impacts_extreme_weather',
             content: <div>
               <p>Massachusetts is likely to experience a greater intensity and frequency of forest-disturbing weather events, including ice storms, localized or regional wind events such as microbursts or hurricanes, and severe thunderstorms. Forests will be especially vulnerable to wind and ice damage when they lack structural diversity from different stages of succession or forest growth.  Gaps in forest cover—whether caused by storm damage or other factors like fragmentation—will open up space for invasive species to move in and further compromise forest health.</p>
             </div>
            },
            {name: <ForestLink changes={["ma::sea level rise::"]}>Sea Level Rise</ForestLink>,
             id: 'impacts_sea_level_rise',
             content: <div>
               <p>As sea levels rise in Massachusetts and intensify the impacts of coastal storms and storm surge, forests near the shore may face greater risk of serious storm damage that can cause other cascading effects. Saltwater intrusion into groundwater will also elevate risks for coastal forest areas with significant tree mortality likely from salt poisoning.</p>
             </div>
            }]
          },
          {title: "Actions",
           id: "actions",
           content: <p>
           </p>,
           subsections: [
            {name: <ForestLink actions={["ma::planning::"]}>Planning</ForestLink>,
             id:"impacts_planning",
             content: <ul>
                <li>Complete a vulnerability assessment and develop a climate change adaptation plan that considers forest health and resilience.</li>
                <li>Expand technical assistance and forest stewardship planning and practice programs for private forest owners.</li>
                <li>Incorporate climate change, impacts on forests and strategies for keeping them healthy into town plans, open space plans, master plans and hazard mitigation plans.</li>
             </ul>
            },
            {name: <ForestLink q="management practices">Management Practices</ForestLink>,
             id: 'impacts_management',
             content: <ul>
                <li>Continue active forest management for renewable wood products and wildlife benefits, and establish forest reserves to mitigate and monitor impacts of human development.</li>
                <li>Increase forest diversity (species, structure, age classes and habitats) and vigor via professional forest management.</li>
                <li>Use permanent land conservation tools to protect the most intact, productive and resilient forest ecosystems.</li>
                <li>Expand the management of invasive species via a comprehensive strategy and a menu of programs to reach private and public owners.</li>
                <li>Increase the percentage of wood products produced locally to strengthen markets and keep working forest landscapes economically viable.</li>
                <li>Practice prudent fire management.</li>
                <li>Promote tree regeneration by controlling deer/moose impacts.</li>
                <li>Restore native tree species.</li>
                <li>Return the forest to full stocking to increase capacity to sequester carbon.</li>
             </ul>
            },
            {name: <ForestLink actions={["ma::implementation action/direct action on target::technology"]}>Technology</ForestLink>,
             id: 'impacts_technology',
             content: <ul>
                <li>Diversify urban forests via planting to increase carbon capture and resilience.</li>
                <li>Promote drought and heat-adapted trees.</li>
             </ul>
            },
            {name: <ForestLink actions={["ma::planning::policies/laws/regulations"]}>Policies / Laws</ForestLink>,
             id: 'impacts_policy_law',
             content: <ul>
               <li>Consider policies that maintain forests, including local zoning regulations.</li>
               <li>Support, via policies, sustainable management of renewable wood products on appropriate sites.</li>
               <li>Establish and support initiatives to promote the buying of local forest products.</li>
               <li>Encourage forest reserve management to allow natural processes to determine the long-term. structure, composition, function, and dynamics of the forest to the maximum extent possible.</li>
             </ul>
            },
            {name: <ForestLink q="research monitoring">Research/Monitoring</ForestLink>,
             id: 'impacts_research_monitoring',
             content: <ul>
               <li>Support long-term ecological monitoring programs such as the DCR‘s Continuous Forest Inventory.</li>
               <li>Expand adaptive research of forest management practices and their effectiveness in a changing climate.</li>
             </ul>
            },
            {name: <ForestLink actions={["ma::implementation action/direct action on target::financing"]}>Funding</ForestLink>,
             id: 'impacts_funding',
             content: <ul>
                <li><a href='http://masswoods.net/landowner-programs'> Landowner programs for forest conservation. </a></li>
                <li><a href='https://www.mass.gov/service-details/forest-stewardship-program'>    Forest Stewardship programs </a></li>
                <li><a href='https://www.mass.gov/service-details/urban-and-community-forestry'>  Urban Forestry </a></li>
             </ul>
            },
           ]
          },
          {title: "Looking for help?",
           id: 'looking_for_help',
           subsections: [],
           content: <ul>
             <li><SearchLink params={{query:'Massachusetts Division of Fisheries & Wildlife'}}>Massachusetts Division of Fisheries & Wildlife </SearchLink></li>
             <li><SearchLink params={{query:'Massachusetts Department of Conservation and Recreation'}}>Massachusetts Department of Conservation and Recreation</SearchLink></li>
             <li><SearchLink params={{query:'MassWoods'}}>MassWoods</SearchLink></li>
             <li><SearchLink params={{query:'Nature Conservancy'}}>The Nature Conservancy</SearchLink></li>
             <li><SearchLink params={{query:'USDA Forest Service Climate Change Resource Center'}}>USDA Forest Service Climate Change Resource Center</SearchLink></li>
           </ul>
          }
        ]}
        >
        <p>Massachusetts is 62 percent forested<Footnote num='1'/> and over 90 percent of that is upland forest<Footnote num='2'/>.  Upland forests support a variety of habitats and wide-ranging biological diversity. Forests also provide important filters along wetlands, rivers, and streams and stabilize soils and sediments, minimizing erosion. By providing shade to small streams, forests help moderate temperatures in aquatic habitats and provide shelter for wildlife in winter months. Forests play an important role in reducing greenhouse gas emissions because they take up and store vast amounts of carbon.</p>
        <p>Each acre of forest in Massachusetts Is estimated to provide $1,500 annually<Footnote num='3'/> in economic value from forest products, water filtration, flood control, and tourism. Across the state’s 3.1 million acres of forest, that’s a total of $4.6 billion annually. Forest harvesting directly supports 3,700 jobs for foresters, loggers, sawmill workers, and wood processing plant workers in Massachusetts.</p>
        <p>As we prepare for a changing climate, it is critically important that we protect forests and manage them with practices that promote their health and resilience. Warmer temperatures, more frequent extreme storms, intermittent droughts, and larger populations of forest pests that are expected in Massachusetts will create vulnerabilities for our forests in the decades ahead. Climate change may reduce forest health, alter species composition and forest structure, and affect many species of wildlife and ecosystem  services delivered by the forest such as flood protection.</p>
        <p>Massachusetts is globally unique in the combination of population and forest density – it has more people living among more trees than most places on Earth!  However, there are still many urban areas with few trees nearby. Increasing urban forest canopies from their current average of about 20% to 40% would decrease carbon emissions (by reducing energy needs in summer and winter and by sequestering more carbon), reduce stormwater, increase urban air quality, address heat island effects, and improve human health.</p>

        </SectorDetailLayout>
    );
  }
}

export default ForestrySectorPage;
