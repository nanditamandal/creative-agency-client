import React from 'react';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
// import './ShowWork.css';


const ShowWok = () => {
    return (
        <section style={{height:'400px'}} className=" work-container mt-5 bg-dark">
            <h2 className="text-white">Here are some of Our Works</h2>
            <div  className="row picture">
                <div className="col-4 pt-5" >
                        <img  src={carousel1} alt="" style={{height:'200px', width:'80%'}}/>
                </div>
                <div className="col-4  pt-5"   >
                        <img src={carousel2} alt="" style={{height:'200px', width:'80%'}}/>
                </div>
                <div className="col-4  pt-5"   >
                        <img src={carousel3} alt="" style={{height:'200px', width:'80%'}}/>
                </div>
        
            </div>
            
        </section>
    );
};

export default ShowWok;