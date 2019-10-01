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
          <div className='mvp-page container'>
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
                    <p>
                      For information on current MVP planning and action grant cycles please visit our <a href='https://www.mass.gov/municipal-vulnerability-preparedness-mvp-program' target='_blank' rel='noreferrer norel'>mass.gov webpage</a>.
                    </p>
                  </div>,
                  subsections: []
              },
              { title: "Do you live in an MVP community?",
                id: "do_you_live_in_mvp",
                content: <div>
                  <img alt='' className='full-width' src={mvp_carousel}/>
                </div>,
                subsections: []
              },
              { title: "Funding Opportunities for MVP Communities",
                id: "funding",
                content: <Collection show_images={false} collection_name='MA/funding/MVP' />,
                subsections: []
              }
              ]}>
                <p>The Baker-Polito Administration’s <a target="_blank" rel="noopener noreferrer" href='https://www.mass.gov/municipal-vulnerability-preparedness-mvp-program'>Municipal Vulnerability Preparedness (MVP) grant program</a> provides support for cities and towns across the Commonwealth to identify climate change vulnerabilities, prioritize critical actions, and build community resiliency.</p>

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
