import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const ServiceList = () => {
    const [logInUser, setLogInUser]= useContext(UserContext);
    const [order, setOrder]= useState([]);
    

    

    useEffect(()=>{
       
            fetch(`https://blooming-escarpment-00227.herokuapp.com/showOrder/${logInUser.email}`)
            .then(res=>res.json())
            .then(data=>setOrder(data))
       
    },[logInUser])

    console.log(order);

    

   
       
       

    return (
        
           <div className="row mt-5">
               {
                 order && order.map(od=> 
                    
            
                 <div className="col-md-5 mb-5 text-center ">
         
                    <div className="card"  >
                        <div className="card-body ">
                            <img style={{height: '50px'}} src={od.img} alt="" />
                           
                            <button className="btn btn-outline-secondary" >{od.status}</button>
                            <h5 className="card-title">{od.serviceName}</h5>
                        
                            <p className="card-text">{od.serviceDetails}</p>
                            
                        </div>
                    </div>
                    </div>
              
                    )
               }

           </div>
               
           
       
           
    );
};

export default ServiceList;