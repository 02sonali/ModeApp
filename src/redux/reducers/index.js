import {combineReducers} from 'redux';
import articles from './articleReducers';
import comments from './commentReducers';
import user from './userReducers';

const rootReducer = combineReducers({
    articles,
    comments,
    user
});

export default rootReducer;