import * as types from './actionTypes';

export function createArticle(article) {
    return {type: types.CREATE_ARTICLE, article: article};
}

export function getArticles() {
    return {type: types.GET_ARTICLES};
}

export function setArticles(articles) {
    return {type: types.SET_ARTICLES,articles: articles};
}

export function editArticle(id) {
    return {type: types.EDIT_ARTICLE, id:id};
}

export function deleteArticle(id) {
    return {type: types.DELETE_ARTICLE, id:id};
}

