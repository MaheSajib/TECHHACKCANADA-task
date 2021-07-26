import React from 'react';
import SiteLayout from '../../SiteLayout/SiteLayout';
import HeroSection from '../HeroSection/HeroSection';
import PopularTitle from '../PopularTitle/PopularTitle';

const Home = () => {
    return (
        <SiteLayout>
            <PopularTitle title='Titles'></PopularTitle>
            <HeroSection></HeroSection>
        </SiteLayout>
    );
};

export default Home;