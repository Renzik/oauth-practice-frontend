import React, { useContext } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import './App.css';

import { myContext } from './Components/Context';
import Homepage from './Components/Pages/Home/Home';
import LoginPage from './Components/Pages/sign-in/SignIn';
import NavBar from './Components/NavBar/NavBar';
import { IUser } from './types/maintypes';
import SignUp from './Components/Pages/sign-up/SignUp';

const App = () => {
  // getting our current user object present in App so that we can render routes depending if an user is logged in or not.
  const userObj = useContext(myContext) as IUser;
  console.log(userObj);

  console.log('NODE_ENV: ', process.env.NODE_ENV);
  
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/login'>{userObj ? <Redirect to='/' /> : <LoginPage />}</Route>
        <Route path='/register' component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
