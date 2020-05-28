import { takeLatest, put} from 'redux-saga/effects';
import * as types  from '../actions/actionTypes';

function* fetchRecords() {
    try {
        const response = yield fetch('https://conduit.productionready.io/api/articles')
        .then(response => response.json(), );    
        yield put({ type: types.SET_ARTICLES, articles: response.articles});
    } catch (e) {
        // yield put(articleActions.fetchFailed(e));
        console.log(e);
        return;
    }
  
}

export function* getArticles() {
  yield takeLatest(types.GET_ARTICLES, fetchRecords);
}