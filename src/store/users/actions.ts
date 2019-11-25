import IUser from "../../components/IUser";

export const addUsers = (users: IUser []) => (
    {
        type: "ADD_USERS",
        payload: users
    } as const);
