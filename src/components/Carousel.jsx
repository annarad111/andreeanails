import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import nails1 from '../images/nails1.jpg';
import nails2 from '../images/nails2.jpg';
import nails3 from '../images/nails3.jpg';
import nails4 from '../images/nails4.jpg';
import nails5 from '../images/nails5.jpg';
import nails6 from '../images/nails8.jpg';
import nails7 from '../images/nails7.jpg';
import nails8 from '../images/nails9.jpg';
import nails9 from '../images/nails10.jpg';
import nails10 from '../images/nails11.jpg';
import nails11 from '../images/nails12.jpg';
import nails12 from '../images/nails13.jpg';
import nails13 from '../images/nails14.jpg';
import nails14 from '../images/nails15.jpg';
import nails15 from '../images/nails16.jpg';
import nails16 from '../images/nails17.jpg';
import nails17 from '../images/nails18.jpg';
import '../components/Carousel.css'


const items = [
    <div className="item" data-value="1"><img src={nails1} className="itemimg"></img></div>,
    <div className="item" data-value="2"><img src={nails2} className="itemimg"></img></div>,
    <div className="item" data-value="3"><img src={nails3} className="itemimg"></img></div>,
    <div className="item" data-value="4"><img src={nails4} className="itemimg"></img></div>,
    <div className="item" data-value="5"><img src={nails5} className="itemimg"></img></div>,
    <div className="item" data-value="6"><img src={nails6} className="itemimg"></img></div>,
    <div className="item" data-value="7"><img src={nails7} className="itemimg"></img></div>,
    <div className="item" data-value="8"><img src={nails8} className="itemimg"></img></div>,
    <div className="item" data-value="9"><img src={nails9} className="itemimg"></img></div>,
    <div className="item" data-value="10"><img src={nails10} className="itemimg"></img></div>,
    <div className="item" data-value="11"><img src={nails11} className="itemimg"></img></div>,
    <div className="item" data-value="12"><img src={nails12} className="itemimg"></img></div>,
    <div className="item" data-value="13"><img src={nails13} className="itemimg"></img></div>,
    <div className="item" data-value="14"><img src={nails14} className="itemimg"></img></div>,
    <div className="item" data-value="15"><img src={nails15} className="itemimg"></img></div>,
    <div className="item" data-value="16"><img src={nails16} className="itemimg"></img></div>,
    <div className="item" data-value="17"><img src={nails17} className="itemimg"></img></div>,
];

const Carousel = () => (
    <AliceCarousel
        autoPlay
        autoPlayControls
        autoPlayStrategy="none"
        autoPlayInterval={2300}
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