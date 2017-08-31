import React, { Component } from 'react';
import Header from './header';
import ImageCarousel from './home_page/image_carousel';
//import SearchBar from './search_bar';
import ResourceBlocks from './home_page/resource_blocks';
import Sectors from './home_page/sectors';
import SectionHeader from './home_page/section_header';
import Footer from './footer';
import './home_page.css';

import climate_change_data_img from './images/home_page/carousel/climate_change_data.png';
import carousel2 from './images/home_page/carousel/2.jpg';
import carousel3 from './images/home_page/carousel/3.jpg';
import carousel4 from './images/home_page/carousel/4.jpg';
import maps_block_img from './images/home_page/blocks/maps.png';
import data_block_img from './images/home_page/blocks/data.png';
import documents_block_img from './images/home_page/blocks/documents.png';

import rising_temperatures_img from './images/home_page/carousel/rising_temperatures.jpg';
import precipitation_changes_img from './images/home_page/carousel/precipitation_changes.jpg';
import extreme_weather_img from './images/home_page/carousel/extreme_weather.jpg';
import sea_level_rise_img from './images/home_page/carousel/sea_level_rise.jpg';

import planning_img from './images/home_page/blocks/planning.jpg';
import outreach_img from './images/home_page/blocks/outreach.png';
import take_action_implementation_img from './images/home_page/blocks/take_action_implementation.png';

import Isvg from 'react-inlinesvg';
import coastal_zones_icon from './images/coastal_zones_icon.svg';
import natural_resources_icon from './images/natural_resources_icon.svg';
import forestry_icon from './images/forestry_icon.svg';
import infrastructure_icon from './images/infrastructure_icon.svg';
import recreation_icon from './images/recreation_icon.svg';
import public_safety_icon from './images/public_safety_icon.svg';

