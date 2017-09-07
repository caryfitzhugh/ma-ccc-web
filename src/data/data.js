import React, { Component } from 'react';
import Layout from './layout';
import BannerData from './banner_data';
import FeaturedData from './featured_data';
import datagrapher_image from '../images/data/datagrapher.png';

class DataPage extends Component {
  render() {
    return (
    <Layout
      banner={<BannerData
                image={datagrapher_image}
                href='/datagrapher'
                title='Climate Data Grapher'
                content={<p> Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit.  </p>}
                /> }
      featured_data={<FeaturedData
        collections={[
          ["All", 'MA/data/data/featured/all'],
          ["Agriculture", 'MA/data/data/featured/agriculture'],
          ["Coastal", 'MA/data/data/featured/coastal'],
          ["Energy", 'MA/data/data/featured/energy'],
          ["Natural Resources", 'MA/data/data/featured/natural-resources'],
          ["Public Health", 'MA/data/data/featured/public-health'],
          ["Precipitation", 'MA/data/data/featured/precipitation'],
          ["Temperature", 'MA/data/data/featured/temperature'],
          ["Flooding", 'MA/data/data/featured/flooding']
        ]}
        />}
      >
    </Layout>
    );
  }
}

export default DataPage;
