import React, {useState, useRef} from 'react'

const Subscribe = () => {

    const [emailEl, setEmailEl] = useState("")
    const [emailError, setEmailError] = useState("")
    const [submitEl, setSubmitEl] = useState("")
    const [submitError, setSubmitError]= useState("")

    const emailChange = (e) => {
        e.preventDefault()
        window.onclick = function(e){
            if(emailEl.trim() === ""){
                setEmailError("The text field is required")
                emailRef.current.style.borderBottom = "1px solid red"
            }
            else{
                setEmailError(null)
            }
        }
        setEmailEl(event.target.value)

    }
    const emailRef = useRef()

  

    
  return (
    <div className='subscribe-section'>
<div className="subscribe">
    <div className="stay">
        <h5>STAY CONNECTED</h5>
        <p>Subscribe to our newsletter</p>
    </div>
    <form >
        <div className="inputs">
            <input
            ref={emailRef}
            type="email"
            placeholder='Enter your e-mail address'
              onChange={emailChange}
            />
            {emailEl && <span style={{color: "red",
                 fontSize: "8px",
                 
        }}>{emailError}</span>}
        </div>
    </form>
    <div className="buttons">
        <button className='btn btn-success text-white'>SUBSCIBE</button>
    </div>
</div>
    </div>
  )
}

export default Subscribe