import { useState } from 'react';
import logo from './assets/images/logo.svg';

const Header = () => {
    const [isNavbarActive, setIsNavbarActive] = useState(false);

    const toggleNavbar = () => {
        setIsNavbarActive(prevState => !prevState);
    };

    return (
        <header className="header" data-header>
            <div className="container">
                <nav className={`navbar ${isNavbarActive ? 'active' : ''}`} data-navbar>
                    <div className="wrapper">
                        <a href="/" className="logo">
                            <img src={logo} width="162" height="50" alt="EduWeb logo" />
                        </a>
                        <button 
                            className="nav-close-btn" 
                            aria-label="Close menu" 
                            onClick={toggleNavbar} 
                            aria-expanded={isNavbarActive}
                            type="button"
                        >
                            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
                        </button>
                    </div>
                    <ul className="navbar-list">
                        {['Home', 'About', 'Blog', ].map((link, index) => (
                            <li className="navbar-item" key={index}>
                                <a href={`#${link.toLowerCase()}`} className="navbar-link" data-nav-link>
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-actions">
                    <button 
                        type="button" 
                        className="header-action-btn" 
                        aria-label="Toggle search" 
                        title="Search"
                    >
                        <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
                    </button>
                    <button 
                        type="button" 
                        className="header-action-btn" 
                        aria-label="Open menu" 
                        onClick={toggleNavbar}
                    >
                        <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
                    </button>
                </div>

                <div className={`overlay ${isNavbarActive ? 'active' : ''}`} data-nav-toggler data-overlay></div>
            </div>
        </header>
    );
};

export default Header;