import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Facets from './search/facets.js';
import './modal.css';

class FacetsModal extends Component {
  constructor (props) {
    super(props)
    this.state = {showModal: false};
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {

    return (
      <div>
        {this.props.isModal ? '' : <a onClick={this.open}>More Filters...</a>}
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>All Filters</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Facets search_results={this.props.search_results}
                    params={this.props.params}
                    onNewSearch={this.props.onNewSearch}
                    isModal={true}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default FacetsModal;
