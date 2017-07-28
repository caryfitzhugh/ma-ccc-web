import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './showcase_resources.css';

const ShowcaseResources = (props) =>
<div className='showcase-resources'>
  <h2>
    <a id={props.id}>
      {props.title}
    </a>
  </h2>
  <p>
    {props.children}
  </p>
  <ul>
    {props.resources.map((res, i) => {
      return <li className='resource' key={i}>
        <img src={res.image}/>
        <label><Link to={`/resources/${res.docid}`}> {res.title} </Link> </label>
      </li>
    })}
  </ul>
</div>;

export default ShowcaseResources;
