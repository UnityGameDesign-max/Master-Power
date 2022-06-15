import { combineReducers } from "redux";
import {userReducer} from "./userReducer"

const allReducers = combineReducers({
    activeUser: userReducer,
})

export default allReducers;

