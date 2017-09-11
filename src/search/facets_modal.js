import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import {compact} from 'lodash';
import {should_display, strip_state} from '../resources/utils.js';
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

  render() {
    let facets = this.props.facets;
    facets = compact(facets.map((facet) => {
      let include = (this.props.prefixed && should_display(facet.value) && strip_state(facet.value).length > 0) ||
                    !this.props.prefixed;

      if (include) {
        return facet;
      } else {
        // Skip!
      }
    }));

    return (
      <div>
        {this.props.isModal ? '' : <a className='btn btn-sm btn-secondary' onClick={this.open}>More ...</a>}
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FacetTree is_checked={this.props.is_checked}
                       on_toggle_facet={this.props.on_toggle_facet}
                       parent="ma::"
                       facets={facets} />
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
