import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <section id="footer">
        <div className="container">
            <div className="row footer-section">
                <div className="col">
                    <img src="./img/logo.webp" alt="logo"/>
                    <p>Grabbing the concsumer’s attention isn’t enough you have to keep that attention for at least a.</p>
                </div>

                <div className="col" >
                    <h3>NAVIGATIONS</h3>
                    <ul>
                        <li>Home</li>
                        <li>Events</li>
                        <li>Testimonial</li>
                        <li>Categories</li>
                        <li>Contacts</li>
                    </ul>
                </div>

                <div className="col">
                    <h3>USEFUL LINKS</h3>
                    <ul>
                        <li>Home</li>
                        <li>Events</li>
                        <li>Testimonial</li>
                        <li>Categories</li>
                        <li>Contacts</li>
                    </ul>
                </div>

                <div className="col">
                    <h3>INSTAGRAM</h3>
                    <div className=" row footer-image" style={{marginTop: "20px"}}>
                        <div className=" footer-img"><img src="./img/instagram1.webp" alt="instagram1"/></div>
                        <div className=" footer-img"><img src="./img/instagram2.webp" alt="instagram2"/></div>
                        <div className=" footer-img"><img src="./img/instagram3.webp" alt="instagram3"/></div>
                    </div>
                    <div className="row footer-image">
                        <div className=" footer-img"><img src="./img/instagram4.webp" alt="instagram4"/></div>
                        <div className=" footer-img"><img src="./img/instagram5.webp" alt="instagram5"/></div>
                        <div className=" footer-img"><img src="./img/instagram6.webp" alt="instagram6"/></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Footer;
