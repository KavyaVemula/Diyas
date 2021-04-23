import React from 'react';
import './category.styles.scss';
import '../category-item/category-item.component';
import CategoryItem  from '../category-item/category-item.component';


export class Category extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
            {
                title: "Women",
                img: "'https://i.ibb.co/GCCdy8t/womens.png",
                id: 1,
                size: 'large',
                url: 'women'
            },
            {
                title: "Men",
                img: "https://i.ibb.co/R70vBrQ/men.png",
                id: 2,
                size: 'large',
                url: ''
            },
            {
                title: "Jackets",
                img: "https://i.ibb.co/px2tCc3/jackets.png",
                id: 3,
                size: '',
                url: ''
            },
            {
                title: "Accessories",
                img: "https://i.ibb.co/cvpntL1/hats.png",
                id: 4,
                size: '',
                url: ''
            },
            {
                title: "Footwear",
                img: "https://i.ibb.co/0jqHpnp/sneakers.png",
                id: 5,
                size: '',
                url: ''
            }
        ]}
    }

    render() {
        return <div className="content-container">
                    {this.state.sections.map(({id, ...remainingStateFields}) => 
                        <CategoryItem key= {id} {...remainingStateFields}></CategoryItem>)}
                </div>
    }
}


