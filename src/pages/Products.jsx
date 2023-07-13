import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcMastercard, faCcVisa, faCcAmex, faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Products(){    
    const menuRef = useRef(null);

    const showCategory = (categoryName) => {
        const categories = document.getElementsByClassName("category");
        for (let i = 0; i < categories.length; i++) {
            categories[i].style.display = "none";
        }

        if (categoryName === 'all') {
            for (let i = 0; i < categories.length; i++) {
                categories[i].style.display = "block";
            }
        } else {
            const categoryElement = document.getElementById(categoryName);
            if (categoryElement) {
                categoryElement.style.display = "block";
            }
        }
    };
    
      useEffect(() => {
        const menu = menuRef.current;
        const stickyClass = 'sticky-top';
        const menuTop = menu.offsetTop;
    
        const handleScroll = () => {
          if (window.pageYOffset >= menuTop) {
            menu.classList.add(stickyClass);
          } else {
            menu.classList.remove(stickyClass);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    return(
    <section>
        <div className="container justify-content-center">
            <header>
                <div>
                    <img src="./images/header.png" alt="coffee image" className="img-fluid" />
                </div>
            </header>

            <div className="menu text-center bg-primary p-3" ref={menuRef} id="menu-top">
            <button onClick={() => showCategory('all')} className="button p-1 col-2 border rounded-3" data-aos="fade-right">
                All
            </button>
            <button onClick={() => showCategory('popular')} data-id="popularitems" className="button p-1 border col-md-2 rounded-3 ms-3" data-aos="fade-right">
                Popular Items
            </button>
            <button onClick={() => showCategory('beverages')} data-id="beverages" className="button p-1 border col-md-2 rounded-3 ms-3" data-aos="fade-left">
                Beverages
            </button>
            <button onClick={() => showCategory('meals')} data-id="meals" className="button p-1 border col-md-2 rounded-3 ms-3" data-aos="fade-left">
                Meals
            </button>
            </div>
            
            <div className="all-menu">
                <div id="all" className="category mt-4">
                    <h2><strong>All Items</strong></h2>
                    <hr />
                </div>

                <div id="popular" className="category text-center mt-5">
                    <h3>Popular Items</h3>
                    <hr />
                    <div className="row justify-content-center">
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/tiramisu.png" alt="White Chocolate Tiramisu" className="img-fluid" />
                            <div>
                                <p>White Chocolate Tiramisu</p>
                                <p>Php 250.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/caramel.png" alt="Caramel Latte" className="img-fluid" />
                            <div>
                                <p>Caramel Latte</p>
                                <p>Php 250.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/frappe.png" width="70px" alt="frappe" className="img-fluid" />
                            <div>
                                <p>Frappe</p>
                                <p>Php 250.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/waffles.png" alt="Chicken n Waffles" className="img-fluid" />
                            <div>
                                <p>Chicken n' Waffles</p>
                                <p>Php 250.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/hotchoco.png" alt="hot chocolate" className="img-fluid" />
                            <div>
                                <p>Hot Chocolate</p>
                                <p>Php 250.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/bfast1.png" alt="Chicken Cheese Biscuit" className="img-fluid" />
                            <div>
                                <p>Chicken Cheese Biscuit</p>
                                <p>Php 250.00</p>
                            </div>
                        </button>
                    </div>
                </div>

                <div id="beverages" className="category text-center mt-5">
                    <h3>Beverages</h3>
                    <hr />
                    <div className="row justify-content-center">
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                            <img src="./menu/hotchoco.png" alt="hot chocolate" className="img-fluid" />
                            <div>
                                <p>Hot Chocolate</p>
                                <p>Php 250.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/americano.png" alt="americano" className="img-fluid" />
                            <div>
                                <p>Americano</p>
                                <p>Php 250.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/frappe.png" width="70px" alt="frappe" className="img-fluid" />
                            <div>
                                <p>Frappe</p>
                                <p>Php 250.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/tiramisu.png" alt="White Chocolate Tiramisu" className="img-fluid" />
                            <div>
                                <p>White Chocolate Tiramisu</p>
                                <p>Php 250.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/caramel.png" alt="Caramel Latte" className="img-fluid" />
                            <div>
                                <p>Caramel Latte</p>
                                <p>Php 250.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/caramelmacchaiato.png" alt="Caramel macchiato" className="img-fluid" />
                            <div>
                                <p>Caramel Macchiato</p>
                                <p>Php 250.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/Cappuccino.png" alt="cappuccino" className="img-fluid" />
                            <div>
                                <p>Cappuccino</p>
                                <p>Php 250.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/icecoldbrew.png" width="70px" alt="Ice Cold Brew" className="img-fluid" />
                            <div>
                                <p>Ice Cold Brew</p>
                                <p>Php 250.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/sweetmatcha.png" alt="Sweet Matcha" className="img-fluid" />
                            <div>
                                <p>Sweet Matcha</p>
                                <p>Php 250.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/housecoffee.png" alt="House Coffee" className="img-fluid" />
                            <div>
                                <p>House Coffee</p>
                                <p>Php 250.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/irishcoffee.png" width="100px" alt="Irish Coffee" className="img-fluid" />
                            <div>
                                <p>Irish Coffee</p>
                                <p>Php 250.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/doubleshot.png" alt="Double Shot" className="img-fluid" />
                            <div>
                                <p>Double Shot</p>
                                <p>Php 250.00</p>
                            </div>
                        </button>
                    </div>
                </div>

                <div id="meals" className="category text-center mt-5">
                    <h3>Meals</h3>
                    <hr />
                    <div className="row justify-content-center">
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/bfast1.png" alt="Chicken Cheese Biscuit" className="img-fluid" />
                            <div>
                                <p>Chicken Cheese Biscuit</p>
                                <p>Php 350.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/bfast2.png" alt="Chicken n' Waffles" className="img-fluid" />
                            <div>
                                <p>Chicken n' Waffles</p>
                                <p>Php 350.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/bfast3.png" alt="Flying Pig" className="img-fluid" />
                            <div>
                                <p>Flying Pig</p>
                                <p>Php 350.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/bfast4.png" alt="Nanna's Cinn Rolls" className="img-fluid" />
                            <div>
                                <p>Nanna's Cinn Rolls</p>
                                <p>Php 350.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/bfast5.png" alt="Not-So-Plain Jane" className="img-fluid" />
                            <div>
                                <p>Not-So-Plain Jane</p>
                                <p>Php 350.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/bfast6.png" alt="Sausage Egg & Cheese Biscuit" className="img-fluid" />
                            <div>
                                <p>Sausage Egg & Cheese Biscuit</p>
                                <p>Php 350.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/lunch1.png" alt="Chicken Salad Croissant" className="img-fluid" />
                            <div>
                                <p>Chicken Salad Croissant</p>
                                <p>Php 350.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/lunch2.png" alt="Chicken Quesadilla" className="img-fluid" />
                            <div>
                                <p>Chicken Quesadilla</p>
                                <p>Php 350.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/lunch3.png" alt="Chicken Tender Wrap" className="img-fluid" />
                            <div>
                                <p>Chicken Tender Wrap</p>
                                <p>Php 350.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/lunch4.png" alt="Classic Club" className="img-fluid" />
                            <div>
                                <p>Classic Club</p>
                                <p>Php 350.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/lunch5.png" alt="Classic Grilled Cheese" className="img-fluid" />
                            <div>
                                <p>Classic Grilled Cheese</p>
                                <p>Php 350.00</p>
                            </div>
                        </button>
                        <button className="menu-item my-3 ms-5 col-md-3 d-flex border rounded-4 shadow" data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000">
                            <img src="./menu/lunch6.png" alt="Grilled Chicken Wrap" className="img-fluid" />
                            <div>
                                <p>Grilled Chicken Wrap</p>
                                <p>Php 350.00</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>              
    </section>
    )
}

export default Products;