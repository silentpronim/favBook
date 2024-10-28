import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='container2'>
        <ul>
            <li>Home</li>
            <li>Order Track</li>
            <li>About Us</li>
            <li>Support</li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar