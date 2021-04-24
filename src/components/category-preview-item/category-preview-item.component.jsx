import React from 'react';
import './category-preview-item.styles.scss';

const CategoryPreviewItem = ({id, name, imageUrl, price}) => (
    <div className="CategoryPreviewItem" key={id}>
        <div className="image" style={{backgroundImage: `url(${imageUrl})`}}/>
        <div className="category-preview-footer">
            <div className="category-preview-name">
                {name}
            </div>
            <div className="category-preview-price">
                {price}
            </div>
        </div>

    </div>
);

export default CategoryPreviewItem;