import React, { Component } from 'react';
import ScrollToTop from './utils/scroll_to_top';
import {NotFoundPage} from './not_found';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutPage  from "./about_page";
import ActionsPage from './actions_page';
import ChangesPage from './changes_page';
import CommentsPage  from "./comments";
import DataPage  from "./data_page";
import HomePage from './home_page';
import MVPPage from './mvp_page';
import NewsPage  from "./news_page";
import ResourcesPage  from "./resources_page";
import SearchPage  from "./search_page";
import SectorPages from './sector_pages';
import SuggestionsPage  from "./suggestions";
import { CookiesProvider } from 'react-cookie';
import WelcomeModal from './welcome_modal';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

class App extends Component {
  render() {
    return (
    <CookiesProvider>
      <BrowserRouter>
        <ScrollToTop>
          <div className="app">
            <WelcomeModal cookies={this.props.cookies}/>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/news/" component={NewsPage} />
              <Route path="/sectors/" component={SectorPages} />
              <Route path="/changes/" component={ChangesPage} />
              <Route path="/actions/" component={ActionsPage} />
              <Route path="/data/" component={DataPage} />
              <Route path="/search/" component={SearchPage} />
              <Route path="/resources/" component={ResourcesPage} />
              <Route path="/mvp/" component={MVPPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/comments" component={CommentsPage} />
              <Route exact path="/suggestions" component={SuggestionsPage} />
              <Route path='*' component={NotFoundPage} />
            </Switch>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    </CookiesProvider>);
  }
}

export default App;
