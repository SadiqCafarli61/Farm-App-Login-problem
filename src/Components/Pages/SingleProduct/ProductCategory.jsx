import React, { useRef, useState } from 'react'
import Slider from "react-slick";
import image1 from '../SingleProduct/1.jpg'
import image2 from '../SingleProduct/2.png'
import image3 from '../SingleProduct/3.jpg'


const images = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1692294206/2_mrcxha.png"
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1692294207/3_blmint.jpg"
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1692294201/1_ueseew.jpg"
    }
]


const ProductCategory = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

const handleTwoSlide = () => {
   
    imageRef.current.setAttribute('src', image1)
}
const handleOneSlide = () => {
    imageRef.current.setAttribute("src", image2)
}
const handleThirdSlide = () => {
    imageRef.current.setAttribute("src", image3)
}


const imageRef = useRef()
const dispatch = useDispatch()

    
  return (
   
  <div className='category-section '>
    <div className="left-side ">
        <div className="image">
        <img src={images[currentSlide].image}  ref={imageRef} alt="" />
        </div>
       
  
        <div className="images-section">
            <div className="images">
                <img src={image2}  onClick={handleOneSlide} alt="" />
            </div>
            <div className="images">
                <img src={image1}  onClick={handleTwoSlide}  alt="" />
            </div>
            <div className="images">
                <img src={image3} onClick={handleThirdSlide} alt="" />
            </div>
        </div>
        </div>
        <div className="right-side ">
            <div className="oranges">

           
              <div className="heading">
              <h5>Oranges</h5>
              </div>
                <div className="stars">
                <p>$20</p>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i className='fas fa-star'></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                </div>
        
               
              <p className='main'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laborum recusandae rerum nulla error quae ratione exercitationem perspiciatis, libero rem?</p>
              </div>
              <div className="aboutfruit">
                <p>Categories: <span>Citrus</span></p>
                <p>Weight: <span>1kg</span></p>
                <p>Box: <span>60x 60x 90 cm </span></p>
              </div>
              <div className="carts">
                <p></p>
                <div className="count">
                    <span className='plus' >+</span>
                    <span className='minus' >-</span>
                </div>
              </div>
            </div> 

  </div>
    
  )
}

export default ProductCategory