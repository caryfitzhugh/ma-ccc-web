import React, { Component } from 'react';
import Header from './header';
import ImageCarousel from './home_page/image_carousel';
import SearchBar from './search_bar';
import ResourceBlocks from './home_page/resource_blocks';
import Sectors from './home_page/sectors';
import SectionHeader from './home_page/section_header';
import Footer from './footer';
import './home_page.css';

class Homepage extends Component {
  render() {
    let slides = [
      {src: "http://placekitten.com/1024/768",
          label: "Climate Change Data",
          text: "Lorem ipsum loreum mupsum, lorem chewbacca applesauce maybe? When the life and times are here. We need to grow the state budget for more waffles.",
          href: "/data/maps"},
      {src: "http://placekitten.com/1024/769",
          label: "Take Action",
          text: "Lorem ipsum loreum mupsum, lorem chewbacca applesauce maybe? When the life and times are here. We need to grow the state budget for more waffles.",
          href: "/actions"},
      {src: "http://placekitten.com/1024/769",
          label: "Climate Planning",
          text: "Lorem ipsum loreum mupsum, lorem chewbacca applesauce maybe? When the life and times are here. We need to grow the state budget for more waffles.",
          href: "/actions/planning"},
      {src: "http://placekitten.com/1024/770",
          label: "Municipal Vulnerability Preparedness",
          text: "Lorem ipsum loreum mupsum, lorem chewbacca applesauce maybe? When the life and times are here. We need to grow the state budget for more waffles.",
          href: "http://www.mass.gov/eea/air-water-climate-change/climate-change/massachusetts-global-warming-solutions-act/municipal-vulnerability-preparedness-program.html"},
    ];

     let blocks = [
       {title: 'Maps',
        text: 'Lorem ipsullium magnum upous dilbert',
        image:'http://lorempixel.com/500/500/city',
        href: "/data/maps",
        },
       {title: 'Data',
        text: 'Lorem ipsullium magnum upous dilbert',
        image:'http://placekitten.com/g/500/500',
        href: "/data/data",
        },
        {title: 'Documents',
         text: 'Lorem abla nottingham forest vs chelsea is a cracker',
         image: 'http://lorempixel.com/500/500/animals',
         href: "/data/documents",
        }
     ];

    let sectors = [
      {name: "Agriculture / Forestry",
       icon: (<span className='fa fa-leaf'></span>),
       href: "/sectors/agriculture-forestry"},
      {name: "Buildings",
       icon: (<span className='fa fa-building'></span>),
       href: "/sectors/buildings"},
      {name: "Coastal Zones",
       icon: (<span className='fa fa-question-circle'></span>),
       href: "/sectors/coastal-zones"},
      {name: "Economy",
       icon: (<span className='fa fa-money'></span>),
       href: "/sectors/economy"},
      {name: "Education",
       icon: (<span className='fa fa-graduation-cap'></span>),
       href: "/sectors/education"},
      {name: "Energy",
       icon: (<span className='fa fa-lightbulb-o'></span>),
       href: "/sectors/energy"},
      {name: "Local Government",
       icon: (<span className='fa fa-gavel'></span>),
       href: "/sectors/local-government"},
      {name: "Natural Resources / Habitats",
       icon: (<span className='fa fa-tree'></span>),
       href: "/sectors/natural-resources-habitats"},
      {name: "Public Health",
       icon: (<span className='fa fa-medkit'></span>),
       href: "/sectors/public-health"},
      {name: "Public Safety / Emergency Response",
       icon: (<span className='fa fa-life-ring'></span>),
       href: "/sectors/public-safety-emergency-response"},
      {name: "Recreation",
       icon: (<span className='fa fa-futbol-o'></span>),
       href: "/sectors/recreation"},
      {name: "Transportation",
       icon: (<span className='fa fa-truck'></span>),
       href: "/sectors/transportation"},
      {name: "Water Resources",
       icon: (<span className='fa fa-tint'></span>),
       href: "/sectors/water-resources"},
    ];

    let changes= [
      {src: "http://lorempixel.com/1024/768/nature/1",
          label: "Extreme Heat",
          text: "This is a big problem",
          href: "/changes/extreme-heat"},
      {src: "http://lorempixel.com/1024/768/nature/2",
          label: "Rising Temperatures",
          text: "This is a really big problem",
          href: "/changes/rising-temperatures"},
      {src: "http://lorempixel.com/1024/768/nature/5",
          label: "Drought",
          text: "This is an really, extremely big problem",
          href: "/changes/drought"},
      {src: "http://lorempixel.com/1024/768/nature/3",
          label: "Storms and Flooding",
          text: "This is an extremely big problem",
          href: "/changes/storms-and-flooding"},
      {src: "http://lorempixel.com/1024/768/nature/6",
          label: "Sea Level Rise",
          text: "This is not really an issue. I like Winter, Spring, Summer, and Fall. Hard pass on SoCal.",
          href: "/changes/seasonal"},
    ];

     let take_actions = [
       {title: 'Planning', 
        text: 'Lorem ipsullium magnum upous dilbert',
         image: 'http://lorempixel.com/500/500/abstract',
         href: '/actions/planning',
        },
       {title: 'Implementation',
        text: 'Lorem ipsullium magnum upous dilbert',
         image: 'http://lorempixel.com/500/500/people',
         href: '/actions/implementation',
        },
        {title: 'Outreach / Education',
         text: 'Lorem abla nottingham forest vs chelsea is a cracker',
         image: 'http://lorempixel.com/500/500/transport',
         href: '/actions/outreach-education',
        }
     ];

    return (
      <div className="home-page">
        <Header hide_subnav={true} anchors={true}/>
        <ImageCarousel className='welcome-carousel' slides={slides}/>
        <div className='container search-bar-wrap no-select'>
          <SearchBar />
        </div>

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
