import React from 'react';
import CategoryPreviewItem from '../category-preview-item/category-preview-item.component.jsx';
import './category-preview.styles.scss'


const CategoryPreview = ({title, items}) => {
    return (
        <div className="CategoryPreview">
            <h1 className="title">{title}</h1>
            <div className="categoryItem">
                {items.filter((item,index) => index < 4 ).map(({id, ...remainingCategoryProps}) => (
                    <CategoryPreviewItem key={id}  {...remainingCategoryProps}></CategoryPreviewItem>
                ))}
            </div>
        </div>
    )
}

export default CategoryPreview;