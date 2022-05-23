import React from 'react';
import Header from '../../Header/Header';
import Nav from '../../Header/Nav';
import Banner from '../Banner/Banner';
import UseAuth from '../firebase/Hooks/UseAuth';








const Home = () => {
    return (
        <div>
            
            <Header></Header>  
            <Nav></Nav>
            <UseAuth></UseAuth>
            <Banner></Banner>
           
        </div>
    );
};

export default Home;