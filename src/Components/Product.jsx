import React, {useState} from 'react'
import Categories from './Categories'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'

const Product = () => {

const [data,setData]= useState(Categories)

const filterResult = (cardItem) => {
const result = Categories.filter((curData) => {
    return curData.title === cardItem
})
setData(result)
}
  return (
    <div className='product-section'>
        <div className="product">
            <h5>Latest Arrivals</h5>
            <h2>NEW PRODUCTS</h2>
        </div>
        <div className="btn-section  mt-5">
                <button className='button' onClick={() => setData(Categories)}>All</button>
                <button className='button' onClick={() => filterResult('Vegetable')}>Vegetables</button>
                <button className='button' onClick={() => filterResult('Fruits')}>Fruits</button>
                <button className='button' onClick={() => filterResult("Bread")}>Bread</button>
          
        </div>
        <div className="col-md-9  mt-5">
            <div className="row">
                { data.map((values) => {
                    const {id, url,  heading, price} = values
                    return(
                        <>
                         <div className="col-md-4 col-lg-3" key={id}>
                <div className="card mt-4 " >
  <img src={url} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{heading}</h5>
    <p className="card-text">{price}</p>
    <div className="icons">
      <AiOutlineSearch  className='icon orange'/>
      <AiOutlineShoppingCart  className='icon green'/>
    </div>
  </div>
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

export default Product