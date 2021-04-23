import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'


const WomenPage = (props) => {
  console.log('Women page props are: ', props);
  return <div>Women Page</div>;
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/women' component={WomenPage} />
      </Switch>
    </div>
  );
}

export default App;
