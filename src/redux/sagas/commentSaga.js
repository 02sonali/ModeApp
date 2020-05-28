import { takeLatest, put } from 'redux-saga/effects';
import * as commentActions from '../actions/commentActions';
import * as types  from '../actions/actionTypes';

function* fetchRecords() {
    try {
        const response = yield call(fetch, 'https://conduit.productionready.io/api/articles/test-bzaz50/comments'); // your api endpoint here
        const responseBody = response.json();
        yield put(commentActions.setComments(responseBody));
    } catch (e) {
        // yield put(commentActions.fetchFailed(e));
        console.log(e);
        return;
    }
  
}

export function* getComments() {
  yield takeLatest(types.GET_COMMENTS, fetchRecords);
}