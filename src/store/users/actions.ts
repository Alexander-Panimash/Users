import IUser from "../../components/IUser";

export const addUsers = (users: IUser []) => (
    {
        type: "ADD_USERS",
        payload: users
    } as const);

export const getOneUser = (user: IUser) => (
    {
        type: "GET_ONE_USER",
        payload: user
    } as const);

