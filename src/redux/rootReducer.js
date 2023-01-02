import { combineReducers } from "redux";
import chartReducer from "./chart/chartReducer";
import songsReducer from "./songs/songsReducer";

const rootReducer=combineReducers({
  chartState:chartReducer,
  songsState:songsReducer
})

export default rootReducer
