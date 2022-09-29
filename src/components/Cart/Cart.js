import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let quantity = 0;
    let total = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
    }
    return (
        <div className='cart-information'>
            <h2>Cart Items</h2>
            <p>Selected Products: {quantity}</p>
            <p>Price: $ {total}</p>
        </div>
    );
};

export default Cart;