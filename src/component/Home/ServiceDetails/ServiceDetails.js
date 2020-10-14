import React from 'react';
import { useHistory } from 'react-router-dom';

const ServiceDetails = ({ service }) => {
    const history = useHistory();

    const handelClick=()=>{
            history.push('/order/'+service.name);
    }
    return (
        <div onClick ={handelClick} className="col-md-4 text-center">
            <img style={{height: '50px'}} src={service.img} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary mt-3 mb-3">{service.details}</p>
        </div>
    );
};

export default ServiceDetails;