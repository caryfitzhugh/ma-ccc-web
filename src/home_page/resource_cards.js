import React, { Component } from 'react';

import './resource_cards.css';

const Card = (props) =>
  <div className='card'>
    <div className='card-header'>{props.name}</div>
    <img className='card-img-top' src={props.image}/>
    <div className='card-block'>
      <p className='card-text'>{props.text}</p>
    </div>
  </div>;

class ResourceCards extends Component {
  constructor (props) {
    super(props)
    this.state = {current_index: 0};
  }
  render() {
    return <div className='container resource-cards no-select'>
      <Card name='Maps'
            text='Lorem ipsum and all that jazz'
            image='http://placebacon.net/500/500'/>
      <Card name='Data'
            text='Lorem ipsum and all that jazz'
            image='http://placekitten.com/g/500/500'/>
      <Card name='Documents'
            text='Lorem ipsum and all that jazz'
            image='http://placehold.it/500x500&text=documents'/>
    </div>
  }
}

export default ResourceCards;
