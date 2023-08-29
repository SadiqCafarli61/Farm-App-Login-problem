import React, {useState, useRef} from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
const loginSchema = Yup.object().shape({
  email:Yup.string()
  .email('Email is invalid')
  .required('Email is required'),
  password:Yup.string()
  .min(6, "Password must be at least characeters")
  .required("Password is required")
})


const Login = () => {

  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

const handleLogin = (values) => {
  if(loginEmail.trim() === "" || loginPassword.trim() === ""){
    setErrorMessage("Please fill all fields");
  }
  else{
    const savedUsers = JSON.parse(localStorage.getItem(values))
    console.log(values)
    if(savedUsers && savedUsers.email === values.email && savedUsers.password === values.password){
      alert("succesfully created")
      navigate('/')
    }

  }

}
  return (
       
<Formik
 initialValues={{
  email: "",
  password: ""
 }}
 validationSchema={loginSchema}
 onSubmit={handleLogin}
>
  <div className="login-section">

 
  <Form>
    <div className="mb-3">
      <label htmlFor="email">Email</label>
      <input 
      
      type="email" 
       name='email'
        id='email' 
       value={loginEmail} 
       onChange={(e) => setLoginEmail(e.target.value)}
       className='form-control'
       />
      <span style={{color: "red"}}>
       
      </span>
      <label htmlFor="password">Password</label>
   <input type="password"
       name='password'
       id='password'
       className='form-control'
       onChange={(e) => setLoginPassword(e.target.value)}
       value={loginPassword}
   />
      <ErrorMessage id='name' name='password' component= 'div' /> 
    </div>
  </Form>
  <button type='submit mt-3' className='btn btn-primary'>Register</button>
  {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>}
  </div>

</Formik>
  )
}

export default Login