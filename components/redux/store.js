import {createStore} from 'redux';
//will be combining reducers when users are added
//but for now will just use the one words reducer

import wordReducer from './forbiddenWordReducer';

const store = createStore(wordReducer);

export default store;
