import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({currentUser}) => (
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
            {
                currentUser ?
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className="option" to="/login">SIGN IN</Link>
            }
        </div>
    </div>
);

export default Header;