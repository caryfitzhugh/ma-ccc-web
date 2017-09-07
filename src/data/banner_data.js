import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './banner_data.css';

class BannerData extends Component {
  render() {
    return (
      <div className='banner-data'>
        <Link to={this.props.href}>
          <img src={this.props.image}/>
        </Link>
        <div className='text'>
          <h1><Link to={this.props.href}>{this.props.title}</Link></h1>
          {this.props.content}
        </div>
      </div>
      );
  }
}
export default BannerData;
