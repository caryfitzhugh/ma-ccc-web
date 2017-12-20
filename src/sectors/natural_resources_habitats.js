import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import natural_resources_image from '../images/sectors/natural_resources.jpg';
import SearchLink from '../utils/search_link';

const NRSearchLink = (props) => {
  return <SearchLink params={{facets: {sectors: ["ma::natural resources / habitats"], climate_changes: props.changes, actions: props.actions}, query: props.q}}>
      {props.children}
    </SearchLink>

}

class NaturalResourcesHabitatsSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Highlighted Resources",
      collection_name: "MA/natural_resources/highlighted_resources"
    };

    return (
      <SectorDetailLayout
        title="Natural Resources"
        sector_name='Natural Resources/Habitats'
        image={natural_resources_image}
        image_credit="U.S. Fish and Wildlife Service"
        showcased_resources={showcased_resources}
        sections={[
          {title: "Impacts",
           id: "impacts",
           content: <div>
           </div>,
              subsections: [
                {name: <NRSearchLink changes={["ma::rising temperatures::"]}>Rising Temperatures</NRSearchLink>,
                 id: 'impacts_rising_temperatures',
                 content: <div>
                    <p>Warmer weather and changes in the lengths of seasons could alter the composition of various natural habitats, reducing habitat quality for native species and allowing invasive species and pests to gain entry. Warming and other changes in the seasons may also change the timing of natural processes such as migration, reproduction, and flowering, potentially disrupting the symbiotic connection between animals and their food sources and between plants and pollinators.</p>
                    <p>Rising temperatures will warm Massachusetts fresh and saltwater areas, increasing habitat for some fish species, while degrading it for others. Certain populations of cold water fish and shellfish like cod stocks may experience sharp declines, and warmer fish species may migrate into the area. Algal blooms may become more frequent as lakes and ponds get warmer, and harmful algae types like cyanobacteria may become more common, creating risks for swimmers and water supplies.</p>
                  </div>
                },
              {name: <NRSearchLink changes={["ma::changes in precipitation::"]}>Changes in Precipitation</NRSearchLink>,
               id: "impacts_changes_in_precipitation",
               content: <div>
                 <p>Wetter winters and springs expected in Massachusetts and drier summers may stress important habitats and species. Changes in soil moisture, for example, could alter species composition. Increasingly large precipitation events may cause flood flows and erosion in streams and rivers, with impacts on aquatic and riparian species and habitats. Flooding of riparian areas and wetlands could export dissolved organic matter and soils, and carry more pollutants to downstream to lakes and ponds and coastal waters. </p>
               </div>,
              },
              {name: <NRSearchLink changes={["ma::extreme weather::"]}>Extreme Weather</NRSearchLink>,
               id: "impacts_extreme_weather",
               content: <div>
                <p>An increased frequency and intensity of extreme storms will have wide ranging effects on natural resources and habitats in Massachusetts. These storms could cause ecosystem scale disturbances (like tree blow downs) that often allow invasive species to move into these disturbed ecosystems. Extreme weather is also likely to cause more flooding and erosion that will affect many habitats.  Stronger downpours that increase runoff could carry pathogens and pollutants from farm fields, roads, and other impervious surfaces into surface waters, degrading water quality for aquatic species and drinking water supplies. </p>
               </div>
              },
              {name: <NRSearchLink changes={["ma::sea level rise::"]}>Sea Level Rise</NRSearchLink>,
               id: "impacts_sea_level_rise",
               content: <div>
                  <p>Rising sea levels in the Commonwealth are likely to cause hydrologic changes to ecosystems like salt marshes, which may alter their plant species composition and overall health, size, and location. Some marshes may deteriorate completely or be inundated by rising seas. Where there are places for existing salt marshes to migrate inland, they may survive, but many may not. At the same time, rising seas may cause breaches in barrier islands and the creation of new inlets, prompting new marshes to form. Many other kinds of habitats – from coastal dunes to estuarine inlets - may be affected by increased erosion from the combined effects of sea level rise and coastal storm surges. </p>
                  <p>Permanent seawater inundation will also permanently alter freshwater ecosystems like wetlands.</p>
               </div>
              },
            ]
          },
          {title: "Actions",
           id: "actions",
           subsections: [
            {name: <NRSearchLink actions={["ma::planning::"]}>Planning</NRSearchLink>,
              id: 'actions_planning',
              content: <ul>
                 <li>Incorporate climate change considerations in wildlife management plans, open space plans, and other plans that affect management of wildlife and natural resources.</li>
                 <li>Include goals for protecting and conserving natural areas that provide climate benefits in local plans such as town plans, open space plans, and master plans. These areas include floodplains, wetlands, riparian forests, and salt marshes.</li>
                 <li>Identify and prioritize protection of migration corridors between key areas of habitat (for example, between two wetlands areas, or between two large blocks of forest) to create a connected landscape resilient for climate change. </li>
              </ul>
            },
            {name: <NRSearchLink q="management practices">Management Practices</NRSearchLink>,
             id: "actions_management_practices",
             content: <ul>
                <li>Conserve and protect inland natural areas like wetlands and riparian and upland forests for species migration, storm and flooding protection, connectivity, ecosystem resilience and carbon storage.</li>
                <li>Restore tidally-driven rivers, estuarine, and marine habitats like salt marshes to enhance the resilience of coastal ecosystems, and buffer coastal towns against storm surge.</li>
                <li>Create wildlife passage structures to improve habitat connectivity, for example during projects to build or replace road-stream crossings, and consider removal of obsolete dams or tide gates.</li>
                <li>Prevent the introduction of invasive species by controlling invasive exotic plants.</li>
                <li>Identify and prioritize conservation of floodplains upstream of developed areas that are highly vulnerable to flooding.</li>
                <li>Restore natural buffers using native vegetation buffers and plantings.</li>
              </ul>
            },
            {name: <NRSearchLink actions={["ma::implementation action/direct action on target::technology"]}>Technology</NRSearchLink>,
             id: "actions_technology",
             content: <ul>
                <li>Encourage application of bioengineering techniques (for example coir rolls or natural fiber blankets) for bank stabilization, erosion control, and stream and shoreline stability.</li>
                <li>Identify and implement strategies for early detection, rapid response, and prevention of invasive exotic plants and animals.</li>
              </ul>
            },
            {name: <NRSearchLink actions={["ma::planning::policies/laws/regulations"]}>Policies / Laws</NRSearchLink>,
             id: "actions_policies",
             content: <ul>
                <li>Create or amend local wetland bylaws to allow for beach migration and shoreline transitional areas.</li>
                <li>Consider local land use policies and incentives that help to avoid the loss of current or future floodplain areas for flood storage, and that encourage development of floodable parks and open spaces.</li>
                <li>Enhance buffer zone protection and incorporate predictions for wetland resource and ecological migration resulting from climate changes.</li>
                <li>Prioritize communities of plants and animals especially at risk from changing climate patters for protection, and protect rare species.</li>
                <li>Update Federal Emergency Management Agency (FEMA) floodplain maps to reflect current conditions and predictions of future conditions.</li>
              </ul>
            },
            {name: <NRSearchLink q="research monitoring">Research/Monitoring</NRSearchLink>,
             id: 'actions_research',
             content: <ul>
               <li>Monitor different types of habitats. Establish long-term research and monitoring sites in forests, wetlands, grasslands, montane, and coastal ecosystems to understand how climate change will impact the diversity of natural resources.</li>
               <li>Survey wetlands and other aquatic resources across the state to identify vulnerable reaches.</li>
               <li>Conduct research and monitoring to understand impacts of low flows and higher temperatures on potential changes to nutrient, sediment, and pathogen pollution.</li>
               <li>Identify remaining critical cold-water fish habitat areas and priority opportunities to reconnect these habitats by removing in-stream barriers and re-establishing instream flows.</li>
               <li>Identify river reaches vulnerable to flooding and erosion, and opportunities to establish and protect and restore belt-width-based river corridors and floodplains to reduce their vulnerability.</li>
               <li>Monitor and deploy early detection systems to identify the entrance of new forest pest species, invasive plants, and other nuisance species.</li>
              </ul>
            },
            {name: <NRSearchLink actions={["ma::implementation action/direct action on target::financing"]}>Funding</NRSearchLink>,
             id: 'actions_funding',
             content: <ul>
               <li>Municipal Vulnerability Preparedness Program at the MA Executive Office of Energy Environmental Affairs (EEA): <a href='https://www.mass.gov/municipal-vulnerability-preparedness-program'>https://www.mass.gov/municipal-vulnerability-preparedness-program</a></li>
               <li>Coastal Resiliency Grant Program at the Mass Office of Coastal Zone Management: <a href='http://www.mass.gov/eea/agencies/czm/program-areas/stormsmart-coasts/grants/'>http://www.mass.gov/eea/agencies/czm/program-areas/stormsmart-coasts/grants/</a></li>
               <li>Community Forest Stewardship Grants: <a href='https://www.mass.gov/service-details/community-forest-stewardship-grants'>https://www.mass.gov/service-details/community-forest-stewardship-grants</a></li>
               <li>Urban and Community Forest Challenge Grants: <a href='https://www.mass.gov/guides/urban-and-community-forestry-challenge-grants'>https://www.mass.gov/guides/urban-and-community-forestry-challenge-grants</a></li>
               <li>Flood Hazard Mitigation Program grants at the Massachusetts Emergency Management Agency, i.e. for buyouts on floodplains: <a href='http://www.mass.gov/eopss/agencies/mema/resources/grants/hmgp/'>http://www.mass.gov/eopss/agencies/mema/resources/grants/hmgp/</a></li>
               <li>EEAs Land and Recreation grants and loans: <a href='https://www.mass.gov/land-and-recreation-grants-loans'>https://www.mass.gov/land-and-recreation-grants-loans</a></li>
               <li>Mass Wildlife’s Habitat Management Grant Program: <a href='https://www.mass.gov/service-details/masswildlife-habitat-management-grant-program'>https://www.mass.gov/service-details/masswildlife-habitat-management-grant-program</a></li>
             </ul>
            }
           ]
          },
          {title: "Looking for help?",
           id:"look4help",
           subsections: [],
           content: <ul>
              <li><a href='https://www.mass.gov/orgs/department-of-fish-and-game'>Massachusetts Department of Fish and Game</a></li>
              <li><a href='http://www.mass.gov/eea/agencies/czm/'>Massachusetts Office of Coastal Zone Management, including their Natural Estuary Programs in Massachusetts and Buzzards Bay </a></li>
              <li><a href='http://www.neafwa.org/'>Northeast Association of Fish and Wildlife Agencies </a></li>
          </ul>
          }]}
        datagrapher_file='Temp/state/maxt/ANN/MA/'>

          <p> The diverse natural resources and habitats across the Commonwealth—from hardwood forests to coastal salt marches, valley floodplains to freshwater trout streams—are an essential part of what makes our state such a great place to live. They also are critical assets in our efforts to combat and prepare for climate change.</p>
          <p> Forests, wetlands, and other naturally vegetated landscapes are estimated to sequester approximately 10 percent of the Commonwealth’s carbon emissions. They also provide a wide array of ecosystem services for our communities, including buffering developed areas against flood damage, providing shade and cooling during very hot days, and supporting diverse species of wildlife. </p>
          <p> These ecosystems and the species they support will experience many impacts from a changing climate. Some of the impacts may include shrinkage and loss of critical habitats, shifts in habitat range for native species, alterations to the timing of natural processes like migration, reproduction, and flowering; declines in the diversity and abundance of wildlife populations; and increased populations of invasive species, pests, and weeds. </p>
          <p> By protecting these ecosystems and managing them wisely, we can increase the chances that they will remain resilient as the climate changes. Healthy intact forests, for example, will be much better able to withstand stresses ranging from extreme storms to new forest pests. If we support the long-term health and resilience of the Commonwealth’s ecosystems, we will be helping ourselves, too. Protecting natural areas is one of the least costly and most effective approaches to preparing for climate impacts like riverine flooding and coastal storm surge.</p>

        </SectorDetailLayout>
    );
  }
}

export default NaturalResourcesHabitatsSectorPage;
