import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import energy_image from '../images/sectors/energy.jpg';
import SearchLink from '../utils/search_link';
import {Footnote} from '../utils/footnotes';

const ESearchLink = (props) => {
  return <SearchLink params={{facets: {sectors: ["ma::energy"], climate_changes: props.changes, actions: props.actions}, query: props.q}}>
      {props.children}
    </SearchLink>

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
        image={energy_image}
        image_credit="FEMA/Jocelyn Augustino"
        showcased_resources={showcased_resources}
        footnotes={[
          <span> Massachusetts Dept. of Energy Resources, RPS & APS Compliance Year 2014 Report, Appendix Three, Table H </span>,
          <span> MassSave, Massachusetts Joint Statewide Three-Year Electric and Gas Energy Efficiency Plan (2013-2015), p. 103.</span>,
          <span> Massachusetts Clean Energy Center, 2015 Clean Energy Industry Report, p. 36.</span>,
        ]}
        sections={[
          { title: "Impacts",
            id: "impacts",
            content: <p>
              The Massachusetts energy sector‘s primary climate change concerns include flooding, extreme weather events, and increased heat wave prevalence and duration. In addition, climate change impacts that affect energy production in regions beyond Massachusetts’ borders, such as the Gulf Coast, could cause greater frequency and severity of energy supply interruptions for the Commonwealth.
            </p>,
            subsections: [
              {name: <ESearchLink changes={["ma::rising temperatures::"]}>Rising Temperatures</ESearchLink>,
                id: "impacts_rising_temperatures",
                content: <div>
                  <p>Cooling and heating degree-days, or the measure of how much and for how long outside air temperature was higher or lower than a specific base temperature, is often used as a proxy for energy consumption required to cool or heat buildings. Summer cooling degree-days are expected to increase over 45% by mid-century and by over 65% by the end of the century. Meanwhile, winter heating degree-days are expected to decrease by more than 5% by mid-century and by more than 10% by the end of the century.  This could put upward pressure on greenhouse gas emissions.  Also, while warmer winters may reduce burdens on energy infrastructure, more heat in the summer may put larger demands on aging systems, creating the potential for power outages.  In addition, heat can stress transmission lines, substations, train tracks, roads and bridges, and other critical infrastructure.</p>
                </div>
              },
              {name: <ESearchLink changes={["ma::changes in precipitation::"]}>Changes in Precipitation</ESearchLink>,
                id: "impacts_changes_in_precipitation",
                content: <div>
                  <p>Changes in precipitation, including an increase in annual amounts of rainfall in Massachusetts and a concentration of that rainfall in heavier downpours, may increase the risk of inland and coastal flooding along rivers, streams, and lakeshores and in areas where stormwater infrastructure is not sized to accommodate the larger amounts of runoff.  Energy infrastructure in these areas could be at risk of damage from this higher incidence of flooding.</p>
                </div>
              },
              {name: <ESearchLink changes={["ma::extreme weather::"]}>Extreme Weather</ESearchLink>,
                id: "impacts_extreme_weather",
                content: <div>
                  <p>More frequent disruptive weather events with higher winds and more intense rainfall or snowfall will increase the risks of storm damage to energy production and delivery equipment such as power plants, gas terminals, storage facilities, and above and below-ground wires and pipes. Damaged infrastructure will lead to interrupted service, degraded energy reliability, increased equipment maintenance or replacement costs, and public safety concerns associated with loss of energy services to critical facilities.  Extreme weather in other parts of the country may also disrupt energy supplies and transport, a reality that highlights the value of investing in more in-state distributed energy facilities like solar arrays and wind turbines.</p>
                </div>
              },
              {name: <ESearchLink changes={["ma::sea level rise::"]}>Sea Level Rise</ESearchLink>,
               id: "impacts_sea_level_rise",
               content: <div>
                  <p>In the coastal zone, sea level rise will increase the range of tidal inundation and expand the impact and force of coastal storm surge, creating risks for energy facilities and infrastructure located near the coast. Saltwater intrusion may cause accelerated corrosion and harm to equipment and instruments associated with power stations, while flooding may completely shut down certain facilities. Disruptions to energy services along the populated Massachusetts coast will have major impacts on communities as other energy-dependent services like telecommunications or water treatment are affected. Over time, energy infrastructure may need to be relocated to higher ground to ensure reliability, requiring costly new real estate acquisitions for replacement sites. </p>
               </div>
              },
            ]
        },
        { title: "Actions",
          id: "actions",
          content: <p>
            Learn what you can do to address climate change in the Energy Sector.
          </p>,
          subsections: [
            {name: <ESearchLink actions={["ma::planning::"]}>Planning</ESearchLink>,
              id: 'actions_planning',
              content: <ul>
                <li>Plan for peak demand growth associated with changing temperature levels.</li>
                <li>Collaborate across utilities, state, and local government to plan for the risk of more frequent and large sale power outages triggered by extreme storms or heat; ensure a coordinated response especially for vulnerable populations.</li>
                <li>Plan for continued integration of clean, distributed energy resources.</li>
                <li>Support grid modernization efforts to increase the ability to control, sectionalize, and rapidly return disrupted services to the distribution system.</li>
                <li>Explore the feasibility of micro-grids at critical facilities like schools and hospitals to avoid disruption from outages and provide resilient energy resources for sheltering people during disasters.</li>
              </ul>
            },
            {name: <ESearchLink q="management practices">Management Practices</ESearchLink>,
            id: "actions_management_practices",
            content: <ul>
                <li>Encourage and invest in energy efficiency measures and technologies in buildings, infrastructure, and other applications to reduce strain on the electric grid and electrical equipment during peak demand periods like heat waves.</li>
                <li>Develop design criteria for new and retrofitted infrastructure.</li>
                <li>Promote energy conservation in municipal facilities, businesses, and homes across Massachusetts to reduce peak demand and support grid reliability.</li>
            </ul>
          },
          {name: <ESearchLink actions={["ma::outreach/education::"]}>Outreach / Education</ESearchLink>,
            id: "actions_tech",
            content: <ul>
                <li>Educate energy asset owners and consumers about vulnerabilities, incentives for investing in clean and resilient distributed resources, and available supply options.</li>
            </ul>
          },
          {name: <ESearchLink actions={["ma::implementation action/direct action on target::technology"]}>Technology</ESearchLink>,
            id: "actions_tech",
            content: <ul>
                <li>Diversify energy technologies and sources.</li>
                <li>Implement grid modernization. </li>
                <li>Increase energy storage deployment, as the Commonwealth is doing through its <a href='https://www.mass.gov/energy-storage-initiative'>Energy Storage Initiative.</a> </li>
                <li>Utilize and accelerate deployment of new energy efficiency technologies. </li>
            </ul>
          },
            {name: <ESearchLink actions={["ma::planning::policies/laws/regulations"]}>Policies / Laws</ESearchLink>,
            id: "actions_policies_laws",
            content: <ul>
                <li>Coordinate across municipalities, utilities, and state agencies to enhance energy infrastructure for a changing climate and for a clean energy economy. </li>
                <li>Consider energy resilience in policy design and implementation, for example, by adopting policies and offering incentives that will support continued growth in distributed energy resources.</li>
            </ul>
          },
          { name: <ESearchLink q="research monitoring">Research/Monitoring</ESearchLink>,
            id: 'actions_research',
            content: <ul>
                <li>Monitor trends and correlations of energy demand with emerging weather trends. </li>
                <li>Encourage research and development of renewable energy and energy storage systems. </li>
            </ul>
          },
          { name: <ESearchLink actions={["ma::implementation action/direct action on target::financing"]}>Funding</ESearchLink>,
            id: "actions_funding",
            content: <ul>
              <li><a href='https://www.mass.gov/orgs/green-communities-division'> Green Communities program grants and technical assistance </a></li>
              <li><a href='http//www.mass.gov/community-clean-energy-resiliency-initiative'> Community Clean Energy Resiliency Initiative grants </a></li>
              <li><a href='http://www.masscec.com/'> Mass Clean Energy Center (MACEC) financing options and technical assistance</a></li>
              <li><a href='https://www.masssave.com/en/'> Mass Save loans, rebates and incentives </a></li>
              <li><a href='https://www.mass.gov/service-details/development-of-the-solar-massachusetts-renewable-target-smart-program'> Soon-to-arrive Solar Massachusetts Renewable Target (SMART) Program </a></li>
            </ul>
          }
          ]
        },
        { title: "Looking for help?",
          id: "looking_for_help",
          content: <div>
            <ul>
              <li><SearchLink params={{query:"Massachusetts DOER"}}>Massachusetts DOER</SearchLink></li>
              <li><SearchLink params={{query:"Mass Clean Energy Center"}}> Massachusetts Clean Energy Center</SearchLink> and Mass Save</li>
              <li><a href='https://www.mass.gov/energy-storage-initiative'>Mass - Energy Storage Initiative (ESI)</a></li>
            </ul>
          </div>,
          subsections: []
        }
        ]}

        >
        <p>Reliable energy services are essential for Massachusetts residents, businesses, visitors, and government. The energy sector that provides these services encompasses energy supply, demand, transmission, distribution, fuel sources, and technologies. As the state’s climate changes, there will be significant vulnerabilities for energy services and infrastructure, as well as new opportunities to pursue clean energy investments that reduce greenhouse gas emissions, grow jobs, and enhance our prosperity.</p>
        <p>Massachusetts has strong GHG emission reduction commitments that require a significant reduction in our dependence on fossil-based energy sources. Since 2007, use of solar photovoltaic (PV) systems has increased 800-fold and installed wind energy has increased nine-fold<Footnote num='1'/>. In that same period, Massachusetts launched the most aggressive energy efficiency program in the country, with estimated savings of over $2.5 billion each year for residential, municipal, industrial, and commercial customers<Footnote num='2'/> and 47,000 energy efficiency and building envelope jobs sustained or created. <Footnote num='3'/></p>
        <p>Local governments, businesses, educational and community organizations, and property owners can all become energy leaders helping to support this transition to a new and more resilient clean energy economy.</p>
        <p>Climate-related vulnerabilities for the energy system are serious, and we must address them by reducing risks and planning for energy-related disruptions. Those vulnerabilities include flood damage to coastal power plants and infrastructure, extreme weather event disruptions to electricity transmission and distribution, increasing risks of powerline damage, and a changing energy demand profile associated with changing weather trends.</p>
        <p>The Commonwealth can embrace a wide range of energy adaptation strategies to increase the resilience of infrastructure and services, for example by modernizing the grid, incentivizing distributed generation and energy storage technologies to provide service to critical facilities during outages, and considering saltwater intrusion concerns when designing new coastal infrastructure.</p>

        </SectorDetailLayout>
    );
  }
}

export default EnergySectorPage;
