import React, {useState, useEffect} from 'react'
import applys from './Applys'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/app/features/cartSlicer'

const ApplyMain = () => {
  const dispatch = useDispatch()
    const [data, setData] = useState(applys)
    const filterResult = (cardItem) => {
      const result = applys.filter((curData) => {
        return curData.title === cardItem
      })
      setData(result)
    }
  return (
    <div className='main-section'>
         <div className="btns-section">
             <button onClick={() => setData(applys)}>All</button>
             <button onClick={() => filterResult('Vegetable')}>Vegetable</button>
             <button onClick={() => filterResult('Fruits')}>Fruit</button>
             <button onClick={() => filterResult('Bread')}>Bread</button>
         </div>
         <div className="produces col-md-8 mt-4">
  <div className="row">
    {data.map(values => {
        const {id, url, heading, price} = values
        return(
            <>
            <div className="col-12 col-md-4 col-lg-4" key={id}>
                <div className="card mt-4">
                  <img src={url} alt="" className='img-top' />
                  <div className="card-body">
                    <h5>{heading}</h5>
                    <h6 className='card-title'>{price}</h6>
                  </div>
                  <a href="" className='btn btn-primary' onClick={(e

                  ) => e.preventDefault(dispatch(addToCart({id, url, heading, price})))}>Add to Cart</a>
                </div>
            </div>
            </>
        )
    })  }
  </div>
         </div>
    </div>
  )
}

export default ApplyMain