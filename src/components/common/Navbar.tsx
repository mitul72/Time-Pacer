import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMountainSun, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';



export default function Navbar() {
    const [NavOpen, setNavOpen] = useState('navIcon');
    // add navopen class to state to expand navbar
    const [NavExpand, setNavExpand] = useState('');
    // 
    // const [Page, setPage] = useState('Home')
    function NavOnLeave(){
        if(NavExpand!=''){
            setNavOpen('navIcon');
            setNavExpand('')
        }

    }
    function NavOpenClick(){
        if(NavOpen === 'navIcon'){
            setNavOpen('navIcon NavOpen');
            setNavExpand('navHover')
        }
        else {
            setNavOpen('navIcon');
            setNavExpand('')
        }
    }
  return (
    <nav className={NavExpand} onMouseLeave={NavOnLeave}>
        <div className={NavOpen} onClick={NavOpenClick}>
            <div className="navIconItem"></div>
            <div className="navIconItem"></div>
            <div className="navIconItem"></div>
        </div>
        <ul className='navbar-nav' onClick={NavOnLeave}>
            <li className="nav-item">
                <Link to="/" className='nav-link'>
                <FontAwesomeIcon icon={faHouse} />       
                <span className='link-text'>Home</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="day" className='nav-link'>
                <FontAwesomeIcon icon={faMountainSun} />                
                <span className='link-text'>My Day</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="build" className='nav-link'>
                <FontAwesomeIcon icon={faScrewdriverWrench} />                
                <span className='link-text'>Add Task</span>
                </Link>
            </li>
        </ul>
    </nav>
  )
}
