import * as types from "../actions/actionTypes";
import {combineReducers} from 'redux';

const bySlug = (state = {}, action) => {
    switch (action.type) {
      case types.ADD_ARTICLE:
      case types.EDIT_ARTICLE:
        return {...state};
      case types.SET_NEW_ARTICLE:
        let articleObj = {};
        articleObj[action.article.slug] = action.article;
        return {...state, ...articleObj};
      case types.SET_ARTICLES:
        let newObj = {};
        let newState;
        for(let i=0; i<action.articles.length; i++) {
          newObj[action.articles[i].slug] = action.articles[i]
          newState = {...state, ...newObj} 
        }
        return newState;
      case types.SET_ARTICLE_DETAILS:
        return {...state, ...action.article};
      default:
        return state;
    }
};

const allSlugs = (state = [], action) => {
  switch (action.type) {
    case types.ADD_ARTICLE:
      return [...state, action.article];
    case types.SET_NEW_ARTICLE:
      return [...state, action.article.slug];
    case types.SET_ARTICLES:
      let newState = [];
      action.articles.forEach(article => {
        newState.push(article.slug);
      });
      return newState;
    default:
      return state;
  }
};

const getAllArticles = (state) =>
  state.allSlugs.map(slug => state.bySlug[slug]);

export const getArticles = (state, filter) => {
    const allArticles = getAllArticles(state);
    switch (filter) {
      case 'all':
        return allArticles;
      case 'mine':
        return allArticles.filter(t => t.author.username === "sonali"); //todo
      default:
          throw new Error(`Unknown filter: ${filter}.`);
    }
};

const articles = combineReducers({
    bySlug,
    allSlugs,
});

export default articles;