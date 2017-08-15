import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import { LoadingOverlay } from './utils/render';
import Header from './header';
import {NotFound} from './not_found';
import Footer from './footer';
import ResourcesDetailPage from './resources/detail';
import {API_HOST} from './utils/fetch';
import {PropsRoute} from './utils/render';
import fetch from 'isomorphic-fetch';

import "./resources_page.css";

class ResourcesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {resources_result: {}}
  }

  load_resource (docid) {
    let sthis = this;

    if (this.state.docid !== docid) {
      this.setState({error: false, requesting: true, docid: docid}, () => {
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
    }

    return (
      <div className='resources-page'>
          <Header />
          <div className='container-fluid resources-page-content'>
          <LoadingOverlay loading={props.requesting} />
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
