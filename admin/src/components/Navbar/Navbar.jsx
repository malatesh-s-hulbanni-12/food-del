import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
    <img className='logo' src={assets.logo} alt='' />
    <img className='profile' src={assets.add_icon_green} alt='' />
    </div>
  )
}

export default Navbar
