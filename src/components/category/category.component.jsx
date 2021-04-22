import React from 'react';
import './category.styles.scss';
import '../category-item/category-item.component';
import { CategoryItem } from '../category-item/category-item.component';


export class Category extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
            {
                title: "Women",
                img: "'https://i.ibb.co/GCCdy8t/womens.png",
                id: 1,
                size: 'large'
            },
            {
                title: "Men",
                img: "https://i.ibb.co/R70vBrQ/men.png",
                id: 2,
                size: 'large'
            },
            {
                title: "Jackets",
                img: "https://i.ibb.co/px2tCc3/jackets.png",
                id: 3,
                size: ''
            },
            {
                title: "Accessories",
                img: "https://i.ibb.co/cvpntL1/hats.png",
                id: 4,
                size: ''
            },
            {
                title: "Footwear",
                img: "https://i.ibb.co/0jqHpnp/sneakers.png",
                id: 5,
                size: ''
            }
        ]}
    }

    render() {
        return <div className="content-container">
                    {this.state.sections.map(item => <CategoryItem key= {item.id} title={item.title} img={item.img} size={item.size}></CategoryItem>)}
                </div>
    }
}


