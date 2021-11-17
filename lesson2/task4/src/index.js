import store from "./store";

store.dispatch({ type: 'USERS/ADDUSER', payload: {id: 76, name: 'Kolya'} });
store.dispatch({ type: 'USERS/REMOVEUSER', payload: 76 });

store.subscribe(() => console.log('Store after dispatch: ', store.getState()))