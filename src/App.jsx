import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Main from './Components/Main'
import Farm from './Components/Farm'
import Freshes from './Components/Freshes'
import Product from './Components/Product'
import Clients from './Components/Clients'
import Food from './Components/Food'
import Teams from './Components/Teams'
import OrganicFood from './Components/OrganicFood'
import Dishes from './Components/Dishes'
import Blog from './Components/Blog'

import Home from './Components/Pages/Home'
import Shop from './Components/Pages/Shops/Shop'
import Produce from './Components/Pages/Produces/Produce'
import EmailAddress from './Components/Pages/Emails/EmailAddress'
import SingleProduct from './Components/Pages/SingleProduct/SingleProduct'
import Apply from './Components/Pages/Apply/Apply'
import Stores from './Components/Pages/Stores/Stores'
import About from './Components/Pages/AboutSection/About'
import Offer from './Components/Pages/Offers/Offer'
import Pricing from './Components/Pages/Pricing/Pricing'
import Logins from './Components/Pages/Logins/Logins'
import Login from './Components/Login'
import TestClient from './Components/Pages/ClientsTestimonials/TestClient'


function App() {
 
  return (
    <>
    <BrowserRouter>
    <div>
    <Header />
<Routes>
  <Route  path='/' element= {<Home />}/>
  <Route path='/shop'element= {<Shop />} />
  <Route path='/produce' element= {<Produce />} />
  <Route path='/email address' element= {<EmailAddress />} />
  <Route path='/singleProduct'  element={<SingleProduct />}/>
  <Route path='/apply' element ={<Apply />} />
  <Route path='/stores' element = {<Stores />} />
  <Route  path='/about' element ={<About />}/>
  <Route  path='/offer'element={<Offer />}/>
  <Route  path='/pricing' element={<Pricing />}/>
  <Route  path='/signup' element ={<Logins />}/>
  <Route  path='/login' element={<Login />}/>
  <Route  path='/TestimonialsClient' element={<TestClient />}/>

</Routes>

  </div>
    </BrowserRouter>
   
    </>
  )
}

export default App
