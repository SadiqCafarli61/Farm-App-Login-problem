import React, {useState, useEffect} from 'react'
import farm1Jpg from '../assets/farm1.jpg'
import farm2Jpg from '../assets/farm2.jpg'
import farm3Jpg from '../assets/farm3.jpg'
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios'
import AOS from 'aos'
import Button from './Button'
import {  useNavigate } from 'react-router-dom'


const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])
 const navigate = useNavigate()

 const directShop = () => {
  navigate('/shop')
 }
  return (

   <div className='main-section'>
  <Carousel data-bs-theme="dark" className='main' >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={farm1Jpg}
          alt="First slide"
        />
        <Carousel.Caption data-aos="fade-right">
          <h5>Welcome to Our Farm</h5>
         <h2>Products</h2>
         <p>GROWN WITH LOVE</p>
         <button onClick={directShop} className='btn-color'>SHOP NOW</button>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={farm2Jpg}
          alt="Second slide"
        />
        <Carousel.Caption data-aos="fade-right">
          <h5>High-Quality Organic Products</h5>
          <h2>VEGETABLES</h2>
          <p>WITHOUT HARMFUL ADDITIVES</p>
          <button onClick={directShop} className='btn-color'>SHOP NOW</button>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={farm3Jpg}
          alt="Third slide"
        />
        <Carousel.Caption  data-aos="fade-right">
          <h5>Fresh Organic Producel</h5>
          <h2>FRUITS</h2>
          <p>
          WITH LOTS OF VITAMINS
          </p>
          <button onClick={directShop} className='btn-color'>SHOP NOW</button>
        
       
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </div>
  )
  }

export default Main