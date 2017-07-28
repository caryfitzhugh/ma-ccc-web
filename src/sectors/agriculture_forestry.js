import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SectorDetailLayout from '../layouts/sector_detail';
import Subsection from '../layouts/subsection';


const SideNav = (props) =>
  <ul>
    <li>
      <Link to="#identify_changes"> Identify Changes </Link>
      <ul>
        <li> <Link to="#inland_flooding"> Inland Flooding</Link></li>
        <li> <Link to="#coastal_flooding"> Coastal Flooding</Link></li>
      </ul>
    </li>
    <li>
      <Link to="#take_action"> Take Action </Link>
      <ul>
        <li> <Link to="#mitigate"> Mitigate</Link></li>
        <li> <Link to="#adapt"> Adapt</Link></li>
      </ul>
    </li>
  </ul>;

class AgricultureForestrySectorPage extends Component {
  render() {
    return (
          <SectorDetailLayout
            title="Agriculture / Forestry"
            sector_name='agriculture'
            subnav={<SideNav />}
            image={"http://lorempixel.com/800/800/sports"}
            >
            <p>
              This is the details
              Integer mollis viverra pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus consequat tempor odio, quis aliquet urna. Phasellus vehicula augue in magna sollicitudin, elementum iaculis sem posuere. Vivamus at rutrum tellus. Aenean id scelerisque nulla. Maecenas tempor lacinia pellentesque. Curabitur nec quam non lectus fringilla ultrices nec eget enim. Integer gravida risus id velit suscipit auctor. Phasellus et volutpat erat, vel auctor libero. Duis mollis diam sem, eu sodales mi feugiat vitae. Maecenas fermentum nisi sed lectus commodo maximus.

              Curabitur porttitor eleifend metus non lobortis. Ut lobortis bibendum nulla sit amet aliquam. In pretium in libero vel tempor. Pellentesque aliquam, dui vel mollis vestibulum, quam eros feugiat nunc, malesuada rhoncus arcu dolor quis sem. Integer gravida metus a eleifend hendrerit. Ut eros eros, finibus in purus ut, feugiat viverra massa. Vivamus vel risus ex. Morbi lobortis sem a elit rutrum, ac sagittis ipsum accumsan. Pellentesque molestie nibh quis venenatis luctus.
            </p>
            <p>
              This is the details
              Integer mollis viverra pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus consequat tempor odio, quis aliquet urna. Phasellus vehicula augue in magna sollicitudin, elementum iaculis sem posuere. Vivamus at rutrum tellus. Aenean id scelerisque nulla. Maecenas tempor lacinia pellentesque. Curabitur nec quam non lectus fringilla ultrices nec eget enim. Integer gravida risus id velit suscipit auctor. Phasellus et volutpat erat, vel auctor libero. Duis mollis diam sem, eu sodales mi feugiat vitae. Maecenas fermentum nisi sed lectus commodo maximus.

              Curabitur porttitor eleifend metus non lobortis. Ut lobortis bibendum nulla sit amet aliquam. In pretium in libero vel tempor. Pellentesque aliquam, dui vel mollis vestibulum, quam eros feugiat nunc, malesuada rhoncus arcu dolor quis sem. Integer gravida metus a eleifend hendrerit. Ut eros eros, finibus in purus ut, feugiat viverra massa. Vivamus vel risus ex. Morbi lobortis sem a elit rutrum, ac sagittis ipsum accumsan. Pellentesque molestie nibh quis venenatis luctus.
            </p>

            <h3><a id='identify_changes'>Identify Changes </a></h3>
            <Subsection name='Inland Flooding'
              id='inland_flooding'
              image="http://lorempixel.com/300/300/nature"
              resources={[
                { docid: "1",
                  title: "Many ways for an antelope to elope"},
                { docid: "2",
                  title: "Study Relating Skunk Roadkill To Air Quality"},
                { docid: '3',
                  title: "Report Basis Found Flawed"}
              ]}>
              <p>
                Inland flooding is a serious problem for any agriculture or forestry on the inland area.
                Sed in pellentesque turpis. Nam finibus eros id sapien consectetur, sed ultrices eros gravida. Nam dolor quam, feugiat sollicitudin magna nec, euismod pulvinar turpis. Aliquam quis auctor odio. Vestibulum vel nisl felis. Nunc quis ultrices nibh. In hac habitasse platea dictumst. Suspendisse potenti. Ut aliquam dolor lorem, sit amet sodales orci viverra eget. Suspendisse potenti. Etiam ullamcorper id mi sed feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eu ultrices dolor.
              </p>
            </Subsection>
            <Subsection name='Coastal Flooding'
              id='coastal_flooding'
              image="http://lorempixel.com/300/300/nature"
              resources={[
                { docid: "1",
                  title: "Reflections on sabbaticals"},
                { docid: "2",
                  title: "Applications for employment"},
                { docid: '3',
                  title: "Chicken Sandwiches with Pickles and Their Effects On Brain Function"}
              ]}>
              <p>
                Coastal flooding is a serious problem for any agriculture or forestry on the coast.
              </p>
              <p>
                Proin sed arcu et turpis condimentum mollis sed ut nunc. Morbi at porttitor neque. Donec enim magna, venenatis non nunc quis, elementum porta ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis molestie in neque a commodo. Donec porttitor elit augue, sit amet vulputate eros luctus eget. Quisque hendrerit elementum accumsan. Proin non efficitur nunc. Suspendisse vel venenatis nisl.
              </p>
            </Subsection>
            <h3><a id='take_action'>Take Action </a></h3>
            <Subsection name='Mitigate'
              id='mitigate'
              resources={[
                { docid: "1",
                  title: "Confessions on sabbaticals"},
                { docid: "2",
                  title: "15 easy steps to climate repair"},
                { docid: '3',
                  title: "You'll never guess what this man did to fix his climate"}
              ]}>
              <p>
                Proin sed arcu et turpis condimentum mollis sed ut nunc. Morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis molestie in neque a commodo. Donec porttitor elit augue, sit amet vulputate eros luctus eget. Quisque hendrerit elementum accumsan. Proin non efficitur nunc. Suspendisse vel venenatis nisl.
              </p>
              <p>
                Inland flooding is a serious problem for any agriculture or foreros gravida. Nam dolor quam, feugiat sollicitudin magna nec, euismod pulvinar turpis. Aliquam quis auctor odio. Vestibulum vel nisl felis. Nunc quis ultrices nibh. In hac habitasse platea dictumst. Suspendisse potenti. Ut aliquam dolor lorem, sit amet sodales orci viverra eget. Suspendisse potenti. Etiam ullamcorper id mi sed feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eu ultrices dolor.
              </p>
            </Subsection>
            <Subsection name='Adapt'
              id='adapt'
              image="http://lorempixel.com/300/300/sports"
              resources={[
                { docid: "1",
                  title: "Many ways for an antelope to elope"},
                { docid: "2",
                  title: "Study Relating Skunk Roadkill To Air Quality"},
                { docid: '3',
                  title: "Report Basis Found Flawed"}
              ]}>
              <p>
                Nam finibus pulvinar turpis. Aliquam quis auctor odio. Vestibulum vel nisl felis. Nunc quis ultrices nibh. In hac habitasse platea dictumst. Suspendisse potenti. Ut aliquam dolor lorem, sit amet sodales orci viverra eget. Suspendisse potenti. Etiam ullamcorper id mi sed feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eu ultrices dolor.
              </p>
              <p>
                Proin sed arcu quis, elementum porta ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis molestie in neque a commodo. Donec porttitor elit augue, sit amet vulputate eros luctus eget. Quisque hendrerit elementum accumsan. Proin non efficitur nunc. Suspendisse vel venenatis nisl.
              </p>
            </Subsection>
          </SectorDetailLayout>
    );
  }
}

export default AgricultureForestrySectorPage;
