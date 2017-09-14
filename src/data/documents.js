import React, { Component } from 'react';
import Layout from './layout';
import SearchLink from '../utils/search_link';
import {should_display, strip_state} from '../resources/utils.js';
import {without} from 'lodash';
import titleize from '../utils/titleize';
import {paramsToQString} from '../search/utils';
import './documents.css';

class FacetSection extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false}
  }
  render() {
    let props = this.props;
    let checked = []
    props.facets.forEach((facet) => {
      if (this.props.is_checked(props.field, facet)) {
        checked.push(facet);
      }
    });
    return <div className='form-group row'>
            <label className="col-sm-2 ">{props.title}
              <div>
                {this.state.open ?
                  <span className='btn btn-secondary btn-sm' onClick={(evt) => this.setState({open: false})}> Hide</span>
                :
                  <span className='btn btn-secondary btn-sm' onClick={(evt) => this.setState({open: true})}> Show </span>
                }
              </div>
            </label>
            <div className="col-sm-10 facets no-select">
              {this.state.open ?
                <div>
                  {props.facets.map((facet, indx) => {
                    if (facet.header) {
                      return <div key={indx} className='facet-header'>{facet.header}</div>;
                    } else {
                      let parts = facet.split("::");
                      return <div key={indx} onClick={(evt) => props.toggle(props.field, facet)} className={'badge ' + (props.is_checked(props.field, facet) ? 'active' : '')}>
                        {titleize(parts[parts.length - 1])}
                      </div>;
                    }
                  })}
                  </div> :
                  <div>
                    {checked.length === 0 ?
                        <strong> None Selected </strong> : null}
                    {checked.map((facet, indx) => {
                      let parts = facet.split("::");
                      return <div key={indx} onClick={(evt) => props.toggle(props.field, facet)} className={'badge ' + (props.is_checked(props.field,facet) ? 'active' : '')}>
                        {titleize(parts[parts.length - 1])}
                      </div>;
                    })}
                  </div>
              }
            </div>
         </div>
  }
};

class DocumentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {selected: {}}
  }

  is_checked (field, facet) {
    return (this.state.selected[field] || []).includes(facet);
  }

  toggle (field, facet) {
    if (this.is_checked(field,facet)) {
      this.setState((prev) => {
        prev.selected[field] = prev.selected[field] || [];
        prev.selected[field] = without(prev.selected[field], facet);
        return prev;
      });
    } else {
      this.setState((prev) => {
        prev.selected[field] = prev.selected[field] || [];
        prev.selected[field].push(facet);
        return prev;
      });
    }
  }

  update_search(evt) {
    this.setState({search: evt.target.value});
  }

  perform_search() {

  }
  render() {
    let facet_section_props = { is_checked: this.is_checked.bind(this),
                                toggle: this.toggle.bind(this)};

    return (
      <div className={'default-layout container data-layout'}>
        <div className='row'>
          <div className='main col-12 col-md-8 col-lg-9'>
            <h1> Documents </h1>
            <form className='form' onSubmit={(evt) => {evt.preventDefault(); evt.stopPropagation();}}>
              <div className='form-group row'>
                <label className="col-sm-2 col-form-label">Search Terms</label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" placeholder="Search keywords..."
                    onChange={(evt) => this.update_search(evt)}/>
                </div>
              </div>
              <FacetSection {... facet_section_props}
                title="Sectors" field='sectors' facets={[
                  "ma::agriculture",
                  "ma::coastal zones",
                  "ma::economy",
                  "ma::energy",
                  "ma::forestry",
                  "ma::infrastructure",
                  "ma::local government",
                  "ma::natural resources / habitats",
                  "ma::public health",
                  "ma::public safety / emergency response",
                  "ma::recreation",
                  "ma::water resources",
                ]}/>
              <FacetSection {... facet_section_props}
                  title="Strategies" field='strategies' facets={[
                  "adaptation",
                  "mitigation"
                ]}/>
              <FacetSection {... facet_section_props}
                title="Climate Changes"
                field='climate_changes'
                facets={[
                  {header: "Changes in Precipitation"},
                  "ma::changes in precipitation::coastal flooding",
                  "ma::changes in precipitation::drought",
                  "ma::changes in precipitation::evaporation",
                  "ma::changes in precipitation::extreme precipitation events",
                  "ma::changes in precipitation::flash flooding",
                  "ma::changes in precipitation::heavy precipitation",
                  "ma::changes in precipitation::hydrology",
                  "ma::changes in precipitation::inland flooding",
                  "ma::changes in precipitation::lake ice",
                  "ma::changes in precipitation::lake levels",
                  "ma::changes in precipitation::seasonal precipitation",
                  "ma::changes in precipitation::snowcover",
                  "ma::changes in precipitation::soil moisture",
                  "ma::changes in precipitation::streamflow",
                  {header: "Extreme Weather"},
                  "ma::extreme weather::drought",
                  "ma::extreme weather::extreme cold",
                  "ma::extreme weather::extreme heat",
                  "ma::extreme weather::hail",
                  "ma::extreme weather::heavy precipitation events",
                  "ma::extreme weather::high wind",
                  "ma::extreme weather::hurricanes",
                  "ma::extreme weather::ice storms",
                  "ma::extreme weather::intense winter storms",
                  "ma::extreme weather::microbursts",
                  "ma::extreme weather::nor'easters",
                  "ma::extreme weather::tornadoes",
                  "ma::extreme weather::wildfire",
                  {header: "Rising Temperatures"},
                  "ma::rising temperatures::annual temperatures",
                  "ma::rising temperatures::cloud cover",
                  "ma::rising temperatures::cloud distribution",
                  "ma::rising temperatures::evaporation",
                  "ma::rising temperatures::extreme cold events",
                  "ma::rising temperatures::extreme heat events",
                  "ma::rising temperatures::growing season length",
                  "ma::rising temperatures::ice cover",
                  "ma::rising temperatures::in-stream temperature",
                  "ma::rising temperatures::lake and pond temperature",
                  "ma::rising temperatures::ocean temperature",
                  "ma::rising temperatures::peak winds",
                  "ma::rising temperatures::seasonal temperatures",
                  "ma::rising temperatures::snow cover",
                  "ma::rising temperatures::snowfall",
                  "ma::rising temperatures::snowmelt",
                  "ma::rising temperatures::snowpack",
                  "ma::rising temperatures::soil moisture",
                  "ma::rising temperatures::wildfire",
                  {header: "Sea Level Rise"},
                  "ma::sea level rise::coastal flooding",
                  "ma::sea level rise::ocean acidification",
                  "ma::sea level rise::ocean temperatures",
                ]}
              />
              <FacetSection {... facet_section_props}
                  title="Types" field='content_types' facets={[
                    {header: "Data"},
                    "Data::Database",
                    "Data::Data Product",
                    "Data::Dataset",
                    "Data::Decision Support",
                    {header: "Documents"},
                    "Documents::Abstract",
                    "Documents::Academic Article",
                    "Documents::Article",
                    "Documents::Blog Posting",
                    "Documents::Book",
                    "Documents::Building Code",
                    "Documents::Case Study",
                    "Documents::Catalog",
                    "Documents::Chapter",
                    "Documents::Comment",
                    "Documents::Conference Paper",
                    "Documents::Document Section",
                    "Documents::Fact Sheet",
                    "Documents::Guide",
                    "Documents::Highlights Collection",
                    "Documents::Journal",
                    "Documents::Law",
                    "Documents::Manual",
                    "Documents::Memo",
                    "Documents::Newsletter",
                    "Documents::Newspaper",
                    "Documents::News Release",
                    "Documents::Plan",
                    "Documents::Proceedings",
                    "Documents::Report",
                    "Documents::Repository",
                    "Documents::Series",
                    "Documents::Software",
                    "Documents::Thesis",
                    "Documents::Video",
                    "Documents::White Paper",
                    "Documents::Working Paper",
                    {header: "Events"},
                    "Events::Conference",
                    "Events::Conference Series",
                    "Events::Exhibit",
                    "Events::Online Training",
                    "Events::Presentation",
                    "Events::Training",
                    "Events::Webinar",
                    "Events::Webinar Series",
                    "Events::Workshop",
                    {header: "Maps"},
                    "Maps::Decision Support",
                    "Maps::GIS Layer",
                    "Maps::Map",
                    "Maps::Map Viewer",
                  ]}/>

              <div className='form-group row submit-row'>
                <SearchLink params={Object.assign({},
                                                  this.state.selected,
                                                  {query: this.state.search})}
                  className='btn btn-primary'>

                  Search

                </SearchLink>
              </div>
            </form>
          </div>
          <div className='subnav flex-last col-md-4 col-lg-3 col-12'>
            <h4> Advanced Search </h4>
            <table className='table'>
              <tbody>
                <tr>
                  <td className='term'>'quote'</td>
                  <td className='instructions'>
                    place quotes around terms which should be matched as a phrase
                  </td>
                </tr>
                <tr>
                  <td className='term'>-</td>
                  <td className='instructions'>
                    place a - in front of terms to only find results which do NOT include those terms
                  </td>
                </tr>
                <tr>
                  <td className='term'>+</td>
                  <td className='instructions'>
                    place a + in front of terms to find results which MUST include those terms
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>);
  }
}

export default DocumentsPage;
