import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import './state_action_tracker_wrapper_page.css';

import Header from './header';

class StateActionTrackerWrapperPage extends Component {
  render() {
    return (
      <div className='state-action-tracker-wrapper-page'>
        <Header />
        <iframe src={"./shmcap-portal/index.html#/action-tracker"}>
        </iframe>
    </div>
    );
  }
}

export default withCookies(StateActionTrackerWrapperPage);
