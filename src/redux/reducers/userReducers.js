import { REGISTER_USER_START, REGISTER_USER_SUCCESS } from "../actions/actionTypes";

export default function commentReducer(state ={}, action) {
    switch (action.type) {
        case REGISTER_USER_START:
            return {...state, ...action.user};
        case REGISTER_USER_SUCCESS:
            return {...state, ...action.user};

        default:
            return state;
    }
  };
  