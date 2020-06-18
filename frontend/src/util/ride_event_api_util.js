import axios from "axios";

export const getRides = () => {
  return axios.get("/api/rideevent");
};

export const getUserRides = (id) => {
  return axios.get(`/api/rideevent/user/${id}`);
};

export const writeRide = (data) => {
  debugger
  return axios.post("/api/rideevent/", data);
};

export const patchRide = (data) => {
  return axios.patch(`/api/rideevent/${data.id}`, data);
};

export const getRide = (rideId) => {
  return axios.get(`/api/rideevent/${rideId}`);
};

