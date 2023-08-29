import React from 'react'

const Fresh = ({img, heading, body}) => {
  return (
    <div className="card col-12 col-md-6 col-lg-2 mt-2 text-white" >
    <img src={img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{heading}</h5>
      <p className="card-text">{body}</p>
    
    </div>
  </div>
  )
}

export default Fresh