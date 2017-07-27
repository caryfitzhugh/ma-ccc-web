import React, { Component } from 'react';
import Header from './header';
import ImageCarousel from './home_page/image_carousel';
import SearchBar from './home_page/search_bar';
import ResourceBlocks from './home_page/resource_blocks';
import Sectors from './home_page/sectors';
import './home_page.css';

class Homepage extends Component {
  render() {
    let slides = [
      {src: "http://placekitten.com/1024/768",
          label: "Test Kitten",
          text: "Lorem ipsum loreum mupsum, lorem chewbacca applesauce maybe? When the life and times are here. We need to grow the state budget for more waffles.",
          link: "/test-kitten"},
      {src: "http://placekitten.com/1024/769",
          label: "Test Kitten #2",
          text: "Lorem ipsum loreum mupsum, lorem chewbacca applesauce maybe? When the life and times are here. We need to grow the state budget for more waffles.",
          link: "/test-kitten-2"},
      {src: "http://placekitten.com/1024/770",
          label: "Test Kitten #3",
          text: "Lorem ipsum loreum mupsum, lorem chewbacca applesauce maybe? When the life and times are here. We need to grow the state budget for more waffles.",
          link: "/test-kitten-3"},
    ];

     let blocks = [
       {title: 'Maps',
        text: 'Lorem ipsullium magnum upous dilbert',
        image:'http://placebacon.net/500/500'
        },
       {title: 'Data',
        text: 'Lorem ipsullium magnum upous dilbert',
        image:'http://placekitten.com/g/500/500'
        },
        {title: 'Documents',
         text: 'Lorem abla nottingham forest vs chelsea is a cracker',
         image: 'http://placehold.it/500x500&text=documents'
        }
     ];
    let sectors = [
      {name: "Agriculture / Forestry",
       icon: (<span className='fa fa-leaf'></span>)},
      {name: "Buildings",
       icon: (<span className='fa fa-building'></span>)},
      {name: "Economy",
       icon: (<span className='fa fa-money'></span>)},
      {name: "Education",
       icon: (<span className='fa fa-graduation-cap'></span>)},
      {name: "Energy",
       icon: (<span className='fa fa-lightbulb-o'></span>)},
      {name: "Coastal Zones",
       icon: (<span className='fa fa-question-circle'></span>)},
      {name: "Local Government",
       icon: (<span className='fa fa-gavel'></span>)},
      {name: "Natural Resources / Habitats",
       icon: (<span className='fa fa-tree'></span>)},
      {name: "Public Health",
       icon: (<span className='fa fa-medkit'></span>)},
      {name: "Public Safety / Emergency Response",
       icon: (<span className='fa fa-life-ring'></span>)},
      {name: "Recreation",
       icon: (<span className='fa fa-futbol-o'></span>)},
      {name: "Transportation",
       icon: (<span className='fa fa-truck'></span>)},
      {name: "Water Resources",
       icon: (<span className='fa fa-tint'></span>)},
    ];

    let changes= [
      {src: "http://lorempixel.com/1024/768/nature/1",
          label: "Flooding",
          text: "This is a big problem",
          link: "/test-kitten"},
      {src: "http://lorempixel.com/1024/768/nature/2",
          label: "Extreme Weather",
          text: "This is a really big problem",
          link: "/test-kitten-2"},
      {src: "http://lorempixel.com/1024/768/nature/3",
          label: "Heat-Waves",
          text: "This is an extremely big problem",
          link: "/test-kitten-3"},
      {src: "http://lorempixel.com/1024/768/nature/5",
          label: "Drought",
          text: "This is an really, extremely big problem",
          link: "/test-kitten-3"},
      {src: "http://lorempixel.com/1024/768/nature/6",
          label: "Seasonal Changes",
          text: "This is not really an issue. I like Winter, Spring, Summer, and Fall. Hard pass on SoCal.",
          link: "/test-kitten-3"},
    ];

    return (
      <div className="home-page">
        <Header/>
        <ImageCarousel slides={slides}/>
        <SearchBar />
        <ResourceBlocks blocks={blocks}/>
        <Sectors sectors={sectors} />
        <ImageCarousel slides={changes} />
      </div>
    );
  }
}

export default Homepage;
