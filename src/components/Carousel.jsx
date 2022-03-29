import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import nails1 from '../images/nails1.jpg';
import nails2 from '../images/nails2.jpg';
import nails3 from '../images/nails3.jpg';
import nails4 from '../images/nails4.jpg';
import nails5 from '../images/nails5.jpg';
import '../components/Carousel.css'


const items = [
    <div className="item" data-value="1"><img src={nails1} className="itemimg"></img></div>,
    <div className="item" data-value="2"><img src={nails2} className="itemimg"></img></div>,
    <div className="item" data-value="3"><img src={nails3} className="itemimg"></img></div>,
    <div className="item" data-value="4"><img src={nails4} className="itemimg"></img></div>,
    <div className="item" data-value="5"><img src={nails5} className="itemimg"></img></div>,
];

const Carousel = () => (
    <AliceCarousel
        autoPlay
        autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={3000}
        animationDuration={1000}
        animationType="fadeout"
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
    />
);

export default Carousel;