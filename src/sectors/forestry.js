import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/forestry.jpg';
import SearchLink from '../utils/search_link';

const ActionLink = (props) => {
  return <li>
    <SearchLink params={{sectors: ["forestry"], query: props.q}}>
      {props.children}
    </SearchLink>
  </li>
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
        sector_name="forestry"
        image={sector_image}
        image_credit="MA Department of Conservation and Recreation"
        showcased_resources={showcased_resources}
        sections={[
          {title: "Impacts",
           id: "impacts",
           content: <p>
            Climate change will cause changes in species composition and forest structure. Climate change, in conjunction with other stressors, especially conversion of forests by development, will alter forest function and its ability to provide wildlife habitat, and could reduce the ability of forests to provide ecological services such as air and water cleansing. Massachusetts can experience a greater intensity and frequency of forest-disturbing weather events, including ice storms, localized or regional wind events such as microbursts or hurricanes, and more frequent and longer droughts and associated wildfire. All of these conditions can suddenly kill or damage native trees, thereby opening the forest to new species, including invasive plants. Some changes may be slow while others may proceed quickly once critical thresholds are met (e.g., forest pests).   While forest pests such as Asian longhorned Beetle, Hemlock woolly adelgid and Emerald Ash Borer are spread by humans, the range for many pests is widened by warming temperatures.
           </p>,
           subsections: [
            {name: "Rising Temperatures",
             id:"impacts_rising_temps",
             content: <ul>
              <ActionLink q='forestry changes in species animals fungi bacteria'>Altered composition and role of forest species including plants and animals fungi and bacteria.</ActionLink>
              <li>
                <ActionLink q='forestry changes in species trees'>Shifts in tree distribution.</ActionLink>
                <ul>
                  <ActionLink q='forestry spruce'>Northern forest types such as spruce-fir will likely disappear from Massachusetts</ActionLink>
                  <ActionLink q='forestry red spruce balsam fire'>Red spruce and balsam fir will likely have decreasing reproductive success</ActionLink>
                  <ActionLink q='forestry hardwood high elevations'>Northern hardwoods will recede to higher elevations</ActionLink>
                  <ActionLink q='forestry southern hardwood'>Southern forest types such as central transitional southern hardwoods will likely increase in abundance</ActionLink>
                </ul>
              </li>
              <ActionLink q='forestry growth productivity trees'>Growth rate and productivity changes for some hardwood tree species.</ActionLink>
              <ActionLink q='forestry northward expansion invasive insect invasive disease'>Northward expansion of invasive insects and diseases such as the hemlock woolly adelgid and Southern pine beetle are likely. Response of others invasives such as the emerald ash borer the Asian longhorned beetle or beech bark disease is uncertain. </ActionLink>
              <ActionLink q='maple syrup'>Changes in sap flow and harvesting season with effects on maple syrup production.</ActionLink>
             </ul>
            },
            {name: "Changes in Precipitation",
             id: 'impacts_changes_in_precipitation',
             content: <ul>
              <ActionLink q='forestry invasives precipitation'>Increased negative impacts of invasive species from changes in the water cycle.</ActionLink>
              <ActionLink q='forestry drought fire risk)'>More frequent and pronounced droughts are expected to couple with an overall increase in forest growth which could lead to increased wildfire risks.</ActionLink>
             </ul>
            },
            {name: "Extreme Weather",
             id: 'impacts_extreme_weather',
             content: <ul>
              <ActionLink q='forest wind damage ice damage structural diversity'>Increased vulnerability to wind and ice damage due to a lack of structural diversity</ActionLink>
              <ActionLink q='forestry open space invasive'>Increased risk of disturbances that open up space for invasive species to move into forests.</ActionLink>
             </ul>
            }
           ]
          },
          {title: "Actions",
           id: "actions",
           content: <p>
             Implementation of the following strategies could be considered to mitigate potential climate change impacts on forest resources. For a forest ecosystem to maintain its biodiversity, it should be able to absorb small perturbations, prevent them from amplifying into large disturbances (resistance), and return to the original level of productivity, function, structure and, in some cases, species composition following a disturbance (resilience). The resistance and resilience of ecosystems are dependent on their sizes, conditions and landscape contexts.
           </p>,
           subsections: [
            {name: "Planning",
             id:"impacts_planning",
             content: <ul>
              <ActionLink q='forestry planning climate change resiliency risk'>Develop a climate change adaptation plan and complete vulnerability assessments</ActionLink>
              <ActionLink q='forestry forest stewardship planning'>Expand technical assistance and forest stewardship planning and practice programs for private forest owners</ActionLink>
              <ActionLink q='forestry planning climate change resiliency risk master plan'>Incorporate climate change and impacts on the forest into Master Plans</ActionLink>
              <ActionLink q='forestry planning climate change resiliency risk open space plan'>Incorporate climate change and impacts on the forest into Open Space Plans</ActionLink>
             </ul>
            },
            {name: "Management Policies",
             id: 'impacts_management',
             content: <ul>
              <ActionLink q='forestry management practices forest management diversity'>Continue both active forest management for renewable wood products and wildlife benefits and establish forest reserves to mitigate and monitor impacts of human development</ActionLink>
              <ActionLink q='forestry tree age'>Diversify tree age classes</ActionLink>
              <ActionLink q='forestry invasive land management'>Expand the management of invasive species via a comprehensive strategy and a menu of programs to reach private and public owners</ActionLink>
              <ActionLink q='forestry management practices forest management diversity'>Increase forest diversity (species structure age classes and habitats) and vigor via professional forest management</ActionLink>
              <ActionLink q='forestry local markets economics'>Increase the percentage of wood products produced locally to strengthen markets and keep working forest landscapes economically viable.</ActionLink>
              <ActionLink q='forestry snags downed logs'>Maintain or restore soil quality by increasing snags and downed logs</ActionLink>
              <ActionLink q='forestry soil quality'>Maintain/restore soil quality by protecting soils during harvests</ActionLink>
              <ActionLink q='forestry fire management'>Practice prudent fire management</ActionLink>
              <ActionLink q='forestry tree regeneration deer moose'>Promote tree regeneration by controlling deer/moose impacts</ActionLink>
              <ActionLink q='forestry restoration species'>Restore native tree species</ActionLink>
              <ActionLink q='forestry carbon sequester management'>Return the forest to full stocking to increase capacity to sequester carbon.</ActionLink>
              <ActionLink q='forestry land conservation forest block'>Use permanent land conservation tools to secure large unfragmented forest blocks in order to conserve the most intact productive and resilient forest ecosystems</ActionLink>
             </ul>
            },
            {name: "Technology",
             id: 'impacts_technology',
             content: <ul>
              <ActionLink q='forestry urban'>Diversify and increase urban forests via planting to increase carbon capture and resilience</ActionLink>
              <ActionLink q='forestry drought heat species'>Promote drought and heat adapted trees</ActionLink>
             </ul>
            },
            {name: "Policies / Laws",
             id: 'impacts_policy_law',
             content: <ul>
              <ActionLink q='forestry regulation policy'>Promote policies that maintain forests including local zoning regulations</ActionLink>
              <ActionLink q='forestry regulation policy sustainable management'>Support via policies sustainable management of renewable wood products on appropriate sites </ActionLink>
              <ActionLink q='forestry initiative local products'>Establish and support initiatives to promote the buying of local forest products.</ActionLink>
              <ActionLink q='forestry policies forest management'>Encourage forest reserve management to allow natural processes to determine the long-term structure composition function and dynamics of the forest to the maximum extent possible.</ActionLink>
             </ul>
            },
            {name: "Research / Monitoring",
             id: 'impacts_research_monitoring',
             content: <ul>
              <ActionLink q='forestry monitoring'>Support long-term ecological monitoring programs such as the DCR‘s Continuous Forest Inventory.</ActionLink>
              <ActionLink q='forestry research forest management practices climate change efficacy'>Expand adaptive research of forest management practices and their effectiveness in a changing climate</ActionLink>
             </ul>
            },
            {name: "Funding",
             id: 'impacts_funding',
             content: <ul>
              <ActionLink q='forestry funding forest conservation land owner'>Landowner programs for forest conservation </ActionLink>
              <ActionLink q='forestry funding forest stewardship conservation'>Forest Stewardship programs </ActionLink>
              <ActionLink q='forestry funding urban'>Urban Forestry</ActionLink>
             </ul>
            },
           ]
          },
          {title: "Looking for help?",
           id: 'looking_for_help',
           subsections: [],
           content: <ul>
             <ActionLink q='Massachusetts Division of Fisheries & Wildlife)'>Massachusetts Division of Fisheries & Wildlife </ActionLink>
             <ActionLink q='Massachusetts Department of Conservation and Recreation)'>Massachusetts Department of Conservation and Recreation</ActionLink>
             <ActionLink q='MassWoods'>MassWoods</ActionLink>
             <ActionLink q='Nature Conservancy)'>The Nature Conservancy</ActionLink>
             <ActionLink q='USDA Forest Service Climate Change Resource Center'>USDA Forest Service Climate Change Resource Center</ActionLink>
           </ul>
          }
        ]}
        >
        <p>
          Today, about 62 percent (three million acres) of the approximately five million acres in Massachusetts is
            forested<a href='#fn_1' className='footnote'>1</a>
            and over 90 percent of that is upland forest<a href='#fn_2' className='footnote'>2</a>. Upland forests provide important functions including support for a variety of habitats and wide-ranging biological diversity.  These forests provide important filters along wetlands, rivers, and streams and stabilize soils and sediments, thus minimizing erosion. This habitat also helps to moderate temperature by providing shade to small streams and provides important habitat for a variety of wildlife species.
        </p>
        <p>
          It is estimated that each acre of forest in Massachusetts provides $1,500 annually in economic value from forest products, water filtration, flood control, and tourism. For the state‘s 3.1 million acres of forest,
          this equals $4.6 billion annually<a href='#fn_3' className='footnote'>3</a>.
            Forest harvesting directly supports 3,700 jobs for foresters, loggers, sawmill workers, and wood processing plant workers in Massachusetts; the wood products industry produces over
            $385 million of goods annually<a href='#fn_4' className='footnote'>4</a>.
        </p>
        <p>
          Massachusetts is globally unique in the combination of population and forest density – it has more people living among more trees than most places on earth.  However, the distribution of forests has left many urban dwellers with few trees nearby.  Expanding the urban forest in MA’s 54 cities is an important way to utilize forests to improve climate mitigation and resilience.  Increasing urban forest canopies from an average of about 20 to 40% would decrease carbon emissions (via reduced summer and winter energy use and carbon sequestration), reduce stormwater, increase urban air quality, address heat island effects, and improve human health.
        </p>
        <p>
          Potential climate change vulnerabilities for ecosystems include the loss and major shifts in tree species, forest, and habitat community composition across the state.  Forests may also be at higher risk from droughts, invasive pests, storms and fires due to changes in the climate.
        </p>
          <ol className='footnotes'>
            <li id='fn_1'> Alerich. C.L. 2000. Forest Statistics for Massachusetts: 1985 and 1998. Research Bulletin NE-148. USDA Forest Service, Northeastern Research Station.     </li>
            <li id='fn_2'> MassGIS </li>
            <li id='fn_3'> Campbell, S.M. 2000. Quantifying Public Benefits on Private Forestland in Massachusetts. Massachusetts Forest Stewardship Programs Task Force on Reforming Forest Taxation. </li>
            <li id='fn_4'> American Forest and Paper Association brochure, 2011.  </li>
          </ol>
        </SectorDetailLayout>
    );
  }
}

export default ForestrySectorPage;
