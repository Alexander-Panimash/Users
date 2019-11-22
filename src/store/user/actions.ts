import IUser from "../../components/IUser";

export const getUser = (user: IUser) => (
    {
        type: "GET_USER",
        payload: user
    } as const);

