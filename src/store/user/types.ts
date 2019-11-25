import IUser from "../../components/IUser";
import {changeUser, getUser, resetUser} from "./actions";

export interface UsersState {
    user: IUser
}

export type UsersActionTypes =
    ReturnType<typeof getUser> |
    ReturnType<typeof changeUser> |
    ReturnType<typeof resetUser>
