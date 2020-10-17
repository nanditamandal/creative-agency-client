import React, { Component } from 'react';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
// import './ShowWork.css';


import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const ShowWok = () => {
    return (
        <section style={{height:'400px'}} className=" work-container mt-5 bg-dark">
            <h2 className="text-white text-center">Here are some of <span style={{color: '#1CC7C1'}}>Our Works</span></h2>
            <div id="carouselExampleSlidesOnly" className="carousel slide row picture" data-ride="carousel">
           
            <div className="carousel-inner">
                <div className="carousel-item active col pt-5">
                <img className="d-block w-100 pl-5 pr-5" src={carousel1} alt="First slide"style={{height:'200px', width:'70%'}}/>
                </div>
                <div className="carousel-item col pt-5">
                <img className="d-block w-100" src={carousel2} alt="Second slide"style={{height:'200px', width:'70%'}}/>
                </div>
                <div className="carousel-item col pt-5">
                <img className="d-block w-100" src={carousel3} alt="Third slide"style={{height:'200px', width:'70%'}}/>
                </div>
            </div>
            </div>
            
            
        </section>
    );
};

export default ShowWok;