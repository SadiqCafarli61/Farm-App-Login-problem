import React from 'react'
import "../Stores/Store.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeCartfrom } from '../../../redux/app/features/cartSlicer'


const Store = () => {
    const dispatch = useDispatch()
    const cardItems = useSelector(state => state.kart.kart)
  return (
    <>
   
  <div className='stores-section'>
<div className="col-md-9 mt-3">
    <div className="row">
{cardItems.map(item => {
    return(
        <>
         <div className="col-12 col-md-4">
              <div className="card mt-5">
                <img src={item.url} alt="" className='img-top' />
                <div className="card-body">
                    <h6>{item.heading}</h6>
                    <h5>{item.price}</h5>
                </div>
                <a href="" className='btn btn-success'>Buy</a>
                <br />
                <a href="" className='btn btn-danger' onClick={(e) => e.preventDefault(dispatch(removeCartfrom({id: item.id})))}>Remove</a>
              </div>
         </div>
        </>
    )
})}
    </div>
</div>
  </div>
  
  </>

  )
}

export default Store