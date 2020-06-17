import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "./util/session_api_util";
import { logout } from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    // const currentUser = jwt_decode(localStorage.jwtToken).id;
    const preloadedState = {
      session: { isAuthenticated: true, user: decodedUser },
      // entities: { users: { currentUser: {id: currentUser} } }
    };

    store = configureStore(preloadedState);
    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = "/login";
    }
  } else {
    store = configureStore({});
  }
  
  window.getState = store.getState

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});

// // src/index.js

// import React from 'react';
// import ReactDOM from 'react-dom';

// // We will create this component shortly
// import Root from './components/root';

// // We set this up in the last section
// import configureStore from './store/store';

// // We will use this to parse the user's session token
// import jwt_decode from 'jwt-decode';

// // The session utility we just created
// import { setAuthToken } from './util/session_api_util';

// // We have not created this action yet, but will do so in the next step
// import { logout } from './actions/session_actions';

// document.addEventListener('DOMContentLoaded', () => {
//   let store;

//   // If a returning user has a session token stored in localStorage
//   if (localStorage.jwtToken) {

//     // Set the token as a common header for all axios requests
//     setAuthToken(localStorage.jwtToken);

//     // Decode the token to obtain the user's information
//     const decodedUser = jwt_decode(localStorage.jwtToken);

//     // Create a preconfigured state we can immediately add to our store
//     const preloadedState = { session: { isAuthenticated: true, user: decodedUser },
//                              users: { decodedUser[id]: decodedUser }};

//     store = configureStore(preloadedState);

//     const currentTime = Date.now() / 1000;

//     // If the user's token has expired
//     if (decodedUser.exp < currentTime) {
//       // Logout the user and redirect to the login page
//       store.dispatch(logout());
//       window.location.href = '/login';
//     }
//   } else {
//     // If this is a first time user, start with an empty store
//     store = configureStore({});
//   }
//   // Render our root component and pass in the store as a prop
//   const root = document.getElementById('root');

//   ReactDOM.render(<Root store={store} />, root);
// });
