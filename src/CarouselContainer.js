
import React,  { Component } from 'react';
import "../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import sliderImage1 from './img/Untitled-1_03.jpg';
import sliderImage2 from './img/Untitled-2_03.jpg';


class CarouselContainer extends Component {
    render() {
        return (
            <Carousel autoPlay infiniteLoop showStatus={false} showThumbs ={false}>
                <div>
                    <div className="overlay-container overlay-pink"></div>
                    <img src={sliderImage1} alt=""/>
                </div>
                <div>
                <div className="overlay-container overlay-blue"></div>
                    <img src={sliderImage2} alt=""/>
                </div>
            </Carousel>
        )
    }
}

export default CarouselContainer;