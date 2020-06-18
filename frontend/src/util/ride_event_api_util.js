import axios from "axios";

export const getRides = () => {
  return axios.get("/api/rideevent");
};

export const getUserRides = (id) => {
  return axios.get(`/api/rideevent/user/${id}`);
};

export const writeRide = (data) => {
  return axios.post("/api/rideevent/", data);
};

export const patchRide = (data) => {
  return axios.patch(`/api/rideevent/${data.id}`, data);
};

export const getRide = (rideId) => {
  return axios.get(`/api/rideevent/${rideId}`);
};


export const getParticipants = (rideId) => {
  return axios.get(`/api/rideevent/${rideId}/participants`);
};

export const patchUser = (data) => {
  return axios.patch(`/api/users/${data.id}`, data);
};

export const deleteRide = (rideId) => {
  debugger
  return axios.delete(`/api/rideevent/${rideId}`);
};


