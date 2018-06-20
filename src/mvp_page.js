import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import './mvp_page.css';
import mvp_image from "./images/mvp_page.jpg";
import mvp_carousel from './images/home_page/carousel/mvp.jpg';
import SectorDetailLayout from './sectors/layout';
import Collection from './layouts/collection';

class MVPPage extends Component {
  render() {
    let showcased_resources = {
      title: "Resources for MVP Communities",
      collection_name: "MA/mvp/highlighted_resources",
    };
    return (
      <div className='sector-page'>
        <Header />
          <div className='container'>
            <SectorDetailLayout
              image={mvp_image}
              image_credit='Scituate, Mass. Released photo by U.S. National Guard'
              title="Municipal Vulnerability Preparedness"
              showcased_resources={showcased_resources}
              datagrapher_file='Temp/state/pcpn/ANN/MA/'
              no_map_sector={true}
              map_active_layers='ma_observed_consecutive_dry_days,ma_projected_consecutive_dry_days'
              sections={[
                { title: "How do I become an MVP community?",
                  id: "resources",
                  content: <div>
                    <p>Applications for the 2018 Planning Grants are due by 5:00 p.m. <strong>Friday, May 11th, 2018</strong></p>
                    <p>All cities and towns in the Commonwealth are eligible to apply. MVP designation will be given to municipalities who complete a Community Resilience Building workshop process to prepare for the impacts of climate change and fulfill associated deliverables required to maintain designation status.</p>
                    <p>Application Requirements:</p>
                    <ul>
                      <li>A signed letter of support from the chair of the board of selectmen, mayor, a town administrator, or similar city or town official.</li>
                      <li>A short statement of the municipality’s commitment to taking on this grant and planning for the impacts of climate change. Please also outline the municipality’s commitment to providing sufficient staff time match to complete the project.</li>
                      <li>The name and qualifications (please include resume and summary of experience) of an employee of the municipality, a committee member, or volunteer who can serve as the local project manager, assemble a core team to work on the project, and point of contact for the grant.</li>
                      <li>A summary statement of municipal support, including letters of support indicating interest in participating in the planning process from all relevant local boards, departments, commissions, businesses, organizations and other partners, including local, regional and statewide agencies or groups focused on climate change adaptation, natural resources and conservation.</li>
                      <li>A description of how the municipality will use the results of this process to inform ongoing or new planning efforts including local hazard mitigation plans, open space plans, master plans, etc., and how results from this process would be used to inform that plan.</li>
                      <li>Please tell us about your need to address climate change. What are the expected climate change impacts in your community and what do you think are the biggest risks?</li>
                      <li>Municipalities may request to expand the scope of the planning grant to include additional tasks such as follow-on workshops or public listening sessions, targeted vulnerability assessments of critical sectors to gather more data, or additional steps they believe would build on the MVP planning process and further advance their community resiliency building efforts. Please describe the work you intend to do to build on the MVP planning process, how it fits in with the overall MVP planning process as you understand it from your review of the <a href='https://www.communityresiliencebuilding.com/'>Community Resilience Building Guide</a>, the timeline for which you would complete it in, and the outcomes you expect to achieve.</li>
                    </ul>
                  </div>,
                  subsections: []
              },
              { title: "Do you live in an MVP community?",
                id: "do_you_live_in_mvp",
                content: <div>
                  <img src={mvp_carousel}/>
                </div>,
                subsections: []
              },
              { title: "Funding Opportunities for MVP Communities",
                id: "funding",
                content: <Collection show_images={false} collection_name='MA/funding/MVP' />,
                subsections: []
              }
              ]}>
                <p>The Baker-Polito Administration’s Municipal Vulnerability Preparedness (MVP) grant program provides support for cities and towns across the Commonwealth to identify climate change vulnerabilities, prioritize critical actions, and build community resiliency.</p>

                <p>Building on the Administration’s approach to state and local partnerships, the MVP program awards municipalities with funding and technical support to complete a community-led planning process to:</p>
                <ul>
                  <li>Define extreme weather and natural and climate change related hazards</li>
                  <li>Identify existing and future community vulnerabilities and strengths</li>
                  <li>Develop and prioritize actions and opportunities to reduce risk and build resilience</li>
                </ul>
                <p>Once a municipality has completed the planning process they become eligible for follow-on funding opportunities, including MVP action grants, and advanced standing in other grant opportunities.</p>
              </SectorDetailLayout>
            </div>
          <Footer/>
        </div>
    );
  }
}

export default MVPPage;
