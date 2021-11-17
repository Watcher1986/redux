import store from "./store";

store.dispatch({ type: 'USERS/ADDUSER', payload: {id: 7, name: 'Kolya'} });
store.dispatch({ type: 'USERS/REMOVEUSER', payload: 6 });

store.subscribe(() => console.log('Store after dispatch: ', store.getState()))