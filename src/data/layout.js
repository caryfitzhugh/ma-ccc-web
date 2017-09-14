import React, { Component } from 'react';
import './layout.css';

class Layout extends Component {
  render() {
    return (
      <div className={this.props.className + ' data-layout'}>
      {this.props.children}
        <div className='row '>
          <div className='main col-12'>
            {this.props.banner}
            <hr/>
            {this.props.featured_data}
          </div>
        </div>
      </div>
    );
  }
};

export default Layout;
