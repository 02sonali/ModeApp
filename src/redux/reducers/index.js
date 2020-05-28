import {combineReducers} from 'redux';
import articles from './articleReducers';
import comments from './commentReducers';

const rootReducer = combineReducers({
    articles,
    comments
});

export default rootReducer;