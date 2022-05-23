import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Reviews from '../../Components/Reviews/Reviews';
import Tools from '../../Components/Tools/Tools';
import './Home.css';

const Home = () => {
    return (
        <>
            <Banner />
            <Tools />
            <Reviews />
        </>
    );
};

export default Home;