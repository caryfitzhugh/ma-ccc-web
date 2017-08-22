import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

class AboutPage extends Component {
  render() {
    return (
      <div className='about-page'>
        <Header />
          <div className='container'>
            <h1>About this Website</h1>
            <p>The Climate Change Clearinghouse (CCC) is a gateway for policymakers, local planners, and the
              public to identify and access climate data, maps, websites, tools, and documents relevant to climate
              change adaptation and mitigation across Massachusetts. The goal of the website is to support
              scientifically sound and cost-effective decision-making and to enable users to plan and prepare for
              climate change impacts. The vision is a dynamic site where users can find information in multiple
              ways, including through interactive tools that use data from different sources.</p>

            <h2>What is a Clearinghouse?</h2>
            <p>A clearinghouse collects and offers information on a given topic. The CCC provides access to
            resources relevant to mitigation of, adaptation to, and building resiliency for climate change in
            Massachusetts. This includes information about greenhouse gas emissions and atmospheric
            concentrations, projected temperature and precipitation changes, climate effects such as sea level
            rise and extreme weather events, and more. It also catalogs specific vulnerabilities, risks, and
            strategies for and across sectors, including agriculture, forestry, buildings, coastal zones, education,
            energy, local government, natural resources/habitats, public health, public safety/emergency
            management, recreation, transportation, and water resources. </p>

            <h2>How is the CCC different from other climate sites?</h2>
            <p>The CCS offers a curated clearinghouse with a comprehensive search feature, a customizable data
            grapher, and an interactive map and GIS viewer.</p>
            <h4>Curated clearinghouse</h4>
            <p> CCC’s curator prioritizes resources to include based on their credibility and
            relevance to the users. The curator also makes choices about the resources included on the site
            based on the CCSC Business Rules (described below). Search feature. The CCC search feature
            allows users to search by keyword and to filter searches by sector, resource type, climate changes,
            strategies, and actions. Users may also sort resources by location in Massachusetts. </p>

            <h4>Interactive map and GIS viewer</h4>
            <p> The CCC interactive map of climate change and related data
            allows users to select map layers to display from a menu, find layers by a sector or zoom in to
            analyze changes in their area. . Within the map layers, users can vary parameters within certain
            layers, and select from a variety of base layers and regional boundaries. For each map layer, links
            are available to metadata and the original source. Users can export and download their custom
            maps or create a unique URL to share the maps they develop.</p>

            <h4>Customizable climate data grapher</h4>
            <p> The CCC climate data grapher is an interactive tool to
            generate time-series graphs for climate changes with historical data and future projections. Users
            can export and download the charts for use in their own materials.
                </p>

            <h2>Intended Audience</h2>
            <p>
            The CCC welcomes policymakers, analysts, scientists, planners, businesses, and the general public
            to the site; however, the primary intended audiences are local planners and decision-makers and
            those who support their work, as well as state agency staff. The CCC streamlines the decision-
            making process by helping to identify problems, investigate solutions, and take action. A decision-
            maker can use the CCC to identify vulnerable infrastructure, residential areas, and ecosystems;
            evaluate the risks posed by climate change; and develop strategies and implementation plans for
            their town or city.</p>

            <h2>Populating the CCC</h2>

            <h4>What is included on the site</h4>
            <p> The CCC contains resources, data, and information that support
            decision-makers and planners in their work to address climate change. This content includes
            information on greenhouse gas emissions and atmospheric concentrations, climate changes, effects,
            strategies for mitigating, adapting to, and building resiliency for climate change, and tools for
            implementing these strategies. The CCC is committed to including information with scientific merit
            from credible sources. Where applicable, the CCC chooses data and information that Massachusetts
            uses for statewide and local climate planning.</p>

            <h4>Business rules for the site</h4>
            <p> The CCC Business Rules define what resources are included on the
            CCSC, with what priority, and in what form. The Business Rules were developed in collaboration
            with a group of sector experts to understand how the experts evaluate the resources that they use in
            their own work. The Business Rules address the scope, source, and format of resources considered
            for inclusion on the site.
                </p>

            <h2>About Us</h2>
            <h4>Project Background</h4>
            <p>State and local planners that are addressing climate change consistently reported that information
            was plentiful, but no central space existed for neighboring communities to identify and access it. The
            task of locating and sorting through information about vulnerabilities, as well as developing,
            researching, and assessing mitigation and adaptation strategies, was often difficult and time
            consuming.</p>
            <p>
            Offering curated documents, data, websites, tools, and maps in an online repository lessens the
            burden on individual municipalities and businesses, helps people make decisions about what
            information is credible, and promotes joint planning and information sharing. The customizable data
            and map products are meant to ease the job of the local planner in analyzing information, making
            and implementing plans, and educating the public.</p>

            <h4>About the Contributors</h4>
            <p>
            The development of the MA CCC was supported by the Executive Office of Energy and
            Environmental Affairs. The original development of the CCC was initiated and supported by the New
            York State Energy Research and Development Authority (NYSERDA). The project team
            includes Northeast States for Coordinated Air Use Management (NESCAUM), Cornell University’,
            the Northeast Regional Climate Center (NRCC), the State University of New York Environmental
            Sciences and Forestry’s (SUNY ESF) Department of Forest and Natural Resource Management,
            and the Northeastern Regional Climate Services Director of the National Oceanic and Atmospheric
            Administration (NOAA).</p>
          </div>

          <h4> Creative Commons Attribution</h4>

          <p> This site uses icons from the nounproject.  They are licensed under the <a href='https://creativecommons.org/licenses/by/3.0/legalcode'>creative commons license</a>.

            <ul>
              <li><a rel="noopener noreferrer" href='https://thenounproject.com/search/?q=lighthouse&i=173083' target='_blank'>Lighthouse by Stanislav Levin from the Noun Project</a></li>
              <li><a rel='noopener noreferrer' href='https://thenounproject.com/search/?q=leaf%20recycle&i=853085' target='_blank'>leaf by Adrien Coquet from the Noun Project</a></li>
              <li><a rel='noopener noreferrer' href='https://thenounproject.com/search/?i=974221' target='_blank'>forestry by Gan Khoon Lay from the Noun Project</a></li>
              <li><a rel='noopener noreferrer' href='https://thenounproject.com/search/?q=bridge%20suspension&i=1026023' target="_blank">bridge by Edwin Prayogi M from the Noun Project</a></li>
              <li><a rel='noopener noreferrer' href='https://thenounproject.com/search/?q=camping%20tent%20tree%20cloud&i=1009581' target='_blank'>Tent by Eucalyp from the Noun Project</a></li>
              <li><a rel='noopener noreferrer' href='https://thenounproject.com/search/?q=public%20safety%20EMT&i=974364' target='_blank'>Emergency Medical Technician by Gan Khoon Lay from the Noun Project</a></li>
            </ul>
          </p>
        <Footer />
      </div>
    );
  }
}

export default AboutPage;
