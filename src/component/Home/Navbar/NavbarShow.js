import React from 'react';
import logo from '../../../images/logos/logo.png';

import { Button, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';


const NavbarShow = () => {
    const[logInUser, setLogInUser]= useContext(UserContext);

    
    return (
        <section >
        <Navbar className="row d-flex align-items-center nav-item" expand="lg ">
                    <Navbar.Brand className="ml-5 pl-5"><img src={logo} alt="Group-1329" border="0" style={{height:'80px', width:'300px'}}></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" style={{marginLeft:'300px'}}>
                    {
                         logInUser.name ? <h5>{logInUser.name}</h5> : <h5>{logInUser.email}</h5>
                        }
                        <Nav className="mr-5">
                         
                        <Nav.Link className="mr-3" ><Link to="/"><span className='text-dark'>Home </span></Link></Nav.Link>
                  
                        <Nav.Link className="mr-3" ><Link to="/"><span className='text-dark'>Our Portfolio</span></Link></Nav.Link>
                        <Nav.Link className="mr-3"><Link to="/dashboard"><span className='text-dark'>Dash Board</span></Link></Nav.Link>
                        <Nav.Link className="mr-3"><Link to="/"><span className='text-dark'>Contact Us</span></Link></Nav.Link>
                        <Button variant="dark"><Link to="/login"><span className='text-white'>Log in</span></Link></Button>
                        </Nav>
                       
                        
                       
                  
                    </Navbar.Collapse>
                    </Navbar>
      

            </section>
    );
};

export default NavbarShow;