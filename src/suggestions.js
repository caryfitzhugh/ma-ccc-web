import React, { Component } from 'react';
import './forms.css';
import Header from './header';
import Footer from './footer';
import FieldGroup from './utils/forms';
import { Form, FormGroup, Col, Row, ControlLabel, Checkbox, Button } from 'react-bootstrap';

class SuggestionsPage extends Component {
  render() {
    return (
      <div className='suggestions-page'>
        <Header />
          <div className='container'>
            <h1>Content Suggestions</h1>
            <p>&#42; denotes required field</p>
              <Form horizontal>
                <hr />
                <h3>Contact</h3>
                <FieldGroup
                  id="name"
                  type="text"
                  label="&#42;Name"
                  placeholder=""
                  required
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
                  label="&#42;Phone"
                  placeholder="999-999-9999"
                  required
                />
                <hr />
                <h3>Proposed Content</h3>
                  <FieldGroup
                    id="title"
                    type="text"
                    label="&#42;Title"
                    placeholder=""
                    required
                  />
                  <FieldGroup
                    id="description"
                    type="textarea"
                    label="Description"
                    placeholder=""
                    componentClass="textarea"
                    required
                  />
                  <FieldGroup
                    id="type"
                    label="Type of Content"
                    placeholder="Choose a Type"
                    componentClass="select"
                    required
                  >
                    <option disabled defaultValue>
                      Choose a Type
                    </option>
                    <option value="map">Map</option>
                    <option value="gis">GIS Layer</option>
                    <option value="data">Data</option>
                    <option value="document">Document</option>
                    <option value="website">Website</option>
                    <option value="other">Other</option>
                  </FieldGroup>
                  <FieldGroup
                    id="website"
                    type="text"
                    label="Web Address or URL"
                    placeholder="www.example.com"
                  />
                  <FieldGroup
                    id="source"
                    type="text"
                    label="Source"
                    placeholder=""
                    help="The organization, project, or individual that produced or published this content"
                  />
                  <FormGroup controlId='sectors'>
                    <Row>
                      <Col componentClass={ControlLabel} sm={2}>
                        Sector(s)
                      </Col>
                      <Col sm={10}>
                        <Checkbox>Agriculture</Checkbox>
                        <Checkbox>Water Resources</Checkbox>
                        <Checkbox>Coastal Zones</Checkbox>
                        <Checkbox>Ecosystems</Checkbox>
                        <Checkbox>Buildings</Checkbox>
                        <Checkbox>Transportation</Checkbox>
                        <Checkbox>Telecommunications</Checkbox>
                        <Checkbox>Energy</Checkbox>
                        <Checkbox>Public Health</Checkbox>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FieldGroup
                    id="keywords"
                    type="text"
                    label="Keywords"
                    placeholder=""
                    help="Words or concepts that describe this content"
                  />
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

export default SuggestionsPage;
