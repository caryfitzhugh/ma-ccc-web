import React, { } from 'react';
import { Link } from 'react-router-dom';
import "./subsection.css";
import Collection from '../layouts/collection';

const HighlightedResources = (props) =>
<div className='highlighted-resources col-12 col-md-4'>
  <Collection collection_id='1' />
  <Link className='btn btn-secondary btn-block'
        to={`/search?${JSON.stringify(props.search_params)}`}>
    More {props.name} Resources
  </Link>
</div>;

const Subsection = (props) =>
  <div className='subsection'>
    <label><a id={props.id}>{props.name}</a></label>
    <div className='content row'>

      {props.image ? (
        <div className='col-12 col-md-3'>
          <img alt='subsection exemplary' className='' src={props.image}/>
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
