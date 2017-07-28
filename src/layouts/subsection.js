import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./subsection.css";

const HighlightedResources = (props) =>
<div className='highlighted-resources col-12 col-md-4'>
  <ul>
  {props.resources.map((res, i) => {
    return <li key={i}> <Link to={`/resources/${res.docid}`}>
      {res.title} </Link> </li>
  })}
  </ul>
  <Link className='btn btn-secondary btn-block'
        to={`/search?${JSON.stringify(props.search_params)}`}>
    More {props.name} Resources
  </Link>
</div>;

const Subsection = (props) =>
  <div className='subsection'>
    <h4><a id={props.id}>{props.name}</a></h4>
    <div className='content row'>

      {props.image ? (
        <div className='col-12 col-md-3'>
          <img className='' src={props.image}/>
        </div>) : null }

      <div className={'description col-12 ' + (props.image ? 'col-md-5' : 'col-md-8')}>
        {props.children}
      </div>
      {props.resources ? <HighlightedResources resources={props.resources}
                                              name={props.name}
                                              search_params={props.search_params} /> : null}
    </div>
  </div>;

export default Subsection;
