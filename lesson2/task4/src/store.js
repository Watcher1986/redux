import { createStore } from 'redux';
import reducer from './users.reducer';

const initialState = { usersList: [] }

const store = createStore(reducer, initialState);

export default store;