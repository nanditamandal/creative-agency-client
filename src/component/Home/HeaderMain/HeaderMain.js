import React from 'react';
import { useHistory } from 'react-router-dom';
import frame from '../../../images/logos/Frame.png';
 

const HeaderMain = () => {
    const history= useHistory();
    const handelClick=()=>{
        history.push("/login")
    }
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Lets Grow Your<br/>Brand To The <br/>Next Level</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, placeat? Modi ex esse distinctio omnis!</p>
                <button onClick={handelClick} className="btn-dark text-white">Hire Us</button>
            </div>
            <div className="col-md-6">
                <img src={frame} alt="" className="img-fluid"/>
            </div>

        </main>
    );
};

export default HeaderMain;