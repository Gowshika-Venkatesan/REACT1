import React , {useState} from 'react';
import  Button from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
    const [click,setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
        <nav className="navbar">
            <Link to='/'
                  className='navbar-logo'>
                <img src="./logo.png" alt="logo"/>
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fa-solid fa-xmark' : 'fa-solid fa-bars' } />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                        Services
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                    </Link>
                </li>
            </ul>
            <Button />
        </nav>
        </>
    );
}

export default Navbar;