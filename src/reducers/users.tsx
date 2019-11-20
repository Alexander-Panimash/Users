import {GET_USERS} from "../actions/actions";
import IUser from "../components/IUser";

export interface IUserState {
    users: IUser[];
}

const initialState: IUserState = {
    users: []
};

export function usersReducer(state = initialState, action: { type: any; users: ConcatArray<IUser>; }) {
    switch (action.type) {
        case GET_USERS:
            return state.users.concat(action.users);
        default:
            return state
    }
}


