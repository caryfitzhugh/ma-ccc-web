import React, { Component } from 'react';
import Layout from './layout';
import BannerData from './banner_data';
import FeaturedData from './featured_data';
import map_image from '../images/data/mass_ccc_map.png';

class MapsPage extends Component {
  render() {
    return (
    <Layout
      banner={<BannerData
                image={map_image}
                href='/map'
                title='MA CCC Map'
                content={
                 <div>
                  <p>
                      An interactive map of climate change and related data for Massachusetts. Users can select data layers to display from a menu, filter layers by sector, vary parameters within certain layers, and select from a variety of base layers and regional boundaries.  For each layer, links are available to metadata and the original source.
                  </p>
                  <p>
                      A video tutorial on how to use the Interactive Map and GIS Viewer can be found <a href='https://www.youtube.com/watch?v=jL_YgWO9_1w&list=PL0gskXQ6tF18Mpd9BTuMZrtPM-GdZFjP2&index=3' target='_blank'>here</a>
                  </p>
                 </div>}
                /> }
      featured_data={<FeaturedData
        collections={[
          ["All", 'MA/data/maps/featured/all'],
          ["Agriculture", 'MA/data/maps/featured/agriculture'],
          ["Coastal", 'MA/data/maps/featured/coastal'],
          ["Energy", 'MA/data/maps/featured/energy'],
          ["Natural Resources", 'MA/data/maps/featured/natural-resources'],
          ["Public Health", 'MA/data/maps/featured/public-health'],
          ["Precipitation", 'MA/data/maps/featured/precipitation'],
          ["Temperature", 'MA/data/maps/featured/temperature'],
          ["Flooding", 'MA/data/maps/featured/flooding']
        ]}
        />}
      >
    </Layout>
    );
  }
}

export default MapsPage;
