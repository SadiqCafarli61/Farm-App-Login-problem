import React, {useEffect, useState} from 'react'
import Dish from './Dish'
import axios from 'axios'

const Dishes = () => {

    const [dishes, setDishes] = useState(false)

    useEffect(() => {
        axios.get("src/Components/Dishes.json")
        .then(info => setDishes(info.data))
    })
  return (
    <div className='dishes-section'>

        <div className="dish ">

        
    { dishes && dishes.map(oneDish => (
        <Dish 
         image={oneDish.img}
         
        />
    )) }
    </div>
    </div>
  )
}

export default Dishes