import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import FacetTree from './facet_tree';
import './facets_modal.css';

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

  apply() {
    this.close();
    this.props.apply_filters();
  }

  render() {
    let facets = this.props.facets;

    return (
      <div>
        {this.props.isModal ? '' : <a className='btn btn-block btn-sm btn-secondary' onClick={this.open}>More ...</a>}
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FacetTree
                is_checked={this.props.is_checked}
                prefixed={this.props.prefixed}
                on_toggle_facet={this.props.on_toggle_facet}
                parent={this.props.parent}
                facets={facets} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
            <Button className='btn-primary' onClick={() => this.apply()}>Apply Filters</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default FacetsModal;
