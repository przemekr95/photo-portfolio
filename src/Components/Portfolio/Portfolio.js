import React from 'react';

import './../../css/Portfolio.css';

import { portfolioPhotos } from './PortfolioData.js';


const photoList = portfolioPhotos.map(photo => (
    
            <div 
                className="portfolio__item" 
                key={photo.title}
                style={{backgroundImage: `url(${photo.img})`}}>
            </div>
    

))


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
            {photoList}
        </div>

    )
}

export default Portfolio;
