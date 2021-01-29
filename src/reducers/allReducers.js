import counterReducer from "./counter";
import loginReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counterReducer,
  // isLogged: loginReducer,
  // counterReducer,

  //! two ways to type it
  loginReducer,
});

export default allReducers;
