import React, {useState} from 'react'
import Filters from './Filters'
import {BsSearch} from 'react-icons/bs'
import image1 from '../Shops/1.png'
import image2 from '../Shops/2.png'
import image3 from '../Shops/3.png'
import { useNavigate } from 'react-router-dom'

import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'

const FilterMenu = () => {
  const navigate = useNavigate()

  const [minPrice, setMinPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(999)
  const  [data, setData] = useState(Filters)

  const directProduce = () => {
  navigate("/produce")
  }
 

  return (
    <div className='filter-section'>
      <div className="filter row" >
        <div className="left-side col-12 col-md-6 col-lg-6">
            <div className="content">
              <h5>Filter by price</h5>
              <input type="range" 
                id='minPrice'
                min="0"
                max="535"
                step="10"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <input type="range" 
               id='maxPrice'
               min='100'
               max='999'
               step="10"
               value={maxPrice}
               onChange={(e) => setMaxPrice(e.target.value)}
              
              />
           
            </div>
            <div className="price">
              <button className='btn btn-primary'>FILTER</button>
             <label htmlFor="minPrice"> Price:  $  {minPrice}</label>
             <label htmlFor="maxPrice">- $ {maxPrice}</label>
            
            </div>
            <div className="categories">
              <h5>Categories</h5>
              <div className="alls">
                <div className="foods">
                  <div className="inputs">
                  <input type="checkbox" />
                  <span>All</span>
                  </div>
                  
                   <span>(18)</span>
                </div>
               
                <div className="foods">
                  <div className="inputs">
                  <input type="checkbox" />
                  <span>Organic Food</span>
                  </div>
                  
                  <span>(9)</span>
                </div>
                <div className="foods">
                  <div className="inputs">
                  <input type="checkbox" />
                  <span>Health</span>
                  </div>
                  
                
                  <span>(5)</span>
                 
                  
                </div>
                <div className="foods">
                  <div className="inputs">
                  <input type="checkbox" />
                  <span>Smoothies</span>
                  </div>
                
                  <span>(8)</span>
                </div>
              </div>
              <div className="search">
              <input type="search" 
               
               placeholder='Search the shop'
               
              />
              <BsSearch  className='searchBar'/>
              </div>
             
            </div>
            <div className="categories">
              <h5>Popular Products</h5>
              <div className="products">
                <div className="imageWords">
                  <div className="image">
                  <img src={image1} alt="" />
                  </div>
                  <div className="info">
                  <span>Galia Melons</span>
                  <p>$25.00</p>
                  </div>
                 
                   
                </div>
                <div className="imageWords">
                  <div className="image">
                  <img src={image2} alt="" />
                  </div>
                  <div className="info">
                  <span>PineApples</span>
                  <p>$30.00</p>
                  </div>
                 
                   
                </div>
                <div className="imageWords">
                  <div className="image">
                  <img src={image3} alt="" />
                  </div>
                  <div className="info">
                  <span>Oranges</span>
                  <p>$20.00</p>
                  </div>
                  
                   
                </div>
             
              </div>
            
            </div>
        </div>
        <div className="right-side col-12 col-md-6 col-lg-6 ">
           <div className="produce row">
          {data.map((values) => {
            const { id, url, title, heading, price} = values
            return(
              <div className='produces col-12 col-md-4 col-lg-4 ' key={id}> 
                <div className="card ">
                  <div className="card-top">
                    <img src={url} alt="" />
                  </div>
                  <div className="card-body">
                    <h5 className='card-title'>{heading}</h5>
                    <p className='card-price'>{price}</p>
                  </div>
                  <div className="icons">
                  <AiOutlineSearch  className='icon orange'/>
      <AiOutlineShoppingCart  className='icon green'  onClick={directProduce}/>
                  </div>
            

                </div>
              </div>
            )
          })  }
           </div>
        </div>
      </div>
    </div>
  )
}

export default FilterMenu