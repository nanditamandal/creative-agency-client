import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const ServiceList = () => {
    const [logInUser, setLogInUser]= useContext(UserContext);
    const [order, setOrder]= useState([]);
    

    useEffect(()=>{
        fetch(`http://localhost:5000/showOrder/${logInUser.email}`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    
    }, [ logInUser])

    console.log(order);

    return (
        
           <div>
               {
              order && order.map(od=> <div>{od.companyName}</div>)
             }

           </div>
               
           
       
           
    );
};

export default ServiceList;