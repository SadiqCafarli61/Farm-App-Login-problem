import React, {useEffect, useState} from 'react'

const Partner = () => {
  const [count, setCount] = useState(1)
  const [countTwo, setCountTwo] = useState(1)
  const [countThird, setCountThird] = useState(1)
  const [countFour, setCountFour] = useState(1)

  useEffect(() => {
     const interval = setInterval(() => {
      if(countFour < 474){
        setCountFour(countFour + 1)
      }
     }, 5)
     return() => {
      clearInterval(interval)
     }
  }, [countFour])

  useEffect(() => {
    const interval  =setInterval(() => {
      if(countThird < 1267){
        setCountThird(countThird + 1)
      }
    }, 1)
    return() => {
      clearInterval(interval)
    }
  }, [countThird])

  useEffect(() => {
    const interval  =setInterval(() => {
      if( countTwo < 382){
        setCountTwo(countTwo + 1)
      }
    }, 5)
    return () => {
      clearInterval(interval)
    }
  }, [countTwo])

  useEffect(() => {
    const interval = setInterval(() => {
 if(count <245){
  setCount(count + 1)
 }
    }, 5)
    return() => {
      clearInterval(interval)
    }
  }, [count])
  return (
    <div className='partner-section'>
<div className="partner ">
    <div className="numbers ">
         <div className="heading">
            <p>{count}</p>
         </div>
         <h5>Vegetables and fruits</h5>
    </div>
    <div className="numbers ">
         <div className="heading">
            <p>{countTwo}</p>
         </div>
         <h5>Reliable
partners</h5>
    </div>
    <div className="numbers ">
         <div className="heading">
            <p>{countThird}</p>
         </div>
         <h5>Satisfied
customers</h5>
    </div>
    <div className="numbers ">
         <div className="heading">
            <p>{countFour}</p>
         </div>
         <h5>New blog
articles</h5>
    </div>
</div>
    </div>
  )
}

export default Partner