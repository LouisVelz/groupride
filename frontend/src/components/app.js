import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
// import NavBarContainer from "./nav/navbar_container";

import MainPage from "./main/main_page";
import Map from "./map/map"
// import LoginFormContainer from "./session/login_form_container";
// import SignupFormContainer from "./session/signup_form_container";
import { withScriptjs } from "react-google-maps";

const MapLoader = withScriptjs(Map);

const App = () => (
  <div>
    {/* <NavBarContainer /> */}
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} /> */}
      {/* <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
  
      <MapLoader path="/rides"
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAcQjrfAudzl6Ton7GA7D-gVqOINMFE7ns&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
      />
    </Switch>
  </div>
);

export default App;
