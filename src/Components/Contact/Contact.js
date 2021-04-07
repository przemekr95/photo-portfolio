import React from 'react';

import './../../css/Contact.css';

const Contact = () => {
    return(
        <div className="contact">
            <div className="contact__box">
                <h3>Kontakt:</h3>
                <div className="contact__details">
                    <div><i className="fas fa-phone"></i>665 195 871</div>
                    <div><i className="fas fa-envelope"></i>foto@przemekrura.pl</div>
                    <div><i className="fab fa-instagram"></i><a href="https://www.instagram.com/przemek_rura/?hl=pl" target="_blank" rel="noreferrer">@przemek_rura</a></div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
