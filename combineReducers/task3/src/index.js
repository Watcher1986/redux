import store from './store';

import { setUser, removeUser } from './user.actions';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';

console.log(store.getState())
store.subscribe(() => console.log(store.getState()));

store.dispatch(setUser({name: 'Bobik'}));
store.dispatch(removeUser());
store.dispatch(setLanguage('fr'));
store.dispatch(addProduct({ id: 7, name: 'bread' }));
store.dispatch(removeProduct(7));
