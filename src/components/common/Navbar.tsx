import React from 'react'
import "../../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMountainSun } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <nav>
        <div className='navIcon'>
            <div className="navIconItem"></div>
            <div className="navIconItem"></div>
            <div className="navIconItem"></div>
        </div>
        <ul className='navbar-nav'>
            <li className="nav-item">
                <a href="#" className='nav-link'>
                <FontAwesomeIcon icon={faHouse} />       
                <span className='link-text'>Home</span>
                </a>
            </li>
            <li className="nav-item">
                <a href="#" className='nav-link'>
                <FontAwesomeIcon icon={faMountainSun} />                
                <span className='link-text'>My Day</span>
                </a>
            </li>
        </ul>
    </nav>
  )
}
