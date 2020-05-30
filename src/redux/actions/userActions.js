import { REGISTER_USER_START, REGISTER_USER_SUCCESS } from "./actionTypes";

export function registerUser(user) {
    return {type: REGISTER_USER_START, user};
}

export function registerUserSuccess(user) {
    return {type: REGISTER_USER_SUCCESS, user};
}
