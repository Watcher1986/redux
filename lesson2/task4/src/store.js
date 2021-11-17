import { createStore } from 'redux';
import { rootReducer } from './users.reducer';

const store = createStore(rootReducer);

export default store;