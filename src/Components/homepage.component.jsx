import React from 'react';
import './homepage.styles.scss';

export const HomePage = () => {
    return <div className="homepage">
        <div className="header-menu">

        </div>
        <div className="content-container">
            <div className="category-item">
                <div className="content">
                    <h1 className="category-title">Women</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="category-item">
                <div className="content">
                    <h1 className="category-title">Men</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="category-item">
                <div className="content">
                    <h1 className="category-title">Hats</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="category-item">
                <div className="content">
                    <h1 className="category-title">Jackets</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
}