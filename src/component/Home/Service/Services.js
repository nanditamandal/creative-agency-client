import React from 'react';

import ServiceDetails from '../ServiceDetails/ServiceDetails';
import web from '../../../images/icons/web.png';
import graphic from '../../../images/icons/graphic.png'
import development from '../../../images/icons/development.png'


const serviceData = [
    {
        name: 'Web & Mobile design',
        details:' We craft stunning and amazing web UL using a well drafted UX to fix Your product',
        img: web
    },
    {
        name: 'Graphic design',
        details:'Amazing flyer , social media post and brand representations that would make your brand stand out ',
        img: graphic
    },
    {
        name: 'Web Development',
        details:'With well writing codes, we build amazing apps for all platform mobile and web apps in general',
        img: development
    }
]

const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
         
                <h2>Provide awesome <h2 style={{color: '#1CC7C1'}}>services</h2></h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                    serviceData.map(service => <ServiceDetails service={service} key={service.name}></ServiceDetails>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;