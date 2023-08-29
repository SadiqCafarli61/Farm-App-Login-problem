import React from 'react'

const Dish = ({image}) => {
  return (
    <div>
        <div className="image">
        <img src={image} alt=""  />
        </div>
       
    </div>
  )
}

export default Dish