import { Outlet, Link, useLocation } from 'react-router-dom';
import '../css/Index.css';
function Layout(){

    const location = useLocation();

    return(
    <>   
    <nav className="navbar shadow bg-light">
        <div className="container">
            <a className="navbar-brand img-fluid ps-5" href="#"><img src="./images/logo.png" alt="Logo" /></a>
            <div className="d-flex ms-auto">
                
                <Link to="/" className={`nav-link mx-3 ${ (location.pathname === `/`) ? `fw-bold active`: ``}`}>Home</Link>
                <Link to="/products" className={`nav-link mx-3 ${ (location.pathname === `/products`) ? `fw-bold active`: ``}`}>Products</Link>
                <Link to="/blogs" className={`nav-link mx-3 ${ (location.pathname === `/blogs`) ? `fw-bold active`: ``}`}>Blogs/Gallery</Link>
                <Link to="/about" className={`nav-link mx-3 ${ (location.pathname === `/about`) ? `fw-bold active`: ``}`}>About</Link>
                <Link to="/contact" className={`nav-link mx-3 ${ (location.pathname === `/contact`) ? `fw-bold active`: ``}`}>Contact</Link>
                
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
    </>    
    )
}

export default Layout;