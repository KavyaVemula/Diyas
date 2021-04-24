import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => (
    <div className = "header">
        <Link className="logo-container" to="/">
            <Logo></Logo>
        </Link>
        <div className="options-container">
            <div className="option">
                <Link to="/shop">SHOP</Link>
            </div>
            <div className="option">
                <Link to="/shop">CONTACT US</Link>
            </div>
        </div>
    </div>
);

export default Header;