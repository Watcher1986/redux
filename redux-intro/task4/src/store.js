import { createStore } from 'redux';
import { usersReducer } from './users.reducer';

const initialState = { usersList: [] }

const store = createStore(usersReducer, initialState);

export default store;