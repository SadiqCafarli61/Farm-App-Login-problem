import React from 'react'
import "../Offers/Offer.css"
import OfferNavbar from './OfferNavbar'
import Subscribe from './Subscribe'
import Available from './Available'
import Carts from './Carts'

const Offer = () => {
  return (
    <div>
        <OfferNavbar />
        <Subscribe />
        <Available />
        <Carts />
    </div>
  )
}

export default Offer