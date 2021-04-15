import React from 'react'
import Blog from './Blog'
import Brand from './Brand'
import ExperienceSection from './ExperienceSection'
import Gallery from './Gallery'
import HeroSection from './HeroSection'
import TestomonialSection from './TestomonialSection'
import TouristBlog from './TouristBlog'
import '../App.css';

function Home() {
    return (
        <div>
        <HeroSection />
        <ExperienceSection/>
        <Blog/>
        <Gallery/>
        <Brand/>
        <TestomonialSection/>
        <TouristBlog/>
        </div>
    )
}

export default Home;
