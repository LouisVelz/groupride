import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import GreetingContainer from './greeting/greeting_container'
import Modal from './modal/modal'
import SplashPage from "./splash/splash";
import Footer from './footer/footer'
import EditRideFormContainer from './rides/edit_ride_form_container'
import RideFormContainer from './rides/ride_form_container'
import RidesIndex from './rides/ride_index_container'
import Dummy from './dummy/dummy_component'
import UserPage from './user/user_container'
import './../stylesheets/app.css'
import ShowRide from './rides/ride_show_container'

//remember to erase window.getState form index.js



const App = () => (
  <div>

    <Modal /> 
    <GreetingContainer />
    <Dummy/>
    <Switch>
      <AuthRoute exact path='/' component={SplashPage} />
      <Route exact path="/index" component={RidesIndex} /> 
      <Route path="/ride/:rideId/edit" component={EditRideFormContainer} />
      <Route path="/ride/new" component={RideFormContainer} />
      <ProtectedRoute path="/user/:userId" component={UserPage} />
      <ProtectedRoute path='/ride/:rideId' component={ShowRide} />
    </Switch>
    <Footer /> 
  </div>
);

export default App;
