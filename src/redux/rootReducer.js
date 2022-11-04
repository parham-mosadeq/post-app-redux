import { combineReducers } from 'redux';

import postReducer from './posts/postsReducer';
import writeReducer from './write/writeReducer';
const rootReducer = combineReducers({
  postState: postReducer,
  writeState: writeReducer,
});

export default rootReducer;
