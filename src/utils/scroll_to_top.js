import { Component } from 'react';
import { withRouter } from 'react-router'

class ScrollToTop extends Component {
   findPos(obj) {
      var curtop = 0;
      if (obj.offsetParent) {
          do {
              curtop += obj.offsetTop;
              obj = obj.offsetParent;
          } while (obj)
      return [curtop];
      }
  }
  componentWillUpdate(prevProps) {
    // Before leaving a page - store the scrollY for later
    if (this.props.history.action === "PUSH") {
      let scroll_pos = window.scrollY;
      let path = this.props.history.location.pathname;

      if (this.props.history.location.search) {
        path = path + this.props.history.location.search;
      }

      if (this.props.history.location.hash) {
        path = path + this.props.history.location.hash;
      }

      this.props.history.replace(path , {scroll: scroll_pos});
    }
  }
  componentDidUpdate(prevProps) {
    // Once you have navigated - and the new page is loaded.
    // If it's POP'd (means you are going back) - so restore the scroll
    // if it's PUSH'd (means going fwd) - scroll to anchor if needed.
    if (this.props.history.action === 'POP') {
      if (prevProps.location.state &&
          prevProps.location.state.scroll) {
        window.scrollTo(0, prevProps.location.state.scroll);
      }
      return;
    }

    if (this.props.history.action === "PUSH" ||
        this.props.history.action === "REPLACE") {
      if (this.props.history.location.hash) {
        let target = this.props.history.location.hash.slice(1);
        let element = document.getElementById(target);
        if (element) {
          window.scroll(0,this.findPos(element));
        } else {
          window.scrollTo(0, 0)
        }
      } else {
        window.scrollTo(0, 0)
      }
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
