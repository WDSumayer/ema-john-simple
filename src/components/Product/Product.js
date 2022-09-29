
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {name,price,img,seller,ratings} = props.product;
    return (
        <div className='single-product'>
           <img src={img} alt=''></img> 
           <div className='product-info'>
           <h2 className='product-name'>{name}</h2>
           <h3>Price: ${price}</h3>
           <p><small>Manufacturer: {seller}</small></p>
           <p><small>Rating: {ratings}</small></p>
           </div>
           <button onClick={() => props.addProductToCart(props.product)} className='add-cart-btn'><span className='btn-text'>Add to cart</span>
           <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Product;