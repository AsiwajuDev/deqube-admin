import { combineReducers } from "redux";

import { Users } from "./Users";
import { Settings } from "./Settings";

export default combineReducers(Users, Settings);
