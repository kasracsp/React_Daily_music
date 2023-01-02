import { combineReducers } from "redux";
import chartReducer from "./chart/chartReducer";

const rootReducer=combineReducers({
  chartState:chartReducer
})

export default rootReducer
