import * as types from "../actions/actionTypes";

export default function commentReducer(state =[], action) {
    switch(action.type) {
        case types.ADD_COMMENT:
            return [...state, {...action.comment}]
        case types.EDIT_COMMENT:
            return state; //TODO
        case types.DELETE_COMMENT:
            return state; //TODO
        case types.GET_COMMENTS:
            return [...state];
        case types.SET_COMMENTS:
            return [...state, ...action.comments]; //TODO

        default:
            return state;
    }
}