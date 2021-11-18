import store from "./store";
import { addUser, deleteUser } from './users.actions';

store.subscribe(() => console.log('Store after dispatch: ', store.getState()));

store.dispatch(addUser({id: 76, name: 'Kolya'}));
store.dispatch(deleteUser(76));
