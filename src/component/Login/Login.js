import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import logo from '../../images/logos/logo.png';
import firebaseConfig from './firebase.config';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';



const Login = () => {
    const login={
        height: '600px', width: '500px',  marginTop: '100px',background: 'white'
    }
    var provider = new firebase.auth.GoogleAuthProvider();
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    let history = useHistory();
    let location = useLocation();

    const [logInUser, setLogInUser]= useContext(UserContext);
    let { from } = location.state || { from: { pathname: "/" } };
    
    const handelLogin=()=>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
          const { name, email, picture } = result.additionalUserInfo.profile
          const user = {  name, email, picture }
          checkUser(user);
         
        }).catch(function (error) {
          const errorMessage = error.message;
          
        });

    }
    const checkUser=(user)=>{
        const userEmail =user.email;
        fetch(`https://blooming-escarpment-00227.herokuapp.com/checkUser/${userEmail}`)
        .then(res=>res.json())
        .then(data=>{
            if(data){
                user={...user, userType: 'admin'}
                setLogInUser(user);
                history.replace(from);
            }
            else{
                user={...user, userType: 'customer'}
                setLogInUser(user);
                history.replace(from);

            }

        })
      

    }
  


    return (
        <div className="login-page container">
            <div className="justify-content-center mt-5 pt-5" style={{login}}>
                <div style={{height:'100px'}}>
                    <img src={logo} style={{height: '80%'}}alt =""/>
                </div>
                       
                        
                    <div className="justify-content-center" style={{border: '1px solid black',width: '500px'}} >
                        <h3>Log In With</h3>
                        <button type="button" className="btn btn-outline-dark" onClick={handelLogin}><img src="https://i.ibb.co/bQZmC5Q/google.png" alt="google" border="0" />Continue with google</button>
                        <p>Don't have any Account ? <Link to='/login'>create an account</Link></p>
                    </div>   
            </div>
    
        </div>
       
        
    );
};

export default Login;