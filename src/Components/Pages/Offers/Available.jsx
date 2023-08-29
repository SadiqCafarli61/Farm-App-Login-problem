import React, {useState, useEffect} from 'react'

import {AiOutlineArrowUp} from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai'
const  menus = [
    
      {title: "In what formats are you templates available?", content: "Website templates are available in Photoshop and HTML formats. Fonts are included with Photoshop file. In most templates HTML is compatible with Adobe® Dreamweaver® and Microsoft Frontpage®." },
      {title: "Do you provide any scripts with your templates", content: "Our templates do not include any additional scripts. Newsletter subscriptions, search fields, forums, image galleries (in HTML versions of Flash products) are inactive. Basic scripts can be easily added at www.zemez.io If you are not sure that the element you’re interested in is active please contact our Support Chat for clarification." },
      {title: "What do l receive when l order a template", content: "After you complete the payment via our secure form you will receive the instructions for downloading the product. The source files in the download package can vary based on the type of the product you have purchased." } 
    
]
const menuTwo = [
    {titleTwo: "What am l allowed to do with  the templates?", contentTwo: "You may build a website using the template in any way you like. You may not resell or redistribute templates (like we do); claim intellectual or exclusive ownership to any of our products, modified or unmodified. All products are property of content providing companies and individuals. You are also not allowed to make more than one project using the same template (you have to purchase the same template once more in order to make another project with the same design)." },
    {titleTwo: "What is a unique/non-unique purchaces?", contentTwo: "Non-exclusive purchase means that other people can buy the template you have chosen some time later. Exclusive or unique purchase guarantees that you are the last person to buy this template. After an exclusive purchase occurs the template is being permanently removed from the sales directory and will never be available to other customers again. Only you and people who bought the template before you will own it."  },
    {titleTwo: "How can l pay for my order", contentTwo: "We accept Visa, MasterCard, and American Express credit and debit cards for your convenience."}
]

const Available = () => {
    const [activeIndex, setActiveIndex] = useState(null)
    const [activeMenu, setActiveMenu] = useState(null)
    const toggleAccordion = (index) => {
        if (activeIndex === index){
            setActiveIndex(null)
        }
        else{
            setActiveIndex(index)
        }
    }
    const openAccordion = (infos) => {
        if(activeMenu === infos){
            setActiveMenu(null)
        }
        else{
            setActiveMenu(infos)
        }
    }
  return (
    <div className='available-section row'>
       <div className="left-side col-12 col-md-6 col-lg-4">
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
                   
                            <h5>{item.title}</h5>
                          </div>
                     {activeIndex === index && <div className='accordion-content' 
                            style={{
                                height: `${activeIndex === index ? '100px' : ""}`,
                                transition: `${activeIndex === index ? "1.1s" : ""}`
                                
                            }}
                          >
                            
                            <h5>{item.content}</h5> </div>}
                         </div>
                )) }
        </div>
       </div>
        <div className="right-side col-12 col-md-6 col-lg-4">
<div className="akkordion">
    
   
 {menuTwo.map((items, infos) => (
    <div className="accordions">

  
     <div className={`accordion-title ${activeMenu === infos ? "active" : ""}`}
      onClick={() => openAccordion(infos)}

     >
         <AiOutlineRight  className='icon'   style={{
                      transform: `${activeMenu===infos ? 'rotate(90deg)' : ''}`,
                     backgroundColor: `${activeMenu === infos ? '#e9da5d' : ""}`,
                     transition: `${activeMenu === infos ? '0.4s' : "0.4s"}`
                
                           }}/>
        <h5>{items.titleTwo}</h5>
        

     </div>

     {activeMenu === infos && <div className='accordion-content'
     style={{
        maxHeight: `${activeMenu === infos ? "400px" : ""}`,
        transition: `${activeMenu === infos ? "1.1s" : ""}`


     }}
     
     >
        <p  style={{
            maxWidth: "600px"
        }}>{items.contentTwo}</p>

     </div> }
     </div>
 ))}
 
</div>
        </div>

    </div>
  )
}

export default Available