import React, { useContext } from "react";
import { ShopContext } from '../context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export const CartItem = (props) => {
    const { id, productName, productImage, price} = props.data;
    const { cartItems, removeFromCart } = useContext(ShopContext);
    
    const cartItemAmount = cartItems[id];

    const handleDelete = () => {
        removeFromCart(id);
    };

    return (
        <div className="added-items border mb-3">
            <div className="row align-items-center">
                <div className="col-md-3">
                        <img className=" img-fluid rounded-3" src={productImage}
                    alt="Shopping item"/>
                </div>
                <div className="col-md-3">
                    <p>{productName}</p>
                </div>                                                                                                                                             
                <div className="col-md-2">
                    { cartItemAmount > 0 && <> {cartItemAmount}</>}pcs
                </div>
                <div className="col-md-2">
                    <p >₱ {price}</p>                 
                </div>
                <div onClick={handleDelete} 
                    className='col-md-1'>
                    <button className='trash border-0 bg-white'><FontAwesomeIcon icon={faTrash} /></button>
                </div>                                                                       
            </div>
        </div>
    )
}