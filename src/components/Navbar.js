import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        JOSHUA YELLOWLEY <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/about" className='nav-links' onClick={closeMobileMenu}>
                            About Me
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/projects" className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>CONTACT ME</Button>}
            </nav>
        </>
    );
}

export default Navbar
