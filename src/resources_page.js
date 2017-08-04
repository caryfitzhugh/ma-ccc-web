import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import Header from './header';
import {NotFound} from './not_found';
import Footer from './footer';
import QString from 'query-string';
import ResourcesDetailPage from './resources/detail';
import {API_HOST} from './utils/fetch';
import {PropsRoute} from './utils/render';
import fetch from 'isomorphic-fetch';
import immutable from 'object-path-immutable';

import {LoadingOverlay} from './utils/render';

import "./resources_page.css";


const dateToAPIDate = (date) => {
  return date.getFullYear() + "/" + (date.getMonth()+1) +
    date.getDate();
};

const APIDateToDate = (str) => {
  console.warn("FIX Conversion!: ", str);
  return Date.parse(str); 
}


//  let params = QString.parse(str);


class ResourcesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {geofocus_json: [], resources_result: {}}
  }

  load_resource (docid) {
    let sthis = this;

    if (this.state.docid !== docid) {
      this.setState({geofocus_json: [], error: false, requesting: true, docid: docid}, () => {
        fetch(`${API_HOST}/resources/${docid}`)
          .then(
            (response) => {
              if (response.ok) {
                return response.json();
              } else {
                throw new Error("Error Performing Resoruces Load");
              }
          }).then((json) => {
            if (sthis.state.docid === docid) {
              sthis.setState({resources_result: json, requesting: false, error: false});
            }
            if (json.geofocuses) {
              json.geofocuses.forEach((gfid) => {
                fetch(`${API_HOST}/geofocuses/${gfid}/geojson`)
                  .then(
                    (response) => {
                      if (response.ok) {
                        return response.json();
                      } else {
                        throw new Error("Error GeoJSON Load");
                      }
                  }).then((json) => {
                    if (sthis.state.docid === docid) {
                      sthis.setState((old) => {
                        return immutable.push(old, ['geofocus_json'], json);                        
                      });
                    }
                  })
                  .catch((e) => {
                    if (sthis.state.docid === docid) {
                      console.warn(e);
                      sthis.setState({error: true});
                    }
                  });
              });
            }
          })
          .catch((e) => {
            if (sthis.state.docid === docid) {
              console.warn(e);
              sthis.setState({error: true});
            }
          });
      });
    }

  }

  render() {
    let props = {
      resources_result: this.state.resources_result,
      requesting: this.state.requesting,
      load_resource: (docid) => this.load_resource(docid),
      geofocus_json: this.state.geofocus_json || []
    }

    return (
      <div className='resources-page'>
          <Header />
          <div className='container-fluid resources-page-content'>
            {props.requesting ? <LoadingOverlay /> : null }
            <Switch>
              <PropsRoute exact path='/resources/:docid' component={ResourcesDetailPage} {... props} />
              <PropsRoute exact path='/resources/:docid/*' component={ResourcesDetailPage} {... props} />
              <Route path='*' component={NotFound} />
            </Switch>
          </div>
        <Footer />
      </div>
    );
  }
}

export default ResourcesPage;
