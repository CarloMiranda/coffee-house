import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { BEVERAGES } from './Beverage';
import { MEALS } from './Meal';



export const PopularItems = () => {
    const { addToCart, cartItems } = useContext(ShopContext);
    const selectedIds = [4, 5, 3, 14, 8, 18, 10];
    const selectedItems = [...BEVERAGES, ...MEALS].filter(({ id }) =>
        selectedIds.includes(id)
    );

  return (
    <section>
      <div className="products">
        {selectedItems.map(({ id, productName, productImage, price }) => {
          const cartItemAmount = cartItems[id];
            return (
                <button
                    key={id}
                    onClick={() => addToCart(id)}
                    className="add-item menu-item my-3 ms-5 col-md-2 text-start d-flex border rounded-4 shadow">
                    <span className="position-absolute badge rounded-pill bg-danger">
                        {cartItemAmount > 0 && <> {cartItemAmount}</>}
                    </span>
                        <img src={productImage} alt={productName} className="img-fluid" />
                    <div>
                        <p className="mb-5">{productName}</p>
                        <p className="price">Php {price}</p>
                    </div>
                </button>
            );
        })}
      </div>
    </section>
  );
};

export default PopularItems;
