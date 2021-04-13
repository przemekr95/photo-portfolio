import React from 'react';
import { exhibitionsList } from './ExhibitionsData';

import './../../css/About.css';


const exhibitions = exhibitionsList.map(exhibition => (
    
    <div 
        className="exhibition__item" 
        key={exhibition.img}
        style={{backgroundImage: `url(${exhibition.img})`}}>
    </div>
    
))

const About = () => {
    return(
        <div className="about">
            <div className="about__box">
                <div className="about__photo">
                </div>
                <div className="about__text">
                    <h3>Przemek Rura</h3>
                    <p>I am an aspiring frontend developer, currently living in Cracow. Looking for a job where I can expand my abilities.
                    Few words about me: I graduated from AGH University of Science and Technology and also from Jagiellonian University. My other hobbies besides programming are photography and volleyball.
                    Check out examples of my work.</p>
                    <div className="about__exhibitions">
                        {exhibitions}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;
