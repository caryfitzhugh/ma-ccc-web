import React, { Component } from 'react';
import { API_HOST } from './utils/fetch';
import fetch from 'isomorphic-fetch';
import Header from './header';
import Footer from './footer';
import "./news_page.css";

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { news: {}}
  }

  componentWillMount() {
    let sthis = this;
    let news_collection_name = "MA/news";

    fetch(`${API_HOST}/collections/by-name/${news_collection_name}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to retrieve collection");
        }
      })
      .then((json) => {
        sthis.setState({news: json});
      })
      .catch((e) => {
        console.warn(e);
      });
  }
  render() {
    return (
      <div className='news-page'>
        <Header />
          <div className='container'>
            <h1>Latest News Headlines </h1>
            <ul className='news-links'>
              {(this.state.news.resources || []).map((res, i) => {
                let edl = res.external_data_links.find((lnk) => {
                  return lnk.split("::")[0].match(/weblink/i);
                });
                let link = null;
                if (edl) {
                  link = edl.split("::")[1];
                }
                return <li className='news-headline' key={i}>
                    <h1><a href={link} target="_blank" >{res.title}</a></h1>
                    { res.image ? <img src={res.image}/> : null }
                    <p>{res.content.slice(0,100)}...</p>
                  </li>
              })}
            </ul>
          </div>
        <Footer />
      </div>
    );
  }
}

export default NewsPage;
