import React, { Component } from 'react';
import ScrollToTop from './utils/scroll_to_top';
import {NotFoundPage} from './not_found';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './home_page';
import SectorPages from './sector_pages';
import ChangesPage from './changes_page';
import ActionsPage from './actions_page';
import DataPage  from "./data_page";
import SearchPage  from "./search_page";
import AboutPage  from "./about_page";
import CommentsPage  from "./comments";
import SuggestionsPage  from "./suggestions";
import ResourcesPage  from "./resources_page";

import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className="app">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/sectors/" component={SectorPages} />
              <Route path="/changes/" component={ChangesPage} />
              <Route path="/actions/" component={ActionsPage} />
              <Route path="/data/" component={DataPage} />
              <Route path="/search/" component={SearchPage} />
              <Route path="/resources/" component={ResourcesPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/comments" component={CommentsPage} />
              <Route exact path="/suggestions" component={SuggestionsPage} />
              <Route path='*' component={NotFoundPage} />
            </Switch>
          </div>
        </ScrollToTop>
      </BrowserRouter>);
  }
}

export default App;
