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
                title='resilient MA Map'
                content={
                 <div>
                  <p>
                    Create a map of climate change and related data using this interactive mapping tool.
                    You can select data layers to display from a menu, filter layers by sector, vary parameters within certain layers, and select from a variety of base layers and regional boundaries.
                    You can also import a data layer of your own and view it along with layers already in the map.
                    For each layer, links are available to metadata and the original source.
                  </p>
                  <p>
                    Find a map tutorial video <a href="https://nescaum-dataservices-assets.s3.amazonaws.com/resilientma.org/map-tutorial.mp4" rel="noopener noreferrer" target="_blank">here</a>.
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
