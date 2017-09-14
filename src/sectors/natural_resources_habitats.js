import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import natural_resources_image from '../images/sectors/natural_resources.jpg';
import SearchLink from '../utils/search_link';

const ActionLink = (props) => {
  return <li>
    <SearchLink params={{sectors: ["natural resources / habitats"], query: props.q}}>
      {props.children}
    </SearchLink>
  </li>
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
        sector_name="natural_resources"
        image={natural_resources_image}
        image_credit="U.S. Fish and Wildlife Service"
        showcased_resources={showcased_resources}
        sections={[
          {title: "Impacts",
           id: "impacts",
           content: <p>
            Potential climate change vulnerabilities for ecosystems include the loss of native species range expansion of invasive species, pests, and weeds. For example, warmer weather could change the composition of various natural habitats, reducing habitat quality for native species and allowing invasive species to gain entry. Rising temperatures will change stream and lake temperatures, increasing habitat for some fish species, while degrading it for others. Warming could also harm ecosystems by changing the timing of natural processes such as migration, reproduction, and flowering. Changes in seasonal events may disrupt the symbiotic connection between animals and their food sources and between plants and pollinators. Increasingly large precipitation events and extreme weather conditions will stress habitat and can lead to degradation of the overall quality of various natural habitats.
           </p>,
              subsections: [
                {name: "Rising Temperatures",
                 id: 'impacts_rising_temperatures',
                 content: <ul>
                  <ActionLink q="natural resources rising temperatures seasons migratory birds">
                    Changes in timing of seasons affect arrival timing of migratory birds and availability of food.
                  </ActionLink>
                  <ActionLink q="natural resources rising temperatures season changes species">
                    Growing season changes resulting in changes in species composition.
                  </ActionLink>
                  <ActionLink q='natural resources rising temperatures algal bloom'>
                    Intensification of algal blooms.
                  </ActionLink>
                  <ActionLink q="natural resources rising temperatures northward shift species invasives pests disease vectors">
                    Northward shift in species range, including pests, disease vectors, and invasive species such as hemlock woolly adelgid and Lyme’s disease.
                  </ActionLink>
                  <ActionLink q="natural resources rising temperatures ocean acidification marine species">
                    Population changes of marine species due to ocean acidification.
                  </ActionLink>
                  <ActionLink q="natural resources rising temperatures snow species habitat">
                    Survival of animals and insects that depend on snow for insulation and protective habitat.
                  </ActionLink>
                  <ActionLink q="natural resources rising temperatures winter insect pests">
                    Survival of marginally overwintering insect pests.
                  </ActionLink>
                  <ActionLink q="natural resources rising temperatures marine species change">
                    Warm water marine species abundance changes
                  </ActionLink>
                  <ActionLink q='natural resources rising temperatures deer population'>
                    Winter survival of deer populations.
                  </ActionLink>
                 </ul>
                },
              {name: "Changes in Precipitation",
               id: "impacts_changes_in_precipitation",
               content: <ul>
                  <ActionLink q="natural resources changes in precipitation soil moisture">
                    Changes in soil moisture that may affect species composition.
                  </ActionLink>
                  <ActionLink q="natural resources changes in precipitation erosion">
                    Coastal erosion and riverine erosion.
                  </ActionLink>
                  <ActionLink q="natural resources changes in precipitation organic matter soils">
                    Dissolved organic matter exported from soils and wetlands.
                  </ActionLink>
                  <ActionLink q='natural resources changes in precipitation drinking water'>
                    Potable water supply.
                  </ActionLink>
                  <ActionLink q='natural resources changes in precipitation stream flow tidal exchange'>
                    Restricted stream flow and tidal exchange.
                  </ActionLink>
                  <ActionLink q='natural resources changes in precipitation stream flow nutrients'>
                    Stream flow changes affecting delivery of nutrients and pollutants to coastal waters.
                  </ActionLink>
               </ul>
              },
              {name: "Extreme Weather",
               id: "impacts_extreme_weather",
               content: <ul>
                 <ActionLink q="natural resources extreme weather">
                   Ecosystem scale disturbances (tree blow down, etc.) that offer potential for invasive species to move into disturbed ecosystems.
                 </ActionLink>
                 <ActionLink q='natural resources extreme weather runoff pathogen pollution'>
                   Runoff events with pathogens and pollutants in water.
                 </ActionLink>
                 <ActionLink q='natural resources extreme weather stream channel water quality'>
                   Stream channel stability affecting drinking water quality.
                 </ActionLink>
               </ul>
              },
              {name: "Sea Level Rise",
               id: "impacts_sea_level_rise",
               content: <ul>
                  <ActionLink q="natural resources, sea level rise salt marsh">
                    Conversion of salt marsh plant species composition. </ActionLink>
                  <ActionLink q='natural resources sea level rise coastal ecosystem change'>
                    Coastal ecosystem hydrological changes.</ActionLink>
                  <ActionLink q='natural resources sea level rise coastal erosion'>
                    Coastal erosion.
                  </ActionLink>
                  <ActionLink q='natural resources sea level rise marshland increase'>
                    Creation of new marshes from barrier island breaching and creation of new inlets.  </ActionLink>
                  <ActionLink q='natural resources sea level rise marsh loss'>
                    Loss of salt marsh if not able to keep pace with rising sea levels or suitable inland migration space. </ActionLink>
                  <ActionLink q='natural resources sea level rise seawater inundation water supply wetland ecosystem'>
                    Permanent seawater inundation in freshwater ecosystems. </ActionLink>
                </ul>
              },
            ]
          },
          {title: "Actions",
           id: "actions",
           subsections: [
            {name: "Planning",
              id: 'actions_planning',
              content: <ul>
                <ActionLink q='natural resources planning adaptation plan vulnerability assessment'> Create a climate adaptation plan that includes a complete vulnerability assessment. </ActionLink>
                <ActionLink q='natural resources planning migration corridors'>Identify and prioritize protection of migration corridors between wetland areas and between wetlands and the associated upland habitat including large resilient parcels connected by migration corridors. Planning should include both aquatic and terrestrial connectivity.</ActionLink>
                <ActionLink q='natural resources planning hazard mitigation plan'>Incorporate climate change into Hazard Mitigation Plans.</ActionLink>
                <ActionLink q='natural resources planning master plan' >Incorporate climate change into Master Plans. </ActionLink>
                <ActionLink q='natural resources planning open space plan' >Incorporate climate change into Open Space Plans. </ActionLink>
                <ActionLink q='natural resources planning wildlife management plan' >Incorporate climate change considerations in wildlife management plans.</ActionLink>
              </ul>
            },
            {name: "Management Practices",
             id: "actions_management_practices",
             content: <ul>
                <ActionLink q='natural resources management practices land conservation'>Conserve natural areas for species migration, storm protection, connectivity, resilience and carbon mitigation </ActionLink>
                <ActionLink q='natural resources management practices wetlands conservation'>Conserve wetlands and forests to manage stormwater recharge groundwater and mitigate flooding.</ActionLink>
                <ActionLink q='natural resources management practices land conservation floodplain buffers riparian'>Conserve revegetate and reconnect floodplains and buffers in riparian areas.</ActionLink>
                <ActionLink q='amphibian tunnels'>Create amphibian and reptile tunnels.</ActionLink>
                <ActionLink q='natural resources management practices wildlife passage'>Create large wildlife passage structures.</ActionLink>
                <ActionLink q='natural resources management practices soil quality'>Maintain or restore soil quality by limiting recreational impacts.</ActionLink>
                <ActionLink q='natural resources management practices stream crossing'>Modify stream crossings to allow wildlife passage.</ActionLink>
                <ActionLink q='natural resources management practices best management practices'>Develop and distribute a wetlands waterways/ waterbodies and climate change adaptation best management practices handbook.</ActionLink>
                <ActionLink q='natural resources management practices invasives'>Prevent the introduction of invasive species by controlling invasive exotic plants.</ActionLink>
                <ActionLink q='natural resources management practices restoration habitat'>Restore tidally-driven rivers estuarine and marine habitats.</ActionLink>
                <ActionLink q='natural resources management practices restoration estuary'>Restore affected estuaries by reducing nutrient and sediment pollution.</ActionLink>
                <ActionLink q='natural resources management practices natural buffers'>Restore natural buffers using native vegetation buffers and plantings.</ActionLink>
                <ActionLink q='natural resources management practices dam removal'>Restore habitat connectivity by removing obsolete dams.</ActionLink>
                <ActionLink q='natural resources management practices monitoring protocol standardization'>Standardize monitoring protocols to improve communication with existing long-term ecological research monitoring sites.</ActionLink>
                <ActionLink q='natural resources blue carbon sink'>Improve coastal resiliency by conserving and creating blue carbon sinks.</ActionLink>
              </ul>
            },
            {name: "Technology",
             id: "actions_technology",
             content: <ul>
                <ActionLink q='bioengineering erosion control'>Encourage application of bioengineering techniques for erosion control and stream and shoreline stability.</ActionLink>
                <ActionLink q='natural resources bank stabilization nature-based'>Encourage nature-based approaches including bioengineering with coir rolls and/or natural fiber blankets for bank stabilization.</ActionLink>
                <ActionLink q='natural resources early detection invasive'>Identify and implement strategies for early detection, rapid response, and prevention of invasive exotic plants and animals. </ActionLink>
                <ActionLink q='natural resources habitat connectivity culvert'>Maintain habitat connectivity by retrofitting or replacing culverts with appropriately sized-culverts.</ActionLink>
                <ActionLink q='natural resources heat tolerant plants'>Promote the planting of drought and heat-tolerant species.</ActionLink>
                <ActionLink q='habitat connectivity tide gate'>Restore habitat connectivity by replacing or removing ineffective tide gates.</ActionLink>
              </ul>
            },
            {name: "Policies / Laws",
             id: "actions_policies",
             content: <ul>
                <ActionLink q='natural resources policy law regulation soil mapping'>Consolidate existing MassGIS and Natural Resources Conservation Services soils mapping that identify peat deposits in Massachusetts and utilize as a planning tool for management of soil carbon stores.</ActionLink>
                <ActionLink q='natural resources policy law regulation wetland beach migration shoreline'>Create or amend local wetland bylaws to allow for beach migration and shoreline transitional areas.</ActionLink>
                <ActionLink q='natural resources policy law regulation stream flow'>Develop stream flow criteria and regulations to encourage re-establishment of natural flow regimes in rivers and streams. </ActionLink>
                <ActionLink q='natural resources policy law regulation permitting aquatic habitat'>Facilitate streamlined permitting of aquatic habitat management projects.</ActionLink>
                <ActionLink q='natural resources policy law regulation wetland'>Identify and protect resilient wetland ecosystems. Focus land protection on areas with high ecological integrity and resiliency over time.</ActionLink>
                <ActionLink q='natural resources policy law regulation floodwater open space park'>Manage floodwater by creating floodable parks and open spaces.</ActionLink>
                <ActionLink q='natural resources policy law regulation buffer zone'>Preserve and acquire buffer zones. Buffer zone protection should incorporate predictions for wetland resource and ecological migration resulting from climate changes.</ActionLink>
                <ActionLink q='natural resources policy law regulation rare species endangered species'>Prioritize at-risk communities and protect rare species.</ActionLink>
                <ActionLink q='natural resources policy law regulation biological diversity'>Promote structural diversity by retaining biological legacies.</ActionLink>
                <li>
                <SearchLink params={{sectors: ["natural resources / habitats"],  query:'natural resources policy law regulation riparian floodplain'}}>
                  Promote riparian zone and floodplain management that remove restrictions between rivers and floodplains</SearchLink>
                  <ul>
                    <ActionLink q='natural resources policy law regulation riparian floodplain daylighting'>Daylighting streams</ActionLink>
                    <ActionLink q='natural resources policy law regulation riparian floodplain dam removal'>Removing dams</ActionLink>
                    <ActionLink q='natural resources policy law regulation riparian floodplain brownfield'>integrating brownfields remediation projects with floodplain restoration</ActionLink>
                  </ul>
                </li>
                <ActionLink q='natural resources policy law regulation conservation areas'>Protect ecosystem diversity by establishing large connected conserved areas.</ActionLink>
                <ActionLink q='natural resources policy law regulation peat'>Protect the natural hydrologic function of wetlands with large peat deposits.</ActionLink>
                <ActionLink q='natural resources policy law regulation intermittent streams'>Provide greater protections to vulnerable intermittent streams through legislation or by encouraging local bylaws.</ActionLink>
                <ActionLink q='natural resources policy law regulation wetlands drought'>Revise Massachusetts Department of Environmental Protection (MassDEP) Handbook for Delineating Bordering Vegetated Wetlands under the Massachusetts Wetlands Protection Act‖ to include flexible wetland delineation criteria for use when drought and below-normal precipitation conditions are observed in the field.</ActionLink>
                <ActionLink q='natural resources policy law regulation development floodplain'>Site new developments outside of future floodplains.</ActionLink>
                <ActionLink q='natural resources policy law regulation land conservation stream easement'>Use land acquisition and conservation restrictions to target protection of vulnerable habitat areas. Acquisition could be supplemented by stream easements.</ActionLink>
                <ActionLink q='natural resources policy law regulation mapping flood'>Update Federal Emergency Management Agency (FEMA) floodplain maps to reflect current conditions and predictions of future conditions.</ActionLink>
              </ul>
            },
            {name: "Research/Monitoring",
             id: 'actions_research',
             content: <ul>
                <ActionLink q='natural resources research monitoring low flow streams rising temperatures'>Conduct research and monitoring to understand impacts of low flows and higher temperatures on potential changes to nutrient sediment and pathogen pollution.</ActionLink>
                <ActionLink q='natural resources research monitoring cold-water fish habitat connectivity'>Identify and protect remaining critical cold-water fish habitat areas and seek to reconnect high quality habitats by removing in-stream barriers and re-establishing instream flows.</ActionLink>
                <ActionLink q='natural resources research monitoring vulnerability assessment bank stabilization'>Identify vulnerable river reaches establish and protect belt-width-based river corridors restore floodplains and increase use of bioengineering techniques for bank stabilization.</ActionLink>
                <ActionLink q='natural resources research monitoring wetlands'>Monitor different types of wetlands. Establish long-term research and monitoring sites.</ActionLink>
                <ActionLink q='natural resources research monitoring wetlands vulnerable reaches'>Survey wetlands across the state to identify vulnerable reaches.</ActionLink>
                <ActionLink q='natural resources research monitoring wetlands LiDAR'>Use LiDAR and other data to identify important wetlands and ensure that a variety of wetland types is represented in land protection planning.</ActionLink>
                <ActionLink q='natural resources research monitoring remote sensing land cover'>Use remote sensing to monitor annual changes in land cover and land use in the Commonwealth.</ActionLink>
              </ul>
            },
            {name: "Funding",
             id: 'actions_funding',
             content: <ul>
              <ActionLink q='natural resources funding vulnerability'>EEA’s Municipal Vulnerability Preparedness Program</ActionLink>
              <ActionLink q='natural resources funding coastal resiliency'>Mass Office of Coastal Zone Management Coastal Resiliency Grant Program </ActionLink>
              <ActionLink q='natural resources funding forestry'>Forestry grants and loans</ActionLink>
              <ActionLink q='natural resources funding flood hazard'>Flood Hazard Mitigation Program</ActionLink>
              <ActionLink q='natural resources funding land recreation grant'>Land and Recreation grants and loans </ActionLink>
              <ActionLink q='natural resources funding vulnerability'>Mass Department of Ecological Restoration Technical Assistance</ActionLink>
              <ActionLink q='natural resources funding agriculture'>Mass Department of Agriculture Funding and Technical Assistance</ActionLink>
              <ActionLink q='natural resources funding watershed water quality'>Mass Department of Environmental Protection Watershed and Water Quality grants</ActionLink>
              <ActionLink q='natural resources funding land water supply'>Mass Department of Environmental Protection programs for public water suppliers</ActionLink>
              <ActionLink q='natural resources funding drinking water'>Mass Department of Environmental Protection Drinking Water Supply Grants</ActionLink>
              <ActionLink q='natural resources funding habitat management'>Mass Wildlife’s Habitat Management Grant Program</ActionLink>
              <li>
                Other grants and loans from the EEA
                <SearchLink params={{sectors: ["natural resources / habitats"],  query:'natural resources funding Massachusetts'}}>Search Respository</SearchLink>
                <a href='http://www.mass.gov/eea/grants-and-tech-assistance/grants-and-loans/'> EEA Assistance Site</a>
              </li>
             </ul>
            }
           ]
          },
          {title: "Looking for help?",
           id:"look4help",
           subsections: [],
           content: <ul>
            <ActionLink q='EEA Services and Assistance'>EEA Services and Assistance</ActionLink>
            <ActionLink q='Massachusetts Department of Fish and Game)'>Massachusetts Department of Fish and Game</ActionLink>
            <ActionLink q='Massachusetts Office of Coastal Zone Management)'>Massachusetts Office of Coastal Zone Management</ActionLink>
            <ActionLink q='Massachusetts Bays National Estuary Program)'>Massachusetts Bays National Estuary Program</ActionLink>
            <ActionLink q='Buzzards Bay National Estuary Program)'>Buzzards Bay National Estuary Program</ActionLink>
            <ActionLink q='Northeast Association of Fish and Wildlife Agencies) '>Northeast Association of Fish and Wildlife Agencies</ActionLink>
            <ActionLink q='National Audubon Society) '>National Audubon Society</ActionLink>
            <ActionLink q='National Climate Change and Wildlife Science Center )'>National Climate Change and Wildlife Science Center</ActionLink>
            <ActionLink q='National Marine Fisheries Service)'>National Marine Fisheries Service</ActionLink>
            <ActionLink q='National Wildlife Federation)'>National Wildlife Federation</ActionLink>
            <ActionLink q='The Nature Conservancy)'>The Nature Conservancy</ActionLink>
          </ul>
          }]}
        datagrapher_file='Temp/state/maxt/ANN/MA/'>
        <p>
          Significant changes in natural communities and populations will occur as a consequence of climate change, and these changes may have impacts on the diversity and abundance of wildlife populations, the provisioning of important ecosystem services like clean water, and public health.
        </p>
        <p>
          Natural resources and habitats provide a suite of important services, including climate regulation and protecting these resources helps us fight climate change. It is estimated that forests and other naturally vegetated landscapes sequester approximately 10 percent of the Commonwealth’s carbon emissions. Conservation of wetlands also prevents the release of additional carbon to the atmosphere.
        </p>
        <p>
          Resilient habitats can buffer our citizens, local economies and communities from the significant impacts that are occurring or are projected to occur due to climate change. Intact forested watersheds, wetlands, and rivers support clean drinking water and help water suppliers avoid the need for billions of dollars of water purification infrastructure and operations. Protecting functional floodplains and other wetlands prevents the need for additional flood control infrastructure and flood damage repairs. Coastal wetlands act as important natural buffers that prevent storm and flood damage to expensive inland infrastructure. Estuaries are the breeding ground and nurseries for many species of marine organisms that play important ecological and economic roles. An added benefit of healthy and properly functioning ecosystems is improved resistance to invasive plants, animals, insects, and diseases, including Lyme’s disease. Maintaining healthy ecosystems and natural resources is a cost-effective way to provide critical services, improve public health, reduce climate change, and protect public safety.
        </p>
        </SectorDetailLayout>
    );
  }
}

export default NaturalResourcesHabitatsSectorPage;
