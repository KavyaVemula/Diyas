import React from 'react';
import './category-item.styles.scss';
import { withRouter } from 'react-router-dom';

// history and match are Route props. match will give the prior url for which new one will be appended
const CategoryItem = ({id, title, img, size, url, history, match}) => {
    return (
    <div className={`${size} category-item`} onClick={() => history.push(`${match.url}${url}`)}>
        <div className="background-image" style ={{backgroundImage : `url(${img})`}}></div>
        <div className="content">
            <h1 className="category-title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
    );
}

export default withRouter(CategoryItem);