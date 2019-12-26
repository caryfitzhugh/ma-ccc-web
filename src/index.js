import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import "core-js/shim";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <App/> , document.getElementById('root'));
registerServiceWorker();
