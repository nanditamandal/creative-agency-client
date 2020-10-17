import React, { useEffect, useState } from 'react';

import ServiceDetails from '../ServiceDetails/ServiceDetails';



const Services = () => {
    
    const [services, setServices] =useState();
    useEffect(()=>{
        fetch(`https://blooming-escarpment-00227.herokuapp.com/allService`)
        .then(res=>res.json())
        .then(data=>setServices(data))
    
    }, [])
    return (
        <section className="services-container mt-5 ">
            <div className="text-center">
         
                <h2>Provide awesome <span style={{color: '#1CC7C1'}}>services</span></h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
                {
                   services && services.map(service => <ServiceDetails service={service} key={service._id}></ServiceDetails>)
                }
            </div>
        </div>
        </section>
    );
};

export default Services;