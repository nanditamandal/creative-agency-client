import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';

const AllService = () => {
    const [logInUser, setLogInUser]= useContext(UserContext);
    const [order, setOrder]= useState([]);
    const statusArray= ["done", "pending", "Ongoing"]
    let newArray=[];
    let status=[];

    useEffect(()=>{
        fetch(`http://localhost:5000/showOrder/${logInUser.email}`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
     
    }, [])
    const handelChange=( e, id)=>{
        const findOrder =order.find(od=> od._id ===id)
        const status =e.target.value;
      
        
       
       const updateValue ={
            companyName:findOrder.companyName,
            email:findOrder.email,
            serviceName:findOrder.serviceName,
            message:findOrder.message,
            file:{},
            img:findOrder.img,
            serviceDetails:findOrder.serviceDetails,
            status:status,
           
        }
       fetch(`http://localhost:5000/update/${id}`,{
            method:'PATCH',
            headers:{'Content-Type': 'application/json'},
            body :JSON.stringify(updateValue)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                alert("update status")
            }
          
        })
       

    }
    return (
        <div>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
               
                    <th scope="col">Name</th>
                    <th scope="col">Email Id</th>
                    <th scope="col">Service</th>
                    <th scope="col">Project details</th>
                    <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        order && order.map(od =>
                        <tr>
                  
                        <td>{od.companyName}</td>
                        <td>{od.email}</td>
                        <td>{od.serviceName}</td>
                        <td> {od.message}</td>
                        <td>
                        <select name="levels-list" onChange={(e)=>handelChange(e, od._id)} id="levels-list">
                            <option id="option-1">{od.status}</option>
                            {
                                newArray= [...statusArray]
                            }
                            {
                               status= newArray.splice(newArray.indexOf(od.status), 1)
                                
                               
                            }
                            <option value={newArray[0]} id="option-2">{newArray[0]}</option>
                            <option value={newArray[1]} id="option-3">{newArray[1]}</option>

                            
                        </select> 
                        </td>
                        </tr>
                        )
                    }
                  

                </tbody>
                </table>

               
        </div>
    );
};

export default AllService;