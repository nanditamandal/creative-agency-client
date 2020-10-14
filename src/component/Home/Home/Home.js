import React from 'react';
import Feedback from '../FeedBack/Feedback';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Logo from '../Logo/Logo';
import Services from '../Service/Services';
import ShowWok from '../ShowWork/ShowWok';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Logo></Logo>
            <Services></Services>
            <ShowWok></ShowWok>
            <Feedback></Feedback>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;