import React, { createContext, useState } from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home/Home';

import Login from './component/Login/Login';

import OrderHome from './component/DashBoard/OrderHome/OrderHome';
import PrivateRoute from './component/Login/PrivateRoute';
import Admin from './component/DashBoard/Admin/Admin';
import AddService from './component/DashBoard/AddService/AddService';

export const UserContext = createContext();
function App() {
  const  [logInUser, setLogInUser] = useState({
    name: '',
    email:'',
    picture:'',
    userType:''
});
  return (

      <UserContext.Provider value = { [logInUser, setLogInUser]}>

    <Router>
              <Switch>
                    <Route exact path="/">
                      <Home></Home>
                    </Route>
                    <PrivateRoute path="/order/:serviceName">
                      <OrderHome></OrderHome>
                    </PrivateRoute>
                    <Route path="/login">
                      <Login></Login>
                    </Route>
                    <Route path="/addService">
                      <AddService></AddService>
                    </Route>
                    
                    

                      
                </Switch>
      </Router>
      </UserContext.Provider>
     
 
  );
}

export default App;
