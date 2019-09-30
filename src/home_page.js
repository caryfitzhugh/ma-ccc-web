import React, { Component } from 'react';
import Header from './header';
import ImageCarousel from './home_page/image_carousel';
import ResourceBlocks from './home_page/resource_blocks';
import Footer from './footer';
import { API_HOST } from './utils/fetch';
import fetch from 'isomorphic-fetch';
import './home_page.css';
import ma_logo from './images/ma_seal.png';

import middle_box_img from './images/home_page/middle_box_image.png';
import left_box_img from './images/home_page/left_box_image.png';
import right_box_img from './images/home_page/right_box_image.png';

import climate_change_data_img from './images/home_page/carousel/climate_change_data.png';
import take_action_carousel_img from './images/home_page/carousel/take_action.jpg';
import carousel3 from './images/home_page/carousel/3.jpg';
import mvp_carousel from './images/home_page/carousel/mvp.jpg';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { news: {}}
  }

  componentWillMount() {
    let sthis = this;
    let news_collection_name = "MA/news";

    fetch(`${API_HOST}/collections/by-name/${news_collection_name}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to retrieve collection");
        }
      })
      .then((json) => {
        sthis.setState({news: json});
      })
      .catch((e) => {
        console.warn(e);
      });
  }

  render() {
    let headline_news = {};
    try {
      headline_news = this.state.news.resources[0];
    } catch (e) { }

    let slides = [
      {   image: mvp_carousel,
          className: 'mvp-slide',
          title: "Municipal Vulnerability Preparedness",
          text: "Our cities and towns are on the front lines of climate change.  The new MVP program from the Executive Office of Energy and Environmental Affairs works with communities across the state to decrease risk, build resiliency, and identify strengths and opportunities through targeted planning and action.",
          href: "/mvp"},
      {   image: carousel3,
          title: "Climate Planning",
          text: <span>In September of 2016, Governor Baker signed a <a href='https://www.mass.gov/news/governor-baker-signs-climate-change-strategy-executive-order' target='_blank' rel="noopener noreferrer"> comprehensive climate change Executive Order</a>, committing the administration to work across the state to plan and prepare for the impacts of climate change. Climate planning involves understanding vulnerability to climate change, identifying actions to reduce risk, setting priorities, developing an action plan, and implementing and refining the plan.</span>,
          href: "/actions/planning"},
      {   image: climate_change_data_img,
          className: 'climate-change-data-slide',
          title: "Climate Change Data",
          text: "The Baker-Polito Administration is investing in the best science and data to understand how the climate is projected to change and to allow Massachusetts to plan and adapt for the future.",
          href: "/data/data"},
      {   image: take_action_carousel_img,
          //image_credit: "MA Division of Ecological Restoration",
          className: 'take-action-slide',
          title: "Take Action",
          text: "Temperatures are climbing, precipitation is becoming more intense, sea level is rising and extreme weather is becoming more frequent.  The Commonwealth is working across state government and with our cities and towns to reduce climate change emissions, understand local climate change impacts, and build 351 resilient communities.",
          href: "/actions"},
      {
          image: ma_logo,
          background_content: <div className='overlay'>
            <h3><a href='/news'>{headline_news.title}</a></h3>
          </div>,
          href: "/news",
          className: 'carousel-news',
          title: "News",
          text: <div>
            The latest press releases from Massachusetts related to climate change
            <br/>
            <a href='/news'>{headline_news.title}</a>
          </div>
      }
    ];

    let blocks = [
       {title: 'MVP Program',
        id: 'mvp',
        image: left_box_img,
        href: "/mvp"
        },
       {title: 'SHMCAP Portal',
        id: "shmcap",
        image: middle_box_img,
        href: "/shmcap",
        },
       {title: 'ResilientMA Map Tool',
        id: 'map',
        image: right_box_img,
        external_link: true,
        href: `/map`
       }
     ];

    return (
      <div className="home-page">
        <Header hide_subnav={false} anchors={true}/>
        <ImageCarousel className='welcome-carousel' slides={slides}/>

        <ResourceBlocks blocks={blocks}/>

        <Footer />
      </div>
    );
  }
}

export default Homepage;
