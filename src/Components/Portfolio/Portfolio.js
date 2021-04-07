import React from 'react';

import './../../css/Portfolio.css';

import a from './../../Images/Slider/1-slider.jpg';
import b from './../../Images/Slider/2-slider.jpg';
import c from './../../Images/Slider/3-slider.jpg';


const Portfolio = () => {
    const onWheel = e => {
        
        const container = document.getElementById("portfolio");
        const containerScrollPosition = document.getElementById("portfolio").scrollLeft;
        container.scrollTo({
          top: 0,
          left: containerScrollPosition + e.deltaY,
          behaviour: "smooth"
        });
      };

    return(
        <div className="portfolio" id="portfolio" onWheel={onWheel}>
            <div 
                className="portfolio__item" 
                style={{backgroundImage: `url(${a})`}}>

            </div>
            <div 
                className="portfolio__item" 
                style={{backgroundImage: `url(${b})`}}>

            </div>
            <div 
                className="portfolio__item" 
                style={{backgroundImage: `url(${c})`}}>

            </div>

            {/* <img src={a} alt="test"></img>
            <img src={b} alt="test"></img>
            <img src={c} alt="test"></img> */}
        </div>

    )
}

export default Portfolio;
