import React from 'react';
import Reviews from '../Reviews/Reviews';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import BackGround from './BackGround/BackGround';
import Products from './Products/Products';
import TopBanner from './TopBanner/TopBanner';
import './Home.css'

const Home = () => {
    return (
        <div className="bg">
            <NavBar/>
            <TopBanner/>
            <Products/>
            <Reviews/>
            <BackGround/>
            <Footer/>
        </div>
    );
};

export default Home;