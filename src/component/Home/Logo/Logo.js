import React from 'react';
import salk from '../../../images/logos/slack.png';
import netflix from '../../../images/logos/netflix.png';
import uber from '../../../images/logos/uber.png';
import google from '../../../images/logos/google.png';
import airbnb from '../../../images/logos/airbnb.png';
import './Logo.css'

const Logo = () => {
    const image={
        height: '50px',
        width: '70%'
    }

    return (
        <section className="logo-container mt-5">
              
                    
                    <div className="row mt-5 ml-5 pt-5">
                        <div className="col-md-2"><img style={image} src={salk} alt=""/></div>
                        <div className="col-md-2"><img style={image} src={google} alt=""/></div>
                        <div className="col-md-2"><img style={image} src={uber} alt=""/></div>
                        <div className="col-md-2"><img style={image} src={netflix} alt=""/></div>
                        <div className="col-md-2"><img style={image} src={airbnb} alt=""/></div>
                    </div>
                
        </section>
    );
};

export default Logo;