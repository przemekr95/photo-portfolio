import React from 'react';

import './../../css/Portfolio.css';

import a from './../../Images/Slider/1-slider.jpg';
import b from './../../Images/Slider/2-slider.jpg';
import c from './../../Images/Slider/3-slider.jpg';


const Portfolio = () => {
    return(
        <div className="portfolio">
            <img src={a} alt="test"></img>
            <img src={b} alt="test"></img>
            <img src={c} alt="test"></img>
        </div>
    )
}

export default Portfolio;
