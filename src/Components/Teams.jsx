import React, {useEffect, Component, useState} from 'react'
import axios from 'axios'
import Team from './Team'
import team1 from '../assets/Teams/user1.jpg'
import team2 from '../assets/Teams/user2.jpg'
import team3 from '../assets/Teams/user3.jpg'
import team4 from '../assets/Teams/user4.jpg'

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

const Teams = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
    
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }
      
    ]
  };

  

   
  return (
    <div className='team-section'>
        <div className="team">
            <h5>We are Experienced Farmers</h5>
            <h2>OUR TEAM</h2>
        </div>
        <div className="users-section ">
           <div className="users  ">
           <Slider className='slider' {...settings}>
          <div className='card'>
            <div className="cart-img">
              <img src={team1} alt="" />
            </div>
            <div className="card-body">
              <div className="text">
              <h6>Hi! l am</h6>
                <h5>RICK SIMMONS</h5>
                <p>OWNER</p>
              </div>
               
              </div>
            
          </div>
          <div className='card'>
            <div className="cart-img">
              <img src={team2} alt="" />
            </div>
            <div className="card-body">
              <div className="text">
              <h6>Hi! l am</h6>
                <h5>JENIFFER PETERSON</h5>
                <p>FARM MANAGER</p>
              </div>
               
              </div>
         
          </div>
          <div className='card'>
            <div className="cart-img">
              <img src={team3} alt="" />
            </div>
            <div className="card-body">
              <div className="text">
              <h6>Hi! l am</h6>
          <h5>SAM WILLIAMS</h5>
          <p>FARMER</p>
              </div>
        

              </div>
        
          </div>
          <div className='card'>
            <div className="cart-img">
              <img src={team4} alt="" />
              <div className="card-body">
                <div className="text">
                <h6>Hi! l am</h6>
                 <h5>KATE MCMILLAN</h5>
                 <p>SALES MANAGER</p>
                </div>
                 
              </div>
            </div>
           
          </div>
        
         
        </Slider>
           </div>
        </div>
    </div>
  )
}

export default Teams