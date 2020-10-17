import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";

const Review = () => {
    const [logInUser, setLogInUser]= useContext(UserContext);
    
    const { register, handleSubmit, errors, control } = useForm();
    const onSubmit = data => {
        const review ={...data, img: logInUser.picture}
    
        fetch('https://blooming-escarpment-00227.herokuapp.com/addReview',{
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json',
                                'Accept': 'application/json' },
                    body: JSON.stringify(review)
                })
                .then(res=>res.json())
                .then(data=>{
                    
                    data? alert("review added"): console.log(data)  
                })

    }
    return (
         <section className="mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
       
                   <div className="form-group">
                      <input  name="name" className="form-control"   placeholder="Your name/ company name" ref={register({ required: true })}/>
                  </div>
                  <div className="form-group">
                      <input name="designation" className="form-control" placeholder="company Name, designation" ref={register} />
                  </div>
                 
                  <div className="form-group">
                      <textarea name="description" className="form-control"  ref={register}  id="" cols="30" rows="8" placeholder="Message *" ></textarea>
                  </div>
               
                  <div className="form-group text-center">
                        <input type="submit" className="btn btn-dark"/>  
                  </div>
           
         
       </form>
   </section>
    );
};

export default Review;