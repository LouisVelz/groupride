import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";

import GreetingContainer from './greeting/greeting_container'
import Modal from './modal/modal'
import SplashPage from "./splash/splash";
import Footer from './footer/footer'

// import MainPage from "./main/main_page";

import RidesIndex from './rides/ride_index_container'

// import LoginFormContainer from "./session/login_form_container";
// import SignupFormContainer from "./session/signup_form_container";



const App = () => (
  <div>

    <Modal /> 
    <GreetingContainer />
    <Route exact path="/" component={SplashPage} /> 
  

    <Switch>
      {/* <AuthRoute exact path="/" component={MainPage} /> */}
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} /> */}
      {/* <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
      <Route exact path="/index" component={RidesIndex} /> 
    </Switch>
    <Footer /> 
  </div>
);

export default App;
