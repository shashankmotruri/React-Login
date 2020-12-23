import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home';
import Login from './Components/Auth/login';
import {ProtectedRoute} from './Components/ProtectedRoute'


export default function App() {

  return (
    <>
      <BrowserRouter>
          <div className="container">
              <Switch>
              <Route exact path="/" component={Login} />
              <ProtectedRoute exact path="/home" component={Home} />
              <Route path="*" component={ () => "404 ERROR"}  />
              </Switch>
          </div>
      </BrowserRouter>
    </>
  );
}
