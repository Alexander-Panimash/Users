import {UsersActionTypes, UsersState} from './types'


const initialUsersState: UsersState = {
    user: {
        id: '',
        name: '',
        secondName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: '',
        address: ''
    }
};

const userReducer = (state = initialUsersState, action: UsersActionTypes): UsersState => {
    switch (action.type) {
        case "GET_USER":
            return ({
                user: action.payload
            });
        case "CHANGE_USER":
            return ({
                user: {
                    ...state.user,
                    [action.payload.param]: action.payload.value,
                }
            });
        case "RESET_USER":
            return state = initialUsersState;
        default :
            return state
    }
};
export default userReducer

