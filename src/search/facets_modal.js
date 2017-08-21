import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
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
    return (
      <div>
        {this.props.isModal ? '' : <a className='btn btn-sm btn-secondary' onClick={this.open}>More ...</a>}
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              {facets.map((facet,indx) => {
                let is_checked = this.props.is_checked(facet.value);
                let inputid = `input-${this.props.name}-${indx}`;

                return <li key={facet.value}>
                          <input id={inputid}
                            type='checkbox'
                            checked={is_checked}
                            onChange={(evt) => this.props.on_toggle_facet(facet.value)}/>
                          <label htmlFor={inputid} >
                            <span> {facet.value} </span>
                            <small>({facet.count})</small>
                          </label>
                      </li>;
              })}
            </ul>
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
