import React from 'react';
import { FormGroup, Col, Row, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap';



function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <Row>
        <Col componentClass={ControlLabel} sm={2}>
          {label}
        </Col>
        <Col sm={10}>
          <FormControl {...props} />
        </Col>
      </Row>
      <Row>
        <Col sm={2}></Col>
        <Col sm={10}>
          {help && <HelpBlock>{help}</HelpBlock>}
        </Col>
      </Row>
    </FormGroup>
  );
}

export default FieldGroup;
