import IUser from "../../components/IUser";
import {addUsers} from "./actions";

export interface UsersState {
     users: IUser[]
}

export type UsersActionTypes = ReturnType <typeof addUsers>
