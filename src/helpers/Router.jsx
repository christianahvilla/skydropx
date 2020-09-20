import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Tv from '../pages/Tv';
import OnAir from '../pages/OnAir';
import Rated from '../pages/Rated';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Tv} />
        <Route path="/rated" component={Rated} />
        <Route path="/on_air" component={OnAir} />
    </Switch>
);

export default Routes;
