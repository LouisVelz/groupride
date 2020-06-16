import { combineReducers } from "redux";
import users from "./user_reducer";
import rides from "./rides_reducer";

const entitiesReducer = combineReducers({
  users,
  rides,
});

export default entitiesReducer;
