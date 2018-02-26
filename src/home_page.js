import React, { Component } from 'react';
import Header from './header';
import ImageCarousel from './home_page/image_carousel';
import { Link } from 'react-router-dom';
//import SearchBar from './search_bar';
import ResourceBlocks from './home_page/resource_blocks';
import Sectors from './home_page/sectors';
import SectionHeader from './home_page/section_header';
import Footer from './footer';
import SectorsAll from './sectors/all';
import './home_page.css';
import logo_img from './images/logo.png';
import Isvg from 'react-inlinesvg';

import climate_change_data_img from './images/home_page/carousel/climate_change_data.png';
import carousel2 from './images/home_page/carousel/2.jpg';
import carousel3 from './images/home_page/carousel/3.jpg';
import mvp_carousel from './images/home_page/carousel/mvp.jpg';
import maps_block_img from './images/home_page/blocks/maps.png';
import data_block_img from './images/home_page/blocks/data.png';
import documents_block_img from './images/home_page/blocks/documents.png';

import rising_temperatures_svg from './images/home_page/rising_temperatures.svg';
import precipitation_changes_svg from './images/home_page/precipitation_changes.svg';
import extreme_weather_svg from './images/home_page/extreme_weather.svg';
import sea_level_rise_svg from './images/home_page/sea_level_rise.svg';
import sea_level_rise_img from './images/home_page/carousel/sea_level_rise.jpg';

import planning_img from './images/home_page/blocks/planning.jpg';
import outreach_img from './images/home_page/blocks/outreach.png';
import take_action_implementation_img from './images/home_page/blocks/take_action_implementation.png';

