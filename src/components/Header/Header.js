import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1 className='font-bold text-lg text-white p-3 header-headline'>Best Calculator in the World!</h1>
            <nav className='font-semibold text-white p-3'>
                <Link className='p-2 nav-links' to="/">Home</Link>
                <Link className='p-2 nav-links' to="/reviews">Reviews</Link>
                <Link className='p-2 nav-links' to="/dashboard">Dashboard</Link>
                <Link className='p-2 nav-links' to="/blogs">Blogs</Link>
                <Link className='p-2 nav-links' to="/about">About</Link>
            </nav>
        </div>
    );
};

export default Header;