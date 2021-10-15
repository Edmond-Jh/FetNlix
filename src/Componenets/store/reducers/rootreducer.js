import { combineReducers } from "redux";
import userProfile from "./userProfile";

const rootReducer = combineReducers({
  user: userProfile,
});

export default rootReducer;
