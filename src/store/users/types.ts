import IUser from "../../components/IUser";
import {addUsers, getOneUser} from "./actions";

export interface UsersState {
     users: IUser[]
}

export type UsersActionTypes = ReturnType <typeof addUsers>
