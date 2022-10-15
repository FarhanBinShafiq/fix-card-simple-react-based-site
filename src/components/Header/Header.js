import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <div>
                <img src={logo} alt="" />
            </div>

            <div className='header-nav'>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/orders">Order</Link>
                {/* <a href="" className='btn'>Sign Up / Log In</a> */}
                 
            </div>
        </nav>
    );
};

export default Header; <img src={logo} alt="" srcset="" />