import React, {useState, useRef} from 'react'
import farmLogo from '../assets/farm.logo.jpg'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {RiMenu2Line} from 'react-icons/ri'
import {AiOutlineClose} from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import {HiBars3CenterLeft} from 'react-icons/hi2'
import Slider from "react-slick";
import rightImg1 from "../assets/right1.jpg"
import rightIm2 from "../assets/right2.jpg"
import rightIm3 from "../assets/right3.jpg"
import {IoMdClose} from 'react-icons/io'

const Header = () => {

  const [isOpen, setIsOpen]= useState(false)
  const dropdownMenu = useRef()
  const move = useRef()

  const moving = (e) => {
    e.preventDefault()
  dropdownMenu.current.classList.add('show')

  }

  window.onclick = function(e){
if(dropdownMenu.current.classList.contains('show')){

  if (!move.current ||!move.current.contains(event.target)) {
    dropdownMenu.current.classList.remove('show')
  }
}
  }
 const overlayMenu = useRef()
 const openMenu = () => {

  setIsOpen(!isOpen)
overlayMenu.current.classList.toggle('open')
 }
 const cardItems = useSelector(state => state.kart.kart)
const navigate = useNavigate()
const [openNavbar, setOpenNavbar] = useState(false)

const openNav = () => {
  setOpenNavbar(!openNavbar)

}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}
const rightNavbarRef = useRef()

const openNavbarRef = () => {
rightNavbarRef.current.classList.add("openNavbarRef")
rightNavbarRef.current.style.transition = "1.2s"
}
const closeNavRef = () => {
  rightNavbarRef.current.classList.remove("openNavbarRef")
}
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
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
    },
    
  ]
};

  return (
<>
<div className="right-contact "ref={rightNavbarRef}>
  <IoMdClose className='closeNavLeft' onClick={closeNavRef} style={{
    fontSize: "30px",
    cursor: "pointer",
    color: "000"
  }} />
  <h2 style={{
    fontSize: "16px",
   textAlign: "center",
   paddingBottom: "20px"
  }}>OUR CONTACTS</h2>
 <div className="pics">
 <Slider {...settings} className='slider-section'>
          <div>
            <img src={rightImg1} alt="" />
          </div>
          <div>
            <img src={rightIm2} alt="" />
          </div>
          <div>
            <img src={rightIm3} alt="" />
          </div>
        
        </Slider>
 </div>
</div>

    <div className="overlay" ref={overlayMenu}>

<div className="overlay-menu">
  <Link to="/">home</Link>
          <Link to="" >pages</Link>
            <Link to="">Blog</Link>
            <Link to="">gallery</Link>
            <Link to="">Elements</Link>
            <Link to="">Shop</Link>
</div>
    </div>
    <div className='header-section'>
       <button className='openMenu' onClick={openMenu}>
          {isOpen ? <AiOutlineClose /> : <RiMenu2Line className='close' />}
       </button>
          <div className="logo">
            <img src={farmLogo} alt="" />
          </div>
          <div className="links">
        
          <Link to="/" onClick={moving} ref={move} >Home</Link>
      <div className="dropdown" ref={dropdownMenu}>
        <Link to="">Farm</Link>
        <Link to=""> Fruit Farm</Link>
        <Link to="">Poultry farm</Link>
      </div>
         
        
     <div className="drop-menu">
      <button className='dropbtn'  style={{
        textTransform: "uppercase" 
      }}>Pages</button>
      <div className="dropdown-content">
        <a href="#"   onClick={() => navigate("/about")}>ABOUT US</a>
        <a href="#"  onClick={() => navigate("/offer")}>WHAT WE OFFER</a>
        <a href="#">OUR TEAM</a>
        <a href="#" onClick={() => navigate("/TestimonialsClient")}>TESTIMONIALS</a>
        <a href="#"  onClick={() => navigate("/pricing")}>PRICING LIST</a>
      </div>
     </div>
            <Link to="">Blog</Link>
            <Link to="">gallery</Link>
            <Link to="">Elements</Link>
            <Link to="">Shop</Link>
            <button className='loginBtn' onClick={(e) => e.preventDefault(navigate("/signup"))}>SIGNUP</button>
           
  
          </div>
          
             
           
          <div className="icons">
             <BsSearch  className='icon'/>
             <AiOutlineShoppingCart  className='icon' onClick={() => navigate("/stores")}
             
             style={{
              color: "green",
              fontSize: "32px",
              cursor: "pointer"
             }}/>
             <span style={{
              paddingLeft: "5px",
              fontSize: "18px"
             }}>{cardItems.length}</span>
            

<HiBars3CenterLeft  className='leftIcon' onClick={openNavbarRef}/>
             
           
            
          </div>
    </div>
    </>
  )
  }

export default Header