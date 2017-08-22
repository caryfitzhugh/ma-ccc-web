import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './image_carousel.css';

const Slide = (props) =>
  <div className='slide'>
    <div className='image' style={ {backgroundImage: `url("${props.slide.src}")`}}/>
    <div className='content col-md-6 col-lg-5 col-xl-4' onClick={(evt) => {if (props.slide.link) {  }}}>
      <h1><Link to={props.slide.href}>{props.slide.label}</Link></h1>
      <p>{props.slide.text}</p>
      <a className='more' href={props.slide.href}> More <span className='fa fa-angle-double-right'></span></a>
    </div>
  </div>;

class Controls extends Component {
  render() {
    let prev_index = (this.props.current_index - 1 + this.props.slide_cnt) % this.props.slide_cnt;
    let next_index = (this.props.current_index + 1 + this.props.slide_cnt) % this.props.slide_cnt;
    return  (<div className='controls'>
      <div className='no-select arrow previous '
          onClick={(evt) => { this.props.onChange(prev_index)}}>
         <span className='fa fa-chevron-left'></span>
      </div>
      <div className='no-select next arrow '
          onClick={(evt) => { this.props.onChange(next_index) }}>
          <span className='fa fa-chevron-right'></span>
        </div>
      <div className='crumbs'>
        {Array.from(Array(this.props.slide_cnt).keys()).map( (indx) => {
          return <a key={indx} className={'crumb ' + ((indx === this.props.current_index) ? 'active' : '')}
                    onClick={(evt) => {this.props.onChange(indx)}}>{indx + 1}</a>
        })}
      </div>
    </div>);
  }
};

class ImageCarousel extends Component {
  constructor (props) {
    super(props)
    this.state = {current_index: 0};
  }
  componentWillMount() {
    this.advance_page();
  }
  componentWillUnmount() {
    if (this.state.timeout) {
      clearTimeout(this.state.timeout);
    }

    this.setState({mounted: false});
  }
  advance_page(start_index) {
    let current_index = this.state.current_index;
    if (start_index === current_index) {
      this.setState({current_index: (current_index + 1) % this.props.slides.length});
    }

    if (this.state.timeout) {
      clearTimeout(this.state.timeout);
    }
    this.setState({timeout: setTimeout(() => this.advance_page(current_index), 5000)});
  }
  render() {
    let current_index = this.state.current_index;
    let slide_cnt = this.props.slides.length;

    return <div className={this.props.className + ' container-fluid image-carousel no-select'}>
      <Controls
          current_index={current_index}
          slide_cnt={slide_cnt}
          onChange={(indx) => { this.setState({current_index: indx}) }} />
      <div className='carousel-preload'>
          {this.props.slides.map( (slide) => {
            return <img src={slide.src}/>
          })}
      </div>
      <div className='carousel-window no-select'>
        <Slide slide={this.props.slides[current_index]}/>
      </div>
    </div>
  }
}

export default ImageCarousel;
