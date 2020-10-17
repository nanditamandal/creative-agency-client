import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" ><img src={logo} alt="" style={{height:"30px"}}/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link ml-5 text-white" to="/">Home</Link>
                            {/* <a className="nav-link ml-5" href="">Home <span className="sr-only">(current)</span></a> */}
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-5 text-white" to="/login">Log In</Link>
                            
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link ml-5 text-white" to="/dashboard">DashBoard</Link>
                            
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link ml-5 text-white" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item">
                             <button class="btn btn-dark my-2 my-sm-0" >
                             <Link className="nav-link  text-white" to="/login">Log In</Link>
                             </button>
                        </li>

                        </ul>
                        
                    </div>
            </nav>
    );
};

export default Navbar;