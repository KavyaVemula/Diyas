import React from 'react'
import SHOP_DATA from './shop.data'
import CategoryPreview from '../../components/category-preview/category-preview.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className="shopPage">
                {collections.map(({id, ...remainingCollectionFields}) => (
                <CategoryPreview key={id} {...remainingCollectionFields}></CategoryPreview>
                ))}
            </div>
            
        );
    }
}
export default ShopPage;
