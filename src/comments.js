import React, { Component } from 'react';
import './forms.css';
import Header from './header';
import Footer from './footer';
import FieldGroup from './utils/forms';
import { Form, FormGroup, Col, Row, ControlLabel, HelpBlock, Radio, FormControl, Button } from 'react-bootstrap';

class CommentsPage extends Component {
  render() {
    return (
      <div className='comments-page'>
        <Header />
          <div className='container'>
            <h1>Feedback</h1>
            <p>&#42; denotes required field</p>
              <Form horizontal>
                <FieldGroup
                  id="name"
                  type="text"
                  label="Name"
                  placeholder=""
                />
                <FieldGroup
                  id="organization"
                  type="text"
                  label="Organization"
                  placeholder=""
                />
                <FieldGroup
                  id="email"
                  type="email"
                  label="&#42;Email"
                  placeholder="me@company.com"
                  required
                />
                 <FieldGroup
                  id="phone"
                  type="phone"
                  label="Phone"
                  placeholder="999-999-9999"
                />

                <FormGroup>
                  <Row>
                    <Col componentClass={ControlLabel} sm={2}>
                      Would you like to be contacted?
                    </Col>
                    <div className='vertical'>
                      <Radio name="radioGroup">
                        Yes
                      </Radio>
                      <Radio name="radioGroup">
                        No
                      </Radio>
                    </div>
                  </Row>
                </FormGroup>
                <Row>
                  <Col sm={2} />
                  <Col sm={10}>
                    <Button type="submit" className="btn btn-primary">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
          </div>
        <Footer />
      </div>
    );
  }
}

export default CommentsPage;
