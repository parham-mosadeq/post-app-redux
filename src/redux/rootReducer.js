import { combineReducers } from 'redux';

import postReducer from './posts/postsReducer';

const rootReducer = combineReducers({
  postState: postReducer,
});

export default rootReducer;
