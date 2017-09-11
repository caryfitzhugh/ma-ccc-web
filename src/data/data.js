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
                content={<div>
                    <div>
                      User-generated time series graphs of climate data, both observed and projected (future and historical.)  A video tutorial on how to use the Climate Data Grapher can be found <a href='https://www.youtube.com/watch?v=6h2sp_6Tnuw&list=PL0gskXQ6tF18Mpd9BTuMZrtPM-GdZFjP2&index=2' target="_blank">here.</a>
                    </div>
                  </div> }

                more_content = {<div>
                  <div>
                      The user can select seasonal, and annual records of the following variables:
                    <ul>
                      <li>Daily maximum temperature (F)</li>
                      <li>Daily minimum temperature (F)</li>
                      <li>Daily average temperature (F)</li>
                      <li>Growing degree day accumulation, base 50 F</li>
                      <li>Heating degree day accumulation, base 65 F</li>
                      <li>Cooling degree day accumulation, base 65 F</li>
                      <li>Counts of days with maximum temperature above 90 F</li>
                      <li>Counts of days with maximum temperature above 95 F</li>
                      <li>Counts of days with maximum temperature above 100 F</li>
                      <li>Counts of days with minimum temperature below 0 F</li>
                      <li>Counts of days with minimum temperature below 32 F</li>
                      <li>Total precipitation (inches)</li>
                      <li>Counts of days with precipitation greater than 1 inch</li>
                      <li>Counts of days with precipitation greater than 2 inches</li>
                      <li>Counts of days with precipitation greater than 4 inches</li>
                    </ul>
                  </div>
                  <div>
                    <h5> Definitions</h5>
                    <br/><strong>Daily average temperature</strong> is calculated as Tavg = (Tmax + Tmin)/2 where Tmax and Tmin are the maximum and minimum temperatures in a 24 hour period.
                    <br/><strong>Growing degree day accumulation</strong> is the sum of growing degree days (GDD) over the selected time period (annual, season, or month).  A GDD for a day is defined as Tavg – 50.
                    <br/><strong>Heating degree day accumulation</strong> is the sum of heating degree days (HDD) over the selected time period (annual, season, or month).  A HDD for a day is defined as 65 - Tavg for days with average temperatures below 65° F. 
                    <br/><strong>Cooling degree day accumulation</strong> is the sum of cooling degree days (CDD) over the selected time period (annual, season, or month). A CDD for a day is defined as Tavg – 65 for days with average temperatures above 65° F.
                    <br/><strong>Total precipitation</strong> is the total vertical depth of rainfall and/or liquid water equivalent (melted frozen precipitation) of new snow and ice in a specified time period (inches).
                    <br/><strong>Total snowfall</strong> is the accumulation of daily snowfall over a specified time period, where daily snowfall is the accumulation of new snow and ice in a 24-hour period prior to melting or settling (inches).
                    <br/><strong>Daily snow depth</strong> is total depth of new snow and old snow and ice on the ground, measured once daily (inches).
                    <br/><strong>Daily precipitation</strong> is the total vertical depth, in inches, of rainfall and/or liquid water equivalent (melted frozen precipitation) of new snow and ice in a 24 hour period.
                    <br/><strong>Growing season length</strong> is the number of consecutive days with minimum temperature above 32° F, from the last spring frost to the first fall frost.

                    Information on the source of the data (link to the about the data source)
                  </div>
                </div>}
  />}

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
