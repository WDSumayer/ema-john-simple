import React, { useEffect, useState } from 'react';
import { addToDb, getFromCart } from '../../utilities/fakedb';

import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getFromCart();
        
        const savedProduct = []
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
            savedProduct.push(addedProduct)
        }
        }

        
        setCart(savedProduct)
    }, [products])

    const addProductToCart = (selectedProduct) => {
        const exist = cart.find(product => product.id === selectedProduct.id);
        let newCart = [];
        if(!exist){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];

        }else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        setCart(newCart);
        addToDb(selectedProduct.id)
        
        
    }
    return (
        <div className='shop-area'>
            <div className='products-container'>
                
                {
                    products.map(product => <Product 
                        product={product} 
                        key={product.id}
                        addProductToCart={addProductToCart}
                        ></Product>)
                }
            </div>
            <div className='cart-container'>
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;