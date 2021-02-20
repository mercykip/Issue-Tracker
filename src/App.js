import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';


const App = () => {

  return (
    <div className="wrapper">
 
      <BrowserRouter>
        <Switch>
        <Route path="/search">
            <Home />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
   

  );
};

export default App;
