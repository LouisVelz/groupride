import { getRides, getUserRides, writeRide, 
  patchRide, getRide, getParticipants, patchUser, deleteRide, unjoinRide } from './../util/ride_event_api_util'
import {fetchUser} from "./../util/session_api_util"

export const RECEIVE_RIDES = "RECEIVE_RIDES";
export const RECEIVE_USER_RIDES = "RECEIVE_USER_RIDES";
export const RECEIVE_NEW_RIDE = "RECEIVE_NEW_RIDE";
export const RECEIVE_RIDE = "RECEIVE_RIDE";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_RIDE = "REMOVE_RIDE";
export const EXIT_RIDE = "EXIT_RIDE";
export const JOIN_RIDE = "JOIN_RIDE";



const receiveRides = (rides) => ({
  type: RECEIVE_RIDES,
  rides,
});

const receiveRide = (ride) => ({
  type: RECEIVE_RIDE,
  ride
})


const receiveUserRides = (rides) => ({
  type: RECEIVE_USER_RIDES,
  rides,
});

const receiveNewRide = (ride) => ({
  type: RECEIVE_NEW_RIDE,
  ride,
});

const receiveParticipants = (users) => ({
  type: RECEIVE_USERS,
  users
});

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

const removeRide = (rideId) => ({
  type: REMOVE_RIDE,
  rideId
});

const exitRide = (data) =>({
  type: EXIT_RIDE,
  data
})

const joinRide = (ride) =>({
  type: JOIN_RIDE,
  ride
})
export const fetchRides = () => (dispatch) =>
  getRides()
    .then((rides) => dispatch(receiveRides(rides)))
    .catch((err) => console.log(err));

export const fetchUserRides = (id) => (dispatch) =>
  getUserRides(id)
    .then((rides) => dispatch(receiveUserRides(rides)))
    .catch((err) => console.log(err));

export const createRide = (data) => (dispatch) =>
  writeRide(data)
    .then((ride) => dispatch(receiveNewRide(ride)))
    .catch((err) => console.log(err));


export const updateRide = (data) => (dispatch) =>
  patchRide(data)
    .then((data) => dispatch(joinRide(data)))
    .catch((err) => console.log(err));

export const fetchRide = (rideId) => (dispatch) =>
  getRide(rideId)
    .then((ride) => dispatch(receiveRide(ride)))
    .catch((err) => console.log(err));

export const fetchParticipants = (rideId) => (dispatch) =>
  getParticipants(rideId)
    .then((users) => dispatch(receiveParticipants(users)))
    .catch((err) => console.log(err));

export const updateUser = (data) => (dispatch) =>
  patchUser(data)
    .then((user) => dispatch(receiveUser(user)))
    .catch((err) => console.log(err));

export const trashRide = (rideId) => (dispatch) =>
  deleteRide(rideId)
    .then(() => dispatch(removeRide(rideId)))

export const getUser = (userId) => (dispatch) =>
  fetchUser(userId)
    .then((user) =>dispatch(receiveUser(user)))

export const leaveRide = (data) => (dispatch) =>{
  
  return unjoinRide(data)
    .then((data) => dispatch(exitRide(data)))
    .catch((err) => console.log(err));
}

