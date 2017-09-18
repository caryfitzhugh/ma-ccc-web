import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import energy_image from '../images/sectors/energy.jpg';
import SearchLink from '../utils/search_link';
import {Footnote} from '../utils/footnotes';

const ActionLink = (props) => {
  return <li>
    <SearchLink params={{facets:{sectors: ["ma::energy"]}, query: props.q}}>
      {props.children}
    </SearchLink>
  </li>
}

class EnergySectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
      collection_name: "MA/energy/highlighted_resources"
    };

    return (
      <SectorDetailLayout
        title="Energy"
        sector_name="energy"
        image={energy_image}
        image_credit="FEMA/Jocelyn Augustino"
        showcased_resources={showcased_resources}
        footnotes={[
          <span> Massachusetts Dept. of Energy Resources, RPS & APS Compliance Year 2014 Report, Appendix Three, Table H </span>,
          <span> MassSave, Massachusetts Joint Statewide Three-Year Electric and Gas Energy Efficiency Plan (2013-2015), p. 103.</span>,
          <span> Massachusetts Clean Energy Center, 2015 Clean Energy Industry Report, p. 36.</span>,
        ]}
        sections={ [
          {title: "Impacts",
            id: 'impacts',
            content: <p>
              The Massachusetts energy sector‘s primary climate change concerns include flooding (due to increased precipitation and storm surge), extreme weather events (such as hurricanes and snow and ice storms), and increased heat wave prevalence and duration.  In addition, climate change impacts that affect energy production in regions beyond Massachusetts’ borders, such as the Gulf Coast, could cause greater frequency and severity of energy supply interruptions for the Commonwealth. The following impacts are predicted to affect energy infrastructure:
              </p>,
            subsections: [
              { name:"Sea Level Rise",
                id: "impacts_slr",
                content: <ul>
                  <ActionLink q='energy sea level rise infrastructure'>Sea level rise and storm-related flooding may damage existing coastal infrastructure and require new real estate acquisitions for replacement sites.</ActionLink>
                </ul>
              },
              { name: "Changes in Precipitation",
                id: 'impacts_changes_in_precipitation',
                content: <ul>
                  <ActionLink q='energy inland flooding precipitation infrastructure'>Inland flooding from extreme precipitation events may damage infrastructure.</ActionLink>
                </ul>
              },
              { name: "Extreme Weather",
                id: "impacts_extreme_weather",
                content: <ul>
                  <ActionLink q='energy extreme weather infrastructure'>Extreme and more frequent disruptive weather events may damage energy production and delivery equipment such as power plants gas terminals storage facilities and above and below-ground wires and pipes.</ActionLink>
                  <ActionLink q='energy extreme weather infrastructure reliability'>Damaged infrastructure will lead to interrupted service degraded energy reliability increased equipment maintenance or replacement costs and   public safety concerns associated with loss of energy services to critical facilities.</ActionLink>
                </ul>
              },
              { name: "Rising Temperatures",
                id: "impacts_rising_temperatures",
                content: <ul>
                  <ActionLink q='energy rising temperatures cooling demand'>Extreme temperature changes could result in an increased demand for cooling in summer and a decreased demand for heating in winter straining existing equipment.  The increased demand for cooling coincides with current peak system demands effectively increasing energy prices and impacting energy resilience.</ActionLink>
                  <ActionLink q='energy rising temperatures reliability'>Increased temperatures may also strain grid reliability.</ActionLink>
                </ul>
              }
            ]},
          {title: "Actions",
            id: 'actions',
            content: <p>
              Learn what you can do to address climate change in the Energy Sector.
              </p>,
            subsections: [
              { name:"Planning",
                id: "actions_planning",
                content: <ul>
                  <ActionLink q='energy planning peak demand'>Plan for peak demand growth associated with changing temperature levels.</ActionLink>
                  <ActionLink q='energy planning disruption reliability'>Plan for more frequent extreme event disruptions and response plans to mitigate the impacts. </ActionLink>
                  <ActionLink q='energy planning distributed generation'>Plan for continued integration of clean distributed energy resources.</ActionLink>
                </ul>
              },
              { name: "Management Practices",
                id: 'actions_management_practices',
                content: <ul>
                  <ActionLink q='energy management practices energy efficiency'>Encourage energy efficiency.</ActionLink>
                  <ActionLink q='energy management practices design criteria'>Develop design criteria for new and retrofitted infrastructure.</ActionLink>
                </ul>
              },
              { name: "Outreach / Education",
                id: "actions_outreach",
                content: <ul>
                  <ActionLink q='energy outreach risk climate change vulnerability'>Educate asset owners and consumers about vulnerabilities incentives and available supply options. </ActionLink>
                </ul>
              },
              { name: "Technology",
                id: "actions_tech",
                content: <ul>
                <li>
                  <ActionLink q='energy technology renewable'>Diversify energy supplies</ActionLink>
                  <ul>
                    <ActionLink q='energy technology solar'>Solar</ActionLink>
                    <ActionLink q='energy technology wind'>Wind</ActionLink>
                    <ActionLink q='energy technology hydroelectricity'>Hydroelectricity</ActionLink>
                    <ActionLink q='energy technology biomass'>Other Renewables</ActionLink>
                  </ul>
                </li>
                <ActionLink q='energy technology grid'>Implement Grid Modernization. </ActionLink>
                <ActionLink q='energy technology energy storage'>Increase energy storage deployment.</ActionLink>
                <ActionLink q='energy technology energy efficiency'>Utilize and accelerate deployment of new energy efficiency technologies.</ActionLink>
                </ul>
              },
              { name: "Policies / Laws",
                id: "actions_policies_laws",
                content: <ul>
                  <ActionLink q='energy policy infrastructure'>Coordinate between municipalities utilities and state agencies to enhance energy infrastructure.</ActionLink>
                  <ActionLink q='energy policy resilience'>Consider energy resilience in policy design and implementation.</ActionLink>
                </ul>
              },
              { name: "Research / Monitoring",
                id: "actions_research",
                content: <ul>
                  <ActionLink q='energy monitoring demand'>Monitor trends and correlations of energy demand with emerging weather trends.</ActionLink>
                  <ActionLink q='energy research'>Encourage research and development of renewable energy and energy storage systems.</ActionLink>
                </ul>
              },
              { name: "Funding",
                id: "actions_funding",
                content: <ul>
                  <ActionLink q='energy funding Massachusetts energy efficiency'>Continue to promote energy efficiency particularly in order to reduce system peak demand.</ActionLink>
                  <ActionLink q='energy funding distributed generation Massachusetts'>Continue to provide incentives for distributed generation units such as Green Communities Renewable Portfolio Standard (RPS) Alternative Portfolio Standard (APS) Solar Massachusetts Renewable Target (SMART) Program Energy Storage Initiative Community Clean Energy Resiliency Initiative clean energy procurements and competitive grant processes.</ActionLink>
                  <ActionLink q='energy funding Massachusetts vulnerability assessment'>Provide financial assistance to identify and address vulnerabilities.</ActionLink>
                  <ActionLink q='energy funding Massachusetts renewable energy'>Provide incentives for renewable energy resources. </ActionLink>
                </ul>
              }
            ]},
          {title: "Looking for help?",
            id: 'looking_for_help',
            subsections: [],
            content: <ul>
              <ActionLink q='Massachusetts DOER'>Massachusetts DOER</ActionLink>
              <ActionLink q='Regional Greenhouse Gas Initiative'>Regional Greenhouse Gas Initiative (RGGI)</ActionLink>
              <ActionLink q='Transportation and Climate Initiative of the Northeast and Mid-Atlantic States'>Transportation and Climate Initiative of the Northeast and Mid-Atlantic States</ActionLink>
            </ul>
          }
        ]}
        >
        <p>
          The Energy sector encompasses energy supply, demand, transmission, distribution, fuel sources, and technologies (transport-related energy considerations are covered in the infrastructure sector).  Reliable energy services are required to meet the needs of residents, businesses, visitors, and government.  Massachusetts has strong GHG emission reduction commitments which require a significant reduction in dependence on fossil-based energy sources. Since 2007, use of solar photovoltaic (PV) systems increased 800-fold, while installed wind energy increased
            nine-fold<Footnote num='1' />.
            In that same period, Massachusetts launched the most aggressive energy efficiency program in the country, with estimated savings of over $2.5 billion each year for residential, municipal, industrial and commercial
            customers<Footnote num='2'/> and 47,000 energy efficiency and building envelope jobs sustained or
            created<Footnote num='3'/>.  Additionally, the State is in the process of conducting clean energy procurements for 9,450,000 MWh of clean energy and 1,600 MW of offshore wind.
        </p>
        <p>
          While the Commonwealth has embraced the use of renewable energy sources, the energy system is still vulnerable to climate change.  Potential climate change vulnerabilities include flooding damage to coastal power plants and infrastructure, extreme weather event disruptions to electricity transmission and distribution, more frequent severe increase the likelihood of powerline damage and a changing energy demand profile associated with changing weather trends.
        </p>
        <p>
          In addition to the efforts the Commonwealth has taken to minimize the energy sector’s impact on climate change, it can also embrace energy adaptation strategies to increase the resilience of key sectors.  Actions include grid modernization efforts to increase the ability to control, sectionalize, and rapidly return service to the distribution system, incentivizing distributed generation and energy storage technologies to provide service to critical loads during outages, improving energy efficiency and system peak demand reduction to reduce strain on electrical equipment during heat waves, and considering saltwater intrusion concerns when designing new coastal infrastructure.
        </p>
        </SectorDetailLayout>
    );
  }
}

export default EnergySectorPage;
