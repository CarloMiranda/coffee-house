
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcMastercard, faCcVisa, faCcAmex, faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function OrderItems(){

    return(
    <section>
        <button type="button" className="btn btn-primary position-absolute bottom-0 end-0 me-5 mb-5 p-3 rounded-5 position-fixed" data-bs-toggle="modal" data-bs-target="#exampleModal" id="order">
            🛒 Your Orders
            <span className="position-absolute translate-buttom badge rounded-pill bg-danger">
                4<span className="visually-hidden">Added Items</span></span>
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
                                                                <div>
                                                                    <p className="mb-0" id="selected-count"><b>You have 4 orders!</b></p>
                                                                </div>
                                                                    <div className='d-flex'>
                                                                     
                                                                        <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!"
                                                                        className="text-body">price <i className="fas fa-angle-down mt-1"></i></a></p>
                                                                    </div>
                                                            </div>   
                                                            <div className="card mb-3">
                                                                <div className="row align-items-center">
                                                                    <div className="col-md-3">
                                                                         <img className=" img-fluid rounded-3" src="./menu/caramelmacchaiato.png"
                                                                        alt="Shopping item"/>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>Carammel macchiato</p>
                                                                    </div>                                                                                                                                             
                                                                    <div className="col-md-2">
                                                                         <p>2pcs </p>
                                                                    </div>
                                                                    <div className="col-md-2">
                                                                        <p >₱250</p>                 
                                                                    </div>
                                                                    <div className='col-md-1'>
                                                                        <button className='trash border-0 bg-white'><FontAwesomeIcon icon={faTrash} /></button>
                                                                    </div>                                                                       
                                                                </div>
                                                            </div>                                            
                                                            <div className="card mb-3">
                                                                <div className="row align-items-center">
                                                                    <div className='col-md-3'>
                                                                        <img src="./menu/icecoldbrew.png"
                                                                        className="img-fluid rounded-3" alt="Shopping item"/>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>Ice cold brew </p>
                                                                    </div>
                                                                    <div className="col-md-2">
                                                                        <p>1pc</p>
                                                                    </div>
                                                                    <div className="col-md-2">
                                                                        <p>₱250</p>
                                                                    </div>
                                                                    <div className='col-md-1'>
                                                                        <button className='trash border-0 bg-white'><FontAwesomeIcon icon={faTrash} /></button>
                                                                    </div> 
                                                                </div> 
                                                            </div>                                           
                                                            <div className="card mb-3">
                                                                <div className="row align-items-center">
                                                                    <div className='col-md-3'>
                                                                        <img src="./menu/bfast1.png"
                                                                            className="img-fluid rounded-3" alt="Shopping item"/>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>Chicken cheese biscuit</p>
                                                                    </div>
                                                                    <div className="col-md-2">
                                                                        <p>1pc</p>
                                                                    </div>
                                                                    <div className="col-md-2">
                                                                        <p>₱350</p>
                                                                    </div>
                                                                    <div className='col-md-1'>
                                                                        <button className='trash border-0 bg-white'><FontAwesomeIcon icon={faTrash} /></button>
                                                                    </div> 
                                                                </div>     
                                                            </div>                                            
                                                            <div className="card mb-3 mb-lg-0">
                                                                <div className="row align-items-center">
                                                                    <div className='col-md-3'>
                                                                        <img src="./menu/bfast3.png"
                                                                            className="img-fluid rounded-3" alt="Shopping item"/>
                                                                    </div>
                                                                    <div className="col-md-3">
                                                                        <p>Nanna's cinn rolls</p>
                                                                    </div>
                                                                    <div className="col-md-2">
                                                                        <p>1pc</p>
                                                                    </div>
                                                                    <div className="col-md-2">
                                                                        <p>₱350</p>
                                                                    </div>
                                                                    <div className='col-md-1'>
                                                                    <button className='trash border-0 bg-white'><FontAwesomeIcon icon={faTrash} /></button>
                                                                    </div> 
                                                                </div>
                                                            </div>                              
                                                        </div>            
                                                        <div className="col-lg-5">                                
                                                            <div className="card bg-primary text-white rounded-3">
                                                                <div className="card-body">                                               
                                                                    <input type="text" className="form-control" placeholder="Full Name" aria-label="default input"/><br/>
                                                                    <input type="email" className="form-control" placeholder="Delivery Address" aria-label="default input"/><br/>
                                                                    <input type="number" className="form-control" placeholder="Contact" aria-label="default input"/><br/>
                                                                    <input type="checkbox" id="option2"/>
                                                                    <label htmlFor="option2" className="form-text" id="cod">Cash on delivery</label>                                
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
                                                                    <p className="mb-2">Subtotal</p>
                                                                    <p className="mb-2">₱ 1515.00</p>
                                                                </div>
                                                                <div className="d-flex justify-content-between">
                                                                    <p className="mb-2">Delivery Fee</p>
                                                                    <p className="mb-2">₱ 80.00</p>
                                                                </div>                                    
                                                                <div className="d-flex justify-content-between mb-4">
                                                                    <p className="mb-2">Total(Incl. taxes)</p>
                                                                    <p className="mb-2">₱ 1595.00</p>
                                                                </div>   
                                                                <div className="d-flex justify-content-center ">
                                                                <button type="button" className="btn btn-info btn-block btn-lg">
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