import React from 'react';
import './login.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const LoginPage = () => (
    <div className="login-container">
        <div className="login">
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    </div>
);

export default LoginPage;