import React from 'react';

const FeedBackDetail = (props) => {
    const {img, name, description, designation}=props.back
    return (
        <div className="card shadow-sm">
            <div className="card-header d-flex  align-items-center bg-white">
                <img className="mx-3" src={img} alt="" width="60"/>
                <div>
                    <h6 className="text-dark ">{name}</h6>
                    <p className="m-0">{designation}</p>
                </div>
            </div>
            <div className="card-body">
               
                <p className="card-text text-secondary mt-4">{description}</p>
            </div>
            
       </div>
    );
};

export default FeedBackDetail;