import React from 'react'
import dinnerFarm1 from '../assets/FarmDinners/dinner1.jpg'
import dinnerFarm2 from '../assets/FarmDinners/dinner2.jpg'
import dinnerFarm3 from '../assets/FarmDinners/dinner3.jpg'
import dinnerFarm4 from '../assets/FarmDinners/dinner4.jpg'
import dinnerFarm5 from '../assets/FarmDinners/dinner5.jpg'
import Slider from "react-slick";
function Arrow(props) {
    const { className, style, onClick } = props;
    <div
    className={className}
    style={{ ...style, display: "block", background: "green" }}
    onClick={onClick}
  />
}
const Blog = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
    
    ]
  };
  return (
    <div className='blog-section'>
     <div className="blog">
      <h5>Latest News</h5>
      <h2>OUR BLOG</h2>
     </div>

     <div className="foods">
     <Slider {...settings}>
      <div className="dinner">
      <div className='dinner-top'>
            <img src={dinnerFarm1} alt="" />
            
          </div>
          <div className="dinner-bottom">
            <h5>Everyday Dinner Choices for a Healthier, Happier You</h5>
            <p>August 13, 2023</p>
      </div>
          
          </div>

          <div  className='dinner'>
           <div className="dinner-top">
            <img src={dinnerFarm2} alt="" />
           </div>
           <div className="dinner-bottom">
            <h5>Standardizing the Organic Industry in the USA</h5>
            <p>August 13, 2023</p>
           </div>
          </div>
          <div className='dinner'>
            <div className="dinner-top">
              <img src={dinnerFarm3} alt="" />
            </div>
            <div className="dinner-bottom">
              <h5>Makink Your Food Organic in a Few Simple Steps</h5>
              <p>August 13, 2023</p>
            </div>
         
          </div>
          <div className='dinner'>
            <div className="dinner-top">
              <img src={dinnerFarm4} alt="" />
              </div> 
              <div className="dinner-bottom">
                <h5>Top 5 Easy and Cheap Organic Breakfast Recipes</h5>
                <p>August 13, 2023</p>
              </div>
       
          </div>
          <div className='dinner'>
           <div className="dinner-top">
            <img src={dinnerFarm5} alt="" />
           </div>
           <div className="dinner-bottom">
            <h5>Why Organic Farming Keeps getting Popular Globally</h5>
            <p>August 13, 2023</p>
           </div>
          </div>
        
        </Slider>
      </div>
     </div>
    // </div>
  
  )
}


export default Blog