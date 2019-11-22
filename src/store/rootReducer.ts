import {combineReducers} from 'redux'
import usersReducer from './users/reducers'
import userReducer from "./user/reducers";

const rootReducer = combineReducers({
    usersState: usersReducer,
    userState: userReducer
});

export default rootReducer;
