import React from 'react';
import './category-item.styles.scss';

export const CategoryItem = ({id, title, img, size}) => (
    <div className={`${size} category-item`}>
        <div className="background-image" style ={{backgroundImage : `url(${img})`}}></div>
        <div className="content">
            <h1 className="category-title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)