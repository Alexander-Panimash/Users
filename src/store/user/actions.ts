import IUser from "../../components/IUser";

export const getUser = (user: IUser) => (
    {
        type: "GET_USER",
        payload: user
    } as const);

export const changeUser = (param:string, value:string) => (
    {
        type: "CHANGE_USER",
        payload: {param, value}
    } as const);

export const resetUser = () => (
    {
        type: "RESET_USER",
    } as const);

