import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const ServiceList = () => {
    const [logInUser, setLogInUser]= useContext(UserContext);
    const [order, setOrder]= useState();

    useEffect(()=>{
        fetch('https://localhost:5000/findOrder'+logInUser.email)
        .then(res=>res.json())
        .then(data=>{
            setOrder(data);

        })
    }, [])

    console.log(order);

    return (
        <section className="blogs my-5">
           
               {/* <div className="card-deck mt-5">
                    {
                        feedBack.map(back => <FeedBackDetail back={back} ></FeedBackDetail>)
                    }
               </div>
           </div> */}
       </section>
        // <div className="card shadow-sm">
        //     <div className="card-header d-flex  align-items-center bg-white">
        //         <img className="mx-3" src={img} alt="" width="60"/>
        //         <div>
        //             <h6 className="text-dark ">{name}</h6>
        //             <p className="m-0">{designation}</p>
        //         </div>
        //     </div>
        //     <div className="card-body">
            
        //         <p className="card-text text-secondary mt-4">{description}</p>
        //     </div>
        
        // </div>
    );
};

export default ServiceList;