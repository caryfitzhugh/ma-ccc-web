import React, { Component } from 'react';

import './image_carousel.css';

const Slide = (props) =>
  <div className='slide'>
    <div className='image' style={ {backgroundImage: `url("${props.slide.src}")`}}/>
    <div className='content col-md-6 col-lg-4 col-xl-3' onClick={(evt) => {if (props.slide.link) {  }}}>
      <h1>{props.slide.label}</h1>
      <p>{props.slide.text}</p>
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

  render() {
    let current_index = this.state.current_index;
    let slide_cnt = this.props.slides.length;
console.log(current_index);
    return <div className='container-fluid image-carousel no-select'>
      <Controls
          current_index={current_index}
          slide_cnt={slide_cnt}
          onChange={(indx) => { this.setState({current_index: indx}) }} />
      <div className='carousel-window no-select'>
        <Slide slide={this.props.slides[current_index]}/>
      </div>
    </div>
  }
}

export default ImageCarousel;
