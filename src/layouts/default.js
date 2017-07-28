import React, { Component } from 'react';
import './default.css';
class DefaultLayout extends Component {
  render() {
    return (
      <div className={this.props.className + ' default-layout container'}>
        <div className='row '>
          <div className='main col-12 col-md-8 col-lg-9'>
            {this.props.children}
          </div>
          <div className='subnav flex-last col-md-4 col-lg-3 col-12'>

          {this.props.nav_actions ?
            <div className='actions'>
              { this.props.nav_actions }
            </div>
            : null}

            <div className='hidden-sm-down'>
              { this.props.subnav }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
