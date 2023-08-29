import React, {useState, useRef, useEffect} from 'react'

const Email = () => {


    const   [userName, setusername] = useState("")
    const [nameError, setNameError] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [companyError, setCompanyError] = useState("")
    const [addressName, setAddressName] = useState("")
    const [addressError, setAddressError] = useState("")
    const [cityName, setCityName] = useState("")
    const [cityError, setCityError] = useState("")
    const [emailName, setEmailName] = useState("")
    const [emailError, setEmailError] = useState("")
    const [phoneError, setPhoneError] = useState("")
    const [submitError, setSubmitError] = useState("")


    function isValidName(userName){
        return  /^[A-Za-z\-']+$/.test(userName)
    }
    const nameRef = useRef()
const nameEl = (e) => {
    e.preventDefault()
    window.onclick = function(e){
        if(userName.trim() === ""){
           setNameError("The text field is required")
           
        }
        else if(userName.length < 3 || userName.length === 3){
            setNameError("The text field is required")
        }
        else{
          setNameError(null)
        }
    }

   setusername(event.target.value)
   
}


const companyEl = (e) => {
    e.preventDefault()
    window.onclick = function(e){
        if(companyName.trim() === ""){
            setCompanyError("The text field is required")
        }
        else{
            setCompanyError(null)}
        }
        setCompanyName(event.target.value)
    }
    const addressEl = (e) => {
        e.preventDefault()
        window.onclick = function(e){
            if(addressName.trim() === ""){
                setAddressError("The text field is required")
            }
            else{
                setAddressError(null)
            }
            setAddressName(event.target.value)
        }
    }
   
  

 

    const handleSubmit = (e) => {
        e.preventDefault()
        if(userName.trim() ==="", companyName.trim() === "") {
            setSubmitError("Please fill all fields")
        }
        else{
            setSubmitError(null)
        }
    }
    const DatabaseData = [
        { title: 'Baki', content: 'Sebail rayonu' },
        { title: 'Yasamal', content: 'Yasayis binalari' },
        { title: 'Sahil', content: 'Park Bulvar' },
      
      ];

    const [searchTerm, setSearchTerm] = useState("")
    const [searchResult, setSearchResult] = useState([])

  
  return (
    <div className='email-section'>
        <div className="left-side">
        <div className="header">
                <h5>BILLING ADDRESS</h5>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-section">
                    <div className='mt-4'>
                    <input 
                     placeholder='First Name'
                    type="text" 
                    ref={nameRef}
                   
                     onChange={nameEl}
                    />
                    {nameError && <span style={{color: "red", fontSize: "10px",
                      position: "relative",
                      right: "120px",
                      top: "10px"                
                
                }}>{nameError}</span>  }
                    
                    <input 
                     placeholder='Last Name'
                    type="text" />
                    </div>
                    <div className='mt-4'>
                    <input 
                     placeholder='Company'
                    type="text" 
                     className='company'
                     onChange={companyEl}
                    />
                    {companyError && <span style={{color: "red",
                    position: "relative",
                    top: "10px",
                    fontSize: "10px",
                    right: "120px"
                
                
                }}>{companyError}</span> }
                   
                    </div>
                    <div className='mt-4'>
                    <input 
                     placeholder='Address'
                    type="text" 
                     className='company'
                     onChange={addressEl}
                    />
                     {addressError && <span style={{color:"red",
                        position: "relative",
                        top: "10px",
                        fontSize: "10px",
                        right: "120px"
                    }}>{addressError}</span>} 
                   
                    </div>
                    <div className='mt-4'>
                    <input 
                     placeholder='City/Town'
                    type="text" 
                     className='company'
                    />
                   
                    </div>
                    <div className='mt-4'>
                    <input 
                     placeholder='E-Mail'
                    type="email" 
                     
                    />
                    <input 
                     placeholder='Phone'
                    type="phone" />
                   
                    </div>
                    <button className=' mt-4 btn btn-primary'>Submit</button>
                    {submitError && <span style={{color: "red",
                  fontSize: "12px",
                  paddingTop: "7px",
                  margin: "0 auto",
                  width: "100%", 
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                
                }}>{submitError}</span> }
                 
                </div>
            </form>
        </div>
    </div>
  )
          }

export default Email