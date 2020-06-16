import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";

// import NavBarContainer from "./nav/navbar_container";

import SplashPage from "./splash/splash_page";
// import LoginFormContainer from "./session/login_form_container";
// import SignupFormContainer from "./session/signup_form_container";
import GreetingContainer from './greeting/greeting_container'
import Modal from './modal/modal'
import SplashPage from "./splash/splash";


const App = () => (
  <div>
    {/* <NavBarContainer /> */}
    <Modal /> 
<<<<<<< HEAD
    <Route exact path="/" component={SplashPage} /> 
=======
>>>>>>> 8fdebdacecb1a95b82768ca5ce7d7a88974e36a0
    <GreetingContainer />
    <Route path="/" component={SplashPage} /> 

    <Switch>
      {/* <AuthRoute exact path="/" component={MainPage} />  */}
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} /> 
      <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
    </Switch>
  </div>
);

export default App;
