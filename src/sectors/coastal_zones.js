import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import coastal_zones_image from '../images/sectors/coastal_zones.jpg';
import {Footnote} from '../utils/footnotes';
import {searchURL} from '../search/utils';

const sectorSearchURL = (props) => {
  let params = {facets: {sectors: ["ma::coastal zones"],
                         climate_changes: props.changes,
                         actions: props.actions},
                query: props.q}
  return searchURL(params);
}



class CoastalZonesSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
      collection_name: 'MA/coastal_zones/highlighted_resources'
    };

    return (
      <SectorDetailLayout
        title="Coastal Zones"
        image={coastal_zones_image}
        image_credit="MA Office of Coastal Zone Management"
        showcased_resources={showcased_resources}
        footnotes={[
          <span>2013 Northeast Regional Planning Body Baseline Assessment <a href='http://neoceanplanning.org/wp-content/uploads/2016/05/Baseline-Assessment_Draft-May-2016_Sec4.pdf'>  http://neoceanplanning.org/wp-content/uploads/2016/05/Baseline-Assessment_Draft-May-2016_Sec4.pdf</a></span>,
          <span>Climate Ready Boston: Climate Change and Sea Level Rise Projects for Boston. The Boston Research Advisory Group Report, June 1, 2016. <a href='https://www.boston.gov/sites/default/files/document-file-12-2016/brag_report_-_final.pdf'>https://www.boston.gov/sites/default/files/document-file-12-2016/brag_report_-_final.pdf</a></span>,
          <span> Yin, J. H. 2005. A consistent poleward shift of the storm tracks in simulations of 21st century climate. Geophysical Research Letters 32:L18701 </span>,
          <span> National Wildlife Federation [NWF] and Manomet. 2014. The vulnerabilities of northeastern fish and wildlife habitats to sea level rise. A report to the Northeastern Association of Fish and Wildlife Agencies and the North Atlantic Landscape Conservation Cooperative. National Wildlife Federation and Manomet Center for Conservation Sciences, Manomet, Plymouth, MA, 55 p. </span>
        ]}

        sections={[
          {title: "Impacts",
           id: 'impacts',
           content: <div>
             <p>Massachusetts coastal communities, habitats, and the species that depend upon them face significant risks from coastal storms, flooding, erosion, and sea level rise. </p>
             <p>Climate change, specifically warming oceans, is expected to exacerbate these impacts by increasing storm intensity, duration, and frequency<Footnote num='2'/>. As the ocean warms, the warm waters that fuel hurricanes may expand northward<Footnote num='3'/>, resulting in stronger storms that when combined with rising sea levels, will cause significantly more destructive storm surges<Footnote num='4'/>. </p>
           </div>,
            subsections: [
              {name: "Rising Temperatures",
                href: sectorSearchURL({changes:["ma::rising temperatures::"]}),
                id: "impacts_rising_temperatures",
                content: <div>
                  <p>Rising air temperatures may cause stresses for some coastal habitats. As warming occurs, average water temperatures in estuaries, bays, and coastal waters will also rise, decreasing dissolved oxygen in surface waters important for fish health. This may cause a northward shift in range (out of Massachusetts) of many commercially important fish and shellfish species, while species that are adapted to warmer conditions may migrate into Massachusetts coastal waters or become more abundant. An increase in ocean acidification caused by warming temperatures will likely also contribute to population decline for some marine species, especially shellfish. Some invasive plant and animal species may grow in abundance, and temperature increases are likely to lead to more harmful algal blooms, like red tide, which can pose a significant risk to public health and safe food supply.</p>
                </div>
              },
              {name: "Changes in Precipitation",
                href: sectorSearchURL({changes:["ma::changes in precipitation::"]}),
                id: "impacts_changes_in_precipitation",
                content: <div>
                  <p>Coastal flooding along rivers near the shore may increase as more precipitation falls in heavier downpours during winter and spring. More frequent flooding in the densely populated cities and towns along the Massachusetts coast could be costly and disruptive. It could also cause impacts to water quality as larger amounts of runoff wash pathogens and pollutants from urban streets and parking lots into nearby coastal waterways.</p>
                  <p>The drier summers and more intermittent droughts we expect could put strain on municipal water supplies in these populated areas. </p>
                  <p>These changes in precipitation will also change hydrological cycles along the coast, with effects on coastal habitats and species that are sensitive to the changes.   </p>
                </div>
              },
              { name: "Extreme Weather",
                href: sectorSearchURL({changes:["ma::extreme weather::"]}),
                id: "impacts_extreme_weather",
                content: <div>
                  <p>An increase in the frequency and intensity of extreme weather—from heavy downpours to Nor’easters—are expected in the Commonwealth. Along populated areas of the coast, these storms could be dangerous for public safety. </p>
                  <p>Severe weather could also cause economic slow-downs, damage to the many kinds of infrastructure concentrated on or near the shore, and private property damage. Coastal power plants, the electrical grid and other energy facilities, infrastructure that protects the shore against erosion, roads and bridges, and waste water plants situated in low elevation areas could all be at greater risk or damage or disruption in service. Extreme storms that trigger large scale power outages could create challenges for critical infrastructure, vulnerable populations and business continuity.</p>
                </div>
              },
              {name: "Sea Level Rise",
               href: sectorSearchURL({changes:["ma::sea level rise::"]}),
               id: "impacts_sea_level_rise",
               content: <div>
                <p>Rising sea levels along the coast of Massachusetts will increase tidal range, tidal inundation, and flooding and erosion during coastal storms. These changes will likely lead to shrinkage or losses of key coastal habitats like wetlands, salt marshes, and estuaries. Habitats may also shift locations, for example as salt marshes gradually migrate into freshwater wetlands or coastal forest habitat. Changes in the distribution and amount of coastal habitat will affect key shore species that depend on them.</p>
                <p>Sea level rise combined with extreme storms will also elevate risks for infrastructure on or near the shore such as roads, rail lines, and coastal power plants. Private commercial and residential properties may lose beach and other land from increased coastal erosion as well as damage to buildings and on-site water and wastewater pipes and systems. Saltwater intrusion could result in salinization of neighboring agricultural fields, fresh water aquifers and wells, and coastal waterways.</p>
               </div>
              },
            ]
          },
          { title: "Actions",
            id: "actions",
            content: null,
            subsections: [
            {name: "Planning",
              href: sectorSearchURL({actions:["ma::planning::"]}),
              id: 'actions_planning',
              content: <ul>
                <li>Develop a conservation assessment and prioritization system for coastal wetlands. </li>
                <li>Determine criticality and assess risks for critical infrastructure in coastal flood zones under current and future sea level rise scenarios. </li>
                <li>Develop climate adaptation strategies based on vulnerability assessments of coastal areas and assets, and include them in Master Plans, land use and open space plans, and Hazard Mitigation Plans.</li>
              </ul>
            },
            {name: "Management Practices",
             href: sectorSearchURL({actions:["ma::implementation action/direct action on target::management and behavior"]}),
             id: "actions_management_practices",
             content: <ul>
                <li>Conserve and restore coastal habitats such as salt marshes as well as habitat corridors for storm protection, habitat connectivity, ecosystem resilience, and blue carbon storage.</li>
                <li>Encourage nature-based or ecologically enhanced shoreline protection, including beach nourishment. </li>
                <li>Conserve and restore coastal wetlands and forests to manage stormwater, recharge groundwater, and mitigate flooding. </li>
                <li>Elevate and/or move buildings and infrastructure in current or future coastal flood zones and encourage siting of new development/infrastructure outside these zones. </li>
                <li>Prevent the introduction of invasive species through early detection, monitoring, and management of existing populations. </li>
                <li>Restore tidally-driven rivers, estuarine, and marine habitats. </li>
            </ul>
          },
          {name: "Technology",
            href: sectorSearchURL({actions:["ma::implementation action/direct action on target::technology"]}),
            id: "actions_tech",
            content: <ul>
                <li>Encourage nature-based techniques, including bioengineering with coir rolls and/or natural fiber blankets for coastal bank stabilization. </li>
                <li>Encourage use of built green infrastructure such as floodable parks and open spaces to manage stormwater, coastal flooding and storm protection. </li>
                <li>Restore habitat connectivity by replacing or removing ineffective tide gates. </li>
            </ul>
          },
          { name: "Policies / Laws",
            href: sectorSearchURL({actions:["ma::planning::policies/laws/regulations"]}),
            id: "actions_policies_laws",
            content: <ul>
                <li>Create a dynamic framework for updating policy guidelines that enables adaptive management to deal with changing conditions. </li>
                <li>Create or amend local wetland bylaws to allow for beach migration and shoreline transitional areas. </li>
                <li>Develop or enhance early warning systems and community evacuation plans. </li>
                <li>Examine the concept of local setbacks requiring that new coastal development be a minimum distance from the shore. </li>
                <li>Identify and preserve buffer zones that will facilitate inland wetland migration to new areas as sea levels rise. </li>
                <li>Incorporate sea level rise risk information into siting decisions for new development in flood prone areas. </li>
                <li>Examine the concept of rolling easements to protect coastal wetlands prone areas. </li>
            </ul>
          },
          { name: "Research / Monitoring",
            href: sectorSearchURL({actions:["ma::outreach/education::research and monitoring"]}),
            id: 'actions_research',
            content: <ul>
                <li>Conduct research and monitoring around different strategies to prevent coastal erosion and marsh die-off including thin layer deposition. </li>
                <li>Conduct sediment transport studies to inform shoreline management. </li>
                <li>Monitor different types of wetlands and their response to rising sea levels. Establish long-term research and monitoring sites. </li>
                <li>Use remote sensing to monitor annual changes in land cover and land use in the Commonwealth. </li>
            </ul>
          },
          { name: "Funding",
            href: sectorSearchURL({actions: ["ma::implementation action/direct action on target::financing"]}),
            id: "actions_funding",
            content: <ul>
                <li><a href='https://www.mass.gov/municipal-vulnerability-preparedness-program'>Energy and Environmental Affairs (EEA) Municipal Vulnerability Preparedness Program </a></li>
                <li><a href='https://www.mass.gov/service-details/dam-and-seawall-repair-or-removal-program-grants-and-funds'>EEA’s Dam and Seawall Repair or Removal Program</a></li>
                <li><a href='https://www.fema.gov/flood-mitigation-assistance-grant-program'>FEMA’s Flood Mitigation Assistance Grant Program, Pre-Disaster Mitigation Grant Program </a></li>
                <li><a href='https://www.mass.gov/orgs/division-of-ecological-restoration'>Massachusetts Department of Ecological Restoration’s Technical Assistance </a></li>
                <li><a href='https://www.mass.gov/service-details/grants-financial-assistance-watersheds-water-quality'>Massachusetts Department of Environmental Protection’s Nonpoint Source Competitive Grants Program</a></li>
                <li><a href='https://www.mass.gov/service-details/coastal-pollutant-remediation-cpr-grant-program'>Massachusetts Office of Coastal Zone Management’s Coastal Pollutant Remediation Program </a></li>
                <li><a href='http://www.mass.gov/eea/agencies/czm/program-areas/stormsmart-coasts/grants/'>Massachusetts Office of Coastal Zone Management’s Coastal Resiliency Grant Program </a></li>
                <li><a href='https://www.mass.gov/service-details/masswildlife-habitat-management-grant-program'>Massachusetts Wildlife’s Habitat Management Grant Program </a></li>
                <li><a href='https://www.mass.gov/massbays-healthy-estuaries-grants'>MassBays National Estuary Program’s Health Estuaries Grant Program and watershed grants</a></li>
            </ul>
          }
          ]
          },
          {title: "Looking for help?",
           subsections: [],
           id: 'looking_for_help',
           content: <ul>
              <li><a href='http://www.mass.gov/eea/agencies/czm/'> Massachusetts Office of Coastal Zone Management</a> <br/> Programs to support local planning for a range of climate impacts</li>
              <li><a href='https://www.mass.gov/orgs/department-of-conservation-recreation'> Massachusetts Department of Conservation and Recreation  </a></li>
              <li><a href='https://www.mass.gov/orgs/division-of-ecological-restoration'> Massachusetts Division of Ecological Restoration </a></li>
              <li><a href='https://www.mass.gov/orgs/division-of-marine-fisheries'> Massachusetts Division of Marine Fisheries </a></li>
              <li><a href='https://www.mass.gov/orgs/masswildlifes-natural-heritage-endangered-species-program'> Massachusetts Natural Heritage & Endangered Species Program </a></li>
              <li><a href='http://www.nmfs.noaa.gov/'> National Marine Fisheries Service </a></li>
              <li><a href='https://coast.noaa.gov/'> National Oceanic and Atmospheric Administration (NOAA) Office for Coastal Management </a></li>
              <li><a href='https://www.epa.gov/cre'> U.S. Environmental Protection Agency’s Climate Ready Estuaries Program </a></li>
            </ul>
            }
         ]}
         >
        <p>The Massachusetts coastal zone includes critical habitats for many important fish and wildlife species, property and infrastructure vulnerable to coastal flooding and storm damage, and an economy based in fisheries and recreation that represents over 88,000 jobs and nearly $6.5 billion in annual job earnings<Footnote num='1'/>. Climate change will impact both the built and natural environment in the coastal zone.</p>

        <p>Mitigation strategies in the coastal zone include expanding renewable energy sources in the form of offshore wind and tidal energy, and conservation and restoration of coastal and marine ecosystems. Protecting salt marshes and seagrasses from degradation and destruction not only prevents emissions of currently sequestered “blue” carbon into the atmosphere and oceans, but also protects critical habitat for diverse species. Protecting and restoring coastal salt marshes and wetlands provides much needed flooding and storm damage protection for Massachusetts coastal communities.</p>

        <p>Coastal zone adaptation strategies will need to address rising sea levels and expanding risk of flooding, coastal erosion, and damage from storm surge. Specific strategies may include: incorporating climate change and sea level rise information into land-use planning and regulations and preparing a detailed inventory of assets located in current and future flood zones based on future sea level rise scenarios.</p>

        <p>Other strategies to adapt to prepare for climate change include retrofitting and/or redesigning to improve resiliency; elevating and/or moving buildings and infrastructure out of current or future flood zones; acquiring open coastal land for storm protection, recreation, and ecosystems; and, creating a dynamic framework for updating policy guidelines given the “moving target” of climate change. </p>
         </SectorDetailLayout>
     );
   }
 }

 export default CoastalZonesSectorPage;
