import React from 'react';

const FeedBackDetail = (props) => {
    const {img, name, description, designation}=props.back
    return (
        <div className="col-md-4 mb-5  text-center ">
          <div className="card">
            <div className="card-body">
           
                <div className="row">
                    <div className="col"> <img className="mx-3" src={img} alt="" style={{width:"60px",  borderRadius: '50%'}} /></div>
                    <div className="col">
                        <h6 className="text-dark ">{name}</h6>
                         <p className="m-0">{designation}</p>
                    </div>
                    
                </div>
               
                <p className="card-text text-secondary mt-4">{description}</p>
            </div>
            </div>
            
       </div>
    );
};

export default FeedBackDetail;