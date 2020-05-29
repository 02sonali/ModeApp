import * as types from './actionTypes';

export function getArticles(filter) {
    return {type: types.GET_ARTICLES, filter};
}

export function setArticles(articles) {
    return {type: types.SET_ARTICLES, articles: articles};
}

export function getArticleDetails(slug) {
    return {type: types.GET_ARTICLE_DETAILS, slug};
}

export function setArticleDetails(article) {
    return {type: types.SET_ARTICLE_DETAILS,article: article};
}

export function createArticle(article) {
    return {type: types.ADD_ARTICLE, article: article};
}

export function editArticle(id) {
    return {type: types.EDIT_ARTICLE, id:id};
}

export function deleteArticle(id) {
    return {type: types.DELETE_ARTICLE, id:id};
}

