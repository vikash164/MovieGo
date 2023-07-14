import React from 'react'
import './homepage.css'
import Slider from '../inc/Slider'
// import Eticket from '../pages/Eticket'
import { Link } from 'react-router-dom'
const Homepage = (setLoginUser) => {
    return (
        <>
  <Slider/>
  <div>
  <Link to='/eticket' className='btn btn-outline-danger'>Book now</Link>
  </div>
</>
    )
}

export default Homepage
