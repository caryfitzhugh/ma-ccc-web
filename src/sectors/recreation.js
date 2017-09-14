import React, { Component } from 'react';
import SectorDetailLayout from './layout';
import sector_image from '../images/sectors/recreation.jpg';

class RecreationSectorPage extends Component {
  render() {
    let showcased_resources = {
      title: "Showcased Resources",
    };

    return (
      <SectorDetailLayout
        title="Recreation"
        sector_name="recreation"
        image={sector_image}
        image_credit="FEMA/Mike Moore"
        showcased_resources={showcased_resources}
        >
          <p>
            This is the details
            Integer mollis viverra pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus consequat tempor odio, quis aliquet urna. Phasellus vehicula augue in magna sollicitudin, elementum iaculis sem posuere. Vivamus at rutrum tellus. Aenean id scelerisque nulla. Maecenas tempor lacinia pellentesque. Curabitur nec quam non lectus fringilla ultrices nec eget enim. Integer gravida risus id velit suscipit auctor. Phasellus et volutpat erat, vel auctor libero. Duis mollis diam sem, eu sodales mi feugiat vitae. Maecenas fermentum nisi sed lectus commodo maximus.

            Curabitur porttitor eleifend metus non lobortis. Ut lobortis bibendum nulla sit amet aliquam. In pretium in libero vel tempor. Pellentesque aliquam, dui vel mollis vestibulum, quam eros feugiat nunc, malesuada rhoncus arcu dolor quis sem. Integer gravida metus a eleifend hendrerit. Ut eros eros, finibus in purus ut, feugiat viverra massa. Vivamus vel risus ex. Morbi lobortis sem a elit rutrum, ac sagittis ipsum accumsan. Pellentesque molestie nibh quis venenatis luctus.
          </p>
        </SectorDetailLayout>
    );
  }
}

export default RecreationSectorPage;
