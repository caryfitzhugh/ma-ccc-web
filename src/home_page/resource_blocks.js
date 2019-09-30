import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './resource_blocks.css';

class ResourceBlocks extends Component {
  constructor (props) {
    super(props)
    this.state = {current_index: 0};
  }
  render() {
    return <div className={this.props.className + ' container resource-blocks no-select '}>
      <div className='row'>
        {(this.props.blocks || []).map ( (block, indx) => {
          return (<div
                  key={indx} className='block no-select col-12 col-sm-6 col-md-4 col-lg-3 '>
            <h1 className='no-select'>
            { block.external_link ?
              <a id={block.id} href={block.href}>{block.title}</a>
                :
              <Link id={block.id} to={block.href}>{block.title}</Link>
              }
            </h1>
            { block.external_link ?
              <a href={block.href}>
                <img src={block.image} alt={block.text}/>
              </a>
              :
              <Link to={block.href}>
                  <img src={block.image} alt={block.text}/>
                </Link>}
            {block.image_credit ? <div className='image-credit'>{block.image_credit}</div> : null}
            <p className='hidden-sm-down'>{block.text} </p>
            { block.external_link ?
              <a className='more' href={block.href}> More <span className='fa fa-angle-double-right'></span></a>
              :
              <Link className='more' to={block.href}> More <span className='fa fa-angle-double-right'></span></Link>}
          </div>);
        })}
      </div>
    </div>
  }
}

export default ResourceBlocks;
