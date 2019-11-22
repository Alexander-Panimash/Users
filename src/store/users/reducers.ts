import {UsersActionTypes, UsersState} from './types'


const initialUsersState: UsersState = {
    users: []
};

const usersReducer = (state = initialUsersState, action: UsersActionTypes): UsersState => {
    switch (action.type) {
        case "ADD_USERS":
            return ({
                users: action.payload
            });
        default :
            return state
    }
};
export default usersReducer

