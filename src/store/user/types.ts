import IUser from "../../components/IUser";
import {getUser} from "./actions";

export interface UsersState {
    user: IUser
}

export type UsersActionTypes = ReturnType <typeof getUser>
