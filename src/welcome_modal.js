import React, { Component } from 'react';
import Modal from 'react-modal';
import {withCookies} from 'react-cookie';
import './welcome_modal.css';

Modal.setAppElement("#root");

class WelcomeModal extends Component {
  constructor() {
    super();
    this.state = {
      welcome_modal_open: true //!s.cookie.load('welcome_seen')
    };
  }
  close_modal() {
    //this.props.cookie.save('welcome_seen', true);
    this.setState({"welcome_modal_open": false});
  }

  render() {
    return <Modal
      isOpen={this.state.welcome_modal_open}
      >
        <h1> Modal</h1>

        <div className='btn btn-block btn-primary' onClick={() => this.close_modal()}> Close </div>
      </Modal>
  }
}

export default withCookies(WelcomeModal);
