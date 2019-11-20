export const ADD_USERS = 'ADD_USERS';
export const GET_USERS = 'GET_USERS';

export function addUsers(data: any) {
    return {
        type: ADD_USERS,
        users: data
    }
}

export function getUsers() {
    return {type: GET_USERS}
}
