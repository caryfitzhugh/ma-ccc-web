import React, { Component } from 'react';
import Modal from 'react-modal';
import {withCookies} from 'react-cookie';
import ma_gov_seal from './images/ma_gov_seal.png';
import './welcome_modal.css';

Modal.setAppElement("#root");

class WelcomeModal extends Component {
  constructor() {
    super();
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
        <span onClick={() => this.close_modal()} className='fa fa-times-circle-o'></span>
      <h1> Welcome </h1>
        <img src={ma_gov_seal}/>
        <p>
          I am pleased to release the resilient MA Climate Clearinghouse.  This website, and the Municipal Vulnerability Preparedness (MVP) program it supports, are cornerstones of our administration’s efforts to further reduce greenhouse gas emissions, safeguard residents, municipalities and businesses from the impacts of climate change, and build a more resilient Commonwealth. While a changing climate knows no geographical boundaries, cities and towns across Massachusetts are on the front lines of climate change. Launched in 2017, the MVP program grew out of a strong desire to work with cities and towns to prepare for the impacts of climate change and build more resilient communities. We are proud that in our first year 71 communities have joined the program and are taking a leadership role using their local knowledge and community strengths to partner with the Commonwealth on this issue.
        </p>

        <p>
            As first announced when we hosted a Municipal Climate Change Summit, our administration has produced the resilient MA Climate Clearinghouse to ensure continued access to information and enable communities to access the best science and data on expected climate changes, information on planning and actions to support community resiliency for climate change, and links to important grant programs and technical assistance.  The site also catalogs specific vulnerabilities, risks and strategies for different sectors including agriculture, forestry, local government, education, energy, recreation, and transportation. All of the climate projections included on the website are specific to Massachusetts and were produced by the Northeast Climate Science Center at UMass-Amherst. We’ve also included an interactive map so that users can understand how climate change will affect their specific location and the resources they manage.

        </p>
        <p>
            From the Berkshires to the Cape and Islands many communities are already working hard and leading the way to build resilience and we are excited to capture your ideas, strategies and best practices in future versions of this website. We hope you will find our Climate Clearinghouse to be useful tool, whether you are working on your MVP plan, applying for a grant to support a new capital project, or educating a local community group on the impacts of climate change.
        </p>
        <p>
          We look forward to working together to build resilient and strong communities across our shared Commonwealth.
        </p>
        <div className='btn btn-block btn-primary' onClick={() => this.close_modal()}> Continue </div>
      </Modal>
  }
}

export default withCookies(WelcomeModal);
