import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = ({ service }) => {
    const history = useHistory();

    const handelClick=()=>{
            history.push('/order/'+service.name);
    }
    return (
        <div onClick ={handelClick} className="col-md-4 mb-5 text-center ">
         
            {/* <img style={{height: '50px'}} src={service.img} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary mt-3 mb-3">{service.details}</p> */}
            <div className="card service"  >
                <div className="card-body ">
                    <img style={{height: '50px'}} src={service.img} alt="" />
                    <h5 className="card-title">{service.name}</h5>
                  
                    <p className="card-text">{service.details}</p>
                    
                </div>
            </div>
       

        </div>
    );
};

export default ServiceDetails;