import React from 'react'
import  foodJpg from '../assets/Foods/food.jpg'
import healthyImage from '../assets/Foods/healthy.jpg'
import percentImage from '../assets/Foods/percent.jpg'

const Food = () => {
  return (
    <div className="container">
 <div className='food-section row'>
    <div className="left-side col-12 col-md-6 col-lg-6">
         <div className="image">
            <img src={foodJpg} alt="" />
         </div>
    </div>
    <div className="right-side col-12 col-md-6 col-lg-6">
<div className="healthy-section">
     <div className="images">
        <img src={healthyImage} alt="" />
     </div>
     <div className="images">
        <img src={percentImage} alt="" />
     </div>
</div>
    </div>

</div>
    </div>
   
  )
}

export default Food