class Homepage extends Component {
  render() {
    let slides = [
      {src: climate_change_data_img,
          className: 'climate-change-data-slide',
          label: "Climate Change Data",
          text: "Massachusetts may experience large-scale catastrophic events, or may see smaller but incremental changes that could have long-term impacts. Understanding the climate change data is the foundation to allowing Massachusetts to plan and adapt to future changes.",
          href: "/data/maps"},
      {src: carousel2,
          label: "Take Action",
          text: "Temperatures are increasing, precipitation patterns are changing, sea level is rising, and extreme weather events are becoming more frequent. The Commonwealth is working across state government and with our cities and towns to reduce emissions, understand local climate change impacts, and build resilient communities.",
          href: "/actions"},
      {src: carousel3,
          label: "Climate Planning",
          text: "Climate change is the greatest environmental challenge of this generation, with potentially profound effects on the economy, agriculture, energy, public health, public safety, water resources, transportation networks, infrastructure, coastal resources, energy demand, forestry, natural resources, and recreation. The Commonwealth of Massachusetts is committed to working to mitigate and adapt to this challenge. Massachusetts has long recognized the importance of planning to reduce emissions and adapt to the ongoing impacts of climate change , while continuing to develop new strategies, policies, and partnerships that can help us achieve our goals .",
          href: "/actions/planning"},
      {src: carousel4,
          label: "Municipal Vulnerability Preparedness",
          text: "Our cities and towns are on the front lines of climate change but through the MVP program the state is working with our local partners to address many climate-related risks, reduce negative impacts, and take advantage of possible opportunities that may arise from the changing climate. Through this program, communities will identify extreme weather and climate related hazards, pinpoint future vulnerabilities and strengths, develop and prioritize actions for the community, and identify opportunities to take action to reduce risk and build resilience.",
          href: "http://www.mass.gov/eea/air-water-climate-change/climate-change/massachusetts-global-warming-solutions-act/municipal-vulnerability-preparedness-program.html"},
    ];

    let blocks = [
       {title: 'Maps',
        text: 'Use maps to identify climate change impacts and assess vulnerabilities in Massachusetts. ',
        id: 'maps',
        image: maps_block_img,
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
        href: "/data/documents",
       }
     ];

    let sectors = [
      {name: "Agriculture", icon: (<span className='fa fa-leaf'></span>), href: "/sectors/agriculture"},
      {name: "Coastal Zones", icon: (<Isvg src={coastal_zones_icon} className='coastal-zone-icon' />), href: "/sectors/coastal-zones"},
      {name: "Economy", icon: (<span className='fa fa-money'></span>), href: "/sectors/economy"},
      {name: "Energy", icon: (<span className='fa fa-lightbulb-o'></span>), href: "/sectors/energy"},
      {name: "Forestry", icon: (<Isvg className='forestry-icon' src={forestry_icon}/>), href: "/sectors/forestry"},
      {name: "Infrastructure", icon: (<Isvg src={infrastructure_icon} className='infrastructure-icon' />), href: "/sectors/infrastructure"},
      {name: "Local Government", icon: (<span className='fa fa-gavel'></span>), href: "/sectors/local-government"},
      {name: "Natural Resources / Habitats", icon: (<Isvg className='natural-resources-icon' src={natural_resources_icon}/>), href: "/sectors/natural-resources-habitats"},
      {name: "Public Health", icon: (<span className='fa fa-medkit'></span>), href: "/sectors/public-health"},
      {name: "Public Safety / Emergency Response", icon: (<Isvg className='public-safety-icon' src={public_safety_icon}/>), href: "/sectors/public-safety-emergency-response"},
      {name: "Recreation", icon: (<Isvg className='recreation-icon' src={recreation_icon}/>), href: "/sectors/recreation"},
      {name: "Water Resources", icon: (<span className='fa fa-tint'></span>), href: "/sectors/water-resources"},
    ];

    let changes= [
      {src: rising_temperatures_img,
          label: "Rising Temperatures",
          text: "Rising temperatures will lead to more frequent heat waves, and increases heat-related illness and mortality as well as impacts to energy systems, infrastructure and air quality. Warmer winters and changes in the timing of seasons will impact agriculture and wildlife, as well as the tourism industry.",
          href: "/changes/rising-temperatures"},

      {src: precipitation_changes_img,
          label: "Changes in Precipitation",
          text: "More frequent heavy downpours or extended drought periods are increasing and are projected to increase into the future while shifting patterns of winter precipitation will lead to more rain and ice in place of snow.",
          href: "/changes/changes-in-precipitation"},

      {src: extreme_weather_img,
          label: "Extreme Weather",
          text: "Climate models predict changes in the frequency and intensity of some extreme weather events over the coming decades such as nor’easters and high wind events.",
          href: "/changes/extreme-weather"},

      {src: sea_level_rise_img,
          label: "Sea Level Rise",
          text: "Coastal flooding due to sea level rise and storm surge will increasingly put lives and property at risk. Health, water quality, energy, infrastructure, recreation and tourism, and coastal ecosystems will all be affected by sea level rise.",
          href: "/changes/sea-level-rise"},
    ];

     let take_actions = [
       { title: 'Planning',
         text: 'The first step in becoming a climate-resilient is to identify the problems you face: specific climate hazards, their impacts and risks, and vulnerabilities and identify strategies to reduce risk. ',
         image: planning_img,
         href: '/actions/planning',
        },
       {title: 'Implementation',
        text: 'Put your plan into place, establish benchmarks, and track progress. Revise at regular intervals as necessary. ',
         image: take_action_implementation_img,
         href: '/actions/implementation',
        },
        {title: 'Outreach / Education',
         text: 'Understanding how to communicate about climate change with stakeholders can help build and maintain public support for climate action.',
         image:outreach_img,
         href: '/actions/outreach-education',
        }
     ];

    return (
      <div className="home-page">
        <Header hide_subnav={false} anchors={true}/>
        <ImageCarousel className='welcome-carousel' slides={slides}/>

        <ResourceBlocks blocks={blocks}/>

        <SectionHeader href="/sectors" anchor_id='explore_sectors' text="Explore Sectors" />
        <Sectors sectors={sectors} />

        <SectionHeader href="/changes" anchor_id='identify_changes' text="Identify Changes" />
        <ImageCarousel slides={changes} />

        <SectionHeader href="/actions" anchor_id='take_action' text="Take Action" />
        <ResourceBlocks className='take-actions' blocks={take_actions} />

        <Footer />
      </div>
    );
  }
}

export default Homepage;
