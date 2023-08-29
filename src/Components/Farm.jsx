import React, {useEffect} from 'react'
import orangeImage from '../assets/orange.jpg'
import imzaImg from '../assets/imza.png'
import AOS from 'aos'

const Farm = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])

  return (
    <div className='container'>
        <div className="farm-section row" >
            <div className="left-side col-12 col-md-6 col-lg-6"  data-aos="fade-right">
            <div className="image">
                <img src={orangeImage} alt="" />
            </div>
            </div>
            <div className="right-side col-12 col-md-6 col-lg-6" data-aos="fade-left">
              <h5>A Few Words About Our Farm</h5>
              <h2>ABOUT US</h2>
              <p>Farm is made up of two certified organic properties, where our farmers are constantly growing organic vegetables, crops, and fruits of the highest quality in the US.  Our Products are organics</p>
              <div className="imza-section">
                <div className="heading">
                <h6>Sam Williams</h6>
                <small>Farm Founder</small>
                </div>
                <img src={imzaImg} alt="" />
              </div>
            </div>
        </div>

    </div>
  )
}

export default Farm