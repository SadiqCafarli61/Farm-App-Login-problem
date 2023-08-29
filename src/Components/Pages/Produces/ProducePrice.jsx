import React, {useState} from 'react'
import  orangePng from '../Produces/orange.png'
import bananasPng from '../Produces/bananas.png'
import {AiOutlineMinus} from 'react-icons/ai'
import {AiOutlinePlus} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const ProducePrice = () => {
    const [count, setCount] = useState(1)
    const [countTwo, setCountTWo] = useState(1)

    const handleDecrement = () => {
        if(count > 1)
        setCount( count - 1)
    }
    const handleIncrement = () => {

        setCount(count + 1)
    }

    const handleDecremenTwo = () => {
        if(countTwo > 1){
            setCountTWo(countTwo -1)
        }
    }
    const handleIncrementTwo = () => {
        setCountTWo (countTwo+1 )
    }

    const navigate = useNavigate()
    const directEmail = () => {
        navigate('/email address')
    }
    const directSingle = () => {
        navigate('/singleProduct')
    }

    const directApply = () => {
    navigate("/apply")
    }
  return (
 

    
    <div className='price-section'>
<div className="price">
    <div className="foods">
    <div className="name">
        <h5>Product name</h5>
    </div>
    <div className="prices">
        <h6>PRICE</h6>
        <h6>QUANTITY</h6>
        <h6>TOTAL</h6>
    </div>
    </div>
    <div className="foods">
   <div className="image">
    <img src={orangePng} style={{
        cursor: "pointer"
    }}  onClick={directSingle} alt="" />
    
   </div>
 
   <span>ORANGES</span>
  
  
   <div className="prices">
    <p>$20.00</p>
    <AiOutlineMinus  className='icon' onClick={handleDecrement}/>
    <span className='one'>{count}</span>
    <AiOutlinePlus  className='icon' onClick={handleIncrement}/>
    <p>$20</p>
   </div>
    </div>
    <div className="foods">
   <div className="image">
    <img src={bananasPng} alt="" />
    
   </div>
 
   <span>BANANAS</span>
  
   <div className="prices">
    <p>$23.00</p>
    <AiOutlineMinus  className='icon' onClick={handleDecremenTwo}/>
    <span className='one'>{countTwo}</span>
    <AiOutlinePlus  className='icon' onClick={handleIncrementTwo}/>
    <p>$23</p>
   </div>
    </div>
  
</div>
<div className="apply-section">
    <div className="apply">
        <input
        placeholder='Coupon code'
        type="text"
        
        
        />
        <button className='applyBtn' onClick={directApply} >APPLY</button>
        <div className="total">
            <p>Total</p>
            <span>$43</span>
            <button className='checkout' onClick={directEmail}>PROCEED TO CHECKOUT</button>
        </div>
    </div>
   </div>
    </div>

  
 
  )
}

export default ProducePrice