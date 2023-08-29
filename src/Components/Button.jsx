import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='btn-color'>{props.insideText}</button>
    </div>
  )
}

export default Button