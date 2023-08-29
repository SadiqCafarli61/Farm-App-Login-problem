import React, {useState, useEffect, } from 'react'

import axios from 'axios';
const people = [
  {
      id: 1,
      title: "I picked up a head of your lettuce at a local grocery store today. What an amazing and beautiful lettuce it is! I’ve never seen another so full and green and tempting.",
      image: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1691682731/client_gpqt1y.jpg",
     name: "BILL MCMILLAN",
     duty: "Client"

  },
  {
      id: 2,
      title: "I wanted to tell you how amazing it was to see the farm and how much we love the food.  Your apples and carrots are just wonderful and their taste is spectacular.",
      image: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1691682732/client2_rnfisw.jpg",
     name: "JANE PETERSON",
     duty: "Client"
  },
  {
      id: 3,
      title: "The food from your farm is wonderful. So many nights when we sit down to dinner we can say everything on this plate is locally grown and delicious. Thank you so much.",
      image: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1691682732/client3_o4yv9r.jpg",
     name: "KATE SMITH",
     duty: "Client"

  }

]

const Clients = () => {
 
const [currentSlide, setCurrentSlide] = useState(0)

const handlePrevSlide = () => {
  setCurrentSlide(currentSlide === 0 ? people.length - 1 : currentSlide - 1)
}
const handleNextSlide = () => {
  setCurrentSlide(currentSlide === people.length - 1 ? 0 : currentSlide + 1 )
}
useEffect(() => {
  const interval = setInterval(() => {
    handleNextSlide()
  }, 3000)
  return() => {
    clearInterval(interval)
  }
}, [currentSlide])
  return (
  <div className='client-section'>
<div className="client">
  <h5>Latest Testimonials</h5>
  <h2>OUR CLIENTS</h2>
</div>
<div className="button-section">
  <button onClick={handlePrevSlide}>prev</button>
  <button onClick={handleNextSlide}>next</button>
  </div>
<div className="carts-section">

 
  <div className="cart-header">
    <h5>{people[currentSlide].title}</h5>
  </div>
  <div className="cart-center">
    <div className="cart-img">
      <img src={people[currentSlide].image} alt="" />
    </div>
    <div className="cart-words">
    <p>{people[currentSlide].name}</p>
    <small>{people[currentSlide].duty}</small>
    </div>
   
  </div>

</div>

  </div>
  )
  }
export default Clients