import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import coastal_zones_image from '../images/sectors/coastal_zones.jpg';
import {Footnote} from '../utils/footnotes';
import SearchLink from "../utils/search_link";

const ActionLink = (props) => {
  return <li>
    <SearchLink params={{facets: {sectors: ["ma::coastal zones"]}, query: props.q}}>
      {props.children}
    </SearchLink>
  </li>
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
        sector_name="coastal_zones"
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
           content: <p>
            Massachusetts coastal communities, habitats and the species that depend upon them face significant risks from coastal storms, flooding, erosion, and sea level rise.  Climate change, specifically warming oceans, is expected to exacerbate these impacts by increasing storm intensity, duration and, frequency <Footnote num='2'/>, rising sea levels, increasing the tidal range and chronic tidal inundation. As the ocean becomes warmer, the source of fuel for hurricanes may expand northward <Footnote num='3'/>, and possibly cause stronger storms, with higher and likely more destructive storm surge due to rising sea levels <Footnote num='4'/>. Rising sea levels could also lead to habitat loss for key coastal species due to an increased frequency and amount of coastal flooding and erosion. These changes will also impact the location and size of estuaries, loss of coastal wetlands, and changes in fish and shellfish populations.
           </p>,
           subsections: [
            { name: "Rising Temperatures",
              id: "impacts_rising_temperatures",
              content: <ul>
                <li> Changes in frequency and intensity of coastal storms </li>
                <li> Disease in coastal ecosystems </li>
                <li> Marine algal blooms</li>
                <li> Northward shift in range (out of Massachusetts) of habitat for many commercially important fish and shellfish species </li>
                <li> Population change of marine species due to ocean acidification, especially shellfish</li>
                <li> Warm water marine species abundance changes </li>
                <li> Potential for shift of invasive species</li>
              </ul>
            },
            {  name: "Changes in Precipitation",
                id: 'impacts_changes_in_precipitation',
                content: <ul>
                  <li>Coastal ecosystem hydrological changes</li>
                  <li>Coastal flooding</li>
                  <li>Runoff events with pathogens and pollutants in water </li>
                  <li>Stormwater changes affecting delivery of nutrients and pollutants to coastal waters</li>
                 </ul>
            },
            {  name: "Extreme Weather",
                id: 'impacts_extreme_weather',
                content: <ul>
                  <li> Coastal power plant damage</li>
                  <li> Energy supply disruption</li>
                  <li> Infrastructure damage, weakening, or strain</li>
                  <li> Intensification of storm surge</li>
                  <li> More intense and frequent hurricanes </li>
                  <li> More intense and frequent Nor’easters</li>
                  <li> Power outages</li>
                  <li> Public health and safety during and after storms </li>
                 </ul>
            },
            {  name: "Sea Level Rise",
                id: 'impacts_slr',
                content: <ul>
                  <li> Creation of new marshes from barrier island breaching and creation of new inlets</li>
                  <li> Coastal ecosystem hydrological changes</li>
                  <li> Coastal erosion</li>
                  <li> Coastal flooding</li>
                  <li> Coastal power plant damage</li>
                  <li> Coastal property damage or loss</li>
                  <li> Conversion of salt marsh plant species composition</li>
                  <li> Entrances to bridges, tunnels, segments of highways, wastewater treatment plants, and sewer outfall systems permanently under sea water</li>
                  <li> Increased storm surge</li>
                  <li> Loss of barrier islands and barrier migration due to beach erosion</li>
                  <li> Loss of salt marsh</li>
                  <li> Loss of freshwater wetlands</li>
                  <li> Migration of salt marsh into freshwater wetlands</li>
                  <li> Reshaping of shorelines, altering location and extent of storm surge inundation</li>
                  <li> Salinity of influent into wastewater pollution control plants</li>
                  <li> Salinization of coastal agricultural areas</li>
                  <li> Saltwater in build freshwater systems</li>
                  <li> Saltwater intrusion of freshwater aquifers and ecosystems</li>
                  <li> Permanent seawater inundation of wetlands</li>
                </ul>
            }
          ]},
          { title: "Actions",
            id: "actions",
            content: null,
            subsections: [
              { name: "Planning",
                id: "actions_planning",
                content: <ul>
                  <ActionLink q='coastal zone planning wetland'>Conduct conservation assessment and prioritization system for coastal wetlands.</ActionLink>
                  <ActionLink q='coastal zone planning infrastructure'>Determine criticality and assess critical infrastructure in flood zones under current and future sea level rise scenarios.</ActionLink>
                  <ActionLink q='coastal zone planning vulnerability assessment'>Create a climate adaptation plan that includes a complete vulnerability assessment.</ActionLink>
                  <ActionLink q='coastal zone planning zoning'>Include climate change data for future land use or development plans.</ActionLink>
                  <ActionLink q='coastal zone planning hazard mitigation plan'>Incorporate climate change into Hazard Mitigation Plans.</ActionLink>
                  <ActionLink q='coastal zone planning master plan'>Incorporate climate change into Master Plans.</ActionLink>
                  <ActionLink q='coastal zone planning open space plan'>Incorporate climate change into Open Space Plans. </ActionLink>
                </ul>
              },
              {name: "Management Practices",
               id: "actions_management_practices",
               content: <ul>
                <ActionLink q='coastal zone management practice conserve land'>Conserve natural areas for species migration storm protection connectivity resilience and carbon mitigation.</ActionLink>
                <ActionLink q='coastal zone management practice wetlands'>Conserve wetlands and coastal forests to manage stormwater recharge groundwater and mitigate flooding.</ActionLink>
                <ActionLink q='coastal zone management practice freeboard'>Elevate and/or move buildings and infrastructure in current or future flood zones.</ActionLink>
                <ActionLink q='coastal zone management practice shoreline'>Encourage nature-based or ecologically enhanced shoreline protection including beach nourishment.</ActionLink>
                <ActionLink q='coastal zone management practice development'>Encourage siting of new development/infrastructure outside flood zones.</ActionLink>
                <ActionLink q='coastal zone management practice buffer zone)'>Identify and maintain buffer zones for habitat corridors.</ActionLink>
                <ActionLink q='coastal zone management practice blue carbon sink'>Improve coastal resiliency by conserving and creating blue carbon sinks.</ActionLink>
                <ActionLink q='coastal zone management practice wetland restoration'>Maintain and expand wetland restoration programs.</ActionLink>
                <ActionLink q='coastal zone management practice invasive'>Prevent the introduction of invasive species by controlling invasive exotic plants.</ActionLink>
                <ActionLink q='coastal zone management practice estuary'>Restore tidally-driven rivers estuarine and marine habitats.</ActionLink>
              </ul>
              },
              { name: "Technology",
                id: 'actions_technology',
                content: <ul>
                  <ActionLink q='coastal zone technology bioengineering'>Encourage nature-based techniques including bioengineering with coir rolls and/or natural fiber blankets for coastal bank stabilization.</ActionLink>
                  <ActionLink q='coastal zone technology green infrastructure'>Encourage use green infrastructure to manage stormwater coastal flooding and storm protection.</ActionLink>
                  <ActionLink q='coastal zone technology tide gate'>Restore habitat connectivity by replacing or removing ineffective tide gates.</ActionLink>
                  <ActionLink q='coastal zone technology water storage'>Manage floodwater by creating floodable parks and open spaces.</ActionLink>
                </ul>
              },
              {name: "Policies / Laws",
                id: 'actions_policies_and_laws',
                content: <ul>
                  <ActionLink q='coastal zone policy climate change'>Create a dynamic framework for updating policy guidelines given the "moving target" of climate change.</ActionLink>
                  <ActionLink q='coastal zone regulation wetland'>Create or amend local wetland bylaws to allow for beach migration and shoreline transitional areas.</ActionLink>
                  <ActionLink q='coastal zone policy evacuation'>Develop or enhance early warning systems and community evacuation plans.</ActionLink>
                  <ActionLink q='coastal zone regulation setback'>Examine the concept of setback zones requiring that new coastal development be a minimum distance from the shore.</ActionLink>
                  <ActionLink q='coastal zone regulation freeboard'>Examine expanding the area for freeboard requirements.</ActionLink>
                  <ActionLink q='coastal zone regulation relocation'>Facilitate a strategic relocation of uses that are not water dependent away from flood prone areas.</ActionLink>
                  <ActionLink q='coastal zone regulation buffer zone'>Preserve and acquire buffer zones. Buffer zone protection should incorporate predictions for wetland resource and ecological migration resulting from climate changes prone areas.</ActionLink>
                  <ActionLink q='coastal zone regulation climate change'>Incorporate climate change information into siting decisions for new development prone areas.</ActionLink>
                  <ActionLink q='coastal zone regulation rolling easement'>Examine the concept of rolling easements to protect coastal wetlands prone areas.</ActionLink>
                </ul>
              },
              { name: "Research / Monitoring",
                id: 'actions_research_monitoring',
                content: <ul>
                  <ActionLink q='coastal zone monitoring wetland health'>Conduct rapid assessment method for evaluating coastal wetland health prone areas.</ActionLink>
                  <ActionLink q='coastal zone monitoring erosion'>Conduct research and monitoring around different strategies to prevent coastal erosion and marsh die-off including thin layer deposition.</ActionLink>
                  <ActionLink q='coastal zone monitoring sediment transport'>Conduct sediment transport studies to inform shoreline management.</ActionLink>
                  <ActionLink q='coastal zone monitoring wetland'>Monitor different types of wetlands and their response to rising sea levels. Establish long-term research and monitoring sites.</ActionLink>
                  <ActionLink q='coastal zone monitoring remote sensing'>Use remote sensing to monitor annual changes in land cover and land use in the Commonwealth.</ActionLink>
                </ul>
              },
              { name: "Funding",
                id: "actions_funding",
                content: <ul>
                  <ActionLink q='coastal zone funding buzzard bay'>Buzzards Bay National Estuary Program’s Watershed Municipal Mini-grant Program</ActionLink>
                  <ActionLink q='coastal zone funding EEA Municipal Vulnerability Preparedness Program '>EEA’s Municipal Vulnerability Preparedness Program</ActionLink>
                  <ActionLink q='coastal zone funding EEA Dam and Seawall Repair or Removal Program'>EEA’s Dam and Seawall Repair or Removal Progra</ActionLink>
                  <ActionLink q='coastal zone funding Hazard Mitigation Grant Program'>Federal Emergency Management Agency’s (FEMA) Hazard Mitigation Grant Program</ActionLink>
                  <ActionLink q='coastal zone funding Flood Mitigation Assistance Grant Program'>FEMA’s Flood Mitigation Assistance Grant Program</ActionLink>
                  <ActionLink q='coastal zone funding Pre-Disaster Mitigation Grant Program'>FEMA’s Pre-Disaster Mitigation Grant Program</ActionLink>
                  <ActionLink q='coastal zone funding o	Massachusetts Department of Ecological Restoration’s Technical'>Massachusetts Department of Ecological Restoration’s Technical Assistance</ActionLink>
                  <ActionLink q='coastal zone funding o	Massachusetts Department of Environmental Protection’s Nonpoint Source Competitive Grants Program'>Massachusetts Department of Environmental Protection’s Nonpoint Source Competitive Grants Program</ActionLink>
                  <ActionLink q='coastal zone funding o	Massachusetts Office of Coastal Zone Management’s Coastal Pollutant Remediation Program'>Massachusetts Office of Coastal Zone Management’s Coastal Pollutant Remediation Program</ActionLink>
                  <ActionLink q='coastal zone funding o	Massachusetts Office of Coastal Zone Management’s Coastal Resiliency Grant Program'>Massachusetts Office of Coastal Zone Management’s Coastal Resiliency Grant Program</ActionLink>
                  <ActionLink q='coastal zone funding Massachusetts Wildlife’s Habitat Management Grant Program'>Massachusetts Wildlife’s Habitat Management Grant Program</ActionLink>
                  <ActionLink q='coastal zone funding MassBays National Estuary Program’s Health Estuaries Grant Program'>MassBays National Estuary Program’s Health Estuaries Grant Program</ActionLink>
                </ul>
              }
            ]},
            {title: "Looking for help?",
              subsections: [],
              id: 'looking_for_help',
              content: <ul>
                <ActionLink q='EEA Services and Assistance'>EEA Services and Assistance</ActionLink>
                <ActionLink q='Massachusetts Office of Coastal Zone Management'>Massachusetts Office of Coastal Zone Management</ActionLink>
                <li>
                  <ul>
                    <ActionLink q='Buzzards Bay National Estuary Program'>Buzzards Bay National Estuary Program</ActionLink>
                    <ActionLink q='MA CZM Coastal Habitat'>Coastal Habitat</ActionLink>
                    <ActionLink q='MA CZM Coastal Water Quality'>Coastal Water Quality</ActionLink>
                    <ActionLink q='MA CZM Marine Invasive Species'>Marine Invasive Species</ActionLink>
                    <ActionLink q='Massachusetts Bays National Estuary Program'>Massachusetts Bays National Estuary Program</ActionLink>
                    <ActionLink q='StormSmart Coasts'>StormSmart Coasts (Managing Erosion and Flooding)</ActionLink>
                  </ul>
                  <ActionLink q='Massachusetts Department of Conservation and Recreation'>Massachusetts Department of Conservation and Recreation</ActionLink>
                  <ActionLink q='Massachusetts Division of Ecological Restoration'>Massachusetts Division of Ecological Restoration</ActionLink>
                  <ActionLink q='Massachusetts Division of Marine Fisheries'>Massachusetts Division of Marine Fisheries</ActionLink>
                  <ActionLink q='Massachusetts Natural Heritage & Endangered Species Program'>Massachusetts Natural Heritage & Endangered Species Program</ActionLink>
                  <ActionLink q='Federal Emergency Management Agency'>Federal Emergency Management Agency (FEMA)</ActionLink>
                  <li>
                    <ul>
                      <ActionLink q='FEMA Hazard Mitigation Assistance'>Hazard Mitigation Assistance</ActionLink>
                      <ActionLink q='FEMA National Flood Insurance Program'>National Flood Insurance Program (NFIP)</ActionLink>
                    </ul>
                  </li>
                  <ActionLink q='Gulf of Maine Council on the Marine Environment'>Gulf of Maine Council on the Marine Environment</ActionLink>
                  <ActionLink q='National Marine Fisheries Service'>National Marine Fisheries Service</ActionLink>
                  <ActionLink q='NOAA Office for Coastal Management'>National Oceanic and Atmospheric Administration (NOAA) Office for Coastal Management</ActionLink>
                  <ActionLink q='Northeast Regional Association of Coastal and Ocean Observing Systems'>Northeast Regional Association of Coastal and Ocean Observing Systems</ActionLink>
                  <ActionLink q='Northeast Regional Ocean Council'>Northeast Regional Ocean Council</ActionLink>
                  <ActionLink q='Northeast Regional Ocean Planning Body'>Northeast Regional Ocean Planning Body</ActionLink>
                  <ActionLink q='U.S. Army Corps of Engineers '>U.S. Army Corps of Engineers </ActionLink>
                  <ActionLink q='U.S. Environmental Protection Agency’s Climate Ready Estuaries Program'>U.S. Environmental Protection Agency’s Climate Ready Estuaries Program</ActionLink>


                </li>
              </ul>
            }
         ]}
         >
         <p>
           The Massachusetts coastal zone includes critical habitats for many important fish and wildlife species, property and infrastructure vulnerable to coastal flooding and storm damage, and an economy that represents over 88,000 jobs and nearly $6.5 billion in earnings <Footnote num='1'/>. As the climate warms, both the built and natural environment will be affected in the coastal zone.
         </p>
         <p>
           Mitigation strategies in the coastal zone include renewable energy sources in the form of offshore wind and tidal energy, and conservation and restoration of coastal and marine ecosystems. Protecting salt marshes and seagrasses from degradation and destruction not only prevents emissions of currently sequestered “blue” carbon into the atmosphere and oceans, but also protects critical habitat for the species that depend on them. Additionally, wetland and salt marsh restoration provides much need flooding and storm damage protection for Massachusetts coastal communities.
         </p>
         <p>
           Coastal zone adaptation strategies may include: incorporating climate change and sea level rise information into land-use planning and regulations; preparing a detailed inventory of assets located in current and future flood zones based on future sea level rise scenarios; retrofitting and/or redesigning to improve resiliency; elevating and/or moving buildings and infrastructure out of current or future flood zones; acquisition of open coastal land for storm protection, recreation, and ecosystems; and, creating a dynamic framework for updating policy guidelines given the “moving target” of climate change.
         </p>

         </SectorDetailLayout>
     );
   }
 }

 export default CoastalZonesSectorPage;
