import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './banner_data.css';

class BannerData extends Component {
  render() {
    return (
      <div className='banner-data'>
        <a href={this.props.href}>
          <img src={this.props.image}/>
        </a>
        <div className='text'>
          <h1><a href={this.props.href}>{this.props.title}</a></h1>
          {this.props.content}
        </div>
      </div>
      );
  }
}
export default BannerData;
