import React from 'react';
import './Brand.css';

function Brand() {
    return (
        <section id="brand">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>TAKE A LOOK <br/> AT OUR ACHIVEMENT</h2>
                    <p>Excepteur sint occaecat cupidatat. irure dolor in.</p>
                    <div  className="get-start-btn"><button>Get Start</button></div>
                </div>

                <div className="col brand-col brand-col2" >
                    <div className="brand-card">
                        <img src="./img/brand1.webp" alt="brand1-icon"/>
                        <div className="brand-card-text">
                            <p>Behance award</p>
                            <p>Prize 2019</p>
                        </div>
                    </div>

                    <div className="brand-card">
                        <img src="./img/brand1.webp" alt="brand1-icon"/>
                        <div className="brand-card-text">
                            <p>Behance award</p>
                            <p>Prize 2019</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col brand-col" style={{display: "flex", justifyContent: "space-between"}}>
                    <div className="brand-card">
                        <img src="./img/brand1.webp" alt="brand1-icon"/>
                        <div className="brand-card-text">
                            <p>Behance award</p>
                            <p>Prize 2019</p>
                        </div>
                    </div>

                    <div className="brand-card">
                        <img src="./img/brand1.webp" alt="brand1-icon"/>
                        <div className="brand-card-text">
                            <p>Behance award</p>
                            <p>Prize 2019</p>
                        </div>
                    </div>
                </div>

                <div className="col brand-col brand-col2">
                    <div className="brand-card">
                        <img src="./img/brand1.webp" alt="brand1-icon"/>
                        <div className="brand-card-text">
                            <p>Behance award</p>
                            <p>Prize 2019</p>
                        </div>
                    </div>

                    <div className="brand-card">
                        <img src="./img/brand1.webp" alt="brand1-icon"/>
                        <div className="brand-card-text">
                            <p>Behance award</p>
                            <p>Prize 2019</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    )
}

export default Brand
