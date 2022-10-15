import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

    const{product,handleToCart}=props;
    const { name, img, seller, price, ratings } =props.product;
    //const { name, img, seller, price, ratings } = product
    //console.log(props)


    return (
        <div className='product'>

            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p > {seller}</p>
                <p>$ {price}</p>
                <p> {ratings} Star</p>
            </div>

            <div>
                <button onClick={()=>handleToCart(product)} className='btn-cart'>
                <FontAwesomeIcon className='addCartIcon' icon={faShoppingCart} />
                    <p>Add To Card </p>
                   
                </button>
            </div>
        </div>
    );
};

export default Product;