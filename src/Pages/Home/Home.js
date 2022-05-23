import React from 'react';
import About from '../../Components/About/About';
import Banner from '../../Components/Banner/Banner';
import Partners from '../../Components/Partners/Partners';
import Reviews from '../../Components/Reviews/Reviews';
import Summary from '../../Components/Summary/Summary';
import Tools from '../../Components/Tools/Tools';
import './Home.css';

const Home = () => {
    return (
        <>
            <Banner />
            <About />
            <Tools />
            <Summary />
            <Reviews />
            <Partners />
        </>
    );
};

export default Home;