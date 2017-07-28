import React, { Component } from 'react';
import { withRouter } from 'react-router'

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.history.action === 'POP') {
      return;
    }
    if (this.props.history.action == "PUSH") {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)
