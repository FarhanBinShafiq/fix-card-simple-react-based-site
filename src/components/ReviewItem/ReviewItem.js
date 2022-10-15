import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const{product,handleRemove}=props
    const {name,img,price,shipping,quantity}=props.product
    return (
        <div className='review-item'> 
              <div>
                 <img src={img} alt="" srcset="" />
                </div>         

                <div className="review-item-detail-container">
                          <div className="review-item-details">
                                    <p className='product-name' title={name}>{name.length>20? name.slice(0,20)+'...':name}</p>
                                    <p> Price: <span className='orange-color'>{price}</span></p>
                                    <p><small>shipping;{shipping}</small></p>
                                    <p><small>Quantity:{quantity}</small></p>
                          </div>

                          <div className="delete-container">
                                   <button onClick={()=>handleRemove(product)} className='delete-button'>
                                   <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />

                                   </button>
                          </div>
                    </div>   
        </div>
    );
};

export default ReviewItem;