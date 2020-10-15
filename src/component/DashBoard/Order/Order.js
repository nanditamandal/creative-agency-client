import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";


const Order = ({pageName}) => {
    const {id} =useParams();
  //  const [events , setEvent] =useState([]);
    const [logInUser, setLogInUser]= useContext(UserContext);
    const history =useHistory();
    // useEffect(()=>{
    //     fetch('https://arcane-stream-85423.herokuapp.com/findEven/'+id)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setEvent(data);

    //     })
    // }, [id])
    // console.log(events);
  

    const { register, handleSubmit, errors, control } = useForm();
    const onSubmit = data => {
     const eventDetails ={ ...data} ;
  
     console.log(data);
    fetch('http://localhost:5000/addOrder',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'Accept': 'application/json' },
        body: JSON.stringify(data)
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
                           <input  name="work"className="form-control"  ref={register} defaultValue={pageName}/>
                       </div>
                       <div className="form-group">
                           <textarea name="message" className="form-control"  ref={register}  id="" cols="30" rows="10" placeholder="Message *" ></textarea>
                       </div>
                       <div className="form-group">
                           <input name="price" className="form-control"  ref={register({ required: true })} placeholder="price"/>
                           
                           <input type="file" name="picture" ref={register} />
                       </div>
                    
                       <div className="form-group text-center">
                             <input type="submit" className="btn btn-dark"/>  
                       </div>
                
              
            </form>
        </section>
    );
};

export default Order;