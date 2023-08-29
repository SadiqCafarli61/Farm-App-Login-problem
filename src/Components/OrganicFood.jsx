import React, { useState, useRef, useEffect } from 'react'
import {AiOutlineArrowUp} from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai'

const fruits = [
    {
        id: 1,
        img: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1691782700/peach_hexvxo.png",
        title: "PEACHES",
        price: "$15.00"
    },
    {
        id: 2,
        img: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1691782702/rice_ljn8om.png",
        title: "WHITE RICE",
        price: "$13.00"
    },
    {
        id: 4,
        img: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1691782701/coconut_b3697g.png",
        title: "COCONUTS && PINEAPPLES",
        price: "$23.00"
    }
]
const menus = [
    { title: "What does organic mean?" , content: "Organic products are grown in environmentally friendly ways. Toxic or persistent pesticides and other agricultural chemicals are prohibited. There is also a focus on renewable resources and the conservation of soil and water."},
    { title: "Why eat organic?", content: "Avoiding agricultural chemicals is one of the top reasons to eat organic food. In general, according to the latest research, consumers who buy organic products cite health/nutrition, taste and food safety as the top motivators for their purchases. Environmental effects are also a strong reason to buy and eat organic products."  },
    {title: "Is organic food healthier", content: "There is growing research that indicate greater amounts of certain nutrients in organic crops compared to conventional crops. If you’re concerned about pesticides, the application of potentially harmful, long-lasting pesticides and fertilizers are not allowed in organic agriculture. The EPA considers 60% of all herbicides, 90% of all fungicides, and 30% of all insecticides as potentially cancer-causing."}
    
  ]

const OrganicFood = () => {
    const [currentNumber, setCurrentNumber] = useState(0)
    const [spanColor, setSpanColor] = useState('green')

const handlePrev = () => {
setCurrentNumber(currentNumber === 0 ? fruits.length - 1 : currentNumber - 1)
}
const handleMiddlePrev = () => {
 setCurrentNumber(currentNumber ===  fruits.length -1 ? 0 : currentNumber + 1)
}
const handleNextPrev = () => {
setCurrentNumber(currentNumber === fruits.length - 1  ? 0 : currentNumber + 1)

}


useEffect(() => {
const interval = setInterval(() => {
    handleNextPrev()
}, 3000)
return() => {
    clearInterval(interval);
}
}, [currentNumber])

useEffect(() => {
    if(currentNumber === 0){
        setSpanColor("green")

    }
    else{
        setSpanColor("green")
    }
}, [currentNumber])

const [activeIndex, setActiveIndex]  = useState(null)

const toggleAccordion = (index) => {
    if(activeIndex === index){
        setActiveIndex(null)
    }
    else{
        setActiveIndex(index)
    }
}


  return (
    <div className='organicfood-section row'>
       <div className="left-side col-12 col-md-6 col-lg-6">
           <div className="fruits">
            <div className="header">
                <img src={fruits[currentNumber].img} alt="" />
            </div>
            <div className="body-part">
                <h5>{fruits[currentNumber].title}</h5>
            </div>
            <div className="prices">
                <p>{fruits[currentNumber].price}</p>
            </div>
            <div className="prevs">
                <span  onClick={handlePrev}  style={{
                    backgroundColor:  spanColor
                }}></span>
                <span   onClick={handleMiddlePrev}  
                   
                ></span>
                <span  onClick={handleNextPrev}></span>
            </div>
           </div>
       </div>
       <div className="right-side col-12 col-md-6 col-lg-6">
        <div className="organic">
        <h5>Benefits of Organic Produce</h5>
         <h2>ORGANIC FOOD FAQ</h2>
        </div>

      <div className="akkordion">
          
              {menus.map((item, index) => (
                <div  className='accordions'>
                     
                  <div  className={`accordion-title ${activeIndex === index ? 'active' : ""}`}
                       
                   onClick={() => toggleAccordion(index)  }
                style={{
                //    maxHeight:`${activeIndex===index? '200px':'200px'}`,
            
                    }}
                         
                   >
                     <AiOutlineRight  className='icon'   style={{
                      transform: `${activeIndex===index ? 'rotate(90deg)' : ''}`,
                     backgroundColor: `${activeIndex === index ? '#e9da5d' : ""}`,
                     transition: `${activeIndex === index ? '0.4s' : "0.4s"}`
                
                           }}/>
                   
                            {item.title}
                          </div>
                     {activeIndex === index && <div className='accordion-content' 
                            style={{
                                height: `${activeIndex === index ? '180px' : ""}`,
                                
                            }}
                          >
                            
                            <h5>{item.content}</h5> </div>}
                         </div>
                )) }
                
            </div>      
       </div>
    </div>
  )
}

export default OrganicFood