import React, { Component } from 'react';
import Subsection from '../layouts/subsection';

class Section extends Component {
  render() {
    let section = this.props;
    return <div>
      <h2><a id={section.id}>{section.title}</a></h2>
      {section.content}
      {section.subsections.map((subsection, subindx) => {
        return <Subsection key={subindx} {...subsection} />
      })}
    </div>;
  }
}
export default Section;
