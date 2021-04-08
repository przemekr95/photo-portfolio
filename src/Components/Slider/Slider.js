import React, { useState } from 'react';

import { sliderImages } from './../Slider/SliderData';
import './../../css/Slider.css';

const Carousel = () => {

    const [sliderImg, setSliderImg] = useState(0);

    const slideLeft = () => {
        sliderImg > 0 && setSliderImg(sliderImg - 1)
    }

    const slideRight = () => {
        sliderImg < sliderImages.length -1 && setSliderImg(sliderImg + 1)
    }


    return (
        <div className="slider">
            <div 
                className="slider__inner" 
                style={{backgroundImage: `url(${sliderImages[sliderImg].img})`}}>
                    <div className="slider__side" onClick={slideLeft}>
                        <i className="fas fa-long-arrow-alt-left"></i>
                    </div>
                    <div className="slider__center">
                        <h2>{sliderImages[sliderImg].title}</h2>
                        <h3>{sliderImages[sliderImg].subtitle}</h3>
                        <p>Przemek Rura | 5cm za aparatem</p>
                    </div>
                    <div className="slider__side" onClick={slideRight}>
                        <i className="fas fa-long-arrow-alt-right"></i>
                    </div>
            </div>
        </div>
    )
}

export default Carousel