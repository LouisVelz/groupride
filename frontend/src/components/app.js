import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";

import GreetingContainer from './greeting/greeting_container'
import Modal from './modal/modal'
import SplashPage from "./splash/splash";
import Footer from './footer/footer'
import RidesIndex from './rides/ride_index_container'
import MainPage from '../components/main/main_page'


const App = () => (
  <div>
    <Modal />
    <GreetingContainer />

    <Switch>
      <AuthRoute exact path="/" component={SplashPage} />
      <ProtectedRoute exact path="/home" component={MainPage}/>
      <Route exact path="/index" component={RidesIndex} />
    </Switch>
    <Footer />
  </div>
);

export default App;
