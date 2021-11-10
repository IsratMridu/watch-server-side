import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './component/Header/Header';
import Homepage from './component/Homepage/Homepage';
import NotFound from './component/NotFound/NotFound';
import Login from './component/Login/Login';
import Register from './component/Register/Register';




function App() {
  return (
    <div className="">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Homepage></Homepage>

          </Route>
          <Route exact path='/login'>
            <Login></Login>
          </Route>

          <Route exact path='/register'>
           <Register></Register>
          </Route>
          <Route exact path='/home'>
            <Homepage></Homepage>

          </Route>
         
         

          <Route path='*'>
            <NotFound></NotFound>

          </Route>
         

        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
