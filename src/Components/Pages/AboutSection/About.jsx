import React from 'react'
import "../AboutSection/About.css"
import AboutNavbar from './AboutNavbar'
import Farmer from './Farmer'
import History from './History'
import TeamAbout from './TeamAbout'
import Partner from './Partner'
import Testimonials from './Testimonials'

const About = () => {
  return (
    <div>
<AboutNavbar />
<Farmer />
<History />
<TeamAbout />
<Partner />
<Testimonials />
    </div>
  )
}

export default About