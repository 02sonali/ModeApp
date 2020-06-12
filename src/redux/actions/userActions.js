import * as types from "./actionTypes";

export function registerUserStart(user) {
    return {type: types.REGISTER_USER_START, user};
}

export function registerUserSuccess(token, userId) {
    return {type: types.REGISTER_USER_SUCCESS, token: token, userId: userId};
}

export function registerUserFailed(errors) {
    return {type: types.REGISTER_USER_FAIL, errors};
}

export const authStart = (user) => {
    return { type: types.AUTH_START, user}
};

export const authSuccess = (token, userId) => {
    return {type: types.AUTH_SUCCESS, token: token, userId: userId}
};

export const checkLoggedInUser = () => {
    return {type: types.CHECK_LOGGEDIN};
}

export const setLoggedInUser = (userId) => {
    return {type: types.SET_LOGGEDIN, userId: userId};
}

export const logout = () => {
    return {type: types.LOGOUT_START}
};
