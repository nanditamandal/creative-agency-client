import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";


const Order = ( props ) => {
    const {img, name, details}=props.service

    const [logInUser, setLogInUser]= useContext(UserContext);
 
    const { register, handleSubmit, errors, control } = useForm();
    
    const onSubmit = data => {
        
        
        const order= {...data, img: img, serviceDetails :details, status: 'pending'}
        fetch('https://blooming-escarpment-00227.herokuapp.com/addOrder',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'Accept': 'application/json' },
        body: JSON.stringify(order)
    })
    .then(res=>res.json())
    .then(data=>{
        
        data? alert("order success full"): console.log(data)
       
        
    })
    
  }
    return (
        <section>
             <form onSubmit={handleSubmit(onSubmit)}>
            
                        <div className="form-group">
                           <input  name="companyName" className="form-control"   placeholder="Your name/ company name" ref={register({ required: true })}/>
                       </div>
                       <div className="form-group">
                           <input name="email" className="form-control"  ref={register} defaultValue={logInUser.email}/>
                       </div>
                       <div className="form-group">
                           
                           <input  name="serviceName" className="form-control" defaultValue={name} ref={register}  />
                       </div>
                       <div className="form-group">
                           <textarea name="message" className="form-control"  ref={register}  id="" cols="30" rows="10" placeholder="Message *" ></textarea>
                       </div>
                       <div className="form-group">
                           <input name="price" className="form-control"  ref={register({ required: true })} placeholder="price"/>
                           
                           <input type="file" name="file" ref={register} />
                       </div>
                    
                       <div className="form-group text-center">
                             <input type="submit" className="btn btn-dark"/>  
                       </div>
                
              
            </form>
        </section>
    );
};

export default Order;