'use client'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Banner from './Banner';
import BannerCard from './BannerCard';
import BannerCard2 from './BannerCard2';


const BannerSlider = () => {
    return (
        <div>
            <Carousel autoPlay={true} infiniteLoop={true} swipeable={true}>
                <Banner/>
                <BannerCard/>
                <BannerCard2/>
                
            </Carousel>
        </div>
    );
};

export default BannerSlider;
