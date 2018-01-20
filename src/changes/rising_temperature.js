import React, { Component } from 'react';
import ChangesLayout from './layout';
import rising_temperatures_img from '../images/home_page/carousel/rising_temperatures.jpg';
import MapLink from '../utils/map_link';
import DatagrapherLink from '../utils/datagrapher_link';
import {searchURL} from '../search/utils';

class RisingTemperatureChangesPage extends Component {
  render() {
    let showcased_resources = null;

    return (<ChangesLayout
        title="Rising Temperatures"
        active_layers="ma_historical_days_above_temp,ma_historical_days_below_temp,ma_historical_degree_days,ma_historical_temperature"
        image={rising_temperatures_img}
        showcased_resources={showcased_resources}
        datagrapher_file='Temp/state/maxt/ANN/MA/'
        sections={[
          {title: "Historic and Projected Changes in Massachusetts",
           id: "changes",
           content: <div>
            <p>Over the last century, annual air temperatures in the Northeast have been warming at an average rate of 0.5°F (nearly 0.26°C) per decade since 1970. Winter temperatures have been rising at a faster rate of 1.3°F (0.7°C) per decade on average.  Even what seems like a very small rise in temperatures can cause major changes in climate patterns such as rain or snowfall.</p>
            <p>In Massachusetts, temperatures are projected to increase significantly over the next century. Winter average temperatures are likely to increase more than those in summer, with major impacts ranging from less snow and ice for winter recreation to increased pests and challenging conditions for timber harvesting. </p>
           </div>,
          subsections: []
          },
          {title: "Heat and Public Health",
           href: searchURL({facets: {climate_changes: ["ma::rising temperatures::"], sectors:["ma::public health"]}}),
           id: "heat_and_public_health",
           content: <div>
            <p>Beyond this overall warming trend, Massachusetts will experience increasing days of extreme heat in the future.  Generally, extreme heat is considered to be over 90 degrees, because at temperatures above that threshold, heat-related illnesses and mortality show a marked increase.</p>

            <p>The average summer across the Commonwealth during the years between 1971 and 2000 included 4 days over 90 degrees.  Climate scientists project that by mid-century, the state could have a climate that resembles that of southern states today, with between 10-28 days over 90.</p>

            <p> By the end of the century extreme heat could occur between 13-56 days during summer. depending on how successful we are in reducing greenhouse gas emissions. </p>

            <table className='table chart t-c' style={{textAlign: "center"}}>
                <thead>
                  <tr className='blue'>
                    <th colSpan='2'> <h5>Climate Indicator</h5> </th>
                    <th> <h4>Observed Value</h4>1971-2000 Average</th>
                    <th> <h4>Mid-Century</h4> Projected Change in 2050s</th>
                    <th> <h4>End of Century</h4>Projected Change in 2090s</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan='2' className='grey'>Maximum Temperature</td>
                    <td>Summer</td>
                    <td>78.9 °F</td>
                    <td>Increase by 2.6 - 6.7 °F</td>
                    <td>Increase by 3.6 - 12.5 °F</td>
                  </tr>
                  <tr>
                    <td>Fall</td>
                    <td>60.6 °F	</td>
                    <td>Increase by 3.4 - 6.8 °F</td>
                    <td>Increase by 3.8 - 11.9 °F</td>
                  </tr>
                  <tr>
                    <td rowSpan='2' className='grey'>Minimum Temperature</td>
                    <td>Winter</td>
                    <td>17.1 °F</td>
                    <td>Increase by 3.3 - 8.0 °F</td>
                    <td>Increase by 4.6 - 11.4 °F</td>
                  </tr>
                  <tr>
                    <td>Fall</td>
                    <td>39.4 °F</td>
                    <td>Increase by 3.5 - 6.5 °F</td>
                    <td>Increase by 4.0 - 11.4 °F</td>
                  </tr>
                  <tr>
                    <td className='grey'>Days with Maximum<br/> Temperature &gt; 90°F</td>
                    <td>Summe</td>
                    <td>4 days</td>
                    <td>Increase by 6 - 22 days</td>
                    <td>Increase by 9 - 52 days</td>
                  </tr>
                  <tr>
                    <td rowSpan='3' className='grey'>Days with Minimum<br/>Temperature &lt; 32°F</td>
                    <td>Winter</td>
                    <td>82 days</td>
                    <td>Decrease by 4 - 12 days</td>
                    <td>Decrease by 6 - 25 days</td>
                  </tr>
                  <tr>
                    <td>Spring</td>
                    <td>37 days</td>
                    <td>Decrease by 6 - 15 days</td>
                    <td>Decrease by 9 - 20 days</td>
                  </tr>
                  <tr>
                    <td>Fall</td>
                    <td>27 days</td>
                    <td>Decrease by 8 - 13 days</td>
                    <td>Decrease by 8 - 20 days</td>
                  </tr>
                </tbody>
            </table>

            <h6 style={{textAlign: 'center', marginBottom: '20px'}}>Projected changes in temperature variables by the middle and end of century based on climate models and the medium and high pathways of future greenhouse gas emissions.</h6>

            <p>Extreme heat can be especially devastating in urban areas, where there is often a concentration of vulnerable populations, and where more paved surfaces and a lack of vegetation create a “heat island effect” that makes them much hotter than neighboring rural areas.</p>

            <p>The annual mean air temperature of a city with more than one million people can be between 1.8 and 5.4ºF warmer than its surrounding areas. In the evening, the difference in air temperatures can be as high as 22ºF!  Urban residents in Massachusetts–especially those who are very young, ill, or elderly, and those who live in older buildings without air conditioning–will face greater risks of serious heat-related health illnesses when extreme heat becomes more common.</p>

            <p>Yet another public health risk from rising temperatures is an increase in vector borne-diseases.  Warming conditions are one of several factors that have contributed to increased populations of black-legged ticks in northern states that can transmit pathogens causing serious diseases like Lyme disease and anaplasmosis.</p>

            <p>Exposure to allergens is also likely to increase as the growing season lengthens. Research from the Midwest confirms that the ragweed pollen season has increased by over two weeks since 1995 in northern states.  And certain climatic patterns accompanying warmer temperatures can intensify air pollution, too.  For these reasons, climate change has been linked to increasing rates of asthma.</p>

           </div>,
          subsections: []
          },
          {title: "More Impacts from Rising Temperatures",
           id: "more_impacts_from_rising_temperatures",
           content: <div>
           </div>,
            subsections: [
              {name: "Agriculture and Livestock",
               href: searchURL({facets:{sectors:['ma::agriculture']}}),
              id: "ag_and_livestock",
              content: <div>
                <p>Warming temperatures will change plant hardiness zones and the viability of certain crops in the Northeast, while creating opportunities for new ones.  Intensified weed and pest pressure associated with longer growing seasons and warmer winters is likely to become an increasingly important challenge for farmers. Early spring blooms followed by a killing frost may also have devastating consequences for crops like apples and peaches. Extreme heat and the dry conditions or drought could be detrimental to crop production and harvest, and could also cause heat-related stress among livestock and reduce milk yield from dairy cattle.</p>
              </div>
              },
              {name: "Aquatic Habitats",
               href: searchURL({facets:{sectors:['ma::water resources']}}),
               id: "aquatic_habitats",
               content: <div>
                  <p>Warming temperatures can deplete lakes and ponds of oxygen and create more favorable conditions for harmful algal blooms. Cold water fisheries that support cold-adapted species like brook trout are particularly sensitive to changes in in-stream temperatures.  Ocean temperatures will change more slowly, but Massachusetts is already seeing climate-induced changes in its traditional fisheries.</p>
              </div>
              },
              {name: "Terrestrial Habitats",
               href: searchURL({facets: {sectors:['ma::natural resources / habitats']}}),
               id: 'terrestrial_habitats',
               content: <div>
                <p>Plants and animals that are particularly adapted to certain temperature and precipitation regimes or that rely on habitats sensitive to changes in climate will be most vulnerable to rising temperatures.  There may be an increase in parasite load on some species, like moose, resulting in higher mortality.  As habitats change, plant and animal species from maple trees to lynx may migrate to higher elevations and more northern latitudes if they can.</p>
              </div>
              },
              {name: "Energy Systems and Infrastructure",
                href: searchURL({facets: {sectors:['ma::infrastructure','ma::energy']}}),
                id: 'energy_systems_and_infrastructure',
                content: <div>
                  <p>While warmer winters may reduce burdens on energy systems, more heat in the summer may put larger demands on aging systems, creating the potential for power outages. The number of cooling degree days is expected to increase significantly by the end of the century.  In addition, heat can stress transmission lines, substations, train tracks, roads and bridges, and other critical infrastructure.</p>
                </div>
              },
              {name: "Drought and Wildfires",
                href: searchURL({facets: {climate_changes: ["ma::extreme weather::drought"]}}),
                id: "drought_wildfires",
                content: <div>
                  <p>Seasonal drought risk is projected to increase during summer and fall in the Northeast as higher temperatures lead to greater evaporation and earlier winter and spring snowmelt, coupled with more variable precipitation patterns.  Drought and warmer temperatures may also heighten the risk of wildfire, by causing forested areas to dry out and become more flammable. </p>
                </div>
              }
          ]
          },
        ]} >

        <p>The eight warmest years on record–2016, 2015, 2014, 2010, 2013, 2005, 2009, and 1998—have all occurred in the last twenty years according to the U.S. National Oceanographic and Atmospheric Administration.  Average global temperatures have risen steadily in the last fifty years, and scientists warn that the trend will continue unless greenhouse gas emissions are significantly reduced. </p>

        <p>The Commonwealth’s climate shows a pronounced warming trend.  Using the <MapLink>resilient MA Map</MapLink>  and <DatagrapherLink>Data Grapher</DatagrapherLink>, local government staff, elected officials, community groups and others can explore how average temperatures have changed in different parts of the state, and how they are projected to rise in future decades–both on an annual basis, and seasonally.</p>

        <p>Warmer temperatures and extended heat waves could have very significant impacts on public health in our state, as well as the health of plants, animals and ecosystems like forests and wetlands.  Rising temperatures will also affect important economic sectors like agriculture and tourism, and infrastructure like the electrical grid.</p>

        <p>There are many steps that can be taken today to begin preparing for the impacts of warming.  Start planning now to lessen risks down the road.</p>

        </ChangesLayout>
    );
  }
}

export default RisingTemperatureChangesPage;
