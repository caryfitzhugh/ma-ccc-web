import React, { Component } from 'react';
import { withCookies, Cookies } from 'react-cookie';
import Header from './header';

class ShmcapWrapperPage extends Component {
  render() {
    return (
      <div className='shmcap-wrapper-page'>
        <Header />
        <iframe src={"/shmcap-portal/index.html"}
          style={{width: "100%", height: "100%", border: 0}}
          >

        </iframe>
    </div>
    );
  }
}

export default withCookies(ShmcapWrapperPage);
