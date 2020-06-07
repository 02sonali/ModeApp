import { takeLatest, put, call, take} from 'redux-saga/effects';
import * as types  from '../actions/actionTypes';

function* fetchArticles(filter) {
    try {
        const response = yield fetch('https://conduit.productionready.io/api/articles')
        .then(response => response.json() );    
        const filterVal = filter.filter;
        yield put({ type: types.SET_ARTICLES, filterVal, articles: response.articles});
    } catch (e) {
        console.log(e);
        return;
    }
}

function* fetchArticleDetails(action) {
    const slug = action.slug;
    try {
        const response = yield fetch(`https://conduit.productionready.io/api/articles/${slug}`)
        .then(response => response.json(), );    
        yield put({ type: types.SET_ARTICLE_DETAILS, article: response.article});
    } catch (e) {
        console.log(e);
        return;
    }
}

function* addArticle(action) {
    const article = {article: action.article};
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',  'Authorization': `Token ${localStorage.getItem('token')}`},
        body: JSON.stringify(article)
    };
    try {
        const response = yield fetch(`https://conduit.productionready.io/api/articles`, requestOptions)
        .then(response => response.json(), );    
        yield put({ type: types.SET_NEW_ARTICLE, article: response.article});
    } catch (e) {
        console.log(e);
        return;
    }
}

export function* createArticle(article) {
    yield takeLatest(types.ADD_ARTICLE, addArticle);
}

export function* getArticles(filter) {
  yield takeLatest(types.GET_ARTICLES, fetchArticles);
}

export function* getArticleDetails(slug) {
    yield takeLatest(types.GET_ARTICLE_DETAILS, fetchArticleDetails);
}