import axios from "axios";

export const getRides = () => {
  return axios.get("/api/ride");
};

export const getUserRides = (id) => {
  return axios.get(`/api/ride/user/${id}`);
};

export const writeRide = (data) => {
  return axios.post("/api/ride/", data);
};
