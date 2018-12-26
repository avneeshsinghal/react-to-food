import React from 'react';
import {Switch, Route} from 'react-router-dom';
import App from '../App';
import MenuApp from '../MenuApp';
import List from '../List'



const Main = () => {
   return ( <main>
        <Switch>
        <Route exact path="/" component={MenuApp} />
            <Route exact path="/kitchen" component={App} />
            <Route exact path="/predict" component={List} />
        </Switch>
        </main>)
}

export default Main;