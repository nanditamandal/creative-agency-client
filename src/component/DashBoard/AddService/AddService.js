import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {

    const { register, handleSubmit, errors, control } = useForm();
    const onSubmit = data => {
      
        fetch('http://localhost:5000/addService',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'Accept': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            
            data? alert("Service added"): console.log(data)  
        })
    }
    return (
        <section>
                    
             <form onSubmit={handleSubmit(onSubmit)}>
            
                        <div className="form-group">
                           <input  name="name" className="form-control"   placeholder="Service Title" ref={register({ required: true })}/>
                       </div>
                       <div className="form-group">
                           <textarea name="details" className="form-control"  ref={register}  id="" cols="30" rows="10" placeholder="Enter designation *" ></textarea>
                       </div>
                       
                       <div className="form-group">
                           
                           <input type="file" name="img" ref={register} />
                       </div>
                    
                       <div className="form-group text-center">
                             <input type="submit" className="btn btn-dark"/>  
                       </div>  
            </form>
        </section>
    );
};

export default AddService;