import React from 'react';
import { Category } from '../../components/category/category.component';
import './homepage.styles.scss';
import {Route, Switch} from 'react-router-dom';

const HomePage = (props) => {
    console.log('HomePage props are: ', props);
    return <div className="homepage">
        <div className="header-menu">

        </div>
        <Category></Category>
    </div>
}

export default HomePage;