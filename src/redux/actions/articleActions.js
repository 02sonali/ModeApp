import {GET_ARTICLES, SET_ARTICLES, GET_ARTICLE_DETAILS, SET_ARTICLE_DETAILS,
    ADD_ARTICLE, SET_NEW_ARTICLE, EDIT_ARTICLE, DELETE_ARTICLE
} from './actionTypes';

export function getArticles(filter) {
    return {type: GET_ARTICLES, filter};
}

export function setArticles(articles) {
    return {type: SET_ARTICLES, articles: articles};
}

export function getArticleDetails(slug) {
    return {type: GET_ARTICLE_DETAILS, slug};
}

export function setArticleDetails(article) {
    return {type: SET_ARTICLE_DETAILS,article: article};
}

export function createArticle(article) {
    return {type: ADD_ARTICLE, article: article};
}

export function setNewArticle(article) {
    return {type: SET_NEW_ARTICLE, article: article};
}

export function editArticle(id) {
    return {type: EDIT_ARTICLE, id:id};
}

export function deleteArticle(id) {
    return {type: DELETE_ARTICLE, id:id};
}

