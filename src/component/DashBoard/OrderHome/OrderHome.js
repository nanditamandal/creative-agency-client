import React, { useContext, useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
    useHistory,
  useParams
} from "react-router-dom";
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt,faHouseDamage, faSignOutAlt, faShoppingCart, faTaxi, faUserPlus, faPlus } from '@fortawesome/free-solid-svg-icons';

import logo from '../../../images/logos/logo.png';
import Order from '../Order/Order';
import Review from '../Review/Review';
import ServiceList from '../ServiceList/ServiceList';
import './OrderHome.css';
import { UserContext } from '../../../App';
import Admin from '../Admin/Admin';
import AddService from '../AddService/AddService';
import AllService from '../AllService/AllService';

const OrderHome = () => {

    const {serviceName} =useParams();
    console.log(serviceName)
    const [pageName, setPageName]= useState(' ');
    const [services, setServices]= useState();

    const [logInUser, setLogInUser]= useContext(UserContext);
    const history=useHistory();
   
    useEffect(()=>{
        fetch("https://blooming-escarpment-00227.herokuapp.com/allService")
        .then(res=>res.json())
        .then(data=>setServices(data))
    
    }, [])
    const service =services &&  services.find(service => service.name === serviceName);
    
      const handelLogOut=()=>{
      
          setLogInUser({
              
          })
          history.push("/")
      }
        
    return (
        <section>
            <div  className="container-fluid row">
                <div className="col-md-4">
                    <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
                            <li>
                                <img src={logo} alt="" style={{height:'40px', width:'200px'}}/>
                            </li>
                       {
                           (logInUser.userType ==="customer") &&  <ul className="list-customer">
                            
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
                       }
                        {
                            (logInUser.userType === "admin") && <ul className="list-admin">
                            
                            <li >
                                <Link  onClick={()=>setPageName('allService')} className="text-dark">
                                    <FontAwesomeIcon  icon={faTaxi} /> <span >Service List</span>
                                </Link>
                            </li>
                            <li>
                                <Link onClick={()=>setPageName('addService')} className="text-dark">
                                    <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span> 
                                </Link>
                            </li>
                            <li >
                                <Link onClick={()=>setPageName('admin')}  className="text-dark">
                                    <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                                </Link>
                            </li>
                            
                        </ul>
                        }
                        <div >
                            <Link to="/" className="text-dark"><FontAwesomeIcon icon={faHouseDamage} /> <span>Home</span></Link>
                        </div>
                        <div >
                            <Link onClick={handelLogOut} className="text-dark"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-7 d-flex flex-column justify-content-center">
                    <div className="d-flex flex-row mb-5 ">
                        
                        {logInUser.name}
                        <img src= {logInUser.picture} style={{height: "60px", width:"70px", borderRadius:"50%"}} alt=""/>
                       
                    
                    </div>
                    {
                        (pageName === "order") && [(serviceName !== undefined)? <Order service={service}>   </Order>: <div className="mt-5 pt-5 text-danger text-justify">You not select any service. </div>]
                    }
                  
                   {
                      (pageName==="service") && <ServiceList ></ServiceList>
                  }
                {
                      (pageName==="review") &&<Review></Review>
                  }
                  {
                      (pageName==="admin") &&<Admin></Admin>
                  }
                  {
                      (pageName==="addService") && <AddService></AddService>
                  }
                  {
                      (pageName==="allService") && <AllService></AllService>
                  }
               
                </div>
                
            </div>
        </section>
    );
};

export default OrderHome;