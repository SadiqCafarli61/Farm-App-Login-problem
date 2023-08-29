import React, {useState, useEffect, useRef} from 'react'
import { Navigate, json, useNavigate } from 'react-router-dom'
import { Formik, Field, ErrorMessage,  Form } from 'formik'


import * as Yup from 'yup'


const SignUp = () => {
  const navigate = useNavigate()
  const handleSubmit = (values) => {
    console.log(values)
    localStorage.setItem('user', JSON.stringify(values))
   
 navigate('/login')
  }



const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
  .max(15, "should be 15 characters or less")
  .required('Required'),
  lastName: Yup.string()
  .max(15, "should be 15 characters or less")
  .required("Required"),
  email:Yup.string()
  .email('Email is invalid')
  .required(" Email is required"),
  password: Yup.string()
  .min(6, "Password must be at least characeters ")
  .required('Password is required'),
  confirmPassword: Yup.string()
  .oneOf([Yup.ref('password'), null], 'Password must be match')
  .required('Confirm password is required')
})
  


const [users, setUsers] = useState({})

  const [registerUsername, setRegisterUsername] = useState("")
  const [registerUsernameError, setRegisterUsernameError] = useState("")
  const [registerEmail, setRegisterEmail] = useState("")
 const [registerPassword, setRegisterPassword] = useState('')
 const [registerPasswordError, setRegisterPasswordError] = useState('')

  return (
    <>
  
        <div className='input-container '>
          <h1 className='mb-4'> Sign Up</h1>
          <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""

          }}
          validationSchema = {RegisterSchema}
          onSubmit={handleSubmit}
          >

            <Form className='form'>
              <label htmlFor="First Name">First Name</label>
              <Field  type="text" 
                name="firstName" id="firstName" className= 'form-control'/>
              <span style={{
                color:"red"
              }}>
              <ErrorMessage   name='firstName' component='div'/>
              </span>
             
            <label htmlFor="Last Name">Last Name</label>
            <Field  type="text" name="lastName" id="lastName"    className="form-control" />
            <span style={{
              color: "red"
            }}>
              <ErrorMessage name='lastName' component="div"/>
            </span>
            <label htmlFor="email">Email</label>
            <Field  type="email" 
        
            name="email" id="email"   className ="form-control" />
           <span style={{
            color: "red"
           }}>
            <ErrorMessage name='email'  component="div"  />
           </span>
            <label htmlFor="password">Password</label>
            <Field type="password" 
            
          
          
            id="password"  name = "password" className = "form-control"  />
            <span style={{
              color: "red"
            }}>
              <ErrorMessage name='password' component="div" />

            </span>
            <label htmlFor="password">Confirm Password</label>
            <Field  type="password" name= "confirmPassword" id="confirmPassword"  className= "form-control" />
            <span style={{
              color: "red"
            }}>
              <ErrorMessage name='confirmPassword' component="div"  />
            </span>
            <button type='submit' className='btn btn-primary mt-3'>Register</button>
            </Form>
          </Formik>
         
      </div>
    </>
  )
}

export default SignUp