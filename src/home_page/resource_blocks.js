import React, { Component } from 'react';

import './resource_blocks.css';

class ResourceBlocks extends Component {
  constructor (props) {
    super(props)
    this.state = {current_index: 0};
  }
  render() {
    return <div className='container resource-blocks no-select '>
      <div className='row'>
        {(this.props.blocks || []).map ( (block, indx) => {
          return (<div key={indx} className='block no-select col-8 col-sm-6 col-md-3 '>
            <h1 className='no-select'>{block.title}</h1>
            <img src={block.image} alt={block.text}/>
            <p className='hidden-sm-down'>{block.text}</p>
          </div>);
        })}
      </div>
    </div>
  }
}

export default ResourceBlocks;
