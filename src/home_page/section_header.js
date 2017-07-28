import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './section_header.css';

class SectionHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {current_index: 0};
  }
  render() {
    return <div className='container-fluid section-header no-select'>
    <Link to={this.props.href} id={this.props.anchor_id}>
      <h1 className='container'>
        {this.props.text}
        <span className='hidden-sm-down fa fa-angle-double-right'></span>
      </h1>
    </Link>
  </div>
  }
}

export default SectionHeader;
