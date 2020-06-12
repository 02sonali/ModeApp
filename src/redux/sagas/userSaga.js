import { REGISTER_USER_START, CHECK_LOGGEDIN, LOGOUT_START, AUTH_START } from "../actions/actionTypes";
import * as actions from '../actions/userActions';
import { takeLatest, put} from 'redux-saga/effects';

function* startRegistering(action) {
    const user = {user: action.user};
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    // yield put(actions.registerUserStart());
    try {
        const response = yield fetch(`https://conduit.productionready.io/api/users`, requestOptions)
        .then(response => response.json());
        if(response.errors) {
            yield put(actions.registerUserFailed(response.errors));
        } else {   
            yield put(actions.registerUserSuccess(response.user));
            yield put(actions.authSuccess(response.user.token, response.user.id));
            yield localStorage.setItem('token', response.user.token);
            yield localStorage.setItem('userId', response.user.id);
            //TODO - CHECK TOKEN EXPIRATION AS WELL
        }
    } catch (error) {
        yield put(actions.registerUserFailed(error));
        return;
    }
}

function* startLogin(action) {
    const user = {user: action.user};
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    // yield put(actions.registerUserStart());
    try {
        const response = yield fetch(`https://conduit.productionready.io/api/users/login`, requestOptions)
        .then(response => response.json());
        if(response.errors) {
            //error handling here
        } else {   
            yield put(actions.authSuccess(response.user.token, response.user.id));
            yield localStorage.setItem('token', response.user.token);
            yield localStorage.setItem('userId', response.user.id);
            //TODO - CHECK TOKEN EXPIRATION AS WELL
        }
    } catch (error) {
       //error handling here
        return;
    }
}

function* checkIfLoggedIn() {
    const token = yield localStorage.getItem('token');
    const userId = yield localStorage.getItem('userId');
    if(token && userId) {
        yield put(actions.setLoggedInUser(userId));
    } else {
        yield put(actions.setLoggedInUser(""));
    }
    //TODO - CHECK TOKEN EXPIRATION AS WELL
}

function* logoutCurrentUser() {
    localStorage.clear();
    yield put(actions.setLoggedInUser(""));
}

export function* registerUserStart() {
    yield takeLatest(REGISTER_USER_START, startRegistering);
}

export function* authStart() {
    yield takeLatest(AUTH_START, startLogin);
}

export function* checkLoggedInUser() {
    yield takeLatest(CHECK_LOGGEDIN, checkIfLoggedIn);
}

export function* logout() {
    yield takeLatest(LOGOUT_START, logoutCurrentUser);
}
