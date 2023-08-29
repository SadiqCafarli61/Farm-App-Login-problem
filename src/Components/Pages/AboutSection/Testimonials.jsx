import React, {useEffect} from 'react'
import Slider from "react-slick";
import client1 from "../AboutSection/TestimoniaslPics/client1.jpg"
import client2 from "../AboutSection/TestimoniaslPics/client2.jpg"
import client3 from "../AboutSection/TestimoniaslPics/client3.jpg"
import client4 from "../AboutSection/TestimoniaslPics/client4.jpg"
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

const Testimonials = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
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
              slidesToShow: 2,
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



    <div className='testimonials-section'>
    <div className="testimonials">
        <h2>TESTIMONIALS</h2>
    </div>
    <div className="test-image col-md-9">
        <div className="images row">
        <Slider {...settings} className='slider-test col-md-3'>
          <div className='card mt-4'>
            <h3>Genetrixs sunt urbss de flavum navis. Magnum paluss ducunt ad urbs. Cum secula favere, omnes assimilatioes tractare regius, emeritis caculaes.</h3>
            <div className="card-image">
                <img src={client1} alt="" />
                <div className="info">
                <span>JANEE LEE</span>
                <p>Client</p>
                </div>
               
            </div>
          </div>
          <div className='card mt-4'>
            <h3>Zirbus velums, tanquam camerarius byssus. Pol, extum! Abactus varius ausus est. Cum elogium ortum, omnes ignigenaes acquirere altus, pius.</h3>
            <div className="card-image">
                <img src={client2} alt="" />
                <div className="info">
                <span>JAMES PETERSON</span>
                <p>Client</p>
                </div>
               
            </div>
            
          </div>
          <div className='card mt-4'>
            <h3>Caculas ortum in peritus virundum! Congregabo callide ducunt ad flavum glos. Cum pes mori, omnes caculaes attrahendam rusticus, bi-color.</h3>
            <div className="card-image">
                <img src={client3} alt="" />
                <div className="info">
                <span>ANN MCMILLAN</span>
                <p>Client</p>
                </div>
               
            </div>
            
          </div>
          <div className='card mt-4'>
            <h3>Classis de salvus cursus, convertam galatae! Terror peregrinationes, tanquam audax cedrium. Cum luna prarere, omnes cannabises resuscitabo</h3>
            <div className="card-image">
                <img src={client4} alt="" />
                <div className="info">
                <span>PATRICK GOODMAN</span>
                <p>Client</p>
                </div>
              
            </div>
            
            </div>
         
        </Slider>
        </div>
    </div>
    </div>
 
    </>
  )
}

export default Testimonials