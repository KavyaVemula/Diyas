import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    // In the above line, children gives in anything that is written between the <CustomButton> tags in parent component
    <button className={`${isGoogleSignIn?'google-sign-in':''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;