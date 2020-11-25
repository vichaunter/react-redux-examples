import {combineReducers} from 'redux'
import counterReducer from "./counterReducer";
import loggedReducer from "./loggedReducer";

const combinedReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})

export default combinedReducers