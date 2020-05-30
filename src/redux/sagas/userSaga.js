import { REGISTER_USER_START, REGISTER_USER_SUCCESS } from "../actions/actionTypes";
import { takeLatest, put} from 'redux-saga/effects';

function* startRegistering(action) {
    const user = {user: action.user};
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    try {
        const response = yield fetch(`https://conduit.productionready.io/api/users`, requestOptions)
        .then(response => response.json());    
        yield put({ type: REGISTER_USER_SUCCESS, user: response.user});
    } catch (e) {
        console.log(e);
        return;
    }
}

export function* registerUser(user) {
    yield takeLatest(REGISTER_USER_START, startRegistering);
}
