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
import AllProducts from './component/AllProducts/AllProducts';
import Purchase from './component/Purchase/Purchase';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import AuthProvider from './component/Context/AuthProvider';
import Dashboard from './component/Dashboard/Dashboard';
import MyOrder from './component/MyOrder/MyOrder';
import Pay from './component/Pay/Pay';
import AddNewItem from './component/AddNewItem/AddNewItem';
import ManageAllOrders from './component/ManageAllOrders/ManageAllOrders';
import ManageAllProducts from './component/ManageAllProducts/ManageAllProducts';





function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Homepage></Homepage>

          </Route>
          <Route exact path='/allProducts'>
            <AllProducts></AllProducts>

          </Route>
          <Route exact path='/manageAllProducts'>
            <ManageAllProducts></ManageAllProducts>

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
          <Route exact path='/myOrder'>
            <MyOrder></MyOrder>

          </Route>
          <Route exact path='/pay'>
            <Pay></Pay>

          </Route>
          <Route exact path='/manageAllOrders'>
            <ManageAllOrders></ManageAllOrders>

          </Route>
          <Route exact path='/addNewItem'>
            <AddNewItem></AddNewItem>

          </Route>
          
          <PrivateRoute exact path='/dashboard'>
            <Dashboard></Dashboard>

          </PrivateRoute>
          <PrivateRoute exact path='/purchase/:id'>
            <Purchase></Purchase>

          </PrivateRoute>
         
         

          <Route path='*'>
            <NotFound></NotFound>

          </Route>
         

        </Switch>
      </Router>
      </AuthProvider>
    
    </div>
  );
}

export default App;
