import React from 'react';
import './Cart.css'

const Cart = (props) => {
     
  

    const {cart}=props;

    //console.log(cart);

    let total=0;
    let shipping=0;
    let quantity=0;
    // let productName=[];

    for(const product of cart){
      
        // productName=productName+product.name;
         quantity=quantity+product.quantity;
        total=total+product.price*product.quantity;
        shipping=shipping+product.shipping;

        //const newTotal=total+shipping;
       
    }


    const tax=(total*(10/100)).toFixed(2);/// toFixed give us string,we have to make it integer by parseFloat
    const grandTotal=parseFloat(tax)+total+shipping;

    return (
        <div className='cart'>
            <h2>Order Summery </h2>
            <p>Selected Items:{quantity} </p>
            {/* <p>Added Item Name:
                <ul>
                    <li>{productName}</li>
                </ul>
            </p> */}
            <p>Total Price:$ {total}</p>
            <p>Total Shipping:$ {shipping}</p>
            <p>Tax:$ {tax}</p>
            <p>Grand Total:$ {grandTotal}</p>
            {props.children}
        </div>
    );
};


export default Cart;