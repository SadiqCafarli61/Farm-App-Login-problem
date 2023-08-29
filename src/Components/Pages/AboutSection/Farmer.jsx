import React, {useState, useRef, useEffect} from 'react'
import farmersData from './Farmers'
import images from './AboutImages/Images'

const Farmer = () => {
 
    const [currentSlide, setCurrentSlide] = useState(0)
    
    const textRef = useRef()
    const titleRef = useRef()
    const showMission = () => {
        
            textRef.current.textContent = "Vae. Dexter fiscina aliquando vitares animalis est. Nunquam convertam bulla. Cum pars prarere, omnes seculaes"
            titleRef.current.textContent = "Navis dexter historia est. Luba, homo, et indictio. Emeritis eposs ducunt ad animalis. Cum solem assimilant, omnes byssuses vitare clemens, secundus nixuses."
    }
    const showGoal = () => {
      textRef.current.textContent = "A falsis, historia primus gallus. Est bassus tabes, cesaris. Gallus de mirabilis agripeta, locus mens! Primus ratione"
      titleRef.current.textContent = "Cur eleates accelerare? Heu. Ecce, superbus onus! Demolitione secundus homo est. Cum cacula congregabo, omnes coordinataees acquirere dexter, flavum galataees."
    }
    const showAbout  =() => {
      textRef.current.textContent = "A falsis, historia primus gallus. Est bassus tabes, cesaris. Gallus de mirabilis agripeta, locus mens! Primus ratione"
      titleRef.current.textContent = "Cur eleates accelerare? Heu. Ecce, superbus onus! Demolitione secundus homo est. Cum cacula congregabo, omnes coordinataees acquirere dexter, flavum galataees."
    }


const prevSlide = () => {
  setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
}
const nextSlide =  () => {
  setCurrentSlide(currentSlide === images.length -1 ? 0 : currentSlide + 1)
}

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()


    }, 3000)
    return() => {
      clearInterval(interval)
    }
  }, [currentSlide])
  return (
 
        <div className="farmer-section row">
            <div className="left-side col-12 col-md-6 col-lg-5">
             <h2>NEW GENERATION OF FARMERS</h2>
             <div className="buttons-section">
                <button onClick={showAbout}>ABOUT</button>
                <button onClick={showMission}>OUR MISSION</button>
                <button onClick={showGoal}>OUR GOALS</button>
             </div>
             <div className="text-content">
                <h6 ref={textRef}>Cum nomen prarere, omnes peses amor pius, rusticus racanaes. Ubi est mirabilis gemna? Cum gabalium velum, omnes fugaes</h6>
                <p ref={titleRef}>Ubi est peritus devatio? A falsis, adelphis peritus apolloniates. Est raptus clabulare, cesaris. Cum pulchritudine manducare, omnes genetrixes captis bassus</p>
             </div>
             <a href="" className='btn btn-success'>READ MORE</a>
            </div>
            <div className="right-side col-12 col-md-6 col-lg-4">
<div className="images-section">
  <button onClick={prevSlide}></button>
  <button onClick={nextSlide}></button>
 
  <div className="image">
    <img src={images[currentSlide].img} alt="" />
  </div>


            </div>
        </div>

    </div>
  )
}

export default Farmer