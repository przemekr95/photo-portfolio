import React from 'react';
import { exhibitionsList } from './ExhibitionsData';

import './../../css/About.css';


const exhibitions = exhibitionsList.map(exhibition => (
    
    <img 
        className="exhibition__item" 
        src={exhibition.img} 
        key={exhibition.img}
        alt={exhibition.title}>
    </img>
    
))

const aboutMe = '„Jeśli twoje zdjęcia nie są wystarczająco dobre, nie jesteś wystarczająco blisko". Słowa te wypowiedział Robert Capa i to właśnie nimi kieruję się podczas fotografowania.'

const About = () => {
    return(
        <div className="about">
            <div className="about__box">
                <div className="about__photo">
                </div>
                <div className="about__text">
                    <h3>Przemek Rura</h3>
                    <p>{aboutMe}</p>
                    <div className="about__exhibitions">
                        {exhibitions}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;
