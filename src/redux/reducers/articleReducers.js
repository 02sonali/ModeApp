import * as types from "../actions/actionTypes";

export default function articleReducer(state =[], action) {
    switch(action.type) {
        case types.CREATE_ARTICLE:
            return [...state, {...action.article}]
        case types.EDIT_ARTICLE:
            return state; //TODO
        case types.DELETE_ARTICLE:
            return state; //TODO
        case types.GET_ARTICLES:
            return [...state];
        case types.SET_ARTICLES:
            return [...state, ...action.articles]; //TODO

        default:
            return state;
    }
}