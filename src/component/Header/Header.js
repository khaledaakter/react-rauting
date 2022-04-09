import React from 'react';
import './Header.css';
import CustomLink from '../CustomLink/CustomLink'



const Header = () => {
    return (
        <>
            <div className='nav-container'>
                <nav className='container nav-container-inner'>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/about">About</CustomLink>
                    <CustomLink to="/reviews">reviews</CustomLink>
                    <CustomLink to="*"></CustomLink>
                </nav>
            </div>
        </>
    )
}

export default Header;