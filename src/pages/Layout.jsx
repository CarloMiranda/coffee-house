import React, { useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import '../css/Index.css';
import ScrollToTopButton from "./ScrollToTopButton";

function Layout(){

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            document.title = 'Home | Coffee House';
        } else if (location.pathname === '/products') {
            document.title = 'Products | Coffee House';
        } else if (location.pathname === '/blogs') {
            document.title = 'Blogs/Gallery | Coffee House';
        } else if (location.pathname === '/about') {
            document.title = 'About | Coffee House';
        } else if (location.pathname === '/contact') {
            document.title = 'Contact | Coffee House';
        } else if (location.pathname === '/career') {
            document.title = 'Career | Coffee House';
        }
    }, [location]);
    return(
    <>   
    <nav className="navbar shadow bg-light">
        <div className="container">
            <a className="navbar-brand img-fluid" href="#"><img src="./images/logo.png" alt="Logo" /></a>
            <div className="nav-item d-flex">
                
                <Link to="/" className={`nav-link mx-3 ${ (location.pathname === `/`) ? `fw-bold active`: ``}`}>Home</Link>
                <Link to="/products" className={`nav-link mx-3 ${ (location.pathname === `/products`) ? `fw-bold active`: ``}`}>Products</Link>
                <Link to="/blogs" className={`nav-link mx-3 ${ (location.pathname === `/blogs`) ? `fw-bold active`: ``}`}>Blogs/Gallery</Link>
                <Link to="/about" className={`nav-link mx-3 ${ (location.pathname === `/about`) ? `fw-bold active`: ``}`}>About</Link>
                <Link to="/contact" className={`nav-link mx-3 ${ (location.pathname === `/contact`) ? `fw-bold active`: ``}`}>Contact</Link>
                <Link to="/career" className={`nav-link mx-3 ${ (location.pathname === `/career`) ? `fw-bold active`: ``}`}>Career</Link>
                
            </div>
        </div>
    </nav>

    <Outlet />


    {/* Footer */}
    <div className="bg-light text-center p-4 mt-5">
    <img src="./images/logo.png" alt="Logo" />
    <div className="row">       
        <p>Designed By <a href="#"> <span>Carlo Miranda</span></a></p>
        <p>&copy; Copyright <strong> <span>Coffee House</span></strong>. All Rights reserved</p>
    </div>
    </div>
    <ScrollToTopButton />
    </>    
    )
}

export default Layout;