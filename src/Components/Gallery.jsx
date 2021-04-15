import React from 'react';
import './Gallery.css';

function Gallery() {
    return (
        <section id="gallery">
        
            <div className="row">
                <div className="col gallery-image" style={{backgroundImage: `url(./img/gallery1.webp)`}}>
                </div>
                <div className="col gallery-image" style={{backgroundImage: `url(./img/gallery2.webp)`}}>
                    
                </div>
                <div className="col gallery-image" style={{backgroundImage: `url(./img/gallery3.webp)`}}>
                    
                </div>
            </div>

            <div className="row">
                <div className="col gallery-image" style={{backgroundImage: `url(./img/gallery4.webp)`}}>
                </div>
                <div className="col gallery-image" style={{backgroundImage: `url(./img/gallery5.webp)`}}> 
                </div>
                <div className="col gallery-image" style={{backgroundImage: `url(./img/gallery6.webp)`}}>
                    
                </div>
            </div>
       
    </section>
    )
}

export default Gallery
