import { increment, decrement, store } from "./counter";

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment())
store.dispatch(decrement());