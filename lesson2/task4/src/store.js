import { createStore } from 'redux';
import { rootReducer } from './users';

const initialState = { usersList: [] }
const store = createStore(rootReducer, initialState);

export default store;