import React, { } from 'react';
import {Route } from 'react-router-dom';
import './render.css';

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
}

const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
}

const LoadingOverlay = (props) =>
 props.loading ? <div className='loading-overlay'>
  <div className='overlay-content'>
    <h1>Loading...</h1>
    <span className='fa fa-spinner animation-spin'></span>
  </div>
</div> : null;

export {PropsRoute, LoadingOverlay};
