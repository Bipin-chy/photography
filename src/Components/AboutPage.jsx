import React from 'react';
import ExperienceSection from './ExperienceSection';
import TestomonialSection from './TestomonialSection';
import TouristBlog from './TouristBlog';
import './About.css';
import About2 from './aboutImages/about2.png';

function AboutPage() {
    return (
        <section >
            <div className="banner">
            <h1>About Us</h1>
            </div>
            
        <ExperienceSection/>
        <div className="container about2">
            <div className="row">
                <div className="col">
                    <img src={About2} alt="about2"/>
                </div>

                <div className="col">
                    <div className="content">
                        <div className="content1">
                            <h1>Our Mission</h1>
                            <p>Brook presents your services with flexible nienti and multipurpose layouts. You can select vorite layouts & elements for particular projects with unlimited mizationi possibilities</p>
                        </div>

                        <div className="content1">
                            <h1>Our Mission</h1>
                            <p>Brook presents your services with flexible nienti and multipurpose layouts. You can select vorite layouts & elements for particular projects with unlimited mizationi possibilities</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
        <TestomonialSection/>
        <TouristBlog/>
        </section>
        
    )
}

export default AboutPage;
