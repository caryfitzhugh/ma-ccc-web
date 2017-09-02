import React, { } from 'react';
import { Link } from 'react-router-dom';
import "./subsection.css";
import Collection from './collection';

const HighlightedResources = (props) =>
<div className='highlighted-resources col-12 col-md-4'>
  <Collection collection_name={props.collection_name} />
  {props.search_params ?
    <Link className='btn btn-secondary btn-block'
          to={`/search?${JSON.stringify(props.search_params)}`}>
      More {props.name} Resources
    </Link>
    : null}
</div>;

const Image = (props) => {
  if (React.isValidElement(props.image)) {
    return props.image;
  } else  {
    return <img alt='subsection exemplary' className='' src={props.image}/>
  }
};

const Subsection = (props) =>
  <div className='subsection'>

    <label><a id={props.id} href={props.href}>{props.name}</a></label>

    <div className='content row'>
      {props.image ?
        <div className='col-12 col-md-3'>
          <Image image={props.image} />
        </div> : null}

      <div className={'description col-12 ' + (props.image ? 'col-md-5' : 'col-md-12')}>
        {props.content}
      </div>

      {props.collection_name ? <HighlightedResources collection_name={props.collection_name}
                                                   name={props.name}
                                                   search_params={props.search_params} /> : null}
    </div>
  </div>;

export default Subsection;
