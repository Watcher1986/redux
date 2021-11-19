import store from "./store";

import { addUser, deleteUser } from './user.actions'
import { setLanguage } from './language.actions'
import { addProduct, removeProduct } from './cart.actions'

store.subscribe(() => console.log(store.getState()));

store.dispatch(addUser('Dima'));
store.dispatch(deleteUser());
store.dispatch(setLanguage('en'));
store.dispatch(addProduct({ id: 7, name: 'bread' }));
store.dispatch(removeProduct(7));