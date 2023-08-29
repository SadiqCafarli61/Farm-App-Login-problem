import React, {useEffect, useState} from 'react'
import Fresh from './Fresh'
import axios from 'axios'
import AOS from 'aos'

const Freshes = () => {
  const [fresh, setFresh]= useState(false)
  useEffect(() => {
    axios.get('/src/Components/Fresh.json')
    .then(data => setFresh(data.data))

  }, [])
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])
  return (
  <div className='fresh-section'>
    <div className="row" data-aos="fade-up">
      {
        fresh && fresh.map(oneFresh => (
          <Fresh  img= {oneFresh.url}  heading={oneFresh.titleImage} body={oneFresh.bodyImage}/>
        ))
      }
    </div>
  </div>
  )
}

export default Freshes