import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import GreetingContainer from './greeting/greeting_container'
import Modal from './modal/modal'
import SplashPage from "./splash/splash";
import Footer from './footer/footer'
<<<<<<< HEAD
import EditRideFormContainer from './rides/edit_ride_form_container'
import RideFormContainer from './rides/ride_form_container'

import MainPage from "./main/main_page";

=======
>>>>>>> master
import RidesIndex from './rides/ride_index_container'
import NewRideFormContainer from "./rides/new_ride_form_container";


//remember to erase window.getState form index.js



const App = () => (
  <div>

    <Modal /> 
    <GreetingContainer />
    <Route exact path="/" component={SplashPage} /> 
  

    <Switch>
      <ProtectedRoute exact path='/rides/new' component={NewRideFormContainer} />
      <Route exact path="/index" component={RidesIndex} /> 
      <Route path="/ride/:rideId/edit" component={EditRideFormContainer} />
      <Route path="/ride/new" component={RideFormContainer} />
    </Switch>
    <Footer /> 
  </div>
);

export default App;
