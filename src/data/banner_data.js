import React, { Component } from 'react';
import './banner_data.css';

class BannerData extends Component {
  constructor(props) {
    super(props);
    this.state = {showing: false}
  }

  render() {
    return (
      <div className='banner-data'>
        <div className='img'>
          <a href={this.props.href}>
            <img alt={this.props.title} src={this.props.image}/>
          </a>
          {this.props.image_credit ? <div className='image-credit'>{this.props.image_credit}</div> : null}
        </div>
        <div className='text'>
          <h1><a href={this.props.href}>{this.props.title}</a></h1>
          {this.props.content}
          {this.props.more_content ?
            (this.state.showing ?
            <div>
              {this.props.more_content }
              <span onClick={(evt) => this.setState({showing: false})} className='btn btn-sm btn-secondary'> Less ...</span>
            </div>
            : <span onClick={(evt) => this.setState({showing: true})} className='btn btn-sm btn-secondary'> More ...</span>
            ) : null}
        </div>
      </div>
      );
  }
}
export default BannerData;
