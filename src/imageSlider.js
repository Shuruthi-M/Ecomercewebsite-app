// ImageSlider.js
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from './images/slide1.jpg';
import slide2 from './images/slide2.jpg';
import slide3 from './images/slide3.jpg';
import slide4 from './images/slide4.jpg';
import slide5 from './images/slide5.jpg';
import "./ImageSlider.css";

const ImageSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='d-block' src={slide1} alt="First slide" />
        <Carousel.Caption>
        <h3>Welcome to Sparktrendzone</h3>
        <h4>Elevate your style with our trendy collections and fashion-forward designs.</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block' src={slide2} alt="Second slide" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block' src={slide3} alt="Third slide" />
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block' src={slide4} alt="fourth slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block' src={slide5} alt="fourth slide" />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ImageSlider;
