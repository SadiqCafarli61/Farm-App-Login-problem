import React, {useEffect, useState} from 'react'
import cart1 from "../Offers/Carts/cart1.jpg"
import cart2 from "../Offers/Carts/cart2.jpg"
import cart3 from "../Offers/Carts/cart3.jpg"
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/app/features/cartSlicer'
import applys from '../Apply/Applys'

const Carts = () => {
    const dispatch = useDispatch()
  return (
    <div className='carts-section'>
<div className="carts-parts row">
      <div className="card col-12 col-md-6 col-lg-4">
        <div className="card-heading">
           
        <img src={cart1} alt="" className='img-top' />
        <h5>Fruit Box</h5>
            <p>$90.00</p>
        </div>
   
    <div className="card-body">
        <div className="card-info">
        <h6>2 Ib</h6>
    <span>Apples</span>
        </div>
        <div className="card-info">
        <h6>1,5 Ib</h6>
    <span>Cherries</span>
        </div>
   
   <div className="card-info">
   <h6>2 Ib</h6>
    <span>Bananas</span>
   </div>
    <div className="card-info">
    <h6>1 Ib</h6>
    <span>Pineapples</span>
    </div>
    <div className="buttons">
    <button className='button'>Add to Cart</button>
    </div>
    </div>
      </div>
      <div className="card ms-5 col-12 col-md-6 col-lg-4">
       

        
        <div className="card-heading">
           
        <img src={cart2} alt="" className='img-top' />
        <h5>Mix Box</h5>
            <p>$120.00</p>
        </div>
   
    <div className="card-body">
        <div className="card-info">
        <h6>3 Ib</h6>
    <span>Apples</span>
        </div>
        <div className="card-info">
        <h6>1.6 Ib</h6>
    <span>Cherries</span>
        </div>
   
   <div className="card-info">
   <h6>1.5 Ib</h6>
    <span>Bananas</span>
   </div>
    <div className="card-info">
    <h6>2.8 Ib</h6>
    <span>Pineapples</span>
    </div>
  
    <div className="buttons">
    <button className='button'   
       onClick={(e) => e.preventDefault(dispatch(addToCart()))}
    >Add to Cart</button>
    </div>
    </div>
      </div>
     
</div>
    </div>
  )
}

export default Carts