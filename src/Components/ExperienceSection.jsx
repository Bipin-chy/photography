import React from 'react'
import './ExperiencedSection.css';

function ExperienceSection() {
    return (
        <div className="experiences">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>HOW WE MAKE USER EXPERIENCES</h1>
                    <p className="mail">hire@colorlib.com</p>
                </div>
                <div className="col">
                    <h3>You can’t use up creativity. The more you use, the more you have in your signifant mind.</h3>
                    <span>SALVADOR DALI</span>
                    <p> Digital Artisit</p>
                    <div className="year">
                        <div className="year-number"><p className="number-5">05</p><p className="year-text">Years of <br /> Digital Experience</p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ExperienceSection;
