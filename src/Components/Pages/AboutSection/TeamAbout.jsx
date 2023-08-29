import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

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

const TeamAbout = () => {
 


    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
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
   
    <div className='team-about-section'>
        <div className="about-team">
            <h2>OUR TEAM</h2>
        </div>
        <div className="teams-section md-9">
            <div className="teams row">
            <Slider {...settings} className='slider col-md-3'>
          <div className='card mt-4'>
            <img src="https://res.cloudinary.com/dgmkqlvme/image/upload/v1692810967/cart1_apeptd.jpg" alt="" />
            <div className="card-body">
                <h6>WILL MCMILLAN</h6>
                <p className="team-classic-text">Cum accentor experimentum, omnes torquises contactus camerarius, pius zirbuses.</p>
            </div>
          </div>
          <div className='card mt-4'>
            <img src="https://res.cloudinary.com/dgmkqlvme/image/upload/v1692810967/cart2_zcihuz.jpg" alt="" />
            <div className="card-body">
                <h6>RICHARD FERRAND</h6>
                <p className="team-classic-text">Cum exsul crescere, omnes lanistaes experientia gratis, castus detriuses.</p>
            </div>
          </div>
          <div className='card mt-4'>
               <img src="https://res.cloudinary.com/dgmkqlvme/image/upload/v1692810973/cart3_pn42h1.jpg" alt="" />
               <div className="card-body">
                <h6>REBECCA MARTINEZ</h6>
                <p className="team-classic-text">Cum zelus mori, omnes repressores desiderium magnum, rusticus medicinaes.</p>
               </div>
          </div>
          <div className='card mt-4'>
            <img src="https://res.cloudinary.com/dgmkqlvme/image/upload/v1692810973/cart4_fmmylj.jpg" alt="" />
            <div className="card-body">
                <h6>SAM WILLIAMS</h6>
                <p className="team-classic-text">Cum compater resistere, omnes menses fallere placidus, germanus gemnaes.</p>
            </div>
          </div>
          <div className='card mt-4'>
            <img src="https://res.cloudinary.com/dgmkqlvme/image/upload/v1692810974/cart5_phqqbw.jpg" alt="" />
            <div className="card-body">
                <h6>PETTER SMITH</h6>
                <p className="team-classic-text">Cum glos manducare, omnes demolitionees experientia clemens, nobilis tritic.</p>
            </div>
          </div>
          <div className='card mt-4'>
            <img src="https://res.cloudinary.com/dgmkqlvme/image/upload/v1692810974/cart6_sfwfno.jpg" alt="" />
            <div className="card-body">
                <h6>CAROLINE LOPEZ</h6>
                <p className="team-classic-text">Domesticus, primus mortems mechanice consumere de altus, bassus ionicis torm.</p>
               
            </div>
          </div>
        </Slider>
            </div>
        </div>

    </div>
    <div>
       
     
    </div>
    <div>
        

       

        
         
    </div>
    </>
  )
}

export default TeamAbout