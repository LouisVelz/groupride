import { getRides, getUserRides, writeRide, patchRide, getRide } from './../util/ride_event_api_util'

export const RECEIVE_RIDES = "RECEIVE_RIDES";
export const RECEIVE_USER_RIDES = "RECEIVE_USER_RIDES";
export const RECEIVE_NEW_RIDE = "RECEIVE_NEW_RIDE";
export const RECEIVE_RIDE = "RECEIVE_RIDE";
// export const RECEIVE_PARTICIPANTS = "RECEIVE_PARTICIPANTS";


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

// const receiveParticipants = (participants) => ({
//   type: RECEIVE_PARTICIPANTS,
//   participants
// })

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
    .then((ride) => dispatch(receiveNewRide(ride)))
    .catch((err) => console.log(err));

export const fetchRide = (rideId) => (dispatch) =>
  getRide(rideId)
    .then((ride) => dispatch(receiveRide(ride)))
    .catch((err) => console.log(err));

// export const fetchParticipants = (rideId) => (dispatch) =>
//   getParticipants(rideId)
//   .then((participants) => dispatch(receiveParticipants(participants)))
//   .then((err) => console.log(err));

