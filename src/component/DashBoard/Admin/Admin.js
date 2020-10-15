import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";

const Admin = () => {
    const [logInUser, setLogInUser]= useContext(UserContext);

    
    const { register, handleSubmit, errors, control } = useForm();
    const onSubmit = data => {

            console.log(data);
            fetch('http://localhost:5000/addAdmin',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json',
                            'Accept': 'application/json' },
                body: JSON.stringify(data)
            })
            .then(res=>res.json())
            .then(data=>{
                
                data? alert("Admin add success full"): console.log(data)  
            })
    }
    
    return (
        <section>
        <form onSubmit={handleSubmit(onSubmit)}>
       
                   
                  <div className="form-group">
                      <input name="email" className="form-control"  ref={register} />
                  </div>
               
                  <div className="form-group text-center">
                        <input type="submit" className="btn btn-dark"/>  
                  </div>
           
         
       </form>
   </section>
    );
};

export default Admin;