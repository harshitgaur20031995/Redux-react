import { combineReducers } from "redux";
import ActiveReducer from "./Active/ActiveReducer";
import CompsReducer from "./Comps/CompsReducer";
import usersReducer from "./Users/Usersreducer";

const rootReducer = combineReducers({
  user: usersReducer,
  comps: CompsReducer,
  active: ActiveReducer,
});

export default rootReducer;
