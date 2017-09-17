import React, { Component } from 'react';
import './forms.css';
import Header from './header';
import Footer from './footer';
import FieldGroup from './utils/forms';
import { Form, FormGroup, Col, Row, ControlLabel, Radio, Button } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";
import {API_POST_HOST} from './utils/fetch';
import fetch from 'isomorphic-fetch';

class CommentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {notabot: false, form: {}};
  }
  notabot(evt) {
    this.setState((prev) => {
      prev.recaptcha = evt;
      return prev;
    });
  }
  update_radio(field, modifier, evt) {
    let val = evt.target.value;
    if (modifier) {
      val = val === 'on';
    } else {
      val = val !== 'on';
    }
    this.setState((prev) => {
      prev.form[field] = val;
      return prev
    })
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

    fetch(API_POST_HOST + "/feedback", {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({
          recaptcha: this.state.recaptcha,
          feedback: this.state.form})
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
      <div className='comments-page'>
        <Header />
          <div className='container'>
            <h1>Feedback</h1>
            <p>&#42; denotes required field</p>
              <Form horizontal onSubmit={(evt) => this.submit(evt)}>
                <FieldGroup
                  id="name"
                  type="text"
                  label="Name"
                  placeholder=""
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
                  label="Phone"
                  placeholder="999-999-9999"
                  value={this.state.form.phone || ""}
                  onChange={(evt, a) => this.update('phone', evt)}
                />
                 <FieldGroup
                  id="comment"
                  type="textarea"
                  componentClass='textarea'
                  label="Comment"
                  value={this.state.form.comment || ""}
                  onChange={(evt, a) => this.update('comment', evt)}
                />

                <FormGroup>
                  <Row>
                    <Col componentClass={ControlLabel} sm={2}>
                      Would you like to be contacted?
                    </Col>
                    <div className='vertical'>
                      <Radio name="radioGroup"
                        value={this.state.form.contact}
                        onChange={(evt) => this.update_radio('contact', true, evt)}
                        >
                        Yes
                      </Radio>
                      <Radio name="radioGroup"
                        value={this.state.form.contact_no}
                        onChange={(evt) => this.update_radio('contact',false, evt)}
                        >
                        No
                      </Radio>
                    </div>
                  </Row>
                </FormGroup>
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

export default CommentsPage;
