import React, { Component } from 'react';

import './section_header.css';

class SectionHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {current_index: 0};
  }
  render() {
    return <div className='container-fluid section-header no-select'>
      <h1 className='container'>
        <a id={this.props.anchor_id}> {this.props.text} </a>
        <span className='hidden-sm-down fa fa-angle-double-right'></span>
      </h1>
    </div>
  }
}

export default SectionHeader;
