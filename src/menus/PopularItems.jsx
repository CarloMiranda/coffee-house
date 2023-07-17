import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

export const PopularItems = (props) => {
    const { id, productName, productImage, price } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];
    return(
        <section>
            <div className="">
                <button onClick={() => addToCart(id)}
                className="add-item menu-item my-3 ms-5 col-md-2 text-start d-flex border rounded-4 shadow">
                    <span className="position-absolute badge rounded-pill bg-danger">
                        { cartItemAmount > 0 && <> {cartItemAmount}</>}
                    </span>
                    <img src={productImage} alt="White Chocolate Tiramisu" className="img-fluid" />
                    <div>
                        <p className="mb-5">{productName}</p>
                        <p className="price">Php {price}</p>
                    </div>
                </button>
            </div>
        </section>
    )
}

export default PopularItems;