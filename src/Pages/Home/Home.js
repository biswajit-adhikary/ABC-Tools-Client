import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Reviews from '../../Components/Reviews/Reviews';
import Summary from '../../Components/Summary/Summary';
import Tools from '../../Components/Tools/Tools';
import './Home.css';

const Home = () => {
    return (
        <>
            <Banner />
            <Tools />
            <Reviews />
            <Summary />
        </>
    );
};

export default Home;