import React, { useState } from 'react';

import { sliderImages } from './../Slider/SliderData';
import './../../css/Slider.css';

const Carousel = () => {

    const [sliderImg, setSliderImg] = useState(1);

    return (
        <div className="slider">
            <div 
                className="slider__inner" 
                style={{backgroundImage: `url(${sliderImages[sliderImg].img})`}}>
                    <div className="slider__left" onClick={()=>{sliderImg > 0 && setSliderImg(sliderImg - 1)}}>
                        <i className="fas fa-arrow-left"></i>
                    </div>
                    <div className="slider__center">
                        <h2>{sliderImages[sliderImg].title}</h2>
                        <h3>{sliderImages[sliderImg].subtitle}</h3>
                    </div>
                    <div className="slider__right" onClick={()=>{sliderImg < sliderImages.length -1 && setSliderImg(sliderImg + 1)}}>
                        <i className="fas fa-arrow-right"></i>
                    </div>
            </div>
        </div>
    )
}

export default Carousel