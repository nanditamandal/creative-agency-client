import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section style={{backgroundColor: '#FBD062'}} className="contact-container my-5 py-5">
           <div className="row ">
               <div div className="col-md-5 mx-auto">
                   <h2>Lets Us handel Your<br/> Project Professionally</h2>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, aut.</p>

                    
               </div>
               <div className="col-md-7 ">
                   <form className="mr-5 pr-5" action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your Company name/ name *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder=" Your Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-dark"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default Footer;