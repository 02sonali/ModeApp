import * as types from './actionTypes';

export function getComments() {
    return {type: types.GET_COMMENTS};
}

export function setComments(comments) {
    return {type: types.SET_COMMENTS,comments: comments};
}

export function addComment(comment) {
    return {type: types.ADD_COMMENT, comment: comment};
}

export function editComment(id) {
    return {type: types.EDIT_COMMENT, id:id};
}

export function deleteComment(id) {
    return {type: types.DELETE_COMMENT, id:id};
}

