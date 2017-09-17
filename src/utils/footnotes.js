import React, { } from 'react';

const Footnotes = (props) => {
  return <ol className='footnotes'>
    {props.notes.map((note, indx) => {
      return <li id={"fn_"+(indx+1)} key={indx}>{note}</li>;
    })}
  </ol>
}

const Footnote = (props) => {
  return <a href={"#fn_"+props.num} className='footnote'>{props.num}</a>
}

export {Footnote, Footnotes}
