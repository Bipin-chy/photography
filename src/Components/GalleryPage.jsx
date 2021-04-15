import React from 'react';
import './About.css';
import Gallery from './Gallery';


function GalleryPage() {
    return (
        <section >
            <div className="banner">
            <h1>Gallery</h1>
            </div>
            
            <Gallery/>
        </section>
    )
}

export default GalleryPage;
