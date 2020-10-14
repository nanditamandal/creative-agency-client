import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faSignOutAlt, faShoppingCart, faTaxi } from '@fortawesome/free-solid-svg-icons';

import logo from '../../../images/logos/logo.png';
import Order from '../Order/Order';
import Review from '../Review/Review';
import ServiceList from '../ServiceList/ServiceList';
import './OrderHome.css';

const OrderHome = () => {
    let page;
    const {name} =useParams();
    const [pageName, setPageName]= useState('order');
   
        if (pageName === 'order') {
             page= <Order></Order>
        }
        if (pageName === 'review') {
            page= <Review></Review>
       }
       if (pageName === 'service') {
         page=   <ServiceList></ServiceList>
        }
       
     
        console.log(pageName)
            
        
    return (
        <section>
            <div  className="container-fluid row">
                <div className="col-md-4">
                    <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
                        <ul className="list-unstyled">
                            <li>
                            <img src={logo} alt="" style={{height:'40px', width:'200px'}}/>
                            </li>
                            <li>
                                <Link onClick={()=>setPageName('order')} className="text-dark">
                                    <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span> 
                                </Link>
                            </li>
                            <li >
                                <Link  onClick={()=>setPageName('service')} className="text-dark">
                                    <FontAwesomeIcon  icon={faTaxi} /> <span >Service List</span>
                                </Link>
                            </li>
                            <li >
                                <Link onClick={()=>setPageName('review')}  className="text-dark">
                                    <FontAwesomeIcon icon={faCommentAlt} /> <span>Review</span>
                                </Link>
                            </li>
                            
                        </ul>
                        <div >
                            <Link to="/" className="text-dark"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-7 d-flex justify-content-center">
                  {page}
               
                </div>
                
            </div>
        </section>
    );
};

export default OrderHome;