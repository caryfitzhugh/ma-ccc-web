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
                content={<p> Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur aliquet quam id dui posuere blandit.  </p>}
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
