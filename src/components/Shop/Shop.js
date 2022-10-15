import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoreCart } from '../../utilities/fakedb'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
         
    const [products,setProducts]=useProducts();
    const [cart, setCart] = useState([])

 
//get from loacll storage
    useEffect(()=>{
      const storeCart= getStoreCart();
      const saveCart=[]
      for(const id in storeCart){
                const addedProduct=products.find(product=>product.id === id)

                if(addedProduct){
                    const quantity=storeCart[id];
                    addedProduct.quantity=quantity
                    saveCart.push(addedProduct)
                   
                } 
            }
            setCart(saveCart)
    },[products])

    const handleToCart = (SelectedProduct) => {
        let newCart=[];
        //console.log('name:',product.name, 'id:',product.id)
        const exists=cart.find(product=>product.id === SelectedProduct.id)
        if(!exists){
            SelectedProduct.quantity=1
             newCart = [...cart, SelectedProduct]
        }else{
            const rest=cart.filter(product=>product.id !== SelectedProduct.id)
            exists.quantity=exists.quantity+1;
            newCart=[...rest,exists]
        }
        //const newCart = [...cart, SelectedProduct] ///{...cart means previous all item from cart copied in new Cart,product means which new product clicked fo the cart cause in destructuring we declare 'product' is a indivial item }
        setCart(newCart);
        addToDb(SelectedProduct.id);

    }

    return (
        <div className='shop-container'>

            <div>
                <h2>Products</h2>
                <div className="products-container">

                    {
                        products.map((product) => <Product product={product}
                            handleToCart={handleToCart}
                            key={product.id}></Product>)
                    }
                </div>
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/orders'>
                       
                       <button>Review ORder</button>

                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Shop;