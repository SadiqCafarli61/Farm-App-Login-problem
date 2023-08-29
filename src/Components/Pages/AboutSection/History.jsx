import React, { useState } from 'react'
import Slider from "react-slick";
function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

const History = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1600,
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
              slidesToScroll: 2,
              initialSlide: 2
            }
          }
         
        ]
      };
   
  return (
    <>
   
    <div className='history-section'>
     <div className="history">
        <h2 className='text-white'>OUR HISTORY</h2>
     </div>
     <div className="success-section md-9">
        <div className="success    row ">
        <Slider {...settings} className='slider-section col-md-3'>
          <div className='card mt-4'>
            <h3>Establishment</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, ad!</p>
          </div>
          <div className='card mt-4'>
            <h3>First Success</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, maiores.</p>
          </div>
          <div className='card mt-4'>
            <h3>New Techologies</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, velit.</p>
          </div>
          <div className='card mt-4'>
            <h3>National Recognition</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, optio.</p>
          </div>
          <div className="card mt-4 last">
<h3>Partnership</h3>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, dignissimos!</p>
          </div>
         
        </Slider>
        </div>
     </div>

    </div>
    <div className="bottom-part">
    <div className="prev-next">
      <div className="one-part">
      <button>prev</button>
      </div>
      
      <button className='next'>next</button>
    </div>
  </div>
  </>
  )
}

export default History