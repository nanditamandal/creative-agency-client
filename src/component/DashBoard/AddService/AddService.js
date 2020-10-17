import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

var imgbbUploader = require('imgbb-uploader');

const AddService = () => {
    const [logInUser, setLogInUser]= useContext(UserContext);

    const [imgFile, setImgFile]=useState(null)

    const { register, handleSubmit, errors, control } = useForm();
    const handelUpload=(e)=>{

        //console.log("upload", e.target.files[0])
        setImgFile(e.target.files[0])
    }

    const onSubmit = data => {
        const image =data.img[0];
        let imgUrl;
        let sendObject;
       

        let body= new FormData();
        body.set('key', '994f313582445f0bb4434c8cda32a43a')
        body.append('image', image)
          fetch("https://api.imgbb.com/1/upload?key=994f313582445f0bb4434c8cda32a43a",{
            method: 'POST',
            body: body
         })
        .then(res=>res.json()
        .then(img=>{
            //console.log(img)
            imgUrl =img.data.display_url;
            if(imgUrl != null){
                sendObject={name: data.name,details: data.details, img : imgUrl}
                //console.log(sendObject)
                fetch('http://localhost:5000/addService',{
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json',
                                'Accept': 'application/json' },
                    body: JSON.stringify(sendObject)
                })
                .then(res=>res.json())
                .then(data=>{
                    
                    data? alert("Service added"): console.log(data)  
                })

            }
            
             
           
        }))
        
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
                           
                           <input type="file" name="img"  onChange={handelUpload} ref={register} />
                       </div>
                    
                       <div className="form-group text-center">
                             <input type="submit"className="btn btn-dark"/>  
                       </div>  
            </form>
        </section>
    );
};

export default AddService;