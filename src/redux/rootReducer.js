import { combineReducers } from "redux";
import chartReducer from "./chart/chartReducer";
import songsReducer from "./songs/songsReducer";
import playlistReducer from "./playlist/playlistReducer";

const rootReducer=combineReducers({
  chartState:chartReducer,
  songsState:songsReducer,
  playlistState:playlistReducer,
})

export default rootReducer
