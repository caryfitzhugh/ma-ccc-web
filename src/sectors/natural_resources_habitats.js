import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import natural_resources_image from '../images/sectors/natural_resources.jpg';

class NaturalResourcesHabitatsSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
      content: <p>
                  Curabitur porttitor eleifend metus non lobortis. Ut lobortis bibendum nulla sit amet aliquam. In pretium in libero vel tempor. Pellentesque aliquam, dui vel mollis vestibulum, quam eros feugiat nunc, malesuada rhoncus arcu dolor quis sem. Integer gravida metus a eleifend hendrerit. Ut eros eros, finibus in purus ut, feugiat viverra massa. Vivamus vel risus ex. Morbi lobortis sem a elit rutrum, ac sagittis ipsum accumsan. Pellentesque molestie nibh quis venenatis luctus.
              </p>
    };

    let identified_changes = [
      { id: "inland_flooding",
        title:"Inland Flooding",
        search_params: {},
        image: "http://lorempixel.com/300/300/nature",
        content: <p>
                Inland flooding is a serious problem for any agriculture or forestry on the inland area.
                Sed in pellentesque turpis. Nam finibus eros id sapien consectetur, sed ultrices eros gravida. Nam dolor quam, feugiat sollicitudin magna nec, euismod pulvinar turpis. Aliquam quis auctor odio. Vestibulum vel nisl felis. Nunc quis ultrices nibh. In hac habitasse platea dictumst. Suspendisse potenti. Ut aliquam dolor lorem, sit amet sodales orci viverra eget. Suspendisse potenti. Etiam ullamcorper id mi sed feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eu ultrices dolor.
              </p>,
      },
      { id: "coastal_flooding",
        title:"Coastal Flooding",
        search_params: {},
        content: <p>
                Coastal flooding is a serious problem for any agriculture or forestry on the inland area.
                Sed in pellentesque turpis. Nam finibus eros id sapien consectetur, sed ultrices eros gravida. Nam dolor quam, feugiat sollicitudin magna nec, euismod pulvinar turpis. Aliquam quis auctor odio. Vestibulum vel nisl felis. Nunc quis ultrices nibh. In hac habitasse platea dictumst. Suspendisse potenti. Ut aliquam dolor lorem, sit amet sodales orci viverra eget. Suspendisse potenti. Etiam ullamcorper id mi sed feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eu ultrices dolor.
              </p>,
      }
    ];

    let planning = {
      content: <div>
                <p>
                  Proin sed arcu et turpis condimentum mollis sed ut nunc. Morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis molestie in neque a commodo. Donec porttitor elit augue, sit amet vulputate eros luctus eget. Quisque hendrerit elementum accumsan. Proin non efficitur nunc. Suspendisse vel venenatis nisl.
                </p>
                <p>
                  Inland flooding is a serious problem for any agriculture or foreros gravida. Nam dolor quam, feugiat sollicitudin magna nec, euismod pulvinar turpis. Aliquam quis auctor odio. Vestibulum vel nisl felis. Nunc quis ultrices nibh. In hac habitasse platea dictumst. Suspendisse potenti. Ut aliquam dolor lorem, sit amet sodales orci viverra eget. Suspendisse potenti. Etiam ullamcorper id mi sed feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eu ultrices dolor.
                </p>
              </div>,
       search_params: {},
    }

    let implementation = {
      content: <div>
                <p>
                  Implementations nunc. Morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis molestie in neque a commodo. Donec porttitor elit augue, sit amet vulputate eros luctus eget. Quisque hendrerit elementum accumsan. Proin non efficitur nunc. Suspendisse vel venenatis nisl.
                </p>
                <p>
                  Inland flooding is a serious problem for any agriculture or foreros gravida. Nam dolor quam, feugiat sollicitudin magna nec, euismod pulvinar turpis. Aliquam quis auctor odio. Vestibulum vel nisl felis. Nunc quis ultrices nibh. In hac habitasse platea dictumst. Suspendisse potenti. Ut aliquam dolor lorem, sit amet sodales orci viverra eget. Suspendisse potenti. Etiam ullamcorper id mi sed feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eu ultrices dolor.
                </p>
              </div>,
       search_params: {},
    }

    let outreach = {
      content: <div>
                <p>
                  Outreach turpis condimentum mollis sed ut nunc. Morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis molestie in neque a commodo. Donec porttitor elit augue, sit amet vulputate eros luctus eget. Quisque hendrerit elementum accumsan. Proin non efficitur nunc. Suspendisse vel venenatis nisl.
                </p>
                <p>
                  Outreach is a serious problem for any agriculture or foreros gravida. Nam dolor quam, feugiat sollicitudin magna nec, euismod pulvinar turpis. Aliquam quis auctor odio. Vestibulum vel nisl felis. Nunc quis ultrices nibh. In hac habitasse platea dictumst. Suspendisse potenti. Ut aliquam dolor lorem, sit amet sodales orci viverra eget. Suspendisse potenti. Etiam ullamcorper id mi sed feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque eu ultrices dolor.
                </p>
              </div>,
    }



    return (
      <SectorDetailLayout
        title="Natural Resources"
        sector_name="natural_resources"
        image={natural_resources_image}
        showcased_resources={showcased_resources}
        identified_changes={identified_changes}
        planning={planning}
        implementation={implementation}
        outreach={outreach}>
          <p>
            This is the details
            Integer mollis viverra pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus consequat tempor odio, quis aliquet urna. Phasellus vehicula augue in magna sollicitudin, elementum iaculis sem posuere. Vivamus at rutrum tellus. Aenean id scelerisque nulla. Maecenas tempor lacinia pellentesque. Curabitur nec quam non lectus fringilla ultrices nec eget enim. Integer gravida risus id velit suscipit auctor. Phasellus et volutpat erat, vel auctor libero. Duis mollis diam sem, eu sodales mi feugiat vitae. Maecenas fermentum nisi sed lectus commodo maximus.

            Curabitur porttitor eleifend metus non lobortis. Ut lobortis bibendum nulla sit amet aliquam. In pretium in libero vel tempor. Pellentesque aliquam, dui vel mollis vestibulum, quam eros feugiat nunc, malesuada rhoncus arcu dolor quis sem. Integer gravida metus a eleifend hendrerit. Ut eros eros, finibus in purus ut, feugiat viverra massa. Vivamus vel risus ex. Morbi lobortis sem a elit rutrum, ac sagittis ipsum accumsan. Pellentesque molestie nibh quis venenatis luctus.
          </p>
        </SectorDetailLayout>
    );
  }
}

export default NaturalResourcesHabitatsSectorPage;
