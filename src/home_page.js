import React, { Component } from 'react';
import Header from './header';
import ImageCarousel from './home_page/image_carousel';
import './home_page.css';

class Homepage extends Component {
  render() {
    let slides = [
      {src: "http://placekitten.com/1024/768",
          label: "Test Kitten",
          text: "Lorem ipsum loreum mupsum, lorem chewbacca applesauce maybe? When the life and times are here. We need to grow the state budget for more waffles.",
          link: "/test-kitten"},
      {src: "http://placekitten.com/1024/769",
          label: "Test Kitten #2",
          text: "Lorem ipsum loreum mupsum, lorem chewbacca applesauce maybe? When the life and times are here. We need to grow the state budget for more waffles.",
          link: "/test-kitten-2"},
      {src: "http://placekitten.com/1024/770",
          label: "Test Kitten #3",
          text: "Lorem ipsum loreum mupsum, lorem chewbacca applesauce maybe? When the life and times are here. We need to grow the state budget for more waffles.",
          link: "/test-kitten-3"},
    ];
    return (
      <div className="home-page">
        <Header/>
        <ImageCarousel slides={slides}/>
      </div>
    );
  }
}

export default Homepage;
