import React, {useState, useEffect} from 'react'
import produces from './Produces'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../redux/app/features/cartSlicer'
import applys from '../Apply/Applys'
import { getAllDescription } from '../../../redux/app/features/userData'


const Produce = () => {
  const [fakeProduces, setFakeProduces] = useState(applys)

const dispatch = useDispatch()
  return (
    <div className='produce-section'>
<div className="produces">
  <h3>Our Products in here!</h3>
</div>
<div className="products-section">
  <div className="row">
    {fakeProduces.map(element => {
      const {id, url, title, price}= element
      return(
        <>
         <div className="col-12 col-md-4 col-lg-4">
          <div className="card mt-5">
             <img src={url} alt="" className='img-top' />
             <div className="card-body">
              <h5>{title}</h5>
              <p>{price}</p>

             
             </div>
             <button className='btn btn-success' onClick={(e) =>e.preventDefault(dispatch(addToCart({id, url, title, price})))}>ADD TO CART</button>
          </div>
         </div>
        </>
      )
    }) }

  </div>
</div>
    </div>
  )
}

export default Produce