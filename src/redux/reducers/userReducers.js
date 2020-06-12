import * as types from "../actions/actionTypes";

const INITIAL_STATE = {
    token: null,
    userId: null,
    error: null,
    loading: false,
};
export default function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.REGISTER_USER_START:
            return {...state, ...{ loading: true, error: null }};
        case types.REGISTER_USER_SUCCESS:
            return {...state, token: action.token, userId: action.userId, loading: false };
        case types.REGISTER_USER_FAIL:
            return {...state,  loading: false, errors: action.errors };
        case types.AUTH_START: 
            return {...state, ...{ loading: true, error: null }};
        case types.AUTH_SUCCESS:
            return {...state, token: action.token, userId: action.userId, loading: false };
        case types.AUTH_FAIL:
            return {...state,  loading: false, error: action.error };
        case types.CHECK_LOGGEDIN:
            return {...state, token: null, userId: null };
        case types.SET_LOGGEDIN:
            return {...state, userId: action.userId };
        default:
            return state;
    }
  };
  