class Homepage extends Component {
  render() {
    let slides = [
      {   image: mvp_carousel,
          className: 'mvp-slide',
          title: "Municipal Vulnerability Preparedness",
          text: "Our cities and towns are on the front lines of climate change.  The new MVP program from the Executive Office of Energy and Environmental Affairs works with communities across the state to decrease risk, build resiliency, and identify strengths and opportunities through targeted planning and action.",
          href: "http://www.mass.gov/eea/air-water-climate-change/climate-change/massachusetts-global-warming-solutions-act/municipal-vulnerability-preparedness-program.html"},
      {   image: carousel3,
          title: "Climate Planning",
          text: <span>In September of 2016, Governor Baker signed a <a href='https://www.mass.gov/news/governor-baker-signs-climate-change-strategy-executive-order' target='_blank'> comprehensive climate change Executive Order</a>, committing the administration to work across the state to plan and prepare for the impacts of climate change. Climate planning involves understanding vulnerability to climate change, identifying actions to reduce risk, setting priorities, developing an action plan, and implementing and refining the plan.</span>,
          href: "/actions/planning"},
      {   image: climate_change_data_img,
          className: 'climate-change-data-slide',
          title: "Climate Change Data",
          text: "The Baker-Polito Administration is investing in the best science and data to understand how the climate is projected to change and to allow Massachusetts to plan and adapt for the future.",
          href: "/data/data"},
      {   image: carousel2,
          image_credit: "MA Division of Ecological Restoration",
          className: 'take-action-slide',
          title: "Take Action",
          text: "Temperatures are climbing, precipitation is becoming more intense, sea level is rising and extreme weather is becoming more frequent.  The Commonwealth is working across state government and with our cities and towns to reduce climate change emissions, understand local climate change impacts, and build 351 resilient communities.",
          href: "/actions"},
    ];

    let blocks = [
       {title: 'Maps',
        id: 'maps',
        text: 'Use maps to identify climate change impacts and assess vulnerabilities in Massachusetts. ',
        image: maps_block_img,
        image_credit:"National Weather Service",
        href: "/data/maps",
        },
       {title: 'Data',
        text: 'Explore Massachusetts climate science and data through interactive charts. ',
        id: "data",
        image: data_block_img,
        href: "/data/data",
        },
       {title: 'Documents',
        text: 'Discover reports, articles, plans, and other climate-related resources relevant to Massachusetts.',
        id: 'documents',
        image: documents_block_img,
        href: `/data/documents`
       }
     ];

     let sectors = SectorsAll.sorted;

     let changes= [
      { icon: rising_temperatures_svg,
        icon_cls: 'rising-temperatures',
        title: "Rising Temperatures",
        text: "Rising temperatures will lead to more frequent heat waves, and increases in heat-related illness and mortality. Other challenges include impacts to energy systems, infrastructure and air quality. Warmer winters and changes in the timing of seasons will impact agriculture and wildlife, as well as the tourism industry. ",
        href: "/changes/rising-temperatures"},

      { icon: precipitation_changes_svg,
        icon_cls: "precipitation-changes",
        title: "Changes in Precipitation",
        text: "More frequent heavy downpours juxtaposed with extended drought periods are projected to increase into the future while shifting patterns of winter precipitation will lead to more rain and ice in place of snow.",
        href: "/changes/changes-in-precipitation"},

      {  icon: extreme_weather_svg,
          icon_cls: 'extreme-weather',
          title: "Extreme Weather",
          text: "Climate models predict changes in the frequency and intensity of some extreme weather events, such as nor’easters over the coming decades.",
          href: "/changes/extreme-weather"},

      {   icon: sea_level_rise_svg,
          icon_cls: "sea-level-rise",
          title: "Sea Level Rise",
          className: "slr-image",
          text: "Coastal flooding due to sea level rise and storm surge will increasingly put lives and property at risk.  Health, water quality, energy, infrastructure, recreation and tourism, and coastal ecosystems will all be affected by rising seas.",
          href: "/changes/sea-level-rise"},
    ];

     let take_actions = [
       { title: 'Planning',
         text: 'Understand the issue, set goals, identify areas of risk and vulnerability, and develop strategies.',
         image: planning_img,
         image_credit: "National Wildlife Federation",
         href: '/actions/planning',
        },
       {title: 'Implementation',
        text: 'Put your plan into place, establish benchmarks, and track progress. Revise at regular intervals as necessary. ',
         image: take_action_implementation_img,
         image_credit: "MA Division of Ecological Restoration",
         href: '/actions/implementation',
        },
        {title: 'Outreach / Education',
         text: 'Understanding how to communicate about climate change with stakeholders can help build and maintain public support for climate action.',
         image:outreach_img,
         image_credit: "MA Division of Ecological Restoration",
         href: '/actions/outreach-education',
        }
     ];

    return (
      <div className="home-page">
        <Header hide_subnav={false} anchors={true}/>
        <div className='tag-line'>
         <span>Providing the most up-to-date climate change science and decision-support tools for the Commonwealth.
             <Link to='/about'> More <span className='fa fa-angle-double-right'></span> </Link>
             </span>
        </div>
        <ImageCarousel className='welcome-carousel' slides={slides}/>

        <ResourceBlocks blocks={blocks}/>

        <Sectors sectors={sectors} />

        <SectionHeader href="/changes" anchor_id='identify_changes' text="Identify Changes" />
        <div className='oneplusfour container'>
          <div className='img' style={{backgroundImage: "url('" + sea_level_rise_img + "')"}} ></div>
          <div className='boxen'>
              { changes.map((change) => {
                  return <div className='box'>
                      <div className='background'>
                        <Isvg
                          wrapper={React.createFactory('div')}
                          src={change.icon}
                          className={change.icon_cls} />
                      </div>
                      <div className='content' >
                        <h3><Link to={change.href}>{change.title}</Link></h3>
                      </div>
                    </div>;
              })}
          </div>
        </div>

        <SectionHeader href="/actions" anchor_id='take_action' text="Take Action" />
        <ResourceBlocks className='take-actions' blocks={take_actions} />

        <Footer />
      </div>
    );
  }
}

export default Homepage;
