import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import Header from './header';
import './shmcap_wrapper_page.css';

class ShmcapWrapperPage extends Component {
  render() {
    return (
      <div className='shmcap-wrapper-page'>
        <Header />
        <iframe src={"./shmcap-portal/index.html"}>
        </iframe>
    </div>
    );
  }
}

export default withCookies(ShmcapWrapperPage);
