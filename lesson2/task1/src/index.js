import { createStore } from 'redux';

const INCREMENT = 'COUNTER/INCREMENT';
const DECREMENT = 'COUNTER/DECREMENT';

export const actionCreatorIncrement = {
  type: INCREMENT,
};

export const actionCreatorDecrement = {
  type: DECREMENT,
};

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export const store = createStore(counterReducer);

store.dispatch(actionCreatorIncrement());
store.dispatch(actionCreatorIncrement());
store.dispatch(actionCreatorIncrement());
store.dispatch(actionCreatorDecrement());

// console.log(store.getState());
