import React, { Component } from 'react';
import Modal from 'react-modal';
import {withCookies} from 'react-cookie';
import './welcome_modal.css';

Modal.setAppElement("#root");

class WelcomeModal extends Component {
  constructor() {
    super();
    console.log(this.props);
    this.state = {
      open_welcome_modal: true
    };
  }
  close_modal() {
    this.props.cookies.set('welcome_seen', true);
    this.setState({"open_welcome_modal": false});
  }

  render() {
    let seen_before = this.props.cookies.get('welcome_seen');

    return <Modal
      isOpen={this.state.open_welcome_modal && !seen_before}
      >
        <h1> Welcome </h1>
        <p>
           Content coming soon...
        </p>
        <div className='btn btn-block btn-primary' onClick={() => this.close_modal()}> Close </div>
      </Modal>
  }
}

export default withCookies(WelcomeModal);
