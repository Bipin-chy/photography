import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import { Button } from './Button';
import './Navbar.css'
// import logo from "../img/logo.webp";

function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)
    const[scrolled,setScroll] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset >500){
            setScroll(true);
        }else{
            setScroll(false)
        }
    }

    useEffect( () => {
        window.addEventListener('scroll', handleScroll);
    })
    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth <=960){
            setButton(false)
        }else{
            setButton(true)
        }
    }

    useEffect(() =>{
        showButton()
    },[]);

    window.addEventListener('resize', showButton);

    let navbarClasses = ['navbar'];
    if(scrolled){
        navbarClasses.push('scrolled');
    }

    return (
        <div className={navbarClasses.join(" ")}>
            <nav >
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <img src="./img/logo.webp" alt="logo " />
                    </Link>

                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li  className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li  className="nav-item">
                                <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
                                    About
                                </Link>
                                </li>
                                <li  className="nav-item">
                                <Link to="/Gallery" className="nav-links" onClick={closeMobileMenu}>
                                    Gallery
                                </Link>
                                </li>
                                <li  className="nav-item">
                                <Link to="/Services" className="nav-links" onClick={closeMobileMenu}>
                                    Services
                                </Link>
                                </li>
                                <li  className="nav-item">
                                <Link to="/Blog" className="nav-links" onClick={closeMobileMenu}>
                                    Blog
                                </Link>
                                </li>
                                <li  className="nav-item">
                                <Link to="/Contact" className="nav-links" onClick={closeMobileMenu}>
                                    Contact
                                </Link>
                                </li>
                        
                    </ul>

                            {/* <div className="button-contact"> */}
                                    {button && <Button buttonStyle='btn--primary'>Contact Us</Button>}
                            {/* </div> */}
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
