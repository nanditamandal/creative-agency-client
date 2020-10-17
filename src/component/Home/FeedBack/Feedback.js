import React, { useEffect, useState } from 'react';
import FeedBackDetail from '../FeedBackDetail/FeedBackDetail';


const Feedback = () => {
    const [feedBack, setFeedBack] =useState();
    useEffect(()=>{
        fetch(`http://localhost:5000/allReview`)
        .then(res=>res.json())
        .then(data=>setFeedBack(data))
    
    }, [])
    return (
        <section className="blogs mt-5">
          
               <div className="section-header text-center">
                  
                    <h1>Clients <span style={{color: '#1CC7C1'}}>Feedback</span></h1>
               </div>
               <div className="d-flex justify-content-center">
                    <div className="w-75 row mt-5 pt-5">
                            {
                                feedBack  && feedBack.map(back => <FeedBackDetail back={back} ></FeedBackDetail>)
                            }
                    </div>
               </div>
        
       </section>
    );
};

export default Feedback;