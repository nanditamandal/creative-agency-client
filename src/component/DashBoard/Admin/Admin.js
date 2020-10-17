import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";

const Admin = () => {
    const [logInUser, setLogInUser]= useContext(UserContext);

    
    const { register, handleSubmit, errors, control } = useForm();
    const onSubmit = data => {

            console.log(data);
            fetch('https://blooming-escarpment-00227.herokuapp.com/addAdmin',{
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
       
                   
                  <div className="form-group pt-5">
                  <label for="email">Email address</label>
                      <input name="email" id="email" className="form-control"  ref={register} />
                  </div>
               
                  <div className="form-group text-center">
                        <input type="submit" className="btn btn-primary"/>  
                  </div>
           
         
       </form>
   </section>
    );
};

export default Admin;