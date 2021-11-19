import store from "./store";

import { addUser, deleteUser } from './user.actions'
import { setLanguage } from './language.actions'
import { addProduct, removeProduct } from './cart.actions'

store.subscribe(() => console.log(store.getState()));

store.dispatch(addUser());
store.dispatch(deleteUser());
store.dispatch(setLanguage());
store.dispatch(addProduct());
store.dispatch(removeProduct);