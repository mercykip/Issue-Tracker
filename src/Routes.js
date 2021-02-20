import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import SearchBar from './SearchBar';
import Login from './Login';

const Routes = () => {
    return(
<BrowserRouter>
<Switch>
    <Route exact path="/" component={Login}/>
    <Route  path="/login" component={Login}/>
    <Route  path="/search" component={SearchBar}/>
</Switch>
</BrowserRouter>
    )}
export default Routes; 