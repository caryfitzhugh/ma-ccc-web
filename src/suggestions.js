import React, { Component } from 'react';
import './forms.css';
import Header from './header';
import Footer from './footer';
import FieldGroup from './utils/forms';
import { ToggleButtonGroup, Form, FormGroup, Col, Row, ControlLabel, Checkbox, Button } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";
import {API_HOST, STATE} from './utils/fetch';
import Sectors from './sectors/all';
import {without} from 'lodash';

class SuggestionsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {form: {sectors: []}};
  }
  notabot(evt) {
    this.setState((prev) => {
      prev.recaptcha = evt;
      return prev;
    });
  }
  checked_sector(name, evt) {
    let add = evt.target.checked;
    this.setState((prev) => {
      if (add) {
        prev.form.sectors.push(name);
      } else {
        prev.form.sectors = without(prev.form.sectors, name);
      }
      return prev;
    });
  }
  update(field, evt) {
    let val = evt;
    if (val.target) {
      val = evt.target.value;
    }
    this.setState((prev) => {
      prev.form[field] = val;
      return prev
    })
  }
  submit(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    let sthis = this;
    this.setState({requesting: true});
    fetch(API_HOST + "/suggestions", {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({recaptcha: this.state.recaptcha,
                              suggestion: this.state.form})
      })
      .then((response) => {
        sthis.props.history.push("/");
      })
      .catch((e) => {
        sthis.props.history.push("/");
      });
  }
  render() {
    return (
      <div className='suggestions-page'>
        <Header />
          <div className='container'>
            <h1>Content Suggestions</h1>
            <p>&#42; denotes required field</p>
              <Form horizontal onSubmit={(evt) => this.submit(evt)}>
                <hr />
                <h3>Contact</h3>
                <FieldGroup
                  id="name"
                  type="text"
                  label="&#42;Name"
                  placeholder=""
                  required
                  value={this.state.form.name || ""}
                  onChange={(evt, a) => this.update('name', evt)}
                />
                <FieldGroup
                  id="organization"
                  type="text"
                  label="Organization"
                  placeholder=""
                  value={this.state.form.organization || ""}
                  onChange={(evt, a) => this.update('organization', evt)}
                />
                <FieldGroup
                  id="email"
                  type="email"
                  label="&#42;Email"
                  placeholder="me@organization.org"
                  required
                  value={this.state.form.email || ""}
                  onChange={(evt, a) => this.update('email', evt)}
                />
                 <FieldGroup
                  id="phone"
                  type="phone"
                  label="&#42;Phone"
                  placeholder="999-999-9999"
                  value={this.state.form.phone || ""}
                  onChange={(evt, a) => this.update('phone', evt)}
                />
                <hr />
                <h3>Proposed Content</h3>
                  <FieldGroup
                    id="title"
                    type="text"
                    label="&#42;Title"
                    placeholder=""
                    required
                    value={this.state.form.title || ""}
                    onChange={(evt, a) => this.update('title', evt)}
                  />
                  <FieldGroup
                    id="description"
                    type="textarea"
                    label="Description"
                    placeholder=""
                    componentClass="textarea"
                    required
                    value={this.state.form.description || ""}
                    onChange={(evt, a) => this.update('description', evt)}
                  />
                  <FieldGroup
                    id="type"
                    label="Type of Content"
                    placeholder="Choose a Type"
                    componentClass="select"
                    required
                    value={this.state.form.type || ""}
                    onChange={(evt, a) => this.update('type', evt)}
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
                    value={this.state.form.href || ""}
                    onChange={(evt, a) => this.update('href', evt)}
                  />
                  <FieldGroup
                    id="source"
                    type="text"
                    label="Source"
                    placeholder=""
                    help="The organization, project, or individual that produced or published this content"
                    value={this.state.form.source || ""}
                    onChange={(evt, a) => this.update('source', evt)}
                  />
                  <FormGroup controlId='sectors'>
                    <Row>
                      <Col componentClass={ControlLabel} sm={2}>
                        Sector(s)
                      </Col>
                      <Col sm={10}>
                          {Sectors.sorted.map((sector, indx) => {
                            return <Checkbox key={indx}
                                      checked={this.state.form.sectors.includes(sector.name)}
                                      onChange={(evt) => this.checked_sector(sector.name, evt)}> {sector.name}</Checkbox>;
                          })}
                      </Col>
                    </Row>
                  </FormGroup>
                  <FieldGroup
                    id="keywords"
                    type="text"
                    label="Keywords"
                    placeholder=""
                    help="Words or concepts that describe this content"
                    value={this.state.form.keywords || ""}
                    onChange={(evt, a) => this.update('keywords', evt)}
                  />
                  <Row>
                    <Col sm={2} />
                    <Col sm={10}>
                      {this.state.recaptcha ?
                        <Button type="submit" className="btn btn-primary">
                          Submit
                        </Button> :
                        <ReCAPTCHA ref='recaptcha'
                          sitekey="6LcAoDAUAAAAAMdmxu23wEooASQmVVnLYCz3OwTg"
                          onChange={(evt) => this.notabot(evt)}
                          />}
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
