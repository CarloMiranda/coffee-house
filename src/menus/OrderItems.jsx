import React, { useContext} from 'react';
import { BEVERAGES } from './Beverage';
import {MEALS} from './Meal';
import { ShopContext } from '../context/ShopContext';
import { CartItem } from '../menus/CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCcMastercard, faCcVisa, faCcAmex, faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import Swal from 'sweetalert2';

export const OrderItems = () => {
    const { cartItems } = useContext(ShopContext);

    const combinedItems = [...BEVERAGES, ...MEALS];

    const sortedItems = combinedItems.sort(
        (a, b) => cartItems[b.id] - cartItems[a.id]
    );

    const totalItems = Object.values(cartItems).reduce(
        (total, quantity) => total + quantity,
        0
    )

    const subtotal = sortedItems.reduce((total, product) => {
        const quantity = cartItems[product.id];
        const itemPrice = product.price;
        return total + quantity * itemPrice;
    }, 0);

    const deliveryFee = 60;
    const taxrate = 0.12;
    const taxAmount = subtotal * taxrate;
    const total = subtotal + deliveryFee + taxAmount;

    const handlePlaceOrder = () => {
        Swal.fire(
            'Good job!',
            'You ordered successfully!',
            'success'
          )
    };
    
    return(
    <section className='order-items'>
        <button type="button" className="cart-btn btn btn-primary position-absolute bottom-0 end-0 me-5 mb-5 p-3 rounded-5 position-fixed" data-bs-toggle="modal" data-bs-target="#exampleModal" id="order">
                <span className="cart-icon"><FontAwesomeIcon icon={faShoppingCart} /></span> 
                <span className='cart-text'>Your Orders</span>
                <span className="position-absolute badge rounded-pill bg-danger">
                {totalItems}</span>
        </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Your Orders</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <section className="h-100 h-custom">
                                <div className="container h-100">
                                    <div className="row d-flex justify-content-center align-items-center h-100">
                                        <div className="col">
                                            <div className="card">
                                                <div className="card-body p-4">                            
                                                    <div className="row">                            
                                                        <div className="col-lg-7">                                                                                       
                                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                                <p className="mb-0" id="selected-count">
                                                                    <b>You have {totalItems} {totalItems === 0 ? 'no order yet' : 'orders'}!</b>
                                                                </p>
                                                                <div className='d-flex'>
                                                                    <p className="mb-0"><span className="text-muted">Sort by:</span> 
                                                                    <a href="#!" className="text-body">Qty <i className="fas fa-angle-down mt-1"></i></a></p>
                                                                </div>
                                                            </div>   
                                                            <div className="cart">
                                                                <div className="cardItems">
                                                                    {sortedItems.map((product) => {
                                                                        if (cartItems[product.id] !== 0) {
                                                                            return <CartItem key={product.id} data={product} />;
                                                                        }
                                                                    })}
                                                                </div>
                                                            </div>                            
                                                        </div>            
                                                        <div className="col-lg-5">                                
                                                            <div className="card bg-primary text-white rounded-3">
                                                                <div className="card-body">                                               
                                                                    <input type="text" className="form-control" placeholder="Full Name" aria-label="default input"/><br/>
                                                                    <input type="email" className="form-control" placeholder="Delivery Address" aria-label="default input"/><br/>
                                                                    <input type="number" className="form-control" placeholder="Contact" aria-label="default input"/><br/>
                                                                    <input type="checkbox" id="option2"/><span> </span>
                                                                    <label htmlFor="option2" className="form-text text-white fs-5" id="cod"><strong>Cash on delivery</strong></label>                                
                                                                        <p className="small mb-2">Card type</p>
                                                                        <div>
                                                                            <a href="#!" type="submit" className="text-white">
                                                                                <FontAwesomeIcon icon={faCcMastercard} className="fa-2x me-2" />
                                                                            </a>
                                                                            <a href="#!" type="submit" className="text-white">
                                                                                <FontAwesomeIcon icon={faCcVisa} className="fa-2x me-2" />
                                                                            </a>
                                                                            <a href="#!" type="submit" className="text-white">
                                                                                <FontAwesomeIcon icon={faCcAmex} className="fa-2x me-2" />
                                                                            </a>
                                                                            <a href="#!" type="submit" className="text-white">
                                                                                <FontAwesomeIcon icon={faCcPaypal} className="fa-2x" />
                                                                            </a>
                                                                        </div>                              
                                                        <form className="mt-4">
                                                            <div className="form-outline form-white mb-4">
                                                                <input type="text" id="card-name" className="form-control form-control-lg" siez="17"
                                                                    placeholder="Cardholder's Name" />
                                                                <label className="form-label" htmlFor="card-name">Cardholder's Name</label>
                                                            </div>                                
                                                            <div className="form-outline form-white mb-4">
                                                                <input type="text" id="card" className="form-control form-control-lg" siez="17"
                                                                    placeholder="1234 5678 9012 3457" minLength="19" maxLength="19" />
                                                                <label className="form-label" htmlFor="card">Card Number</label>
                                                            </div>                                
                                                            <div className="row mb-4">
                                                                <div className="col-md-6">
                                                                    <div className="form-outline form-white">
                                                                        <input type="text" id="expiration" className="form-control form-control-lg"
                                                                        placeholder="MM/YYYY" size="7" minLength="7" maxLength="7" />
                                                                        <label className="form-label" htmlFor="expiration">Expiration</label>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-outline form-white">
                                                                        <input type="password" id="cvv" className="form-control form-control-lg"
                                                                            placeholder="&#9679;&#9679;&#9679;" size="1" minLength="3" maxLength="3" />
                                                                        <label className="form-label" htmlFor="cvv">Cvv</label>
                                                                    </div>
                                                                </div>
                                                            </div>        
                                                        </form>
                                                            <hr className="my-4"/>     
                                                                <div className="d-flex justify-content-between">
                                                                    <p className="mb-2">Total Items</p>
                                                                    <p className="mb-2">{totalItems} {totalItems < 2 ? 'pc' : 'pcs' }</p>
                                                                </div>                               
                                                                <div className="d-flex justify-content-between">
                                                                    <p className="mb-2">Subtotal</p>
                                                                    <p className="mb-2">₱ {subtotal.toFixed(2)}</p>
                                                                </div>
                                                                <div className="d-flex justify-content-between">
                                                                    <p className="mb-2">Delivery Fee</p>
                                                                    <p className="mb-2">₱ {deliveryFee.toFixed(2)}</p>
                                                                </div>                                    
                                                                <div className="d-flex justify-content-between mb-4">
                                                                    <p className="mb-2">Total(Incl. taxes 12%)</p>
                                                                    <p className="mb-2">₱ {total.toFixed(2)}</p>
                                                                </div>   
                                                                <div className="d-flex justify-content-center ">
                                                                <button onClick={handlePlaceOrder}
                                                                    type="button" className="btn btn-info btn-block btn-lg">
                                                                    Place Order
                                                                </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save Order</button>
                        </div>
                    </div>             
                </div>                        
            </div>
        </div>
    </section>
    )
}

export default OrderItems;