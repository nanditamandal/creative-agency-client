import React from 'react';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import FeedBackDetail from '../FeedBackDetail/FeedBackDetail';


const feedBack = [
    {
        name : 'Nandita',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        designation :'CEO Manpol',
        img: customer1
        
    },
    {
        name : 'Nandita',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        designation :'CEO Manpol',
        img: customer2
        
    },
    {
        name : 'Nandita',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        designation :'CEO Manpol',
        img: customer3
        
    }
]

const Feedback = () => {
    return (
        <section className="blogs my-5">
           <div className="container">
               <div className="section-header text-center">
                    <h5 className="text-primary text-uppercase">our blog</h5>
                    <h1>From Our Blog News</h1>
               </div>
               <div className="card-deck mt-5">
                    {
                        feedBack.map(back => <FeedBackDetail back={back} ></FeedBackDetail>)
                    }
               </div>
           </div>
       </section>
    );
};

export default Feedback;